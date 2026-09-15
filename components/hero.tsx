import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";

// Sabit tam ekran yükseklik yerine icerik kadar kisa bir hero (ORCA'daki
// gibi) - arkaya bir gorsel eklenecegi zaman `imageSrc` prop'u verilecek,
// simdilik verilmediginde AnimatedGrid + grain fallback olarak kaliyor.
export function Hero({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-20 pt-40 md:pb-28 md:pt-48">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        </>
      ) : (
        <>
          <AnimatedGrid />
          <div className="grain-overlay" />
        </>
      )}

      <div className="container-edit relative">
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          TRADERS.TR
        </span>

        <h1 className="mt-6 max-w-3xl text-[36px] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[48px] md:text-[64px]">
          Building brands
          <br />
          beyond boundaries.
        </h1>

        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted md:text-[18px]">
          Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren
          çok markalı bir girişim şirketi.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/brands"
            className="rounded-sm border border-foreground bg-foreground px-6 py-3 text-[13px] font-medium tracking-wide text-slate-950 transition-colors hover:bg-transparent hover:text-foreground"
          >
            Markalarımızı Keşfedin
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            TRADERS.TR Hakkında
          </Link>
        </div>
      </div>
    </section>
  );
}
