"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

function MarkDiscover() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.3" opacity="0.25" />
    </svg>
  );
}

function MarkBuild() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="5" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.3" />
      <rect x="17" y="17" width="10" height="10" stroke="currentColor" strokeWidth="1.3" />
      <rect x="17" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
    </svg>
  );
}

function MarkLaunch() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="5" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11 21 25 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 7h9v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MarkOperate() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
      <rect
        x="11"
        y="11"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="1.3"
        transform="rotate(45 16 16)"
      />
    </svg>
  );
}

function MarkExpand() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="10" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <path d="M4 10V4h6M28 10V4h-6M4 22v6h6M28 22v6h-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BENTO_SPAN = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-1"];

export function WhatWeDo() {
  const t = useT();

  const CAPABILITIES = [
    {
      n: "01",
      title: t("Keşfet", "Discover"),
      description: t(
        "Yeni fikirleri ve pazar fırsatlarını araştırıyoruz.",
        "We research new ideas and market opportunities."
      ),
      Mark: MarkDiscover,
    },
    {
      n: "02",
      title: t("İnşa Et", "Build"),
      description: t(
        "Marka, ürün, teknoloji ve sistemleri geliştiriyoruz.",
        "We develop brands, products, technology and systems."
      ),
      Mark: MarkBuild,
    },
    {
      n: "03",
      title: t("Hayata Geçir", "Launch"),
      description: t(
        "Fikirleri gerçek ürün ve işletmelere dönüştürüyoruz.",
        "We turn ideas into real products and businesses."
      ),
      Mark: MarkLaunch,
    },
    {
      n: "04",
      title: t("İşlet", "Operate"),
      description: t(
        "Sadece kurup bırakmıyoruz; büyüme sürecinde aktif rol alıyoruz.",
        "We don't just launch and leave — we stay actively involved through growth."
      ),
      Mark: MarkOperate,
    },
    {
      n: "05",
      title: t("Büyüt", "Scale"),
      description: t(
        "Başarılı modelleri yeni pazarlara ve kategorilere taşıyoruz.",
        "We take proven models into new markets and categories."
      ),
      Mark: MarkExpand,
    },
  ];

  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{t("Ne Yapıyoruz", "What We Do")}</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {t(
              "Fikirleri işleyen markalara dönüştürüyoruz.",
              "We turn ideas into working brands."
            )}
          </h2>
        </ScrollReveal>

        {/* Bento yerlesimi: ust satirda genis + dar, alt satirda uc esit kutu */}
        <ol className="mt-20 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-3 md:gap-5">
          {CAPABILITIES.map((c, i) => (
            <li key={c.n} className={BENTO_SPAN[i]}>
              <ScrollReveal delay={i * 100} className="h-full">
                <div className="glass-card group flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl p-8 md:min-h-[300px] md:p-10">
                  <div className="flex items-center justify-between">
                    <div className="lux-ease flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-foreground group-hover:scale-105">
                      <c.Mark />
                    </div>
                    <span className="font-mono text-sm text-muted">{c.n}</span>
                  </div>
                  <div className="mt-14">
                    <h3 className={`text-foreground ${i === 0 ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                      {c.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] text-muted">{c.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
