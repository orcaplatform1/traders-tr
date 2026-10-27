"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { brands } from "@/lib/content/brands";
import { useT } from "@/lib/i18n";

export function BrandGrid() {
  const t = useT();
  const sorted = [...brands].sort((a, b) => a.displayOrder - b.displayOrder);
  const gridRef = useRef<HTMLDivElement>(null);

  // Ekranin ortasina gelen kart odakta sayilir; durum rozeti sadece o zaman nefes alir
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-focused", e.isIntersecting)),
      { rootMargin: "-40% 0px -40% 0px" },
    );
    grid.querySelectorAll(".bento-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full border-b border-border py-12 md:py-32">
      <div className="container-edit">
        <ScrollReveal className="mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#52525B]">{t("Portföy", "Portfolio")}</span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("Girişim Ekosistemi", "Venture Ecosystem")}
          </h2>
        </ScrollReveal>

        {/* Asimetrik brutalist Bento: 1. ve 4. kart tam genislik */}
        <div ref={gridRef} className="grid grid-cols-2 gap-0 border-l border-t border-border">
          {sorted.map((brand, idx) => {
            const wide = idx === 0 || idx === 3;
            const active = brand.status === "active";

            return (
              <Link
                key={brand.id}
                href={`/markalar/${brand.slug}`}
                className={`bento-card haptic group relative flex flex-col justify-between overflow-hidden border-b border-r border-border bg-white transition-all active:bg-background ${
                  wide ? "col-span-2 min-h-[190px] p-6 md:p-10" : "col-span-1 min-h-[160px] p-5 md:p-8"
                }`}
              >
                <span aria-hidden className="quartz-glow" />

                <div className="relative">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className="font-mono text-[9px] uppercase text-[#52525B] md:text-[10px]">
                      {String(brand.displayOrder).padStart(2, "0")} {"// "}
                      {t(brand.category, brand.categoryEn)}
                    </span>
                    <span
                      className={`status-badge shrink-0 border px-1.5 py-px text-[9px] font-bold md:text-[10px] ${
                        active
                          ? "border-emerald-500 bg-emerald-50/20 text-emerald-600"
                          : "border-amber-500 bg-amber-50/30 text-amber-600"
                      }`}
                    >
                      {active
                        ? t("Aktif", "Active")
                        : brand.status === "developing"
                          ? t("Geliştiriliyor", "In Development")
                          : t("Keşfediyoruz", "Exploring")}
                    </span>
                  </div>
                  <h3 className={`font-bold text-foreground ${wide ? "text-xl md:text-3xl" : "text-lg md:text-2xl"}`}>
                    {brand.name}
                  </h3>
                  {wide && (
                    <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#3F3F46] md:text-sm">
                      {t(brand.shortDescription, brand.shortDescriptionEn)}
                    </p>
                  )}
                </div>

                <div className="relative flex items-center justify-between pt-4 font-mono text-[10px] text-[#52525B] md:text-xs">
                  <span>{brand.websiteUrl.replace(/^https?:\/\//, "")}</span>
                  {wide && <span className="font-sans font-bold text-foreground">{t("İncele →", "View →")}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
