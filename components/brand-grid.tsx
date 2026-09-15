import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BrandCard } from "@/components/brand-card";
import { brands } from "@/lib/content/brands";

export function BrandGrid() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Markalarımız</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Bağımsız markalar. Ortak bir vizyon.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {brands
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((brand, i) => (
              <ScrollReveal key={brand.id} delay={i * 90} className="h-full bg-slate-950">
                <BrandCard brand={brand} />
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
