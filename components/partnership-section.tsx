"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

export function PartnershipSection() {
  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{"Partnerships"}</SectionLabel>
          <h2 className="font-serif mt-4 max-w-2xl text-4xl leading-[1.1] text-foreground md:text-6xl">
            {"Great things are built together."}
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted">
            {"We work alongside founders, content creators, technology teams and strategic partners to turn promising ideas into scalable businesses."}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?category=partnership"
                className="btn-primary group text-[13px]"
              >
                {"Partnership"}
                <span className="lux-ease group-hover:translate-x-1">→</span>
              </Link>
            <Link
              href="/contact?category=venture"
              className="btn-secondary text-[13px]"
            >
              {"Venture"}
            </Link>
            <Link
              href="/contact?category=press"
              className="btn-secondary text-[13px]"
            >
              {"Press"}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
