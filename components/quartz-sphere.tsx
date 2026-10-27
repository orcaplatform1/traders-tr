"use client";

import { useEffect, useRef } from "react";

// Arka planda ultra dusuk opaklikta sivi kuvars kure: yuklenince merkezden
// genisler, hizli kaydirmada hizla orantili buyur, durunca yavasca soner
export function QuartzSphere() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let lastT = performance.now();
    let scale = 1;
    let target = 1;
    let frame = 0;

    function tick() {
      // Hedef olcek her karede 1'e dogru soner; olcek hedefe yumusakca yaklasir
      target += (1 - target) * 0.06;
      scale += (target - scale) * 0.12;
      el!.style.setProperty("--sphere-scale", scale.toFixed(4));
      frame = Math.abs(scale - 1) > 0.001 || Math.abs(target - 1) > 0.001 ? requestAnimationFrame(tick) : 0;
    }

    function onScroll() {
      const now = performance.now();
      const velocity = Math.abs(window.scrollY - lastY) / Math.max(1, now - lastT);
      lastY = window.scrollY;
      lastT = now;
      target = Math.max(target, 1 + Math.min(0.6, velocity * 0.25));
      if (!frame) frame = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="quartz-sphere">
      <span ref={ref} />
    </div>
  );
}
