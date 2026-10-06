import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { brands, getBrandBySlug } from "@/lib/content/brands";
import { SITE_URL } from "@/lib/constants";
import { BrandProfileContent } from "./brand-profile-content";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: brand.name,
    description: brand.shortDescription,
    alternates: { canonical: `/markalar/${brand.slug}` },
  };
}

export default async function BrandProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Markalarımız", item: `${SITE_URL}/markalar` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_URL}/markalar/${brand.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <BrandProfileContent brand={brand} />
    </>
  );
}
