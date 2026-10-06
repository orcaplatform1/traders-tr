import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getInsightBySlug, insights } from "@/lib/content/insights";
import { SITE_URL } from "@/lib/constants";
import { InsightContent } from "./insight-content";

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

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

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
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <InsightContent insight={insight} moreInsights={moreInsights} />
    </>
  );
}
