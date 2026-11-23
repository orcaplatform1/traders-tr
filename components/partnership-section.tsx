"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Magnetic } from "@/components/magnetic";

export function PartnershipSection() {
  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{"Partnerships"}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl">
            {"Great things are built together."}
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted">
            {"We work alongside founders, content creators, technology teams and strategic partners to turn promising ideas into scalable businesses."}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="/iletisim?kategori=ortaklik"
                className="btn-liquid group px-6 py-3 text-[13px] font-medium tracking-wide"
              >
                {"Partnership"}
                <span className="lux-ease group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link
              href="/iletisim?kategori=girisim"
              className="btn-liquid px-5 py-2.5 text-[13px] font-medium tracking-wide"
            >
              {"Venture"}
            </Link>
            <Link
              href="/iletisim?kategori=basin"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              {"Press"}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
