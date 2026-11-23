"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutSection() {
  return (
    <section className="border-b border-border py-32 md:py-48">
      <div className="container-edit grid grid-cols-1 gap-16 md:grid-cols-2">
        <ScrollReveal>
          <SectionLabel>{"About PRIZOMA"}</SectionLabel>
          <p className="mt-6 text-2xl font-medium leading-[1.4] tracking-tight text-foreground md:text-3xl">
            {"PRIZOMA is a multi-brand venture company that builds and operates businesses at the intersection of technology, commerce and finance."}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            {"We believe strong brands start with clear ideas. Our role is to turn those ideas into simple, useful and lasting businesses."}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-10 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {"Mission"}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                {"Building meaningful businesses from promising ideas."}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {"Vision"}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                {"Creating a portfolio of independent brands that can evolve with changing technology, markets and consumer behaviour."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
