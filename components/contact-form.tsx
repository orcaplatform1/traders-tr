"use client";

import { useActionState, useRef, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { useT } from "@/lib/i18n";
import { Magnetic } from "@/components/magnetic";

const initialState: ContactFormState = { status: "idle" };

// Kategori secildiginde form odak rengi ve arka plan bu tona doner
export const CATEGORY_ACCENT: Record<string, string> = {
  ortaklik: "var(--brand-ocean)",
  girisim: "var(--brand-emerald)",
  basin: "var(--brand-earth)",
  genel: "#ffffff",
};

const STEP1_FIELDS = ["name", "email"] as const;

export function ContactForm({
  defaultCategory = "genel",
  onCategoryChange,
}: {
  defaultCategory?: string;
  onCategoryChange?: (value: string) => void;
}) {
  const t = useT();
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [step, setStep] = useState<1 | 2>(1);
  const [category, setCategory] = useState(defaultCategory);
  const formRef = useRef<HTMLFormElement>(null);

  // Sunucu hatasi ilk adimdaki bir alanda ise o adima geri don
  const [lastState, setLastState] = useState(state);
  if (state !== lastState) {
    setLastState(state);
    if (STEP1_FIELDS.some((f) => state.fieldErrors?.[f])) setStep(1);
  }

  function selectCategory(value: string) {
    setCategory(value);
    onCategoryChange?.(value);
  }

  function goNext() {
    const form = formRef.current;
    if (!form) return;
    for (const name of STEP1_FIELDS) {
      const el = form.elements.namedItem(name) as HTMLInputElement | null;
      if (el && !el.checkValidity()) {
        el.reportValidity();
        return;
      }
    }
    setStep(2);
  }

  const CATEGORIES = [
    { value: "ortaklik", label: t("İş Ortaklığı", "Partnership") },
    { value: "girisim", label: t("Girişim", "Venture") },
    { value: "basin", label: t("Basın", "Press") },
    { value: "genel", label: t("Genel", "General") },
  ] as const;

  if (state.status === "success") {
    return (
      <div className="border-t border-border pt-10">
        <p className="text-xl font-medium text-foreground">{t("Teşekkürler.", "Thank you.")}</p>
        <p className="mt-2 text-[15px] text-muted">{t("Size en kısa sürede geri döneceğiz.", "We'll get back to you as soon as possible.")}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate>
      {/* honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{t("Web sitesi", "Website")}</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Adim gostergesi */}
      <div className="mb-12 flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.15em]">
        {[1, 2].map((n) => (
          <span key={n} className="flex items-center gap-4">
            <span className={`transition-colors duration-500 ${step === n ? "text-foreground" : "text-text-tertiary"}`}>
              {String(n).padStart(2, "0")} · {n === 1 ? t("Siz", "You") : t("Fikriniz", "Your Idea")}
            </span>
            {n === 1 && (
              <span className="relative h-px w-16 bg-border">
                <span
                  className="lux-ease absolute inset-y-0 left-0"
                  style={{ width: step === 2 ? "100%" : "0%", background: "var(--form-accent, #ffffff)" }}
                />
              </span>
            )}
          </span>
        ))}
      </div>

      <input type="hidden" name="category" value={category} />

      <div className={step === 1 ? "space-y-10" : "hidden"}>
        <fieldset>
          <legend className="mb-4 block text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary">
            {t("Kategori", "Category")}
          </legend>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => {
              const selected = c.value === category;
              return (
                <button
                  key={c.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectCategory(c.value)}
                  className={`lux-ease rounded-full border px-5 py-2.5 text-[14px] ${
                    selected ? "text-foreground" : "border-border-default text-text-secondary hover:text-foreground"
                  }`}
                  style={
                    selected
                      ? { borderColor: CATEGORY_ACCENT[c.value], boxShadow: `0 0 24px -8px ${CATEGORY_ACCENT[c.value]}` }
                      : undefined
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <Field label={t("Ad Soyad", "Full Name")} name="name" error={state.fieldErrors?.name}>
          <input id="name" name="name" type="text" required className={INPUT} />
        </Field>

        <Field label={t("E-posta", "Email")} name="email" error={state.fieldErrors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            className={INPUT}
          />
        </Field>

        <Magnetic>
          <button type="button" onClick={goNext} className="btn-liquid group px-8 py-3.5 text-[13px] font-medium tracking-wide">
            {t("Devam Et", "Continue")}
            <span className="lux-ease group-hover:translate-x-1">→</span>
          </button>
        </Magnetic>
      </div>

      <div className={step === 2 ? "space-y-10" : "hidden"}>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Field label={t("Telefon", "Phone")} name="phone" error={state.fieldErrors?.phone}>
            <div className="flex">
              <span
                aria-hidden
                className="flex shrink-0 items-center border-b border-[#262626] pr-3 text-[18px] text-text-tertiary md:text-[20px]"
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
                className={INPUT}
              />
            </div>
          </Field>

          <Field label={t("Şirket/Bireysel", "Company/Individual")} name="company" error={state.fieldErrors?.company}>
            <input id="company" name="company" type="text" className={INPUT} />
          </Field>
        </div>

        <Field label={t("Konu", "Subject")} name="subject" error={state.fieldErrors?.subject}>
          <input id="subject" name="subject" type="text" required className={INPUT} />
        </Field>

        <Field label={t("Mesaj", "Message")} name="message" error={state.fieldErrors?.message}>
          <textarea id="message" name="message" rows={5} required className={`${INPUT} resize-none`} />
        </Field>

        {state.status === "error" && state.message && (
          <p className="text-[13px] text-error">{state.message}</p>
        )}

        <div className="flex flex-wrap items-center gap-8">
          <Magnetic>
            <button
              type="submit"
              disabled={pending}
              className="btn-liquid px-8 py-3.5 text-[13px] font-medium tracking-wide disabled:opacity-60"
            >
              {pending ? t("Gönderiliyor…", "Sending…") : t("Mesaj Gönder", "Send Message")}
            </button>
          </Magnetic>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
          >
            ← {t("Geri", "Back")}
          </button>
        </div>
      </div>
    </form>
  );
}

const INPUT = "lux-input w-full px-0 py-4 text-[18px] text-foreground placeholder:text-text-tertiary md:text-[20px]";

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
