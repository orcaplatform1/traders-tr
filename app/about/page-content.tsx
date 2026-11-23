"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedGrid } from "@/components/animated-grid";
import { ScrollTextMask } from "@/components/scroll-text-mask";

export function AboutPageContent() {

  const WHAT_WE_DO = [
    {
      n: "01",
      title: "We discover ideas",
      description: "We research opportunities arising from changing technology, consumer behaviour and new business models.",
    },
    {
      n: "02",
      title: "We build brands",
      description: "We don't see a brand as just a name and logo. We design the brand's identity, purpose, user experience and long-term positioning together.",
    },
    {
      n: "03",
      title: "We develop technology",
      description: "We treat technology not merely as a supporting tool, but as one of the core building blocks of the business.",
    },
    {
      n: "04",
      title: "We operate",
      description: "We continue to play an active role in brand development after launch. We continuously improve businesses by tracking data, user behaviour and changing market conditions.",
    },
    {
      n: "05",
      title: "We expand into new areas",
      description: "We don't limit ourselves to today's markets. We research the opportunities of tomorrow by tracking new technologies, new consumer habits and emerging business models.",
    },
  ];

  const HOW_WE_THINK = [
    {
      n: "01",
      title: "Need first, idea second",
      description: "An exciting idea isn't enough for us. Does it address a real need? Does it make a meaningful difference in people's lives? Can it become a sustainable business over the long term? These are the questions we start with.",
    },
    {
      n: "02",
      title: "Simplicity is an advantage",
      description: "Good technology doesn't always mean more features. We try to understand what the user needs and eliminate unnecessary complexity. We design our brands' experiences to be as clear, fast and accessible as possible.",
    },
    {
      n: "03",
      title: "Technology changes, needs change",
      description: "Today's right solution may not be tomorrow's. That's why we design our brands not as closed systems, but as evolving structures.",
    },
    {
      n: "04",
      title: "We think long term",
      description: "Rather than chasing short-lived trends, we focus on building brands that can create lasting value. We evaluate a brand's success not only by how fast it grows, but by how strong and meaningful it becomes over time.",
    },
  ];

  return (
    <ScrollTextMask>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pb-20 pt-40 md:pb-28 md:pt-48">
        <AnimatedGrid />
        <div className="grain-overlay" />
        <div className="container-edit relative max-w-3xl">
          <ScrollReveal>
            <SectionLabel>{"About PRIZOMA"}</SectionLabel>
            <h1 className="mt-6 text-[34px] font-medium leading-[1.15] tracking-tight text-foreground sm:text-[44px] md:text-[56px]">
              {"From ideas to brands."}
              <br />
              {"From brands to lasting businesses."}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-foreground md:text-[17px]">
              <p>
                {"PRIZOMA is a multi-brand venture company that develops, builds and operates next-generation businesses at the intersection of technology, commerce and finance."}
              </p>
              <p>
                {"For us, every venture starts with an idea. But we believe a good idea alone is not enough. Turning an idea into a real business requires the right strategy, a strong brand vision, the right technology, well-designed systems and a long-term perspective."}
              </p>
              <p className="text-foreground">
                {"That's exactly where PRIZOMA's role begins."}
              </p>
              <p>
                {"We evaluate ideas, research areas where we see potential, design brands from scratch and turn them into businesses that touch real users' lives. We don't consider the process finished at launch — we keep developing, learning, redesigning and growing."}
              </p>
              <p>
                {"Today we have independent brands operating in different sectors. Each has its own identity, target audience and business model. But behind all of them is a shared approach:"}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-8 border-t border-border pt-8 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {"A clear idea. A simple experience. Strong technology. A long-term perspective."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>{"What Do We Do?"}</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {"We don't see PRIZOMA merely as an investment vehicle or brand umbrella."}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              {"We build. When a new idea emerges, we first try to understand the problem and the opportunity. Then we address the business model, brand positioning, user experience and technology infrastructure together. We aim not just to launch a venture, but to make it a sustainable business."}
            </p>
          </ScrollReveal>

          <div className="mt-16">
            {WHAT_WE_DO.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 70}>
                <div className="group flex flex-col gap-3 border-t border-border py-8 transition-colors duration-300 hover:border-border-hover sm:flex-row sm:gap-10">
                  <span className="w-16 shrink-0 text-sm text-muted">{item.n}</span>
                  <span className="w-full shrink-0 text-xl font-medium tracking-tight text-foreground sm:w-72 md:text-2xl">
                    {item.title}
                  </span>
                  <p className="max-w-lg text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>{"Our Brands"}</SectionLabel>
            <p className="mt-6 text-[17px] leading-relaxed text-foreground md:text-[19px]">
              {"Each brand under the PRIZOMA umbrella creates its own path as an independent business."}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {"Wolf Club creates a next-generation experience in financial education, while KriptoBeyan focuses on the taxation and reporting of digital assets. Zesta Art&Design bridges custom handcrafted products with digital commerce. Secbird is a privacy-focused email service being developed in Switzerland and is currently in development."}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {"Although their sectors differ, a common understanding brings these brands together: to build brands that respond to real needs in different sectors and can grow over time."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Think */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>{"How Do We Think?"}</SectionLabel>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {HOW_WE_THINK.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <span className="text-[13px] font-medium tracking-[0.15em] text-accent">
                    {item.n} — {item.title.toUpperCase()}
                  </span>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Brands */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              {"Independent brands. One shared approach."}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                {"PRIZOMA's growth model is not tied to a single sector or a single business model."}
              </p>
              <p>
                {"While giving each brand space to build its own identity and operations, we use our shared infrastructure of strategy, technology, design, systems development and entrepreneurship experience."}
              </p>
              <p>{"This approach gives us the ability to do two things at once:"}</p>
              <p className="text-foreground">
                {"Build independent brands. And carry the experience we've gained across different fields into new ventures."}
              </p>
              <p>
                {"That's why PRIZOMA's story is not the story of a single brand. It's the story of how a brand portfolio is built."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>{"Looking Ahead"}</SectionLabel>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                {"Technology is creating new sectors, changing existing business models and reshaping the relationship people have with products, services and brands."}
              </p>
              <p className="text-[17px] leading-relaxed text-foreground md:text-[19px]">
                {"We don't just want to follow this change."}
              </p>
              <p>
                {"We want to discover the opportunities that change creates and build new businesses on top of those opportunities."}
              </p>
              <p>
                {"In the period ahead, we will continue researching new ideas and developing new brands around technology, digital commerce, finance and next-generation consumer experiences."}
              </p>
              <p>{"The brands in our portfolio today are just the starting point."}</p>
              <p className="text-foreground">
                {"We don't yet know which brands will be under the PRIZOMA umbrella tomorrow. But we know how we'll build them."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit grid grid-cols-1 gap-12 md:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>{"Mission"}</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {"To turn promising ideas into businesses that have real meaning in people's lives, are powered by technology and can create value over the long term."}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SectionLabel>{"Vision"}</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {"To build a strong and sustainable venture portfolio of independent brands that can evolve with changing technology, markets and consumer behaviour — creating meaningful value across different sectors."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-28 md:py-40">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <span className="block text-sm font-semibold tracking-[0.2em] text-foreground">
              PRIZOMA
            </span>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
              Think different. Build simple. Build to last.
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
              {"We discover different ideas, turn them into brands and build businesses ready for the future."}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </ScrollTextMask>
  );
}
