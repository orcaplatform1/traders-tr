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
          <div className="mx-auto max-w-xl border border-border bg-white p-6 md:p-10">
            <h2 className="mb-2 text-xl font-bold text-foreground md:text-3xl">
              {"Have an Idea?"}
            </h2>
            <p className="mb-6 text-sm text-muted md:text-base">
              {"Ideas are easy. Building is not. Take the first step."}
            </p>

            <button
              type="button"
              onClick={() => open({ category: defaultCategory })}
              className="h-12 w-full bg-foreground text-sm font-medium text-background transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]"
            >
              {"Continue →"}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
