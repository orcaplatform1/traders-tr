"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { InsightCard } from "@/components/insight-card";
import { insights } from "@/lib/content/insights";
import { useT } from "@/lib/i18n";

export function InsightsSection() {
  const t = useT();
  const [featured, ...rest] = insights;
  const secondary = rest.slice(0, 2);

  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>{t("İçgörüler", "Insights")}</SectionLabel>
            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {t("Girişim perspektifinden düşünceler.", "Thoughts from a venture perspective.")}
            </h2>
          </div>
          <Link
            href="/icgoruler"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            {t("Tümünü gör", "See all")}
          </Link>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12 md:gap-5">
          <ScrollReveal className="md:col-span-7 md:row-span-2">
            <InsightCard insight={featured} large />
          </ScrollReveal>
          {secondary.map((insight, i) => (
            <ScrollReveal key={insight.id} delay={(i + 1) * 120} className="md:col-span-5">
              <InsightCard insight={insight} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
