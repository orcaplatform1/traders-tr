"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CompanyStatement() {
  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit relative z-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-6">
        <div>
          <ScrollReveal>
            <p className="font-heading max-w-3xl text-[32px] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[64px]">
              {"Ideas are easy."}
              <br />
              {"Building them is not."}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17px]">
              {"Anyone can have a good idea. Turning it into a real business requires the structure, technology and time that most ideas never reach. PRIZOMA exists to fill exactly that gap: building independent brands around real-world opportunities and staying in the process long after launch."}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160}>
          <Link
            href="/about"
            className="group flex items-center gap-3 whitespace-nowrap border-t border-border pt-6 text-[13px] font-medium tracking-[0.15em] text-muted transition-colors hover:text-foreground md:border-t-0 md:pt-0"
          >
            <span className="text-accent">01</span>
            <span className="h-px w-6 bg-border transition-colors group-hover:bg-accent" />
            <span className="uppercase">{"About"}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
