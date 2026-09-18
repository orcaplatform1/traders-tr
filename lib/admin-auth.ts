import { createHmac, timingSafeEqual } from "crypto";
import { cookies, headers } from "next/headers";
import * as argon2 from "argon2";
import { prisma } from "@/lib/prisma";

const ADMIN_SETTINGS_ID = "main";

const COOKIE_NAME = "traders_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 gun

// Tek bir paylasilan admin sifresi oldugundan (kullanici bazli lockout yok),
// brute-force denemelerine karsi IP basina basit bir bellek-ici sayac.
// Instance yeniden baslatildiginda sifirlanir - PM2 tek fork instance
// calistirdigindan bu yeterli; coklu instance/PM2 cluster moduna gecilirse
// paylasimli bir store (Redis vb.) gerekir.
const LOGIN_ATTEMPT_LIMIT = 5;
const LOGIN_ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const loginAttempts = new Map<string, { count: number; windowStart: number }>();

// Nginx `X-Forwarded-For`i istemcinin kendi gönderdiği degere EKLER
// ($proxy_add_x_forwarded_for), yani ilk parca sahte olabilir - saldirgan
// rastgele bir X-Forwarded-For göndererek oran sinirini asabilir. `X-Real-IP`
// nginx tarafindan $remote_addr ile UZERINE YAZILIR (istemci tarafindan
// sahtelenemez), bu yuzden once o guvenilir; XFF'e sadece son (nginx'in
// eklendigi) parca ile geri dusulur.
async function getClientIp(): Promise<string> {
  const h = await headers();
  const realIp = h.get("x-real-ip");
  if (realIp) return realIp.trim();
  const forwardedFor = h.get("x-forwarded-for");
  if (forwardedFor) {
    const parts = forwardedFor.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const entry = loginAttempts.get(ip);
  if (!entry) return false;
  if (Date.now() - entry.windowStart > LOGIN_ATTEMPT_WINDOW_MS) {
    loginAttempts.delete(ip);
    return false;
  }
  return entry.count >= LOGIN_ATTEMPT_LIMIT;
}

function recordFailedAttempt(ip: string) {
  const entry = loginAttempts.get(ip);
  const now = Date.now();
  if (!entry || now - entry.windowStart > LOGIN_ATTEMPT_WINDOW_MS) {
    loginAttempts.set(ip, { count: 1, windowStart: now });
    return;
  }
  entry.count += 1;
}

function clearAttempts(ip: string) {
  loginAttempts.delete(ip);
}

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET tanimli degil (.env kontrol et)");
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function createSession() {
  const issuedAt = Date.now().toString();
  const token = `${issuedAt}.${sign(issuedAt)}`;
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;

  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;
  if (!safeEqual(signature, sign(issuedAt))) return false;

  const age = Date.now() - Number(issuedAt);
  return age <= MAX_AGE_SECONDS * 1000;
}

async function getSettings() {
  const settings = await prisma.adminSettings.findUnique({ where: { id: ADMIN_SETTINGS_ID } });
  if (!settings) throw new Error("Yönetim şifresi ayarlanmamış (AdminSettings kaydı yok)");
  return settings;
}

export async function checkPassword(password: string): Promise<boolean> {
  const settings = await getSettings();
  return argon2.verify(settings.passwordHash, password);
}

export type LoginAttemptResult = "ok" | "invalid" | "rate-limited";

// Girisimlerdeki tek paylasilan admin sifresine karsi brute-force denemelerini
// IP basina siniirlayan sarmalayici - server action bunu cagirir.
export async function attemptLogin(password: string): Promise<LoginAttemptResult> {
  const ip = await getClientIp();

  if (isRateLimited(ip)) return "rate-limited";

  const valid = await checkPassword(password);
  if (!valid) {
    recordFailedAttempt(ip);
    return "invalid";
  }

  clearAttempts(ip);
  return "ok";
}

export async function changePassword(currentPassword: string, newPassword: string): Promise<{ error?: string }> {
  const settings = await getSettings();
  const currentValid = await argon2.verify(settings.passwordHash, currentPassword);
  if (!currentValid) return { error: "Mevcut şifre hatalı." };
  if (newPassword.length < 6) return { error: "Yeni şifre en az 6 karakter olmalı." };

  const passwordHash = await argon2.hash(newPassword);
  await prisma.adminSettings.update({
    where: { id: ADMIN_SETTINGS_ID },
    data: { passwordHash },
  });
  return {};
}
