"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Icerideki paragraflar kaydirildikca okuma hizasina gelen satirdan itibaren beyazlasir
export function ScrollTextMask({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let frame = 0;
    function update() {
      frame = 0;
      if (!root) return;
      const readingLine = window.innerHeight * 0.65;
      root.querySelectorAll<HTMLElement>("p").forEach((p) => {
        const top = p.getBoundingClientRect().top;
        p.style.setProperty("--mask-y", `${readingLine - top}px`);
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-mask ${className}`}>
      {children}
    </div>
  );
}
