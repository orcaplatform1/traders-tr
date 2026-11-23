import { SectionHeader } from "@/components/section-header";
import { BrandCard } from "@/components/brand-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { brands } from "@/lib/content/brands";

// Girisim ekosistemi: aktif markalar 6 kolon (one cikan), gelistirme asamasindakiler 4 kolon
export function BrandGrid() {
  const sorted = [...brands].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="w-full border-b border-hairline py-16 md:py-32">
      <div className="container-edit">
        <ScrollReveal className="mb-10 md:mb-14">
          <SectionHeader label="/01 PORTFOLIO" title="Venture Ecosystem" meta="05 BRANDS // 05 SECTORS" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {sorted.map((brand, idx) => {
            const featured = brand.status === "active";
            return (
              <div key={brand.id} className={featured ? "md:col-span-6" : "md:col-span-4"}>
                <BrandCard brand={brand} index={idx + 1} featured={featured} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
