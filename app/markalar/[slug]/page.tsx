import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/section-label";
import { JsonLd } from "@/components/json-ld";
import { brands, getBrandBySlug } from "@/lib/content/brands";
import { SITE_URL } from "@/lib/constants";

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
    <section className="py-28 md:py-36">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="container-edit max-w-2xl">
        <Link
          href="/markalar"
          className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← Markalarımız
        </Link>

        <div className="mt-8">
          <div className="relative h-16 w-16">
            <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" sizes="64px" />
          </div>

          <SectionLabel>{brand.category}</SectionLabel>
          <h1 className="mt-4 text-5xl font-medium tracking-tight text-foreground md:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-slate-200 md:text-[19px]">
            {brand.longDescription}
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
              Neden var
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {brand.whyItExists}
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
              Öne Çıkan Özellikler
            </span>
            <ul className="mt-4 space-y-4">
              {brand.features.map((feature, i) => (
                <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-slate-200">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={brand.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm border border-foreground bg-foreground px-6 py-3 text-[13px] font-medium tracking-wide text-slate-950 transition-colors hover:bg-transparent hover:text-foreground"
          >
            {brand.websiteUrl.replace(/^https?:\/\//, "")}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
