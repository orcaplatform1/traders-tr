"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { NAV_LINKS } from "@/lib/constants";
import { DockLabel } from "@/components/dock-label";

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
  const pathname = usePathname();

  const tabs = [
    { id: "home", href: "/", label: "Home", icon: <IconHome /> },
    { id: "brands", href: "/brands", label: "Brands", icon: <IconBrands /> },
    { id: "insights", href: "/insights", label: "Insights", icon: <IconInsights /> },
    { id: "press", href: "/newsroom", label: "Press", icon: <IconPress /> },
  ];

  const activeTab = tabs.find((tab) => (tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)))?.id;

  const itemClass =
    "relative flex h-full flex-1 flex-col items-center justify-center transition-all duration-300";

  return (
    <>
      {/* Ust bar: sabit, canvas %90 + blur, altta hairline; solda logo, sagda navigasyon */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur-md">
        <div className="container-edit flex h-14 items-center justify-between md:h-auto md:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-[10px]">
            <span className="relative block h-7 w-[22px] shrink-0 md:h-10 md:w-[31px]">
              <Image
                src="/prizoma-logo.webp"
                alt="Prizoma"
                fill
                priority
                className="object-contain object-left"
                sizes="31px"
              />
            </span>
            <span className="text-[14px] font-semibold leading-none tracking-[0.12em] text-ink-primary md:text-[20px]">PRIZOMA</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className="text-[14px] text-ink-secondary transition-colors duration-300 ease-out hover:text-ink-primary aria-[current=page]:text-ink-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Alt navigasyon: yalniz mobilde, ekranin altina yapisik, tam genislik */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-canvas/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <nav
          aria-label={"Main menu"}
          className="flex h-14 select-none items-center justify-around px-2"
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
