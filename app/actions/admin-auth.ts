"use server";

import { redirect } from "next/navigation";
import {
  attemptLogin,
  changePassword as changePasswordDb,
  createSession,
  destroySession,
  isAuthenticated,
} from "@/lib/admin-auth";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password")?.toString() ?? "";
  if (!password) return { error: "Incorrect password." };

  const result = await attemptLogin(password);
  if (result === "rate-limited") {
    return { error: "Too many failed attempts. Please try again in a few minutes." };
  }
  if (result === "invalid") {
    return { error: "Incorrect password." };
  }

  await createSession();
  redirect("/admin/mesajlar");
}

export async function logout() {
  await destroySession();
  redirect("/admin");
}

export type ChangePasswordState = { error?: string; success?: boolean };

export async function changePassword(
  _prevState: ChangePasswordState,
  formData: FormData,
): Promise<ChangePasswordState> {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const currentPassword = formData.get("currentPassword")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

  if (newPassword !== confirmPassword) {
    return { error: "The new passwords do not match." };
  }

  const result = await changePasswordDb(currentPassword, newPassword);
  if (result.error) return { error: result.error };

  return { success: true };
}
