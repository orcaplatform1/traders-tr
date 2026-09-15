"use server";

import { redirect } from "next/navigation";
import { checkPassword, createSession, destroySession } from "@/lib/admin-auth";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password")?.toString() ?? "";

  if (!password || !checkPassword(password)) {
    return { error: "Şifre hatalı." };
  }

  await createSession();
  redirect("/yonetim/mesajlar");
}

export async function logout() {
  await destroySession();
  redirect("/yonetim");
}
