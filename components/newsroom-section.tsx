import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { newsroomPosts } from "@/lib/content/newsroom";
import type { NewsroomCategory } from "@/lib/content/types";

const CATEGORY_STYLE: Record<NewsroomCategory, string> = {
  "Marka Lansmanı": "bg-blue-500/10 text-blue-400",
  "Ürün Duyurusu": "bg-teal/10 text-teal",
  Ortaklık: "bg-purple/10 text-purple",
  "Şirket Duyurusu": "bg-indigo/10 text-indigo",
  Etkinlik: "bg-cyan/10 text-cyan",
};

function formatDay(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", { day: "2-digit" });
}

function formatMonth(iso: string) {
  return new Date(iso)
    .toLocaleDateString("tr-TR", { month: "short" })
    .replace(".", "")
    .toUpperCase();
}

export function NewsroomSection() {
  const featured = newsroomPosts.slice(0, 4);

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Basın Merkezi</SectionLabel>
            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Şirket duyuruları.
            </h2>
          </div>
          <Link
            href="/basin-merkezi"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            Tümünü gör
          </Link>
        </ScrollReveal>

        <div className="mt-16 border-t border-border">
          {featured.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 80}>
              <Link
                href={`/basin-merkezi/${post.slug}`}
                className="group flex items-center gap-6 border-b border-border py-6 transition-colors duration-300 hover:bg-surface-1 md:gap-10 md:py-7"
              >
                <div className="flex w-14 shrink-0 flex-col items-center leading-none">
                  <span className="text-2xl font-medium text-foreground md:text-3xl">
                    {formatDay(post.publishedAt)}
                  </span>
                  <span className="mt-1 text-[11px] font-medium tracking-[0.1em] text-muted">
                    {formatMonth(post.publishedAt)}
                  </span>
                </div>

                <div className="h-10 w-px shrink-0 bg-border" />

                <div className="min-w-0 flex-1">
                  <span className="text-[15px] font-medium text-foreground transition-colors group-hover:text-accent md:text-[17px]">
                    {post.title}
                  </span>
                  <p className="mt-1 hidden max-w-lg truncate text-[13px] text-muted sm:block">
                    {post.excerpt}
                  </p>
                </div>

                <span
                  className={`hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] sm:inline-block ${CATEGORY_STYLE[post.category]}`}
                >
                  {post.category}
                </span>

                <span className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
