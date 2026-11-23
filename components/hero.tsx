"use client";

import Image from "next/image";
import Link from "next/link";
import { useIdeaWizard } from "@/components/idea-wizard";

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

// Hero: masaustunde baslik ve butonlar solda, gorsel sagda; mobilde gorsel ustte (en fazla 50vh), baslik altta.
// Gorsel navbar yuksekliginden sonra baslar, object-contain ile kirpilmaz, kenarlari canvas'a erir.
export function Hero({ imageSrc, imageSrcMobile }: { imageSrc: string; imageSrcMobile?: string }) {
  const { open: openWizard } = useIdeaWizard();

  return (
    <section data-hero className="relative overflow-hidden border-b border-hairline bg-canvas pt-14 md:pt-[72px]">
      <div className="container-edit flex flex-col md:grid md:min-h-[calc(100dvh-72px)] md:grid-cols-2 md:items-center md:gap-6">
        <div className="relative order-1 h-[50vh] w-full md:order-2 md:h-[calc(100dvh-72px)]">
          <div className="hero-fade absolute inset-0">
            {imageSrcMobile && (
              <Image
                src={imageSrcMobile}
                alt=""
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-contain object-center md:hidden"
              />
            )}
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              quality={90}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={imageSrcMobile ? "hidden object-contain object-center md:block" : "object-contain object-center"}
            />
          </div>
        </div>

        <div className="order-2 py-10 md:order-1 md:py-16">
          <h1 className="font-serif text-[40px] leading-[1.1] tracking-[-0.02em] text-ink-primary sm:text-[56px] lg:text-[80px]">
            <HeroWords lines={["Building brands", "beyond borders."]} />
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-secondary md:mt-8 md:text-[19px]">
            {"A multi-brand venture company building businesses at the intersection of technology, commerce and finance."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <button type="button" onClick={() => openWizard()} className="btn-primary w-full text-sm sm:w-auto">
              {"Start an Idea"}
            </button>
            <Link href="/brands" className="btn-secondary w-full text-sm sm:w-auto">
              {"Explore Our Brands"}
            </Link>
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-ink-secondary transition-colors duration-300 ease-out hover:text-ink-primary"
          >
            {"Our Story"} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
