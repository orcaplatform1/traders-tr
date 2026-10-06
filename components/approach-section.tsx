"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

export function ApproachSection() {
  const t = useT();

  const PRINCIPLES = [
    {
      n: "01",
      title: t("Önce probleme odaklan.", "Focus on the problem first."),
      description: t(
        "Alışılmış modelleri kabul etmeden önce sorgularız.",
        "We question established models before accepting them."
      ),
    },
    {
      n: "02",
      title: t("Karmaşıklığı görünmez kıl.", "Make complexity invisible."),
      description: t(
        "Karmaşık problemler net ve sade çözümleri hak eder.",
        "Complex problems deserve clear and simple solutions."
      ),
    },
    {
      n: "03",
      title: t("Teknoloji fikre hizmet eder.", "Technology serves the idea."),
      description: t(
        "Teknoloji bir amaç değil, fikri hayata geçiren araçtır.",
        "Technology is not an end — it is the tool that brings the idea to life."
      ),
    },
    {
      n: "04",
      title: t("Kalıcılığı hedefle.", "Aim for permanence."),
      description: t(
        "Kısa ömürlü trendler yerine dayanıklı markaları tercih ederiz.",
        "We prefer durable brands over short-lived trends."
      ),
    },
  ];

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{t("Nasıl Düşünüyoruz", "How We Think")}</SectionLabel>
          <p className="mt-4 max-w-3xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[60px]">
            {t("Anı değil,", "We shape")}
            <br />
            {t("geleceği şekillendiriyoruz.", "the future, not the moment.")}
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
