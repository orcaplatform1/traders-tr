import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

const PRINCIPLES = [
  {
    title: "GELİŞTİR",
    description: "Umut vadeden fikirleri gerçek markalara ve işletmelere dönüştürürüz.",
  },
  {
    title: "İNŞA ET",
    description: "Onları işletmek için gereken teknolojiyi, sistemleri ve deneyimleri tasarlarız.",
  },
  {
    title: "İŞLET",
    description: "Lansmanın ötesinde de dahil oluruz; kurduğumuz işleri sürekli geliştiririz.",
  },
  {
    title: "BÜYÜT",
    description: "Uzun vadeli potansiyeli olan girişimlere zaman, kaynak ve stratejik odak yatırırız.",
  },
];

export function WhatWeDo() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Ne Yapıyoruz</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Fikirleri işleyen markalara dönüştürüyoruz.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 90}>
              <div className="border-t border-border pt-6">
                <span className="text-[13px] font-medium tracking-[0.15em] text-accent">
                  {p.title}
                </span>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
