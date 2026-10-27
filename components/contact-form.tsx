"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { useT } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };

// Her ekranda tek alan: sira burada belirlenir
const STEPS = ["category", "name", "email", "phone", "company", "subject", "message"] as const;
type StepKey = (typeof STEPS)[number];

export function ContactForm({
  defaultCategory = "genel",
  onClose,
}: {
  defaultCategory?: string;
  onClose?: () => void;
}) {
  const t = useT();
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState(defaultCategory);
  const formRef = useRef<HTMLFormElement>(null);

  // Sunucu hatasi varsa hatali ilk alanin ekranina geri don
  const [lastState, setLastState] = useState(state);
  if (state !== lastState) {
    setLastState(state);
    const firstError = STEPS.findIndex((f) => state.fieldErrors?.[f as keyof typeof state.fieldErrors]);
    if (firstError >= 0) setStep(firstError);
  }

  const current: StepKey = STEPS[step];
  const isLast = step === STEPS.length - 1;

  // Her adimda aktif alana odaklan
  useEffect(() => {
    const el = formRef.current?.elements.namedItem(current) as HTMLInputElement | null;
    if (el && el.type !== "hidden") el.focus({ preventScroll: true });
  }, [current]);

  function goNext() {
    const el = formRef.current?.elements.namedItem(current) as HTMLInputElement | null;
    if (el && el.type !== "hidden" && !el.checkValidity()) {
      el.reportValidity();
      return;
    }
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  }

  // action prop'u yerine elle gonderim: React 19 form'u otomatik sifirlamasin,
  // sunucu hata dondurse de girilen degerler korunsun
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const invalid = STEPS.findIndex((f) => {
      const el = form.elements.namedItem(f) as HTMLInputElement | null;
      return el && el.type !== "hidden" && !el.checkValidity();
    });
    if (invalid >= 0) {
      setStep(invalid);
      requestAnimationFrame(() => (form.elements.namedItem(STEPS[invalid]) as HTMLInputElement | null)?.reportValidity());
      return;
    }
    const data = new FormData(form);
    startTransition(() => formAction(data));
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key !== "Enter" || isLast || (e.target as HTMLElement).tagName === "TEXTAREA") return;
    e.preventDefault();
    goNext();
  }

  const CATEGORIES = [
    { value: "ortaklik", label: t("İş Ortaklığı", "Partnership") },
    { value: "girisim", label: t("Girişim", "Venture") },
    { value: "basin", label: t("Basın", "Press") },
    { value: "genel", label: t("Genel", "General") },
  ] as const;

  const QUESTION: Record<StepKey, string> = {
    category: t("Hangi konuda yazıyorsunuz?", "What is this about?"),
    name: t("Adınız ve soyadınız?", "Your full name?"),
    email: t("E-posta adresiniz?", "Your email address?"),
    phone: t("Telefon numaranız?", "Your phone number?"),
    company: t("Şirket ya da bireysel? (isteğe bağlı)", "Company or individual? (optional)"),
    subject: t("Konu nedir?", "What's the subject?"),
    message: t("Fikrinizi anlatın.", "Tell us your idea."),
  };

  // Brutalist ust ilerleme cizgisi + adim sayaci + kapat
  const header = (
    <>
      <div
        className="absolute left-0 top-0 h-[3px] bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: `${(state.status === "success" ? 1 : (step + 1) / STEPS.length) * 100}%` }}
      />
      <div className="flex items-center justify-between border-b border-border p-5">
        <span className="font-mono text-xs text-muted">
          {t("ADIM", "STEP")} {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
        </span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 border border-foreground px-3 font-mono text-sm uppercase tracking-tight text-foreground transition-transform active:scale-95"
          >
            {t("Kapat [X]", "Close [X]")}
          </button>
        )}
      </div>
    </>
  );

  if (state.status === "success") {
    return (
      <div className="relative min-h-full">
        {header}
        <div className="wizard-step mx-auto flex h-[75vh] max-w-md flex-col justify-center px-6">
          <p className="text-3xl font-bold text-foreground">{t("Teşekkürler.", "Thank you.")}</p>
          <p className="mt-3 text-[17px] text-muted">{t("Size en kısa sürede geri döneceğiz.", "We'll get back to you as soon as possible.")}</p>
        </div>
      </div>
    );
  }

  const error = state.fieldErrors?.[current as keyof typeof state.fieldErrors];

  return (
    <form ref={formRef} onSubmit={onSubmit} onKeyDown={onKeyDown} noValidate className="relative min-h-full">
      {header}
      {/* honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{t("Web sitesi", "Website")}</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Merkez odakli girdi alani */}
      <div className="mx-auto flex min-h-[75vh] max-w-md flex-col justify-center px-6 py-10">
      <input type="hidden" name="category" value={category} />

      {/* Kategori */}
      <fieldset className={step === 0 ? "wizard-step" : "hidden"}>
        <legend className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {QUESTION.category}
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CATEGORIES.map((c) => {
            const selected = c.value === category;
            return (
              <button
                key={c.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(c.value)}
                className={`haptic flex min-h-14 items-center border px-5 text-left text-[18px] ${
                  selected ? "border-foreground text-foreground" : "border-border text-muted"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Step active={current === "name"} label={QUESTION.name} name="name" error={current === "name" ? error : undefined}>
        <input id="name" name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" className={INPUT} />
      </Step>

      <Step active={current === "email"} label={QUESTION.email} name="email" error={current === "email" ? error : undefined}>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          className={INPUT}
        />
      </Step>

      <Step active={current === "phone"} label={QUESTION.phone} name="phone" error={current === "phone" ? error : undefined}>
        <div className="flex">
          <span aria-hidden className="flex shrink-0 items-center border-b border-border pr-3 text-xl text-muted md:text-2xl">
            +90
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            required
            pattern="\d{10}"
            placeholder="5XXXXXXXXX"
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
            }}
            className={INPUT}
          />
        </div>
      </Step>

      <Step active={current === "company"} label={QUESTION.company} name="company" error={current === "company" ? error : undefined}>
        <input id="company" name="company" type="text" autoComplete="organization" className={INPUT} />
      </Step>

      <Step active={current === "subject"} label={QUESTION.subject} name="subject" error={current === "subject" ? error : undefined}>
        <input id="subject" name="subject" type="text" required minLength={2} maxLength={200} className={INPUT} />
      </Step>

      <Step active={current === "message"} label={QUESTION.message} name="message" error={current === "message" ? error : undefined}>
        <textarea id="message" name="message" rows={4} required minLength={10} maxLength={4000} className={`${INPUT} resize-none`} />
      </Step>

      {state.status === "error" && state.message && <p className="mt-6 text-[14px] text-error">{state.message}</p>}

      <div className="mt-10 flex flex-wrap items-center gap-4">
        {isLast ? (
          <button
            type="submit"
            disabled={pending}
            className="btn-liquid w-full px-8 text-sm font-medium tracking-wide disabled:opacity-60"
          >
            {pending ? t("Gönderiliyor…", "Sending…") : t("Fikri TRADERS'a Gönder ■", "Send Idea to TRADERS ■")}
          </button>
        ) : (
          <button type="button" onClick={goNext} className="btn-liquid w-full px-8 text-sm font-medium tracking-wide">
            {t("Devam Et", "Continue")} →
          </button>
        )}
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="haptic min-h-12 px-4 text-[15px] font-medium tracking-wide text-muted"
          >
            ← {t("Geri", "Back")}
          </button>
        )}
      </div>
      </div>
    </form>
  );
}

const INPUT =
  "lux-input min-h-14 w-full px-0 py-3 text-xl text-foreground placeholder:text-text-tertiary md:text-2xl";

function Step({
  active,
  label,
  name,
  error,
  children,
}: {
  active: boolean;
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  // Alanlar DOM'da kalir (form verisi kaybolmasin), sadece aktif olan gorunur
  return (
    <div className={active ? "wizard-step" : "hidden"}>
      <label htmlFor={name} className="mb-6 block text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-[14px] text-error">{error}</p>}
    </div>
  );
}
