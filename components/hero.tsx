import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border pt-16">
      <AnimatedGrid />
      <div className="grain-overlay" />

      <div className="container-edit relative">
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          TRADERS
        </span>

        <h1 className="mt-6 max-w-4xl text-[42px] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[58px] md:text-[76px] lg:text-[92px]">
          Building brands
          <br />
          beyond boundaries.
        </h1>

        <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-muted md:text-[19px]">
          Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren
          çok markalı bir girişim şirketi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
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
            TRADERS Hakkında
          </Link>
        </div>
      </div>
    </section>
  );
}
