"use client";

import { useEffect, useRef } from "react";

const R = 18;
const C = 2 * Math.PI * R;
const TICKS = Array.from({ length: 12 }, (_, i) => i * 30);

// Kronograf kadrani gibi ince dairesel kaydirma ilerleme halkasi
export function ChronoRing() {
  const arc = useRef<SVGCircleElement>(null);
  const hand = useRef<SVGLineElement>(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      arc.current?.setAttribute("stroke-dashoffset", String(C * (1 - p)));
      hand.current?.setAttribute("transform", `rotate(${p * 360} 24 24)`);
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
    <svg aria-hidden viewBox="0 0 48 48" className="chrono-ring h-12 w-12">
      {TICKS.map((deg) => (
        <line
          key={deg}
          x1="24"
          y1="2.5"
          x2="24"
          y2={deg % 90 === 0 ? 5.5 : 4}
          stroke="#cbd5e1"
          strokeWidth="0.75"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r={R} fill="none" stroke="#e2e8f0" strokeWidth="0.75" />
      <circle
        ref={arc}
        cx="24"
        cy="24"
        r={R}
        fill="none"
        stroke="#0b0b0c"
        strokeWidth="0.75"
        strokeDasharray={C}
        strokeDashoffset={C}
        transform="rotate(-90 24 24)"
      />
      <line ref={hand} x1="24" y1="24" x2="24" y2="10" stroke="#0b0b0c" strokeWidth="0.75" strokeLinecap="round" />
      <circle cx="24" cy="24" r="1.25" fill="#0b0b0c" />
    </svg>
  );
}
