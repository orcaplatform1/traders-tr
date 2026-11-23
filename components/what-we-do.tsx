import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";

const CAPABILITIES = [
  { n: "01", title: "Discover", description: "We research new ideas and market opportunities." },
  { n: "02", title: "Build", description: "We develop brands, products, technology and systems." },
  { n: "03", title: "Launch", description: "We turn ideas into real products and businesses." },
  {
    n: "04",
    title: "Operate",
    description: "We don't just launch and leave — we stay actively involved through growth.",
  },
  { n: "05", title: "Scale", description: "We take proven models into new markets and categories." },
];

// Surec: yatay 5 kolonlu cizelge
export function WhatWeDo() {
  return (
    <section className="border-b border-hairline py-16 md:py-32">
      <div className="container-edit">
        <ScrollReveal>
          <SectionHeader label="/02 WHAT WE DO" title="Turning ideas into working brands." />
        </ScrollReveal>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-5">
          {CAPABILITIES.map((c) => (
            <li key={c.n} className="group">
              <span className="block font-mono text-4xl text-ink-muted transition-colors duration-300 ease-out group-hover:text-accent">
                {c.n}
              </span>
              <span
                aria-hidden
                className="mt-4 block h-px w-full bg-hairline transition-colors duration-300 ease-out group-hover:bg-accent/60"
              />
              <h3 className="mt-5 font-sans text-lg font-medium tracking-normal text-ink-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{c.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
