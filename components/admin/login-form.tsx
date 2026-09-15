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
          Şifre
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
        />
      </div>

      {state.error && <p className="text-[13px] text-error">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-sm bg-accent px-6 py-3 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400 disabled:opacity-60"
      >
        {pending ? "Giriş yapılıyor…" : "Giriş Yap"}
      </button>
    </form>
  );
}
