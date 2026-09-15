import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { brands } from "@/lib/content/brands";
import { insights } from "@/lib/content/insights";
import { newsroomPosts } from "@/lib/content/newsroom";

export const metadata: Metadata = {
  title: "Site Haritası",
  description: "TRADERS.TR'daki tüm sayfalar.",
  alternates: { canonical: "/site-haritasi" },
};

const GROUPS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Şirket",
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/about", label: "Hakkımızda" },
      { href: "/ventures", label: "Girişimler" },
      { href: "/careers", label: "Kariyer" },
      { href: "/contact", label: "İletişim" },
    ],
  },
  {
    title: "Markalar",
    links: [
      { href: "/brands", label: "Tüm Markalar" },
      ...brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name })),
    ],
  },
  {
    title: "İçgörüler",
    links: [
      { href: "/insights", label: "Tüm İçgörüler" },
      ...insights.map((i) => ({ href: `/insights/${i.slug}`, label: i.title })),
    ],
  },
  {
    title: "Haber Merkezi",
    links: [
      { href: "/newsroom", label: "Tüm Duyurular" },
      ...newsroomPosts.map((p) => ({ href: `/newsroom/${p.slug}`, label: p.title })),
    ],
  },
  {
    title: "Yasal",
    links: [
      { href: "/privacy", label: "Gizlilik Politikası" },
      { href: "/cookies", label: "Çerez Politikası" },
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
    ],
  },
];

export default function SiteHaritasiPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>TRADERS.TR</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Site Haritası
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
