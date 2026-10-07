"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { brands } from "@/lib/content/brands";
import { insights } from "@/lib/content/insights";
import { newsroomPosts } from "@/lib/content/newsroom";
import { useT, useLang } from "@/lib/i18n";

export default function SiteHaritasiPage() {
  const t = useT();
  const { lang } = useLang();
  const isEn = lang === "en";

  const GROUPS = [
    {
      title: t("Şirket", "Company"),
      links: [
        { href: "/", label: t("Ana Sayfa", "Home") },
        { href: "/hakkimizda", label: t("Hakkımızda", "About") },
        { href: "/girisimler", label: t("Girişimler", "Ventures") },
        { href: "/kariyer", label: t("Kariyer", "Careers") },
        { href: "/iletisim", label: t("İletişim", "Contact") },
      ],
    },
    {
      title: t("Markalar", "Brands"),
      links: [
        { href: "/markalar", label: t("Tüm Markalar", "All Brands") },
        ...brands.map((b) => ({ href: `/markalar/${b.slug}`, label: b.name })),
      ],
    },
    {
      title: t("İçgörüler", "Insights"),
      links: [
        { href: "/icgoruler", label: t("Tüm İçgörüler", "All Insights") },
        ...insights.map((i) => ({
          href: `/icgoruler/${i.slug}`,
          label: isEn && i.titleEn ? i.titleEn : i.title,
        })),
      ],
    },
    {
      title: t("Basın Merkezi", "Newsroom"),
      links: [
        { href: "/basin-merkezi", label: t("Tüm Duyurular", "All Announcements") },
        ...newsroomPosts.map((p) => ({
          href: `/basin-merkezi/${p.slug}`,
          label: isEn && p.titleEn ? p.titleEn : p.title,
        })),
      ],
    },
    {
      title: t("Yasal", "Legal"),
      links: [
        { href: "/gizlilik-politikasi", label: t("Gizlilik Politikası", "Privacy Policy") },
        { href: "/cerez-politikasi", label: t("Çerez Politikası", "Cookie Policy") },
        { href: "/kvkk", label: t("KVKK Aydınlatma Metni", "KVKK Data Protection Notice") },
      ],
    },
  ];

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>TRADERS.TR</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {t("Site Haritası", "Site Map")}
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {group.title}
              </span>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-300 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
