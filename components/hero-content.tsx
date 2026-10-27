"use client";

import Link from "next/link";
import { Magnetic } from "@/components/magnetic";
import { useIdeaWizard } from "@/components/idea-wizard";
import { useT } from "@/lib/i18n";

function HeroWords({ lines }: { lines: string[] }) {
  let index = 0;
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const delay = index++ * 110;
            return (
              <span key={wi}>
                <span className="hero-word" style={{ "--word-delay": `${delay}ms` } as React.CSSProperties}>
                  {word}
                </span>
                {wi < line.split(" ").length - 1 && " "}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

export function HeroContent() {
  const t = useT();
  const { open: openWizard } = useIdeaWizard();

  return (
    <section className="border-b border-border bg-background">
      <div className="container-edit py-14 md:py-24">
        <div className="max-w-5xl">
          <h1 className="text-[40px] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[56px] md:text-[80px] lg:text-[104px]">
            <HeroWords
              key={t("tr", "en")}
              lines={[t("Sınırların ötesinde", "Building brands"), t("markalar inşa ediyoruz.", "beyond borders.")]}
            />
          </h1>

          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted md:mt-10 md:text-[19px]">
            {t(
              "Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren çok markalı bir girişim şirketi.",
              "A multi-brand venture company building businesses at the intersection of technology, commerce and finance."
            )}
          </p>

          <button
            type="button"
            onClick={() => openWizard()}
            className="mt-10 h-12 w-full bg-foreground text-sm font-medium text-background transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] sm:w-auto sm:px-10 md:mt-14"
          >
            {t("Bir Fikir Başlat →", "Start an Idea →")}
          </button>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Magnetic>
              <Link
                href="/markalar"
                className="btn-liquid group px-6 py-3 text-[13px] font-medium tracking-wide"
              >
                {t("Markalarımızı Keşfedin", "Explore Our Brands")}
                <span className="lux-ease group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link
              href="/hakkimizda"
              className="btn-shine group relative inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {t("Bizim Öykümüz", "Our Story")}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
