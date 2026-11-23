"use client";

import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/content/types";
import { StatusBadge } from "@/components/status-badge";

export function BrandProfileContent({ brand }: { brand: Brand }) {

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit max-w-2xl">
        <Link
          href="/brands"
          className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← {"Our Brands"}
        </Link>

        <div className="mt-8">
          <div className="relative h-16 w-16">
            <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" sizes="64px" />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="meta-mono text-ink-secondary">{brand.category}</span>
            <StatusBadge status={brand.status} />
          </div>
          <h1 className="font-serif mt-4 text-5xl text-foreground md:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-foreground md:text-[19px]">
            {brand.longDescription}
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <span className="meta-mono text-accent">
              {"Why it exists"}
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {brand.whyItExists}
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <span className="meta-mono text-accent">
              {"Key Features"}
            </span>
            <ul className="mt-4 space-y-4">
              {brand.features.map((feature, i) => (
                <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-foreground">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={brand.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 text-[13px]"
          >
            {brand.websiteUrl.replace(/^https?:\/\//, "")}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
