"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function BrandsStatement() {
  return (
    <section className="border-b border-border py-28 md:py-40">
      <div className="container-edit flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="mx-auto max-w-4xl text-[32px] font-medium leading-[1.15] tracking-tight text-foreground md:text-[52px] lg:text-[60px]">
            {"Different markets."}
            <br />
            {"Different ideas."}
            <br />
            {"One approach."}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-muted md:text-[17px]">
            {"Independent brands — connected by the way we think, build and operate."}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
