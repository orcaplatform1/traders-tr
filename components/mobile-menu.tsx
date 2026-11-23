"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/lib/constants";
import { DockLabel } from "@/components/dock-label";


const ITEM_HEIGHT = 56;

const noopSubscribe = () => () => {};

export function MobileMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  // Dock transform/backdrop-filter tasidigi icin katman body'ye portal edilir
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const items = [
    ...NAV_LINKS.map((link) => ({ href: link.href, label: link.label })),
    { href: "/contact", label: "Contact" },
  ];

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
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={className}
      >
        <DockLabel
          selected={open}
          label={"Menu"}
          icon={
            <span className="flex flex-col gap-[4px]">
              <span
                className={`h-px w-4 bg-foreground transition-transform duration-300 ease-out ${open ? "translate-y-[2.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4 bg-foreground transition-transform duration-300 ease-out ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`}
              />
            </span>
          }
        />
      </button>

      {mounted && createPortal(
      <div
        className={`fixed inset-0 z-40 h-dvh bg-background/90 backdrop-blur-xl transition-opacity duration-300 ease-out ${
          open ? "kinetic-menu-open opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Linkler merkezden disari dogrusal patlamayla yerlerine oturur */}
        <nav className="flex h-full flex-col items-center justify-center px-5">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="kinetic-menu-item flex min-h-12 items-center text-3xl font-semibold tracking-tight text-foreground"
              style={
                {
                  height: ITEM_HEIGHT,
                  "--burst-from": `${((items.length - 1) / 2 - i) * ITEM_HEIGHT}px`,
                  transitionDelay: open ? `${i * 30}ms` : "0ms",
                } as React.CSSProperties
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>,
      document.body,
      )}
    </>
  );
}
