"use client";

import Link from "next/link";
import type { Insight } from "@/lib/content/types";
import { useT, useLang } from "@/lib/i18n";

const CATEGORY_EN: Record<string, string> = {
  Teknoloji: "Technology",
  Girişimcilik: "Entrepreneurship",
  "Dijital Ekonomi": "Digital Economy",
  Piyasalar: "Markets",
  Şirket: "Company",
};

// Minimal cizgisel kart: kapak gorseli yok, tipografi ve okuma suresi on planda
export function InsightCard({ insight, large = false }: { insight: Insight; large?: boolean }) {
  const t = useT();
  const { lang } = useLang();
  const minutes = insight.readTime.replace(/\D/g, "").padStart(2, "0");
  const date = new Date(insight.publishedAt).toLocaleDateString(lang === "en" ? "en-US" : "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/icgoruler/${insight.slug}`}
      className="group relative flex h-full flex-col justify-between border border-border p-8 transition-colors duration-500 hover:border-border-strong md:p-10"
    >
      <span
        aria-hidden
        className="lux-ease absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground group-hover:scale-x-100"
      />
      <div>
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
          <span>{lang === "en" ? (CATEGORY_EN[insight.category] ?? insight.category) : insight.category}</span>
          <span className="h-px w-6 bg-border" />
          <span className="normal-case tracking-normal">{date}</span>
        </div>
        <h3
          className={`mt-6 font-medium leading-[1.15] tracking-tight text-foreground ${
            large ? "text-[28px] md:text-[44px]" : "text-[22px] md:text-[26px]"
          }`}
        >
          {insight.title}
        </h3>
        {large && <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted md:text-[16px]">{insight.excerpt}</p>}
      </div>

      <div className="mt-14 flex items-end justify-between border-t border-border pt-6">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-5xl leading-none text-foreground md:text-6xl">{minutes}</span>
          <span className="text-[12px] uppercase tracking-[0.15em] text-muted">{t("dk okuma", "min read")}</span>
        </div>
        <span aria-hidden className="lux-ease text-muted group-hover:translate-x-1.5 group-hover:text-foreground">
          →
        </span>
      </div>
    </Link>
  );
}
