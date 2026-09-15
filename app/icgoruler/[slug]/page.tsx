import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SectionLabel } from "@/components/section-label";
import { getInsightBySlug, insights } from "@/lib/content/insights";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/icgoruler/${insight.slug}` },
    authors: [{ name: insight.author }],
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const headings = insight.content.filter((b) => b.type === "h2");
  const related = insights.filter((i) => i.slug !== insight.slug && i.category === insight.category).slice(0, 2);
  const moreInsights =
    related.length > 0 ? related : insights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "İçgörüler", item: `${SITE_URL}/icgoruler` },
      { "@type": "ListItem", position: 3, name: insight.title, item: `${SITE_URL}/icgoruler/${insight.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: { "@type": "Organization", name: insight.author },
    datePublished: insight.publishedAt,
    mainEntityOfPage: `${SITE_URL}/icgoruler/${insight.slug}`,
  };

  return (
    <article className="py-28 md:py-36">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      <header className="container-edit max-w-2xl">
        <Link
          href="/icgoruler"
          className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← İçgörüler
        </Link>

        <div className="mt-8 flex items-center gap-3 text-[12px] text-muted">
          <span>{formatDate(insight.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{insight.category}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{insight.readTime} okuma</span>
        </div>

        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {insight.title}
        </h1>

        <p className="mt-6 text-[17px] leading-relaxed text-slate-300 md:text-[19px]">
          {insight.excerpt}
        </p>
      </header>

      <div className="container-edit mt-16 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-20">
        {headings.length > 0 && (
          <nav aria-label="İçindekiler" className="hidden md:block">
            <div className="sticky top-28 space-y-1">
              <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                İçindekiler
              </span>
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="block border-l border-border py-1.5 pl-4 text-[13px] text-muted transition-colors hover:border-blue-500 hover:text-foreground"
                >
                  {h.text}
                </a>
              ))}
            </div>
          </nav>
        )}

        <div className="max-w-2xl border-t border-border pt-10">
          {insight.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  id={block.id}
                  className="scroll-mt-28 text-xl font-medium text-foreground md:text-2xl [&:not(:first-child)]:mt-12"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-blue-500 pl-6 text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl"
                >
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={i} className="mt-5 text-[17px] leading-relaxed text-slate-200 first:mt-0">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>

      {moreInsights.length > 0 && (
        <div className="container-edit mt-24 border-t border-border pt-16">
          <SectionLabel>Devamını Okuyun</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {moreInsights.map((i) => (
              <Link key={i.id} href={`/icgoruler/${i.slug}`} className="group block max-w-xl">
                <div className="flex items-center gap-3 text-[12px] text-muted">
                  <span>{formatDate(i.publishedAt)}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{i.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                  {i.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
