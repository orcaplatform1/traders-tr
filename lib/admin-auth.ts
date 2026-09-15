import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import * as argon2 from "argon2";
import { prisma } from "@/lib/prisma";

const ADMIN_SETTINGS_ID = "main";

const COOKIE_NAME = "traders_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 gun

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
