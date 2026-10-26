"use client";

import { useEffect, useRef, useState } from "react";

type Step = { n: string; title: string };

// Sayfanin sag kenarinda ince ilerleme cizgisi: Ne Yapiyoruz adimlari gecildikce cizgi iner, nodlar sirayla parlar
export function VentureRail() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [progress, setProgress] = useState(-1);
  const frame = useRef(0);

  useEffect(() => {
    let centers: number[] = [];

    function measure() {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-step]"));
      centers = els.map((el) => {
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY + r.height / 2;
      });
      setSteps(els.map((el) => ({ n: el.dataset.step ?? "", title: el.dataset.stepTitle ?? "" })));
      update();
    }

    // 0: ilk adim ekran ortasina gelmeden, 1: son adim ekran ortasini gecince; arada surekli
    function update() {
      frame.current = 0;
      if (centers.length < 2) return;
      const line = window.scrollY + window.innerHeight / 2;
      const first = centers[0];
      const last = centers[centers.length - 1];
      // Ilk adima gelinmeden -1: hicbir nod parlamaz
      setProgress(line < first ? -1 : Math.min(1, (line - first) / (last - first)));
    }

    function schedule() {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame.current);
      ro.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  if (steps.length < 2) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed right-6 top-1/2 z-30 hidden h-[44vh] w-px -translate-y-1/2 lg:block">
      <span className="absolute inset-0 bg-white/10" />
      <span
        className="absolute inset-x-0 top-0"
        style={{ height: `${Math.max(0, progress) * 100}%`, background: "var(--gradient-venture-glow)" }}
      />
      {steps.map((step, i) => {
        const pos = i / (steps.length - 1);
        const lit = progress >= pos;
        return (
          <span key={step.n} className="absolute left-1/2" style={{ top: `${pos * 100}%` }}>
            <span
              className={`venture-rail-node absolute left-0 top-0 block h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                lit ? "scale-125 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-white/25"
              }`}
            />
            <span
              className={`absolute right-3 top-0 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] transition-colors duration-500 ${
                lit ? "text-foreground" : "text-white/25"
              }`}
            >
              {step.n}
            </span>
          </span>
        );
      })}
    </div>
  );
}
