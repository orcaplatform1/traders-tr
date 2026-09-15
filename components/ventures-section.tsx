import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ventures } from "@/lib/content/ventures";

export function VenturesSection() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Girişimler</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Bazı fikirler inşa edilmeye hazır. Bazıları henüz oluşuyor.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          <ScrollReveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
              Aktif
            </span>
            <ul className="mt-6 space-y-5">
              {ventures.map((v) => (
                <li
                  key={v.id}
                  className="flex items-baseline justify-between border-b border-border pb-5"
                >
                  <div>
                    <span className="text-lg font-medium text-foreground">
                      {v.name}
                    </span>
                    <p className="mt-1 text-[14px] text-muted">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
              Keşfediyoruz
            </span>
            <div className="mt-6 border-b border-border pb-5">
              <span className="text-lg font-medium text-foreground">
                Yeni girişimler
              </span>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                Teknoloji, dijital ticaret, finans ve gelişmekte olan
                pazarlardaki fırsatları sürekli değerlendiriyoruz.
              </p>
              <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                Sırada
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
