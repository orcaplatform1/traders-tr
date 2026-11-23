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
        { href: "/about", label: "About" },
        { href: "/ventures", label: "Ventures" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Brands",
      links: [
        { href: "/brands", label: "All Brands" },
        ...brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name })),
      ],
    },
    {
      title: "Insights",
      links: [
        { href: "/insights", label: "All Insights" },
        ...insights.map((i) => ({
          href: `/insights/${i.slug}`,
          label: i.title,
        })),
      ],
    },
    {
      title: "Newsroom",
      links: [
        { href: "/newsroom", label: "All Announcements" },
        ...newsroomPosts.map((p) => ({
          href: `/newsroom/${p.slug}`,
          label: p.title,
        })),
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/cookie-policy", label: "Cookie Policy" },
        { href: "/data-protection", label: "Data Protection Notice" },
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
