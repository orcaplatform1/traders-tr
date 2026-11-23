"use client";

import { SectionLabel } from "@/components/section-label";
import { BrandCard } from "@/components/brand-card";
import { brands } from "@/lib/content/brands";

export function BrandsPageContent() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{"Our Brands"}</SectionLabel>
        <h1 className="font-serif mt-4 max-w-xl text-4xl text-foreground md:text-5xl">
          {"Independent brands. One shared vision."}
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {brands
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((brand, idx) => (
              <div key={brand.id} className="h-full">
                <BrandCard brand={brand} index={idx + 1} featured={brand.status === "active"} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
