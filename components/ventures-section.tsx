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
            Sıfırdan kuruldu.
          </h2>
        </ScrollReveal>

        <div className="relative mt-20 border-t border-border pt-14">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
            {ventures.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 100}>
                <div className="group relative">
                  <span className="absolute -top-[59px] left-0 hidden h-2 w-2 rounded-full bg-accent ring-4 ring-background md:block" />

                  <span className="font-mono text-4xl font-medium leading-none text-border-strong transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground md:text-[26px]">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{v.description}</p>

                  <dl className="mt-6 space-y-3 border-t border-border pt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                        Kategori
                      </dt>
                      <dd className="text-right text-[13px] text-slate-300">{v.category}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                        Durum
                      </dt>
                      <dd className="flex items-center gap-2 text-[13px] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Aktif
                      </dd>
                    </div>
                    {v.websiteUrl && (
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                          Web Sitesi
                        </dt>
                        <dd>
                          <a
                            href={v.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-accent"
                          >
                            {v.websiteUrl.replace(/^https?:\/\//, "")}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={160}>
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                Keşfediyoruz
              </span>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
                Teknoloji, dijital ticaret, finans ve gelişmekte olan
                pazarlardaki fırsatları sürekli değerlendiriyoruz.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
