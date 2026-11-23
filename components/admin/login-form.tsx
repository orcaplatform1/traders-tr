"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/actions/admin-auth";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-placeholder transition-colors focus:border-slate-300 focus:outline-none"
        />
      </div>

      {state.error && <p className="text-[13px] text-error">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full text-[13px] disabled:opacity-60"
      >
        {pending ? "Logging in…" : "Log In"}
      </button>
    </form>
  );
}
