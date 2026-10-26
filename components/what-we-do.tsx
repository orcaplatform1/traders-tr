"use client";

import { useEffect, useRef, useState } from "react";
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

export function WhatWeDo() {
  const t = useT();
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Ekranin ortasindaki bandi kesen adim aktif olur
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
    <section className="border-b border-border py-28 md:py-36">
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

        <ol className="relative mt-16 md:ml-8">
          {/* Durum cizgisi: aktif adima kadar dolar */}
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-border" />
          <span
            aria-hidden
            className="absolute left-[11px] top-0 w-px transition-[height] duration-500 ease-out"
            style={{
              background: "var(--gradient-venture-glow)",
              height: `${((active + 1) / CAPABILITIES.length) * 100}%`,
            }}
          />

          {CAPABILITIES.map((c, i) => {
            const isActive = i === active;

            return (
              <li
                key={c.n}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-index={i}
                data-step={c.n}
                data-step-title={c.title}
                aria-current={isActive ? "step" : undefined}
                className="relative grid grid-cols-[24px_1fr] gap-6 py-10 md:grid-cols-[24px_80px_56px_220px_1fr] md:items-center md:gap-10"
              >
                <span
                  aria-hidden
                  className={`relative z-10 mx-auto h-[9px] w-[9px] rounded-full ring-4 ring-background transition-colors duration-500 ${
                    isActive ? "bg-foreground" : "bg-border-strong"
                  }`}
                />
                <div
                  className={`col-start-2 flex flex-col gap-4 transition-opacity duration-500 md:col-span-4 md:grid md:grid-cols-[80px_56px_220px_1fr] md:items-center md:gap-10 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span
                    className={`font-mono text-sm transition-colors duration-500 ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {c.n}
                  </span>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-foreground transition-[filter] duration-500 ${
                      isActive ? "blur-0" : "blur-[2px]"
                    }`}
                  >
                    <c.Mark />
                  </div>
                  <h3
                    className={`text-2xl transition-colors duration-500 md:text-3xl ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p className="max-w-lg text-[15px] text-muted">{c.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
