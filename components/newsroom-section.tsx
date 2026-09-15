import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { newsroomPosts } from "@/lib/content/newsroom";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsroomSection() {
  const featured = newsroomPosts.slice(0, 4);

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Haber Merkezi</SectionLabel>
            <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              Şirket duyuruları.
            </h2>
          </div>
          <Link
            href="/newsroom"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            Tümünü gör
          </Link>
        </ScrollReveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {featured.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 70}>
              <Link
                href={`/newsroom/${post.slug}`}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
