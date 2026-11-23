import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { EditorialRow } from "@/components/editorial-row";
import { insights } from "@/lib/content/insights";
import { newsroomPosts } from "@/lib/content/newsroom";

function Column({
  label,
  title,
  href,
  children,
}: {
  label: string;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-serif mt-4 text-3xl text-ink-primary md:text-5xl">{title}</h2>
        </div>
        <Link
          href={href}
          className="meta-mono text-ink-secondary transition-colors duration-300 ease-out hover:text-accent"
        >
          {"See all →"}
        </Link>
      </div>
      <div className="mt-10 border-t border-hairline">{children}</div>
    </div>
  );
}

// Icgoruler (sol) ve basin merkezi (sag): editoryal liste
export function InsightsSection() {
  return (
    <section className="border-b border-hairline py-16 md:py-32">
      <ScrollReveal className="container-edit grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        <Column label="Insights" title="Thoughts from a venture perspective." href="/insights">
          {insights.slice(0, 4).map((i) => (
            <EditorialRow
              key={i.id}
              href={`/insights/${i.slug}`}
              date={i.publishedAt}
              category={i.category}
              title={i.title}
              readTime={i.readTime}
            />
          ))}
        </Column>
        <Column label="Newsroom" title="Company announcements." href="/newsroom">
          {newsroomPosts.slice(0, 4).map((p) => (
            <EditorialRow
              key={p.id}
              href={`/newsroom/${p.slug}`}
              date={p.publishedAt}
              category={p.category}
              title={p.title}
              readTime={p.readTime}
            />
          ))}
        </Column>
      </ScrollReveal>
    </section>
  );
}
