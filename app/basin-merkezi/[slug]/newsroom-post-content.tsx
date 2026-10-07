"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import type { NewsroomPost } from "@/lib/content/types";
import { useT, useLang } from "@/lib/i18n";

export function NewsroomPostContent({
  post,
  moreNews,
}: {
  post: NewsroomPost;
  moreNews: NewsroomPost[];
}) {
  const t = useT();
  const { lang } = useLang();

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const isEn = lang === "en";
  const displayTitle = isEn && post.titleEn ? post.titleEn : post.title;
  const displayExcerpt = isEn && post.excerptEn ? post.excerptEn : post.excerpt;
  const displayContent = isEn && post.contentEn ? post.contentEn : post.content;
  const headings = displayContent.filter((b) => b.type === "h2");

  return (
    <article className="py-28 md:py-36">
      <header className="container-edit max-w-2xl">
        <Link
          href="/basin-merkezi"
          className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← {t("Basın Merkezi", "Newsroom")}
        </Link>

        <div className="mt-8 flex items-center gap-3 text-[12px] text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.readTime} {t("okuma", "read")}</span>
        </div>

        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {displayTitle}
        </h1>

        <p className="mt-6 text-[17px] leading-relaxed text-slate-300 md:text-[19px]">
          {displayExcerpt}
        </p>
      </header>

      <div className="container-edit mt-16 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-20">
        {headings.length > 0 && (
          <nav aria-label={t("İçindekiler", "Table of Contents")} className="hidden md:block">
            <div className="sticky top-28 space-y-1">
              <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {t("İçindekiler", "Table of Contents")}
              </span>
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="block border-l border-border py-1.5 pl-4 text-[13px] text-muted transition-colors hover:border-blue-500 hover:text-foreground"
                >
                  {h.text}
                </a>
              ))}
            </div>
          </nav>
        )}

        <div className="max-w-2xl border-t border-border pt-10">
          {displayContent.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  id={block.id}
                  className="scroll-mt-28 text-xl font-medium text-foreground md:text-2xl [&:not(:first-child)]:mt-12"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-blue-500 pl-6 text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl"
                >
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={i} className="mt-5 text-[17px] leading-relaxed text-slate-200 first:mt-0">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>

      {moreNews.length > 0 && (
        <div className="container-edit mt-24 border-t border-border pt-16">
          <SectionLabel>{t("Diğer Duyurular", "More Announcements")}</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {moreNews.map((n) => (
              <Link key={n.id} href={`/basin-merkezi/${n.slug}`} className="group block max-w-xl">
                <div className="flex items-center gap-3 text-[12px] text-muted">
                  <span>{formatDate(n.publishedAt)}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{n.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                  {isEn && n.titleEn ? n.titleEn : n.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
