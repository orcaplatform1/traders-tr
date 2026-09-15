import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function PartnershipSection() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <h2 className="max-w-2xl text-4xl font-medium leading-[1.15] tracking-tight text-foreground md:text-6xl">
            Birlikte bir şey inşa edelim.
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted">
            Stratejik ortaklıklara, teknoloji iş birliklerine, yeni
            girişimlere ve inşa edilmeye değer fikirlere açığız.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact?category=Partnership"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              İş Ortaklığı
            </Link>
            <Link
              href="/contact?category=Venture"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              Girişim
            </Link>
            <Link
              href="/contact?category=Press"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              Basın
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
