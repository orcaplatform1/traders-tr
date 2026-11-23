"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";



export function ApproachSection() {

  const PRINCIPLES = [
    {
      n: "01",
      title: "Focus on the problem first.",
      description: "We question established models before accepting them.",
    },
    {
      n: "02",
      title: "Make complexity invisible.",
      description: "Complex problems deserve clear and simple solutions.",
    },
    {
      n: "03",
      title: "Technology serves the idea.",
      description: "Technology is not an end — it is the tool that brings the idea to life.",
    },
    {
      n: "04",
      title: "Aim for permanence.",
      description: "We prefer durable brands over short-lived trends.",
    },
  ];

  return (
    <section className="border-b border-hairline py-16 md:py-32">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{"How We Think"}</SectionLabel>
          <p className="font-serif mt-4 max-w-3xl text-3xl text-ink-primary md:text-5xl">
            {"We shape"}
            <br />
            {"the future, not the moment."}
          </p>
        </ScrollReveal>

        {/* 2x2 izgara: her ilke surface zeminli, hairline cerceveli kutuda */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 120}>
              <div className="relative flex h-full flex-col justify-between rounded-[2px] border border-hairline bg-surface p-6 md:p-8">
                <span className="meta-mono text-ink-muted">{p.n} {"//"}</span>
                <div className="mt-10">
                  <h3 className="max-w-md font-sans text-xl font-medium tracking-normal text-ink-primary md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-secondary">{p.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
