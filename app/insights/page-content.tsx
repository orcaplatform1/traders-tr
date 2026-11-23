import { SectionLabel } from "@/components/section-label";
import { EditorialRow } from "@/components/editorial-row";
import { insights } from "@/lib/content/insights";

export function InsightsPageContent() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>{"Insights"}</SectionLabel>
        <h1 className="font-serif mt-4 max-w-xl text-4xl text-ink-primary md:text-5xl">
          {"Thoughts from a venture perspective."}
        </h1>

        <div className="mt-16 border-t border-hairline">
          {insights.map((i) => (
            <EditorialRow
              key={i.id}
              href={`/insights/${i.slug}`}
              date={i.publishedAt}
              category={i.category}
              title={i.title}
              readTime={i.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
