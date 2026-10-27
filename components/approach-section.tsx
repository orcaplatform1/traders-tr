"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

const BENTO_SPAN = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

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
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{t("Nasıl Düşünüyoruz", "How We Think")}</SectionLabel>
          <p className="mt-4 max-w-3xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[60px]">
            {t("Anı değil,", "We shape")}
            <br />
            {t("geleceği şekillendiriyoruz.", "the future, not the moment.")}
          </p>
        </ScrollReveal>

        {/* Bento yerlesimi: 3 kolon, 1. ve 4. kutu genis */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-3 md:gap-5">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 120} className={BENTO_SPAN[i]}>
              <div className="glass-card group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-8 md:min-h-[340px] md:p-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-8 -right-2 select-none font-heading text-[160px] leading-none text-foreground opacity-[0.04] transition-opacity duration-700 group-hover:opacity-[0.08] md:text-[220px]"
                >
                  {p.n}
                </span>

                <span className="relative font-mono text-sm text-muted">{p.n}</span>
                <div className="relative mt-16">
                  <h3 className="max-w-md text-[30px] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[36px] md:text-[44px]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">{p.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
