"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { insights } from "@/lib/content/insights";
import { useT, useLang } from "@/lib/i18n";

export function InsightsPageContent() {
  const t = useT();
  const { lang } = useLang();

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{t("İçgörüler", "Insights")}</SectionLabel>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {t("Girişim perspektifinden düşünceler.", "Thoughts from a venture perspective.")}
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {insights.map((insight) => (
            <Link key={insight.id} href={`/icgoruler/${insight.slug}`} className="group block">
              <div className="flex items-center gap-3 text-[12px] text-muted">
                <span>{formatDate(insight.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{insight.category}</span>
              </div>
              <h2 className="mt-4 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                {insight.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{insight.excerpt}</p>
              <span className="mt-4 block text-[12px] text-muted">
                {insight.readTime} {t("okuma", "read")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
