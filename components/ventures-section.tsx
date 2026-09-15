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

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <ScrollReveal>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                Aktif
              </span>
            </ScrollReveal>

            <div className="mt-6">
              {ventures.map((v, i) => (
                <ScrollReveal key={v.id} delay={i * 90}>
                  <div className="group border-t border-border py-6 transition-colors duration-300 hover:border-border-hover">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="text-lg font-medium text-foreground">{v.name}</span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                        {v.category}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-muted">{v.description}</p>
                    <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-slate-300">
                      {v.detail}
                    </p>
                    {v.websiteUrl && (
                      <a
                        href={v.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-muted transition-colors hover:text-accent"
                      >
                        {v.websiteUrl.replace(/^https?:\/\//, "")}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>

          <div>
            <ScrollReveal delay={120}>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                Keşfediyoruz
              </span>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="mt-6 border-t border-border pb-5 pt-6">
                <span className="text-lg font-medium text-foreground">Yeni girişimler</span>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                  Teknoloji, dijital ticaret, finans ve gelişmekte olan
                  pazarlardaki fırsatları sürekli değerlendiriyoruz.
                </p>
                <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                  Sırada
                </span>
              </div>
              <div className="border-t border-border" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
