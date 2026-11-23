import type { ContentBlock, Insight } from "./types";

function p(text: string): ContentBlock {
  return { type: "p", text };
}
function h2(text: string, id: string): ContentBlock {
  return { type: "h2", text, id };
}
function quote(text: string): ContentBlock {
  return { type: "quote", text };
}

export const insights: Insight[] = [
  {
    id: "1",
    slug: "the-economics-of-building-a-digital-brand",
    title: "The economics of building a digital brand",
    category: "Entrepreneurship",
    excerpt:
      "Growing an independent digital brand requires a different discipline of capital and time than traditional investment logic.",
    content: [
      p(
        "Building a brand from scratch is usually a slower and more patient process than people expect. What is visible in the first months rarely represents the real value; the real value is the sum of the systems built before users ever see them, the small decisions made along the way and the assumptions tested again and again.",
      ),
      h2("Visible cost, invisible investment", "gorunur-maliyet"),
      p(
        "The cost of launching a brand's first version can usually be budgeted: design, development, hosting, the first marketing spend. But what truly makes a brand a \"brand\" is not that first version; it is the twelve to eighteen months that follow: reshaping the product based on user feedback, building trust, keeping the first customer base satisfied and turning all of this into a repeatable system. The cost of this period does not appear in the budget sheet; it is paid in time, attention and discipline.",
      ),
      p(
        "That is why one of the biggest advantages of working within a multi-brand structure is being able to share this invisible investment. A lesson we learn in one brand's user onboarding can be carried straight into the next brand's first version, without the cost of learning from scratch.",
      ),
      h2("Capital discipline: not speed, but the right speed", "sermaye-disiplini"),
      p(
        "In startup culture, \"grow fast\" is often presented as almost the only right strategy. Yet when a digital brand's growth rate does not match the maturity of its product, growth itself becomes the risk. Every unit of capital spent on aggressive user acquisition at an early stage is an irreversible expense if the product is not yet mature enough to retain those users.",
      ),
      quote(
        "The right speed is set not by the date the available capital runs out, but by the moment the product is truly ready.",
      ),
      p(
        "So when we evaluate a new venture, the first question we ask is not \"how fast can it grow\" but \"how much capital and patience will we have left when it is ready to grow\". The difference between the two often decides whether a brand survives.",
      ),
      h2("How brand value accumulates", "marka-degeri"),
      p(
        "The value of a digital brand accumulates not in its logo, colour palette or advertising budget, but in the recurring, trust-based relationship users build with it. That relationship either strengthens or weakens with every interaction; there is no third option. This is why brand building is the responsibility of every layer of the product, not just the marketing department: the clarity of the pricing page, the response time of the support team, even the way an error message is written all send a signal about the brand.",
      ),
      h2("What long-term thinking looks like in practice", "uzun-vade"),
      p(
        "Teams that think long term focus less on short-term growth metrics and more on the soundness of the structure beneath the brand. This does not mean ignoring growth; on the contrary, it means constantly questioning whether the ground growth is built on is solid. The true measure of economic success is not a brand's size today, but whether it still carries its users' trust five years from now.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-08-12",
    readTime: "7 min",
  },
  {
    id: "2",
    slug: "where-ai-is-changing-business-operations",
    title: "Where AI is changing business operations",
    category: "Technology",
    excerpt:
      "AI's biggest impact shows up less in eye-catching product features and more in the operational processes running in the background.",
    content: [
      p(
        "Most discussions about AI focus on the product layer: chat interfaces, recommendation engines, automated content generation. Yet the real transformation is mostly happening in a layer that is hard to see: inside operations, in the speed of decisions, in the quality of data processing and in the disappearance of repetitive work.",
      ),
      h2("Product layer vs. operations layer", "urun-vs-operasyon"),
      p(
        "The \"AI feature\" a user sees is usually the tip of the iceberg. The real gain is hidden in a support request being routed to the right team automatically, a content moderation decision being made in seconds, or large data sets being scanned at a speed the human eye cannot match. This shift lets organisations manage more complex work with small teams, which in turn means new brands can come to life with less capital.",
      ),
      h2("Capacity grows as scale shrinks", "olcek-kapasite"),
      p(
        "The team size needed to manage a given level of operational complexity ten years ago has shrunk considerably today, but that does not mean the work has become simpler. On the contrary, the same team can now track far more variables at once. For startups this is both an opportunity and a new standard: since competitors have access to the same tools, using AI is no longer an advantage but one of the rules of the game.",
      ),
      quote(
        "The real value of AI lies not in replacing people, but in directing people's attention to the decisions that truly matter.",
      ),
      h2("The risk: the hidden cost of automation", "otomasyon-riski"),
      p(
        "Every layer of automation also adds a new layer of fragility. Removing a process from human oversight can let small errors in that process grow unnoticed. That is why operational AI should be designed not with a \"set it and forget it\" mindset, but as systems that are audited regularly and have a feedback loop.",
      ),
      h2("Shared infrastructure across the portfolio", "portfoy-altyapi"),
      p(
        "A structure developing several brands at once has a particular advantage here: the infrastructure, data processing logic and audit discipline built for operational AI in one brand can be carried directly into the next. This lets each new venture reach operational maturity not from scratch, but by building on previous experience.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-07-30",
    readTime: "6 min",
  },
  {
    id: "3",
    slug: "the-transformation-of-digital-commerce",
    title: "The transformation of digital commerce",
    category: "Digital Economy",
    excerpt:
      "As consumer behaviour changes, so do the criteria for success in digital commerce: from speed and price to trust and personalisation.",
    content: [
      p(
        "For a long time, competition in digital commerce was about price and delivery speed. Today consumers care more and more about who a brand is, how it produces and who stands behind the product. This shift is a quiet but lasting transformation that is redefining digital commerce.",
      ),
      h2("The limits of price competition", "fiyat-rekabeti"),
      p(
        "Competing on price is a strategy that requires scale and has low sustainability, especially for small and mid-sized brands. Rather than trying to match the pricing power of large platforms, the real advantage of independent brands lies in the story they can tell, the trust they build and the authenticity they offer.",
      ),
      h2("The return of the custom production model", "ozel-uretim"),
      p(
        "Interestingly, one of the \"oldest\" models of digital commerce, production on demand and to custom order, is gaining value again. In a market standardised by mass production, a product being made truly for you, at your request, has become an important point of differentiation. The model also lets makers grow without carrying inventory risk.",
      ),
      quote(
        "Consumers no longer buy just a product; they also buy the process and the craft behind it.",
      ),
      h2("Trust as a new distribution channel", "guven-kanal"),
      p(
        "In traditional marketing, distribution channels were advertising, search engine rankings and affiliate networks. Today the most powerful distribution channel is trust in the brand itself, because a trusted brand is shared organically by its users. This means that product and service quality, rather than the marketing budget, turns directly into a growth metric.",
      ),
      h2("Personalisation does not conflict with scale", "kisisellestirme"),
      p(
        "For a long time, \"personalisation\" and \"scalability\" were seen as opposing ideas. Today technology makes both possible at once: a brand can have thousands of customers and still treat each one as if they were its only customer. This shift creates a new space of opportunity, especially for businesses built on handcraft and custom production.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-07-14",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "building-trust-in-next-generation-financial-products",
    title: "Building trust in next-generation financial products",
    category: "Markets",
    excerpt:
      "In finance, a new product launch is measured more by user trust than by technical capability.",
    content: [
      p(
        "In financial products, user trust is earned far more slowly than a feature list and lost far more quickly. This asymmetry is a basic fact that should directly shape the design and communication decisions of every team working in finance.",
      ),
      h2("Why finance is a different category", "finans-farkli"),
      p(
        "In other digital products, a bug spoils the user experience; in a financial product, the same bug can directly affect a user's money, future or legal obligations. That is why the \"good enough\" bar for financial products is much higher than in other categories, and that bar has to hold consistently across every layer of the product, from the interface to the calculation logic to the support process.",
      ),
      h2("Transparency is not a feature but a necessity", "seffaflik"),
      p(
        "Explaining clearly how a financial product calculates, which data it collects and why, and how a decision is made is a basic responsibility before it is a competitive advantage. Users do not entrust their financial decisions to a system they do not understand; they trust a system they understand, even a simplified one.",
      ),
      quote(
        "In finance, speed cannot come before trust, because lost trust cannot be won back with any speed advantage.",
      ),
      h2("Seeing regulation as a design input, not a constraint", "duzenleyici-cerceve"),
      p(
        "For teams working in finance, regulatory requirements are often seen as a constraint to be met after the fact. Yet treating these requirements as an input from the very start of product design, rather than adding compliance later, produces both a sturdier product and a brand users trust more.",
      ),
      h2("What long-term teams have in common", "uzun-vadeli-ekipler"),
      p(
        "Teams that think long term put transparency and consistency ahead of growth targets. In the short term this may mean a slower growth curve; but in finance, a brand that grows slowly and soundly lasts far longer than one that grows fast and loses trust.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-06-28",
    readTime: "6 min",
  },
  {
    id: "5",
    slug: "lessons-from-launching-a-new-venture",
    title: "Lessons from launching a new venture",
    category: "Entrepreneurship",
    excerpt:
      "Every new brand launch requires us to question most of our previous assumptions again.",
    content: [
      p(
        "Launching a brand always brings unforeseen surprises, no matter how good the plan looks on paper. The most valuable lessons usually emerge not in the first three months, but after the brand comes into contact with real users.",
      ),
      h2("A plan is an assumption until it meets reality", "plan-varsayim"),
      p(
        "Every plan prepared before a launch is really a collection of untested assumptions: that users will want this, pay that price and come through that channel. The actual launch reveals which of these assumptions were right, usually the hard way. That is why the healthiest approach is to invest not in the plan, but in how quickly and honestly you can challenge it.",
      ),
      h2("Early users are a different audience than planned", "ilk-kullanicilar"),
      p(
        "In almost every launch, the first users to adopt a brand turn out to be different from the audience originally targeted. This is not a failure but a valuable signal: it shows where the market sees a real need. Ignoring that signal and sticking to the original plan often means missing the real opportunity.",
      ),
      quote(
        "A launch is not an end point; it is the brand's first serious conversation with the real world.",
      ),
      h2("The balance between speed and patience", "hiz-sabir"),
      p(
        "After a launch you have to deal with two opposing urges: the urge to change everything quickly based on early feedback, and the urge to stay overly loyal to the original vision. Each is wrong on its own. The right approach is to build a discipline that can tell which feedback is noise and which is a real signal, a discipline that usually matures only after several launches.",
      ),
      h2("Knowledge carried into the next launch", "sonraki-lansman"),
      p(
        "This may be the most concrete benefit of working in a multi-brand structure: lessons learned in one brand's launch, which channel worked, which message resonated, which operational preparation fell short, can be carried directly into the next brand's launch. This lets every new venture start not from scratch, but on top of accumulated experience.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-06-05",
    readTime: "6 min",
  },
  {
    id: "6",
    slug: "how-technology-is-changing-consumer-behaviour",
    title: "How technology is changing consumer behaviour",
    category: "Digital Economy",
    excerpt:
      "As consumers' relationship with technology changes, the way brands talk to them has to change too.",
    content: [
      p(
        "Consumers now expect not just a product from brands, but a consistent experience and understanding. This expectation is not limited to a single channel or touchpoint; it has to be felt with the same clarity everywhere the brand exists.",
      ),
      h2("Patience is falling, expectations are rising", "sabir-esigi"),
      p(
        "Faster digital experiences have permanently lowered consumers' tolerance for waiting. A slow page, a late answer to a question or an unnecessarily complex process now turns into lost users much faster than a few years ago. This forces brands to keep renewing themselves on simplicity and speed.",
      ),
      h2("Think one experience, not many channels", "tek-deneyim"),
      p(
        "For a long time, an \"omnichannel strategy\" was understood as being present on every channel separately. Today consumers do not care which channel they come from; they expect the brand to build a consistent, seamless relationship with them. This calls for a particular design and communication discipline, especially for structures managing several brands at once: each brand keeps its own identity, while the core quality of the user experience stays at the same level across all of them.",
      ),
      quote(
        "Consumers now judge a brand not as a product, but as a recurring relationship.",
      ),
      h2("Access to information has shifted the balance of power", "bilgiye-erisim"),
      p(
        "Today's consumers can access far more information than before making a purchase decision: price comparisons, user reviews, independent assessments. This requires brands to speak with verifiable facts rather than exaggerated claims. The balance of power has shifted towards the informed consumer.",
      ),
      h2("Structures that adapt to change win", "degisime-uyum"),
      p(
        "Given how fast consumer behaviour is changing, building a structure that keeps observing and adapting is far more valuable than setting a fixed, unchanging strategy. That is why we design our brands not as systems closed to change, but as structures that can evolve, without assuming that today's right answer will still be right tomorrow.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-05-22",
    readTime: "6 min",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
