"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_EXPLORE_LINKS,
  FOOTER_LEGAL_LINKS,
  SITE_TAGLINE,
} from "@/lib/constants";
import { brands } from "@/lib/content/brands";
import { useT } from "@/lib/i18n";

const EXPLORE_EN: Record<string, string> = {
  Markalar: "Brands",
  Girişimler: "Ventures",
  İçgörüler: "Insights",
  "Basın Merkezi": "Newsroom",
};

const COMPANY_EN: Record<string, string> = {
  Hakkımızda: "About",
  "İş Ortaklıkları": "Partnerships",
  Kariyer: "Careers",
  İletişim: "Contact",
};

const LEGAL_EN: Record<string, string> = {
  "Gizlilik Politikası": "Privacy Policy",
  "Çerez Politikası": "Cookie Policy",
  KVKK: "Data Protection Notice",
  "Site Haritası": "Site Map",
  "XML Site Haritası": "XML Sitemap",
};

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="border-t border-border">
      <div className="container-edit grid grid-cols-1 gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <div className="relative h-8 w-[190px]">
            <Image src="/logo.png" alt="TRADERS.TR" fill className="object-contain object-left" sizes="190px" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {t(SITE_TAGLINE, "Building brands beyond borders.")}
          </p>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            {t("Keşfet", "Explore")}
          </span>
          <ul className="mt-4 space-y-3">
            {FOOTER_EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {t(link.label, EXPLORE_EN[link.label] ?? link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            {t("Şirket", "Company")}
          </span>
          <ul className="mt-4 space-y-3">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {t(link.label, COMPANY_EN[link.label] ?? link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            {t("Markalarımız", "Our Brands")}
          </span>
          <ul className="mt-4 space-y-3">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <a
                  href={brand.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-accent"
                >
                  <span className="relative h-4 w-4 shrink-0">
                    <Image src={brand.logo} alt="" fill className="object-contain" sizes="16px" />
                  </span>
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>

          <span className="mt-6 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            {t("İş Ortaklıkları", "Partnerships")}
          </span>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://dyr21.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-foreground"
              >
                <span className="relative h-4 w-4 shrink-0">
                  <Image src="/brand-logos/dyr21.png" alt="" fill className="object-contain" sizes="16px" />
                </span>
                DYR21 Original Jeans&amp;More
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edit flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-[12px] text-muted">
            &copy; 2026{" "}
            <span className="whitespace-nowrap">
              <span className="font-semibold text-slate-50">Traders</span>
              <span className="font-semibold text-blue-500">.TR</span>{" "}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footerflag.png"
                alt=""
                aria-hidden
                className="inline-block h-[1em] w-[1em] translate-y-[0.1em] object-contain align-baseline"
              />
            </span>
            . {t("Tüm hakları saklıdır.", "All rights reserved.")}
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[12px] text-muted transition-colors hover:text-foreground"
                >
                  {t(link.label, LEGAL_EN[link.label] ?? link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
