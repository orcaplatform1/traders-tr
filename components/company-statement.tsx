import { ScrollReveal } from "@/components/scroll-reveal";

export function CompanyStatement() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <p className="max-w-4xl text-[26px] font-medium leading-[1.35] tracking-tight text-foreground md:text-[36px]">
            Gerçek dünya fırsatları etrafında bağımsız markalar
            yaratıyor, geliştiriyor ve işletiyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            Finansal eğitimden dijital uyum süreçlerine, el yapımı
            ticaretten teknolojiye kadar girişimlerimiz bağımsız çalışır —
            ama hepsi ortak bir yaklaşımı paylaşır: özenli fikirler, sade
            teknoloji ve uzun vadeli düşünce.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
