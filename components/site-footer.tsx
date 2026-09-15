import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  SITE_TAGLINE,
} from "@/lib/constants";
import { brands } from "@/lib/content/brands";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-edit grid grid-cols-1 gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
            TRADERS
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {SITE_TAGLINE}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {brands.map((brand) => (
              <a
                key={brand.slug}
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-muted transition-colors hover:text-accent"
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Şirket
          </span>
          <ul className="mt-4 space-y-3">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Yasal
          </span>
          <ul className="mt-4 space-y-3">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edit flex flex-col gap-2 py-6 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 TRADERS. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
