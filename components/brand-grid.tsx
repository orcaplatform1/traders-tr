"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
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

// Mouse'u takip eden hafif 3D egim + kenar isigi konumu
function TiltCard({ brandId, children }: { brandId: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.classList.add("is-tilting");
    el.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tilting");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      ref={ref}
      data-brand-card={brandId}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10"
    >
      {children}
    </article>
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
      <div className="container-edit relative z-10">
        <ScrollReveal>
          <SectionLabel>{t("Markalarımız", "Our Brands")}</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {t("Bağımsız markalar. Ortak bir vizyon.", "Independent brands. One shared vision.")}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {sorted.map((brand, i) => {
            const brandColor = BRAND_COLOR[brand.id] ?? GLOW[brand.accent];

            return (
              <ScrollReveal key={brand.id} delay={i * 100} className={BENTO_SPAN[i % BENTO_SPAN.length]}>
                <TiltCard brandId={brand.id}>
                  <span aria-hidden className={`venture-gradient venture-gradient--${brand.id}`} />
                  <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="card-scan" style={{ animationDelay: `${i * 1.6}s` }} />
                  </span>

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
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
