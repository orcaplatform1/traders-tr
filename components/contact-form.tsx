"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const CATEGORIES = [
  { value: "Partnership", label: "İş Ortaklığı" },
  { value: "Venture", label: "Girişim" },
  { value: "Press", label: "Basın" },
  { value: "General", label: "Genel" },
] as const;

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({ defaultCategory = "General" }: { defaultCategory?: string }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="border-t border-border pt-8">
        <p className="text-xl font-medium text-foreground">Teşekkürler.</p>
        <p className="mt-2 text-[15px] text-muted">Size en kısa sürede geri döneceğiz.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* honeypot — ekran okuyucu ve normal kullanicidan gizli */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Web sitesi</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" error={state.fieldErrors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
          />
        </Field>

        <Field label="E-posta" name="email" error={state.fieldErrors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Şirket (opsiyonel)" name="company">
          <input
            id="company"
            name="company"
            type="text"
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
          />
        </Field>

        <Field label="Kategori" name="category">
          <select
            id="category"
            name="category"
            defaultValue={defaultCategory}
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground transition-colors focus:border-accent focus:outline-none"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Konu" name="subject" error={state.fieldErrors?.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
        />
      </Field>

      <Field label="Mesaj" name="message" error={state.fieldErrors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
        />
      </Field>

      {state.status === "error" && state.message && (
        <p className="text-[13px] text-error">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-sm bg-accent px-6 py-3 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400 disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Mesaj Gönder"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[12px] text-error">{error}</p>}
    </div>
  );
}
