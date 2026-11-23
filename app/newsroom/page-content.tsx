import { SectionLabel } from "@/components/section-label";
import { EditorialRow } from "@/components/editorial-row";
import { newsroomPosts } from "@/lib/content/newsroom";

export function NewsroomPageContent() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{"Newsroom"}</SectionLabel>
        <h1 className="font-serif mt-4 max-w-xl text-4xl text-ink-primary md:text-5xl">
          {"Company announcements."}
        </h1>

        <div className="mt-16 border-t border-hairline">
          {newsroomPosts.map((p) => (
            <EditorialRow
              key={p.id}
              href={`/newsroom/${p.slug}`}
              date={p.publishedAt}
              category={p.category}
              title={p.title}
              readTime={p.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
