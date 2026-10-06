"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useT } from "@/lib/i18n";

export function PartnershipSection() {
  const t = useT();
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>{t("İş Ortaklıkları", "Partnerships")}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl">
            {t("İyi işler birlikte yaratılır.", "Great things are built together.")}
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted">
            {t(
              "Kurucularla, içerik üreticileriyle, teknoloji ekipleriyle ve stratejik ortaklarla birlikte çalışarak umut vadeden fikirleri ölçeklenebilir işletmelere dönüştürüyoruz.",
              "We work alongside founders, content creators, technology teams and strategic partners to turn promising ideas into scalable businesses."
            )}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/iletisim?kategori=ortaklik"
              className="btn-shine group relative rounded-sm border border-foreground bg-foreground px-6 py-3 text-[13px] font-medium tracking-wide text-slate-950 transition-colors hover:bg-transparent hover:text-foreground"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {t("İş Ortaklığı", "Partnership")}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/iletisim?kategori=girisim"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              {t("Girişim", "Venture")}
            </Link>
            <Link
              href="/iletisim?kategori=basin"
              className="rounded-sm border border-border px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-border-hover hover:text-accent"
            >
              {t("Basın", "Press")}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
