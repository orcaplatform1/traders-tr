"use client";

import { logout } from "@/app/actions/admin-auth";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
      >
        Çıkış Yap
      </button>
    </form>
  );
}
