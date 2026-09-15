import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
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
    alternates: { canonical: `/insights/${insight.slug}` },
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "İçgörüler", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: insight.title, item: `${SITE_URL}/insights/${insight.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: { "@type": "Organization", name: insight.author },
    datePublished: insight.publishedAt,
    mainEntityOfPage: `${SITE_URL}/insights/${insight.slug}`,
  };

  return (
    <article className="py-28 md:py-36">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <div className="container-edit max-w-2xl">
        <Link
          href="/insights"
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

        <div className="mt-10 space-y-6 border-t border-border pt-10">
          {insight.content.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
