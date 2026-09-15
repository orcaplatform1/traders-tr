"use server";

import { redirect } from "next/navigation";
import {
  changePassword as changePasswordDb,
  checkPassword,
  createSession,
  destroySession,
  isAuthenticated,
} from "@/lib/admin-auth";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password")?.toString() ?? "";

  if (!password || !(await checkPassword(password))) {
    return { error: "Şifre hatalı." };
  }

  await createSession();
  redirect("/yonetim/mesajlar");
}

export async function logout() {
  await destroySession();
  redirect("/yonetim");
}

export type ChangePasswordState = { error?: string; success?: boolean };

export async function changePassword(
  _prevState: ChangePasswordState,
  formData: FormData,
): Promise<ChangePasswordState> {
  if (!(await isAuthenticated())) {
    redirect("/yonetim");
  }

  const currentPassword = formData.get("currentPassword")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

  if (newPassword !== confirmPassword) {
    return { error: "Yeni şifreler birbiriyle uyuşmuyor." };
  }

  const result = await changePasswordDb(currentPassword, newPassword);
  if (result.error) return { error: result.error };

  return { success: true };
}
