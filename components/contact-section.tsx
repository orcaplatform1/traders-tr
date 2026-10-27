"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm, CATEGORY_ACCENT } from "@/components/contact-form";
import { useT } from "@/lib/i18n";

export function ContactSection({ defaultCategory = "genel" }: { defaultCategory?: string }) {
  const t = useT();
  const [category, setCategory] = useState(defaultCategory);

  return (
    <section
      className="contact-stage flex min-h-screen items-center py-32 md:py-48"
      style={{ "--form-accent": CATEGORY_ACCENT[category] ?? CATEGORY_ACCENT.genel } as React.CSSProperties}
    >
      <div className="container-edit grid w-full grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        <ScrollReveal className="md:col-span-5">
          <SectionLabel>{t("Bir Fikriniz mi Var?", "Have an Idea?")}</SectionLabel>
          <h2 className="mt-4 max-w-md text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
            {t("Ne yarattığınızı anlatın.", "Tell us what you're building.")}
          </h2>
          <p className="mt-8 max-w-sm text-[16px] leading-relaxed text-muted">
            {t(
              "Fikir üretmek kolaydır. İnşa etmek değil. İlk adımı birlikte atalım.",
              "Ideas are easy. Building is not. Let's take the first step together."
            )}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="md:col-span-7">
          <ContactForm defaultCategory={defaultCategory} onCategoryChange={setCategory} />
        </ScrollReveal>
      </div>
    </section>
  );
}
