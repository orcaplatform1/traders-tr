"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Imlec yaklasinca icerigi hafifce kendine ceker (manyetik CTA)
export function Magnetic({
  children,
  strength = 0.15,
  radius = 90,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    function onMove(e: PointerEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const reach = Math.max(rect.width, rect.height) / 2 + radius;
        if (Math.hypot(dx, dy) < reach) {
          const max = 10;
          const tx = Math.max(-max, Math.min(max, dx * strength));
          const ty = Math.max(-max, Math.min(max, dy * strength));
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        } else {
          el.style.transform = "";
        }
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [strength, radius]);

  return (
    <span ref={ref} className={`magnetic ${className}`}>
      {children}
    </span>
  );
}
