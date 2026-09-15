import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { jobs } from "@/lib/content/jobs";

export function CareersSection() {
  const openJobs = jobs.filter((j) => j.status === "open");

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Bizimle İnşa Edin</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Bağımsız düşünen, özenle inşa eden insanlarla çalışmak
            isteriz.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-12">
          {openJobs.length === 0 ? (
            <div className="border-t border-border pt-8">
              <p className="text-[15px] text-muted">
                Şu anda açık bir pozisyon bulunmuyor.
              </p>
              <Link
                href="/iletisim?category=General"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
              >
                Profilinizi gönderin →
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {openJobs.map((job) => (
                <li key={job.id} className="flex items-center justify-between py-5">
                  <div>
                    <span className="text-[15px] font-medium text-foreground">
                      {job.title}
                    </span>
                    <p className="mt-1 text-[13px] text-muted">
                      {job.department} · {job.location} · {job.type}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
