import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "İçgörüler",
  description: "Girişim perspektifinden düşünceler.",
  alternates: { canonical: "/icgoruler" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>İçgörüler</SectionLabel>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Girişim perspektifinden düşünceler.
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
              <span className="mt-4 block text-[12px] text-muted">{insight.readTime} okuma</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
