"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useIdeaWizard } from "@/components/idea-wizard";

// Sade kart: buton tam ekran sihirbazi acar
export function ContactSection({ defaultCategory = "genel" }: { defaultCategory?: string }) {
  const { open } = useIdeaWizard();

  return (
    <section className="py-12 md:py-32">
      <div className="container-edit">
        <ScrollReveal>
          <div className="mx-auto max-w-xl border border-border bg-surface p-6 md:p-10">
            <h2 className="font-serif mb-2 text-xl text-foreground md:text-3xl">
              {"Have an Idea?"}
            </h2>
            <p className="mb-6 text-sm text-muted md:text-base">
              {"Ideas are easy. Building is not. Take the first step."}
            </p>

            <button
              type="button"
              onClick={() => open({ category: defaultCategory })}
              className="btn-primary w-full text-sm"
            >
              {"Continue →"}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
