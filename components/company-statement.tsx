import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CompanyStatement() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <div>
          <ScrollReveal>
            <p className="max-w-3xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[64px]">
              Fikir üretmek kolaydır.
              <br />
              İnşa etmek değil.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17px]">
              Herkesin iyi bir fikri olabilir. Onu gerçek bir işletmeye
              dönüştürmek ise çoğu fikrin asla ulaşamadığı bir yapı,
              teknoloji ve zaman gerektirir. TRADERS tam da bu boşluğu
              doldurmak için var: gerçek dünya fırsatları etrafında
              bağımsız markalar kuruyor ve lansmandan sonra da sürecin
              içinde kalmaya devam ediyoruz.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160}>
          <Link
            href="/hakkimizda"
            className="group flex items-center gap-3 whitespace-nowrap border-t border-border pt-6 text-[13px] font-medium tracking-[0.15em] text-muted transition-colors hover:text-foreground md:border-t-0 md:pt-0"
          >
            <span className="text-accent">01</span>
            <span className="h-px w-6 bg-border transition-colors group-hover:bg-accent" />
            <span className="uppercase">Hakkımızda</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
