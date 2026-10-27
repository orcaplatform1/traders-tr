"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { LangToggle } from "@/components/lang-toggle";
import { DockLabel } from "@/components/dock-label";
import { useT } from "@/lib/i18n";

// Ince cizgili, keskin koseli monokrom ikonlar
const ICON = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  className: "h-[18px] w-[18px] text-foreground",
} as const;

function IconHome() {
  return (
    <svg {...ICON}>
      <path d="M3.5 10.5 12 3.5l8.5 7V20.5h-6v-6h-5v6h-6z" />
    </svg>
  );
}

function IconBrands() {
  return (
    <svg {...ICON}>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" />
    </svg>
  );
}

function IconInsights() {
  return (
    <svg {...ICON}>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 16.5v-5M11.5 16.5v-9M16.5 16.5v-6" />
      <path d="M5 9.5 11.5 4l5 4 3.5-3" />
    </svg>
  );
}

function IconPress() {
  return (
    <svg {...ICON}>
      <path d="M3.5 4.5h13v16h-13z" />
      <path d="M16.5 8.5h4v10a2 2 0 0 1-4 0" />
      <path d="M6.5 8.5h7M6.5 12h7M6.5 15.5h4" />
    </svg>
  );
}

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  // Asagi kaydirmada gizle, yukarida goster; 5px alti titremeleri yok say
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < 10) {
        setVisible(true);
        return;
      }
      if (Math.abs(y - lastY.current) < 5) return;
      setVisible(y < lastY.current);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tabs = [
    { id: "home", href: "/", label: t("Ana Sayfa", "Home"), icon: <IconHome /> },
    { id: "brands", href: "/markalar", label: t("Markalar", "Brands"), icon: <IconBrands /> },
    { id: "insights", href: "/icgoruler", label: t("İçgörü", "Insights"), icon: <IconInsights /> },
    { id: "press", href: "/basin-merkezi", label: t("Basın", "Press"), icon: <IconPress /> },
  ];

  const activeTab = tabs.find((tab) => (tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)))?.id;

  const itemClass =
    "relative flex h-full flex-1 flex-col items-center justify-center transition-all duration-100 active:scale-95";

  return (
    <>
      {/* Ust logo bari: seffaf, sayfanin ustune bindirilir ve sayfayla birlikte kayar */}
      <header className="absolute inset-x-0 top-0 z-40 bg-transparent">
        <div className="container-edit flex items-center justify-between py-4">
          <Link href="/" className="relative block h-8 w-[160px] shrink-0 md:h-10 md:w-[220px]">
            <Image
              src="/logo-dark.png"
              alt="TRADERS.TR"
              fill
              priority
              className="object-contain object-left"
              sizes="220px"
            />
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle />
            <span className="border border-foreground px-2 py-0.5 font-mono text-xs font-medium uppercase">2026</span>
          </div>
        </div>
      </header>

      {/* Akilli yuzen navigasyon: bas parmak bolgesi */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 w-[92vw] max-w-sm -translate-x-1/2 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-12 scale-95 opacity-0"
        }`}
      >
        <nav
          aria-label={t("Ana menü", "Main menu")}
          className="flex h-14 select-none items-center justify-around rounded-full border border-border bg-white/80 px-2 shadow-[0_12px_40px_rgba(0,0,0,0.03)] backdrop-blur-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.96]"
        >
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              aria-current={activeTab === tab.id ? "page" : undefined}
              className={itemClass}
            >
              <DockLabel icon={tab.icon} label={tab.label} selected={activeTab === tab.id} />
            </Link>
          ))}
          <MobileMenu className={itemClass} />
        </nav>
      </div>
    </>
  );
}
