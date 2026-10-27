"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { InsightCard } from "@/components/insight-card";
import { insights } from "@/lib/content/insights";
import { useT } from "@/lib/i18n";

export function InsightsPageContent() {
  const t = useT();

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{t("İçgörüler", "Insights")}</SectionLabel>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {t("Girişim perspektifinden düşünceler.", "Thoughts from a venture perspective.")}
        </h1>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {insights.map((insight, i) => (
            <ScrollReveal key={insight.id} delay={(i % 3) * 100}>
              <InsightCard insight={insight} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
