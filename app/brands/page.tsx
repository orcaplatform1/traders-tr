import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { BrandCard } from "@/components/brand-card";
import { brands } from "@/lib/content/brands";

export const metadata: Metadata = {
  title: "Markalarımız",
  description: "Bağımsız markalar. Ortak bir vizyon.",
  alternates: { canonical: "/brands" },
};

export default function BrandsPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>Markalarımız</SectionLabel>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Bağımsız markalar. Ortak bir vizyon.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {brands
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((brand) => (
              <div key={brand.id} className="h-full bg-slate-950">
                <BrandCard brand={brand} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
