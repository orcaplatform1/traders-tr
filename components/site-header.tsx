"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-slate-950/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-edit flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="relative block h-10 w-[240px] shrink-0 md:h-[52px] md:w-[300px]">
          <Image
            src="/logo.png"
            alt="TRADERS.TR"
            fill
            priority
            className="object-contain object-left"
            sizes="300px"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-sm border border-border px-4 py-2 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
          >
            İletişim
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
