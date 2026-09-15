import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { insights } from "@/lib/content/insights";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InsightsSection() {
  const featured = insights.slice(0, 3);

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

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {featured.map((insight, i) => (
            <ScrollReveal key={insight.id} delay={i * 90}>
              <Link href={`/icgoruler/${insight.slug}`} className="group block">
                <div className="flex items-center gap-3 text-[12px] text-muted">
                  <span>{formatDate(insight.publishedAt)}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{insight.category}</span>
                </div>
                <h3 className="mt-4 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                  {insight.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {insight.excerpt}
                </p>
                <span className="mt-4 block text-[12px] text-muted">
                  {insight.readTime} okuma
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
