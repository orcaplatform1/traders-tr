import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { insights } from "@/lib/content/insights";
import type { InsightCategory } from "@/lib/content/types";

const CATEGORY_STYLE: Record<InsightCategory, string> = {
  Teknoloji: "text-cyan",
  Girişimcilik: "text-blue-400",
  "Dijital Ekonomi": "text-purple",
  Piyasalar: "text-teal",
  Şirket: "text-indigo",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InsightsSection() {
  const [featured, ...rest] = insights;
  const secondary = rest.slice(0, 2);

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>İçgörüler</SectionLabel>
            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Girişim perspektifinden düşünceler.
            </h2>
          </div>
          <Link
            href="/icgoruler"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            Tümünü gör
          </Link>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-border pt-14 md:grid-cols-12 md:gap-10">
          <ScrollReveal className="md:col-span-7">
            <Link href={`/icgoruler/${featured.slug}`} className="group block">
              <span className={`text-[11px] font-medium uppercase tracking-[0.15em] ${CATEGORY_STYLE[featured.category]}`}>
                {featured.category}
              </span>
              <h3 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-accent md:text-[40px]">
                {featured.title}
              </h3>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:text-[16px]">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[12px] text-muted">
                <span>{featured.author}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{formatDate(featured.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{featured.readTime} okuma</span>
              </div>
            </Link>
          </ScrollReveal>

          <div className="flex flex-col divide-y divide-border md:col-span-5">
            {secondary.map((insight, i) => (
              <ScrollReveal key={insight.id} delay={(i + 1) * 100} className={i === 0 ? "pb-8" : "pt-8"}>
                <Link href={`/icgoruler/${insight.slug}`} className="group block">
                  <span className={`text-[11px] font-medium uppercase tracking-[0.15em] ${CATEGORY_STYLE[insight.category]}`}>
                    {insight.category}
                  </span>
                  <h3 className="mt-3 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {insight.excerpt}
                  </p>
                  <span className="mt-3 block text-[12px] text-muted">
                    {formatDate(insight.publishedAt)} · {insight.readTime} okuma
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
