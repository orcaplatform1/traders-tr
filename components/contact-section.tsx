import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";

export function ContactSection({ defaultCategory }: { defaultCategory?: string }) {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit grid grid-cols-1 gap-16 md:grid-cols-2">
        <ScrollReveal>
          <SectionLabel>Bir Fikriniz mi Var?</SectionLabel>
          <h2 className="mt-4 max-w-md text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Ne yarattığınızı anlatın.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <ContactForm defaultCategory={defaultCategory} />
        </ScrollReveal>
      </div>
    </section>
  );
}
