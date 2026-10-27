"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

export function WhatWeDo() {
  const t = useT();
  const listRef = useRef<HTMLOListElement>(null);
  const centers = useRef<number[]>([]);
  const drag = useRef<{ y: number; scroll: number } | null>(null);
  const [active, setActive] = useState(0);

  // Ekranin tam ortasindaki asama odakta
  useEffect(() => {
    let frame = 0;

    function measure() {
      const items = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-stage]") ?? []);
      centers.current = items.map((el) => {
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY + r.height / 2;
      });
      update();
    }

    function update() {
      frame = 0;
      const c = centers.current;
      if (!c.length) return;
      const line = window.scrollY + window.innerHeight / 2;
      let nearest = 0;
      c.forEach((y, i) => {
        if (Math.abs(y - line) < Math.abs(c[nearest] - line)) nearest = i;
      });
      setActive(nearest);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  function goTo(i: number) {
    const c = centers.current;
    if (!c.length) return;
    window.scrollTo({ top: c[Math.min(c.length - 1, Math.max(0, i))] - window.innerHeight / 2, behavior: "smooth" });
  }

  // Cizgi boyunca bas parmakla surukleme asamalar arasinda gezinir
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { y: e.clientY, scroll: window.scrollY };
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    window.scrollTo({ top: drag.current.scroll + (e.clientY - drag.current.y) * 1.5 });
  }

  function onPointerUp() {
    drag.current = null;
  }

  function onKey(e: React.KeyboardEvent<HTMLDivElement>) {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    goTo(active + step);
  }

  const CAPABILITIES = [
    {
      n: "01",
      title: t("Keşfet", "Discover"),
      description: t(
        "Yeni fikirleri ve pazar fırsatlarını araştırıyoruz.",
        "We research new ideas and market opportunities."
      ),
    },
    {
      n: "02",
      title: t("İnşa Et", "Build"),
      description: t(
        "Marka, ürün, teknoloji ve sistemleri geliştiriyoruz.",
        "We develop brands, products, technology and systems."
      ),
    },
    {
      n: "03",
      title: t("Hayata Geçir", "Launch"),
      description: t(
        "Fikirleri gerçek ürün ve işletmelere dönüştürüyoruz.",
        "We turn ideas into real products and businesses."
      ),
    },
    {
      n: "04",
      title: t("İşlet", "Operate"),
      description: t(
        "Sadece kurup bırakmıyoruz; büyüme sürecinde aktif rol alıyoruz.",
        "We don't just launch and leave — we stay actively involved through growth."
      ),
    },
    {
      n: "05",
      title: t("Büyüt", "Scale"),
      description: t(
        "Başarılı modelleri yeni pazarlara ve kategorilere taşıyoruz.",
        "We take proven models into new markets and categories."
      ),
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

        <div className="relative mt-12 md:mt-20">
          {/* Dikey cizgi uzerinde surukleme alani */}
          <div
            role="slider"
            tabIndex={0}
            aria-label={t("Aşama ilerlemesi", "Stage progress")}
            aria-valuemin={1}
            aria-valuemax={CAPABILITIES.length}
            aria-valuenow={active + 1}
            aria-valuetext={CAPABILITIES[active].title}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKey}
            className="absolute inset-y-0 -left-6 z-10 w-12 cursor-grab touch-none active:cursor-grabbing"
          />

          <ol ref={listRef} className="relative space-y-12 border-l border-border pl-[25px] md:space-y-20">
            {CAPABILITIES.map((c, i) => {
              const isCurrent = i === active;
              return (
                <li
                  key={c.n}
                  data-stage={c.n}
                  aria-current={isCurrent ? "step" : undefined}
                  className="relative transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ opacity: isCurrent ? 1 : 0.25 }}
                >
                  {/* Node gostergesi */}
                  <span
                    className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-none border transition-colors duration-300 ${
                      isCurrent ? "border-foreground bg-foreground" : "border-border bg-white"
                    }`}
                  />
                  <span className="mb-0.5 block font-mono text-xs text-[#71717A]">{c.n}</span>
                  <h3 className="mb-1 text-lg font-bold text-foreground md:text-3xl">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-[#52525B] md:text-base">{c.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
