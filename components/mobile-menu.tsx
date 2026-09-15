"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const { overflow, position, top, width } = document.body.style;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 h-dvh bg-slate-950/98 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-2 overflow-y-auto px-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-3xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 border-b border-border pb-1 text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent hover:border-accent"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </div>
  );
}
