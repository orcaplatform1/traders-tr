import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Önce probleme odaklan.",
    description: "Alışılmış modelleri kabul etmeden önce sorgularız.",
  },
  {
    n: "02",
    title: "Karmaşıklığı görünmez kıl.",
    description: "Karmaşık problemler net ve sade çözümleri hak eder.",
  },
  {
    n: "03",
    title: "Teknoloji fikre hizmet eder.",
    description: "Teknoloji bir amaç değil, fikri hayata geçiren araçtır.",
  },
  {
    n: "04",
    title: "Kalıcılığı hedefle.",
    description: "Kısa ömürlü trendler yerine dayanıklı markaları tercih ederiz.",
  },
];

export function ApproachSection() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Nasıl Düşünüyoruz</SectionLabel>
          <p className="mt-4 max-w-3xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[60px]">
            Anı değil,
            <br />
            geleceği şekillendiriyoruz.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <div className="group relative overflow-hidden border-t border-border py-10 transition-colors duration-300 hover:border-border-hover md:py-14">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 select-none text-[120px] font-semibold leading-none text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03] md:text-[180px]"
                >
                  {p.n}
                </span>

                <div className="relative flex items-baseline gap-4">
                  <span className="text-sm text-muted">{p.n}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
                  <h3 className="text-[30px] font-medium leading-[1.05] tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[40px] md:text-[56px] lg:text-[64px]">
                    {p.title}
                  </h3>
                  <p className="max-w-sm text-[15px] leading-relaxed text-muted md:text-right">
                    {p.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
