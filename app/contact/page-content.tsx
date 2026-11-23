"use client";

import { SectionLabel } from "@/components/section-label";
import { ContactSection } from "@/components/contact-section";

export function ContactPageContent({ defaultCategory }: { defaultCategory?: string }) {

  const CATEGORIES = [
    {
      title: "Partnership",
      description: "Strategic collaborations, technology partnerships and integration opportunities with our brands.",
    },
    {
      title: "Venture",
      description: "Have an idea worth building together? We evaluate early-stage venture proposals.",
    },
    {
      title: "Press",
      description: "For interview requests, press kit needs and written content about PRIZOMA.",
    },
    {
      title: "General",
      description: "For any questions, feedback or requests that don't fit the categories above.",
    },
  ];

  return (
    <>
      <section className="pb-4 pt-28 md:pt-36">
        <div className="container-edit">
          <SectionLabel>{"Contact"}</SectionLabel>
          <h1 className="font-serif mt-4 max-w-xl text-4xl text-foreground md:text-5xl">
            {"How can we help?"}
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            {"We route your message to the right team based on the category you choose and typically respond within 2 business days."}
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.title}>
                <span className="text-[13px] font-medium tracking-[0.1em] text-accent">
                  {c.title.toUpperCase()}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultCategory={defaultCategory} />
    </>
  );
}
