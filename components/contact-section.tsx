"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useIdeaWizard } from "@/components/idea-wizard";
import { useT } from "@/lib/i18n";

// Tek girdili sade kart: e-posta alinir, sihirbaz tam ekran devam eder
export function ContactSection({ defaultCategory = "genel" }: { defaultCategory?: string }) {
  const t = useT();
  const { open } = useIdeaWizard();
  const emailRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    open({ email: emailRef.current?.value.trim() || undefined, category: defaultCategory });
  }

  return (
    <section className="py-12 md:py-32">
      <div className="container-edit">
        <ScrollReveal>
          <div className="mx-auto max-w-xl border border-border bg-white p-6 md:p-10">
            <h2 className="mb-2 text-xl font-bold text-foreground md:text-3xl">
              {t("Bir Fikriniz mi Var?", "Have an Idea?")}
            </h2>
            <p className="mb-6 text-sm text-muted md:text-base">
              {t(
                "Fikir üretmek kolaydır. İnşa etmek değil. İlk adımı atın.",
                "Ideas are easy. Building is not. Take the first step."
              )}
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="idea-email" className="mb-1.5 block text-xs font-semibold uppercase text-muted">
                  {t("E-Posta Adresiniz", "Your Email Address")}
                </label>
                <input
                  ref={emailRef}
                  id="idea-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder={t("isim@sirket.com", "name@company.com")}
                  className="h-12 w-full rounded-none border border-border bg-background px-4 text-sm transition-colors focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="h-12 w-full bg-foreground text-sm font-medium text-background transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]"
              >
                {t("İlerleyin →", "Continue →")}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
