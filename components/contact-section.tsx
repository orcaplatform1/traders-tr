"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { useT } from "@/lib/i18n";

export function ContactSection({ defaultCategory }: { defaultCategory?: string }) {
  const t = useT();
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 md:grid-cols-2">
        <ScrollReveal>
          <SectionLabel>{t("Bir Fikriniz mi Var?", "Have an Idea?")}</SectionLabel>
          <h2 className="mt-4 max-w-md text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {t("Ne yarattığınızı anlatın.", "Tell us what you're building.")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <ContactForm defaultCategory={defaultCategory} />
        </ScrollReveal>
      </div>
    </section>
  );
}
