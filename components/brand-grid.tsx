"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { brands } from "@/lib/content/brands";
import type { Brand, BrandAccent } from "@/lib/content/types";
import { useT } from "@/lib/i18n";

const GLOW: Record<BrandAccent, string> = {
  blue: "#3b82f6",
  purple: "#8b5cf6",
  teal: "#14b8a6",
  orange: "#f97316",
};

const BRAND_COLOR: Record<string, string> = {
  orca: GLOW.blue,
  kriptobeyan: "#d4af37",
  zesta: GLOW.teal,
  mettlo: GLOW.orange,
};

const LOGO_BG: Record<string, string> = {
  kriptobeyan: "rgba(212, 175, 55, 0.16)",
};

// Bento yerlesimi: 3 kolon, 1. ve 4. kart genis
const BENTO_SPAN = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

function BrandLogo({ brand }: { brand: Brand }) {
  const logoBg = LOGO_BG[brand.id];

  return (
    <div
      className="lux-ease relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 group-hover:scale-[1.02]"
      style={logoBg ? { backgroundColor: logoBg } : undefined}
    >
      <div className="relative h-10 w-10">
        <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" sizes="40px" />
      </div>
    </div>
  );
}

export function BrandGrid() {
  const t = useT();
  const sorted = [...brands].sort((a, b) => a.displayOrder - b.displayOrder);

  const EXPLORE_LABEL: Record<string, string> = {
    orca: t("ORCA'yı Keşfedin", "Explore ORCA"),
    kriptobeyan: t("KriptoBeyan'ı Keşfedin", "Explore KriptoBeyan"),
    zesta: t("Zesta'yı Keşfedin", "Explore Zesta"),
    mettlo: t("Mettlo'yu Keşfedin", "Explore Mettlo"),
  };

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{t("Markalarımız", "Our Brands")}</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {t("Bağımsız markalar. Ortak bir vizyon.", "Independent brands. One shared vision.")}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {sorted.map((brand, i) => {
            const glow = GLOW[brand.accent];
            const brandColor = BRAND_COLOR[brand.id] ?? glow;

            return (
              <ScrollReveal key={brand.id} delay={i * 100} className={BENTO_SPAN[i % BENTO_SPAN.length]}>
                <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-[90px]"
                    style={{ background: `radial-gradient(circle, ${glow}, transparent 70%)` }}
                  />

                  <div className="relative flex items-start justify-between gap-6">
                    <BrandLogo brand={brand} />
                    <span className="font-mono text-sm" style={{ color: brandColor }}>
                      {String(brand.displayOrder).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-10 text-3xl text-foreground md:text-4xl">{brand.name}</h3>

                  <div className="relative mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                      {t(brand.category, brand.categoryEn)}
                    </span>
                    <span className="font-mono text-[12px] text-muted">
                      {brand.websiteUrl.replace(/^https?:\/\//, "")}
                    </span>
                  </div>

                  <p className="relative mt-5 max-w-md text-[15px] text-muted">
                    {t(brand.shortDescription, brand.shortDescriptionEn)}
                  </p>

                  <a
                    href={brand.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-auto inline-flex items-center gap-2 pt-8 text-[13px] font-medium tracking-wide text-foreground"
                  >
                    {EXPLORE_LABEL[brand.id]}
                    <span aria-hidden className="lux-ease group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
