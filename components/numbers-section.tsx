"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

export function NumbersSection() {
  const t = useT();

  const NUMBERS = [
    { value: "05", label: t("Marka", "Brands") },
    { value: "05", label: t("Sektör", "Sectors") },
    { value: "01", label: t("Ortak", "Partner") },
    { value: "∞", label: t("Keşfedilecek Fikir", "Ideas to Explore") },
  ];

  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-edit">
        <div className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <ScrollReveal key={n.label} delay={i * 90}>
              <div className="border-l border-border pl-6">
                <span className="block text-[44px] font-medium leading-none tracking-tight text-foreground md:text-[64px]">
                  {n.value}
                </span>
                <span className="mt-4 block text-[12px] font-medium uppercase tracking-[0.15em] text-muted">
                  {n.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
