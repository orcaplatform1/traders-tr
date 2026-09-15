import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "FARKLI DÜŞÜN",
    description: "Alışılmış modelleri kabul etmeden önce sorgularız.",
  },
  {
    n: "02",
    title: "SADE İNŞA ET",
    description: "Karmaşık problemler net çözümleri hak eder.",
  },
  {
    n: "03",
    title: "AMAÇLA HAREKET ET",
    description: "Hız önemlidir, ama yön daha da önemlidir.",
  },
  {
    n: "04",
    title: "KALICI İNŞA ET",
    description: "Kısa ömürlü trendler yerine dayanıklı markaları tercih ederiz.",
  },
];

export function ApproachSection() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Nasıl Düşünüyoruz</SectionLabel>
        </ScrollReveal>

        <div className="mt-12">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <div className="group flex flex-col gap-3 border-t border-border py-8 transition-colors duration-300 hover:border-border-hover sm:flex-row sm:items-center sm:gap-10">
                <span className="w-16 shrink-0 text-sm text-muted">{p.n}</span>
                <span className="w-full shrink-0 text-2xl font-medium tracking-tight text-foreground sm:w-80 md:text-3xl">
                  {p.title}
                </span>
                <p className="max-w-md text-[15px] leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
