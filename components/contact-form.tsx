"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { useT } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({ defaultCategory = "genel" }: { defaultCategory?: string }) {
  const t = useT();
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  const CATEGORIES = [
    { value: "ortaklik", label: t("İş Ortaklığı", "Partnership") },
    { value: "girisim", label: t("Girişim", "Venture") },
    { value: "basin", label: t("Basın", "Press") },
    { value: "genel", label: t("Genel", "General") },
  ] as const;

  if (state.status === "success") {
    return (
      <div className="border-t border-border pt-8">
        <p className="text-xl font-medium text-foreground">{t("Teşekkürler.", "Thank you.")}</p>
        <p className="mt-2 text-[15px] text-muted">{t("Size en kısa sürede geri döneceğiz.", "We'll get back to you as soon as possible.")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{t("Web sitesi", "Website")}</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t("Ad Soyad", "Full Name")} name="name" error={state.fieldErrors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
          />
        </Field>

        <Field label={t("E-posta", "Email")} name="email" error={state.fieldErrors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t("Telefon", "Phone")} name="phone" error={state.fieldErrors?.phone}>
          <div className="flex">
            <span
              aria-hidden
              className="flex shrink-0 items-center border border-r-0 border-border-default bg-surface-2 px-3 text-[15px] text-text-tertiary"
            >
              +90
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              required
              placeholder="5XXXXXXXXX"
              maxLength={10}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
              }}
              className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
            />
          </div>
        </Field>

        <Field label={t("Şirket/Bireysel", "Company/Individual")} name="company" error={state.fieldErrors?.company}>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
          />
        </Field>
      </div>

      <Field label={t("Kategori", "Category")} name="category">
        <CategorySelect defaultValue={defaultCategory} categories={CATEGORIES} />
      </Field>

      <Field label={t("Konu", "Subject")} name="subject" error={state.fieldErrors?.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
        />
      </Field>

      <Field label={t("Mesaj", "Message")} name="message" error={state.fieldErrors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-border-default bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-text-tertiary transition-colors focus:border-slate-300 focus:outline-none"
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
        {pending ? t("Gönderiliyor…", "Sending…") : t("Mesaj Gönder", "Send Message")}
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

function CategorySelect({
  defaultValue,
  categories,
}: {
  defaultValue: string;
  categories: ReadonlyArray<{ value: string; label: string }>;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const selected = categories.find((c) => c.value === value) ?? categories[0];

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name="category" value={value} />
      <button
        type="button"
        id="category"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between border border-border-default bg-surface-2 px-4 py-3 text-left text-[15px] text-foreground transition-colors focus:border-slate-300 focus:outline-none"
      >
        {selected.label}
        <span
          aria-hidden
          className={`text-text-tertiary transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-60 overflow-auto border border-border-default bg-surface-2 py-1 shadow-lg"
        >
          {categories.map((c) => (
            <li key={c.value} role="option" aria-selected={c.value === value}>
              <button
                type="button"
                onClick={() => {
                  setValue(c.value);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left text-[15px] transition-colors hover:bg-surface-3 ${
                  c.value === value ? "text-foreground" : "text-text-secondary"
                }`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
