import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutSection() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 md:grid-cols-2">
        <ScrollReveal>
          <SectionLabel>TRADERS.TR Hakkında</SectionLabel>
          <p className="mt-6 text-2xl font-medium leading-[1.4] tracking-tight text-foreground md:text-3xl">
            TRADERS.TR, teknoloji, ticaret ve finansın kesişiminde işletmeler
            kuran ve işleten çok markalı bir girişim şirketidir.
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            Güçlü markaların net fikirlerle başladığına inanıyoruz. Bizim
            rolümüz, bu fikirleri sade, faydalı ve kalıcı işletmelere
            dönüştürmek.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-10 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                Misyon
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                Umut vadeden fikirlerden anlamlı işletmeler kurmak.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                Vizyon
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                Değişen teknoloji, pazarlar ve tüketici davranışıyla
                birlikte evrilebilen bağımsız markalardan oluşan bir
                portföy yaratmak.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
