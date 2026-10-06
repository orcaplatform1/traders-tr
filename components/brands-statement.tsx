"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

export function BrandsStatement() {
  const t = useT();
  return (
    <section className="border-b border-border py-28 md:py-40">
      <div className="container-edit flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="mx-auto max-w-4xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[60px]">
            {t("Farklı pazarlar.", "Different markets.")}
            <br />
            {t("Farklı fikirler.", "Different ideas.")}
            <br />
            {t("Tek bir yaklaşım.", "One approach.")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-muted md:text-[17px]">
            {t(
              "Bağımsız markalar; düşünme, geliştirme ve işletme biçimimizle birbirine bağlanıyor.",
              "Independent brands — connected by the way we think, build and operate."
            )}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
