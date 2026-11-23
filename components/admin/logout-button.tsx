"use client";

import { logout } from "@/app/actions/admin-auth";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="btn-secondary text-[13px]"
      >
        Log Out
      </button>
    </form>
  );
}
