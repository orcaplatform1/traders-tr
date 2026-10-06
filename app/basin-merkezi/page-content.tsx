"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { newsroomPosts } from "@/lib/content/newsroom";
import { useT, useLang } from "@/lib/i18n";

export function NewsroomPageContent() {
  const t = useT();
  const { lang } = useLang();

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{t("Basın Merkezi", "Newsroom")}</SectionLabel>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {t("Şirket duyuruları.", "Company announcements.")}
        </h1>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {newsroomPosts.map((post) => (
            <Link
              key={post.id}
              href={`/basin-merkezi/${post.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
            >
              <div className="flex items-center gap-4">
                <span className="w-32 shrink-0 text-[12px] text-muted">
                  {formatDate(post.publishedAt)}
                </span>
                <span className="text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </span>
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                {post.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
