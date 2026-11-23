"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { brands } from "@/lib/content/brands";
import { insights } from "@/lib/content/insights";
import { newsroomPosts } from "@/lib/content/newsroom";

export default function SiteHaritasiPage() {

  const GROUPS = [
    {
      title: "Company",
      links: [
        { href: "/", label: "Home" },
        { href: "/hakkimizda", label: "About" },
        { href: "/girisimler", label: "Ventures" },
        { href: "/kariyer", label: "Careers" },
        { href: "/iletisim", label: "Contact" },
      ],
    },
    {
      title: "Brands",
      links: [
        { href: "/markalar", label: "All Brands" },
        ...brands.map((b) => ({ href: `/markalar/${b.slug}`, label: b.name })),
      ],
    },
    {
      title: "Insights",
      links: [
        { href: "/icgoruler", label: "All Insights" },
        ...insights.map((i) => ({
          href: `/icgoruler/${i.slug}`,
          label: i.title,
        })),
      ],
    },
    {
      title: "Newsroom",
      links: [
        { href: "/basin-merkezi", label: "All Announcements" },
        ...newsroomPosts.map((p) => ({
          href: `/basin-merkezi/${p.slug}`,
          label: p.title,
        })),
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/gizlilik-politikasi", label: "Privacy Policy" },
        { href: "/cerez-politikasi", label: "Cookie Policy" },
        { href: "/kvkk", label: "KVKK Data Protection Notice" },
      ],
    },
  ];

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>PRIZOMA</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {"Site Map"}
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
                      className="text-[14px] text-foreground transition-colors hover:text-accent"
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
