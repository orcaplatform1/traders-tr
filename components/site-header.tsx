"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { LangToggle } from "@/components/lang-toggle";
import { DockLabel } from "@/components/dock-label";
import { useIdeaWizard } from "@/components/idea-wizard";
import { useT } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const { open: openWizard, isOpen: wizardOpen } = useIdeaWizard();
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
    { id: "home", href: "/", label: t("Ana Sayfa", "Home"), icon: "⚡" },
    { id: "brands", href: "/markalar", label: t("Markalar", "Brands"), icon: "📦" },
    { id: "insights", href: "/icgoruler", label: t("İçgörü", "Insights"), icon: "📝" },
  ];

  const activeTab = wizardOpen
    ? "contact"
    : tabs.find((tab) => (tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)))?.id;

  const itemClass =
    "relative flex h-full flex-1 flex-col items-center justify-center transition-all duration-100 active:scale-95";

  return (
    <>
      {/* Ust logo bari */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
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
          <button type="button" onClick={() => openWizard()} className={itemClass}>
            <DockLabel icon="✨" label={t("Fikir Sun", "Pitch Idea")} selected={activeTab === "contact"} />
          </button>
          <MobileMenu className={itemClass} />
        </nav>
      </div>
    </>
  );
}
