"use client";

import { useActionState } from "react";
import { changePassword, type ChangePasswordState } from "@/app/actions/admin-auth";

const initialState: ChangePasswordState = {};

export function ChangePasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, initialState);

  if (state.success) {
    return (
      <div className="mt-8 border-t border-border pt-8">
        <p className="text-[15px] font-medium text-foreground">Your password has been updated.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-8 max-w-sm space-y-5 border-t border-border pt-8">
      <div>
        <label
          htmlFor="currentPassword"
          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary"
        >
          Current Password
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          required
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground transition-colors focus:border-slate-300 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="newPassword"
          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary"
        >
          New Password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          minLength={6}
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground transition-colors focus:border-slate-300 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary"
        >
          New Password (Repeat)
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={6}
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground transition-colors focus:border-slate-300 focus:outline-none"
        />
      </div>

      {state.error && <p className="text-[13px] text-error">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary text-[13px] disabled:opacity-60"
      >
        {pending ? "Updating…" : "Update Password"}
      </button>
    </form>
  );
}
