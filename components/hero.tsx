"use client";

import Image from "next/image";
import { AnimatedGrid } from "@/components/animated-grid";

export function Hero({
  imageSrc,
  imageSrcMobile,
}: {
  imageSrc?: string;
  imageSrcMobile?: string;
}) {
  return (
    <section data-hero className="relative h-[100dvh] overflow-hidden border-b border-border md:min-h-screen">
      {imageSrc ? (
        <div className="absolute inset-0">
          <div className="hero-pan absolute inset-0">
            {imageSrcMobile && (
              <Image
                src={imageSrcMobile}
                alt=""
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center md:hidden"
              />
            )}
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className={
                imageSrcMobile
                  ? "hidden object-cover object-center md:block"
                  : "object-cover object-center"
              }
            />
            <div className="grain-overlay" />
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hero-grid-3d" />
          </div>

          <div className="pointer-events-none absolute inset-6 hidden md:block">
            <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-foreground/25" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-foreground/25" />
          </div>
        </div>
      ) : (
        <>
          <AnimatedGrid />
          <div className="grain-overlay" />
        </>
      )}
    </section>
  );
}
