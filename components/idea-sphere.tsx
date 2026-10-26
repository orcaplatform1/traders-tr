"use client";

import { useEffect, useRef } from "react";

const BLOB_TINT: Record<string, string> = {
  orca: "rgba(34, 211, 238, 0.28)",
  kriptobeyan: "rgba(247, 231, 206, 0.22)",
  zesta: "rgba(184, 115, 51, 0.3)",
  mettlo: "rgba(255, 122, 24, 0.26)",
};

// Kure parcalarinin baslangictaki organik ofsetleri (kure capina oranla)
const START_OFFSET = [
  [-0.14, -0.1],
  [0.13, -0.12],
  [-0.12, 0.13],
  [0.12, 0.11],
];

const BASE = 100;

function clamp(v: number) {
  return Math.min(1, Math.max(0, v));
}

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Point = { x: number; y: number; size: number };

// Transform'lardan (reveal/egim) etkilenmeyen, host'a gore yerlesim kutusu
function layoutBox(el: HTMLElement, host: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== host) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { left: x, top: y, width: el.offsetWidth, height: el.offsetHeight };
}

// Hero'daki koyu sivi kure (buyuk fikir) kaydirildikca 4 organik parcaya bolunup marka kartlarinin icine dagilir
export function IdeaSphere({ brandIds }: { brandIds: string[] }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const layer = layerRef.current;
    const host = layer?.parentElement;
    if (!layer || !host) return;

    let start: Point = { x: 0, y: 0, size: 0 };
    let targets: (Point & { arriveAt: number })[] = [];
    let frame = 0;

    function measure() {
      if (!host) return;
      const hero = host.querySelector<HTMLElement>("[data-hero]");
      if (!hero) return;
      const h = layoutBox(hero, host);
      const size = Math.min(340, h.width * 0.55, h.height * 0.42);
      start = { x: h.left + h.width / 2, y: h.top + h.height * 0.34, size };
      const hostTop = host.getBoundingClientRect().top + window.scrollY;

      targets = brandIds.map((id) => {
        const card = host.querySelector<HTMLElement>(`[data-brand-card="${id}"]`);
        if (!card) return { x: start.x, y: start.y, size, arriveAt: 1 };
        const r = layoutBox(card, host);
        const y = r.top + r.height / 2;
        return {
          x: r.left + r.width / 2,
          y,
          size: Math.min(r.width, r.height) * 0.6,
          // Kart ekranin ortasina geldiginde parca yerine oturur
          arriveAt: Math.max(1, hostTop + y - window.innerHeight / 2),
        };
      });
      update();
    }

    function update() {
      frame = 0;
      const scroll = window.scrollY;
      let first = 1;

      targets.forEach((target, i) => {
        const el = blobRefs.current[i];
        if (!el) return;
        const p = ease(clamp(scroll / target.arriveAt));
        first = Math.min(first, p);
        const [ox, oy] = START_OFFSET[i % START_OFFSET.length];
        const sx = start.x + ox * start.size;
        const sy = start.y + oy * start.size;
        const x = sx + (target.x - sx) * p;
        const y = sy + (target.y - sy) * p;
        const size = start.size * 0.58 + (target.size - start.size * 0.58) * p;
        el.style.transform = `translate3d(${x - BASE / 2}px, ${y - BASE / 2}px, 0) scale(${size / BASE})`;
        el.style.opacity = String(clamp(p / 0.12));
      });

      const sphere = sphereRef.current;
      if (sphere) {
        const split = clamp(first / 0.15);
        sphere.style.transform = `translate3d(${start.x - BASE / 2}px, ${start.y - BASE / 2}px, 0) scale(${(start.size / BASE) * (1 - split * 0.3)})`;
        sphere.style.opacity = String(1 - split);
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, [brandIds]);

  return (
    <div ref={layerRef} aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div ref={sphereRef} className="liquid-blob" style={{ width: BASE, height: BASE, opacity: 0 }} />
      {brandIds.map((id, i) => (
        <div
          key={id}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
          className="liquid-blob"
          style={
            {
              width: BASE,
              height: BASE,
              opacity: 0,
              animationDelay: `${-i * 3}s`,
              "--blob-tint": BLOB_TINT[id],
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
