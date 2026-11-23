import type { ContentBlock, NewsroomPost } from "./types";

function p(text: string): ContentBlock {
  return { type: "p", text };
}
function h2(text: string, id: string): ContentBlock {
  return { type: "h2", text, id };
}
function quote(text: string): ContentBlock {
  return { type: "quote", text };
}

export const newsroomPosts: NewsroomPost[] = [
  {
    id: "7",
    slug: "secbird-duyurusu",
    title: "Prizoma Announces Secbird, a Privacy-Focused Email Service",
    excerpt:
      "Prizoma GmbH has announced Secbird, a privacy-focused email service it is developing in the canton of Zug, Switzerland. The service is in development.",
    content: [
      p(
        "Prizoma GmbH is announcing its new brand, Secbird. Secbird is a privacy-focused email service being developed in the canton of Zug, Switzerland. The service is currently in development; the features described below are features under development.",
      ),
      h2("Why an email service", "neden-e-posta"),
      p(
        "Email still carries some of the most sensitive correspondence in business and private life: contracts, invoices, account notifications, personal messages. Yet email is often not offered with protection that matches that sensitivity. Secbird is being developed to provide email that is encrypted by default and hosted in Switzerland.",
      ),
      h2("The encryption infrastructure in development", "sifreleme"),
      p(
        "At the core of Secbird is end-to-end encryption. This structure, based on the OpenPGP standard, is being developed so that emails are encrypted in a way that no one but the sender and the recipient can read them. For emails from people who are not Secbird users, zero-access encryption is being developed: these emails will be stored after they arrive so that only the user's key can open them.",
      ),
      p(
        "The encryption layer is being built on open source and audited cryptography libraries rather than algorithms of our own. This choice means the methods used can be reviewed by anyone.",
      ),
      h2("Servers in Switzerland", "isvicre"),
      p(
        "Secbird's servers will be located in Switzerland. Development is run from Zug, where Prizoma GmbH is headquartered, within the framework of Swiss data protection law.",
      ),
      h2("Encrypted live chat alongside email", "canli-sohbet"),
      p(
        "End-to-end encrypted live chat is also being developed as an add-on to the email package. The aim is to let users use email and instant messaging within the same account, with the same encryption approach.",
      ),
      h2("What's next", "sirada-ne-var"),
      p(
        "Secbird is in development. Follow developments at secbird.me and on this page.",
      ),
    ],
    category: "Company Announcement",
    publishedAt: "2026-11-23",
    readTime: "4 min",
  },
  {
    id: "6",
    slug: "ahenk-tanitimi",
    title: "PRIZOMA's Fifth Brand: Ahenk Is in Development",
    excerpt:
      "PRIZOMA has added Ahenk to its portfolio — a social meeting platform offering weekly table organisation based on OCEAN Big Five personality compatibility. The platform is in active development.",
    content: [
      p(
        "PRIZOMA is announcing its fifth brand: Ahenk. Operating in the social meeting space, Ahenk has entered active development as a platform offering weekly table organisation based on OCEAN (Big Five) personality compatibility — built on the belief that meeting the right people is too important to leave to chance. Following Orca Labs, KriptoBeyan, Zesta Art&Design, and Secbird, this brand marks PRIZOMA's boldest step into the intersection of technology and human experience.",
      ),
      h2("Why this space, why now", "neden-bu-alan"),
      p(
        "People in Turkey and worldwide spend more and more time on digital platforms — yet this digital intensity appears to erode the capacity to form real connections in real life. Existing social meeting alternatives are either entirely random or based on shallow matching criteria: age, location, a list of interests. Yet science has long shown that genuine human connection is grounded in personality compatibility.",
      ),
      p(
        "Ahenk was built to fill this gap: a quality social circle is not luck — it is a choice. Algorithmic compatibility built on scientific foundations rather than random matching. And most importantly — meeting real people in real venues in real life.",
      ),
      h2("OCEAN Big Five: bringing science to the table", "ocean-modeli"),
      p(
        "At the heart of Ahenk's matching infrastructure is the OCEAN (Big Five) personality model — one of the most comprehensive and extensively researched frameworks in personality psychology, comprising five dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability (Neuroticism).",
      ),
      p(
        "When users join the platform, they complete a concise but meaningful personality profile test. This test is renewed every 180 days — because people change and the profile should reflect that change. The algorithm compares these profiles each week and matches users with those they have the highest probability of genuinely connecting with, then arranges the venue, time, and reservation itself.",
      ),
      h2("Three table formats, one ecosystem", "masa-formatlari"),
      p(
        "Ahenk offers three different meeting formats, each addressing a distinct social need:",
      ),
      p(
        "Group Table: A weekly dinner bringing together 6 compatible people (3 women, 3 men). Designed to create those conversations where you don't notice your coffee going cold. The algorithm builds the table to maximise profile compatibility across all participants.",
      ),
      p(
        "One-on-One Table: A one-to-one meeting format. A genuinely one-on-one encounter with a single person — suitable for both a new friendship and a deep conversation.",
      ),
      p(
        "Kankamla (With My Friend) Table: A 4-person table where you join with a friend and two similarly-paired people sit across from you. For users with higher social anxiety — or simply those who want to meet new people alongside a friend.",
      ),
      quote(
        "Some evenings stay in your calendar, some stay in your memory. Ahenk designs the ones that stay in your memory.",
      ),
      h2("The entire organisation is handled by Ahenk", "organizasyon"),
      p(
        "One of the most critical features that sets Ahenk apart is that it takes complete responsibility for the logistics. The only thing a user needs to do is show up. Matching, venue selection, reservation, reminder notifications, table composition — all of this is managed weekly by Ahenk. Once a user selects a package on the platform, they trust the system and get ready for Thursday evening.",
      ),
      p(
        "Venues are selected through a careful curation process: Casual, Mid-range, and Premium categories — venues suitable for the city's social atmosphere, easy to reach, offering private space. Starting from Istanbul, tables are set up each week in Ankara, İzmir, Antalya, Muğla, Aydın, and Balıkesir.",
      ),
      h2("Safety and verification", "guvenlik"),
      p(
        "One of the most critical questions in a social platform is trust. Ahenk placed trust at the centre of its design. Joining the platform requires phone verification via WhatsApp OTP; subscribing requires an identity verification (KYC) process. So you know that the people you'll meet at the table have had their identities verified.",
      ),
      p(
        "Additionally, participants can see each other's initials (M.A., S.T. etc.) before the table — full names are only shared via notification after the table is confirmed. A contact blocking system also prevents you from being matched with someone you already know.",
      ),
      h2("Current status: active development", "gelistirme-durumu"),
      p(
        "Ahenk is in active development within PRIZOMA. The technical infrastructure — NestJS backend, Next.js web, and React Native mobile application — is being built; all modules including the matching algorithm, payment system, notification services, and admin panel are operational. The platform is currently preparing to open to its first users.",
      ),
      p(
        "During this period, infrastructure stability, the quality of the first table experiences, and user feedback are our priorities. We are not chasing growth metrics — we are looking for the first evidence that the right people are meeting the right people.",
      ),
      h2("Its place in the PRIZOMA portfolio", "portfoy"),
      p(
        "Ahenk is the fifth independent brand in the PRIZOMA portfolio. Each brand operates autonomously in its own domain: Orca Labs in financial education, KriptoBeyan in digital tax, Zesta in handmade commerce, Secbird in privacy-focused email. Ahenk joins this ecosystem in the domain of social connection and meetings.",
      ),
      p(
        "Each brand in the portfolio was founded to fill a structural gap in a different sector. Ahenk operates on the same logic: technology is a tool — the real product is the connection two people form in real life.",
      ),
      h2("What's next", "sirada-ne-var"),
      p(
        "Ahenk's beta launch process is approaching. Follow developments at ahenk.co and on this page. Special advantages will be offered to early users under the Pioneer programme — details coming soon.",
      ),
    ],
    category: "Company Announcement",
    publishedAt: "2026-10-27",
    readTime: "7 min",
  },
  {
    id: "1",
    slug: "traders-yeni-bir-girisim-icin-calismalara-basladi",
    title: "PRIZOMA Has Begun Work on a New Venture",
    excerpt:
      "PRIZOMA has begun early-stage research and design on a new opportunity area at the intersection of technology and commerce, independent of its existing brands.",
    content: [
      p(
        "PRIZOMA announces that it has begun early-stage research and design work on a new opportunity area at the intersection of technology and commerce, independent of its existing portfolio brands Orca Labs, KriptoBeyan, and Zesta Art&Design.",
      ),
      h2("Why a new venture", "neden-yeni-girisim"),
      p(
        "Each of our current three brands operates in a different sector: financial education, digital tax compliance, and handmade commerce. This diversity has given our team a broad perspective on how different markets operate. Our internal evaluation processes point to a new area that can be built on this accumulated knowledge.",
      ),
      h2("How the process is going", "surec"),
      p(
        "At PRIZOMA, a new venture doesn't begin with product development — it begins with deeply understanding the problem and the opportunity. We are currently in this early discovery phase, working on market research, potential business model scenarios, and technical feasibility.",
      ),
      quote("Before announcing a venture, we make sure it's truly worth building."),
      h2("What's next", "sirada-ne-var"),
      p(
        "Details will be shared on this page when the venture reaches a more mature stage. Until then, we continue to focus on the development and growth of our existing brands.",
      ),
    ],
    category: "Company Announcement",
    publishedAt: "2026-09-01",
    readTime: "3 min",
  },
  {
    id: "2",
    slug: "orca-platformunu-genisletiyor",
    title: "Orca Labs Expands Its Platform",
    excerpt:
      "Orca Labs has made significant additions to its educational curriculum and market tools suite — from AI-powered mentorship to real-time market scanners.",
    content: [
      p(
        "Orca Labs continues to expand the educational content and market tools suite it offers to users. The developments in this period focused on strengthening the platform's two core axes — structured education and real-time market practice.",
      ),
      h2("An expanding toolkit", "genisleyen-arac-seti"),
      p(
        "Orca Labs' tool panel brings together an AI-powered market scanner, a backtest simulator, advanced market simulation, and a terminal news-trading module. In addition, a crypto asset calendar, news sentiment analysis, a whale tracker monitoring large wallet movements, and a multi-chain wallet analytics tool have been added to the platform.",
      ),
      p(
        "General tools aggregating BIST100, forex, and crypto markets in a single panel are also part of this expansion; users can now track markets without switching between different tabs.",
      ),
      h2("AI Mentor and personalized learning", "ai-mentor"),
      p(
        "The Orca Labs AI Mentor, a 24/7 accessible AI-powered educational assistant, provides instant support to users on topics where they get stuck. This feature aims to transform the structured curriculum (from beginner to expert level) from static content into a dynamic experience that adapts to each user's own pace.",
      ),
      quote("Our goal is not to reduce understanding the markets to a certificate — but to turn it into a measurable, practice-grounded competency."),
      h2("Community and gamification", "topluluk-gamification"),
      p(
        "The platform also hosts a TradingView-style live community experience: users can share their analyses, message each other directly, and join live classes. Points, badges, and streak systems are offered to encourage progress; verifiable certificates are awarded at the end of completed modules.",
      ),
      h2("Crypto ecosystem-specific tools", "kripto-ekosistemi"),
      p(
        "For users interested in crypto assets, an ICO tracking tool, a token unlock calendar, and an airdrop tracking module have been added to the platform. These tools, as an extension of ORCA's 'learn by doing' philosophy, make it possible to interact directly with real market data.",
      ),
      h2("What's next", "orca-sirada-ne-var"),
      p(
        "The Orca Labs team continues to improve the quality of existing tools and add new modules based on user feedback. The platform's long-term goal is to offer a single integrated experience that takes financial education from theory to practice.",
      ),
    ],
    category: "Product Announcement",
    publishedAt: "2026-08-20",
    readTime: "5 min",
  },
  {
    id: "3",
    slug: "kriptobeyan-yeni-bir-faza-giriyor",
    title: "KriptoBeyan Enters a New Phase",
    excerpt:
      "KriptoBeyan has launched a new professional panel for financial advisors and support for DeFi income categories.",
    content: [
      p(
        "KriptoBeyan announces it has entered a new phase of making crypto asset declaration processes easier for both individual users and financial advisors. This update was the platform's first comprehensive step targeting the professional user segment.",
      ),
      h2("Financial advisor panel", "musavir-paneli"),
      p(
        "The new advisor panel allows financial advisors to manage the accounts of clients they have invited from a single place. Together with the advisor invitation flow, an advisor can view the crypto asset transactions of multiple clients, verify calculations, and track the declaration process.",
      ),
      h2("Separate categories for DeFi income", "defi-gelirleri"),
      p(
        "A growing portion of users are earning income from DeFi protocols through activities like staking, liquidity provision, and yield farming. KriptoBeyan separated these income types from standard buy-sell transactions and introduced a separate reporting category for each — making the declaration process more accurately reflect the true complexity of transactions.",
      ),
      quote("Tax compliance is achieved not by hiding complexity from users, but by making it understandable."),
      h2("Payment and coupon infrastructure", "odeme-kupon"),
      p(
        "The subscription-based access model now works with coupon code support, enabling corporate partnerships and campaign processes to be managed more flexibly. The payment infrastructure was reviewed to maintain the platform's scalability as transaction volume increases.",
      ),
      h2("Operational improvements", "operasyonel-iyilestirmeler"),
      p(
        "CSV template support was added to accelerate the process of importing user transaction history; the status of large-volume transaction queues can now be monitored more effectively. These changes, while invisible to users, are part of the infrastructure that enables the platform to reliably process thousands of transactions daily.",
      ),
      h2("What's next", "kb-sirada-ne-var"),
      p(
        "The KriptoBeyan team continues to deepen collaboration with the financial advisor ecosystem and further expand DeFi categories.",
      ),
    ],
    category: "Product Announcement",
    publishedAt: "2026-08-05",
    readTime: "5 min",
  },
  {
    id: "4",
    slug: "zesta-ozel-siparis-pazaryerini-baslatti",
    title: "Zesta Art&Design Launches Custom Order Marketplace",
    excerpt:
      "Zesta Art&Design has announced its custom order marketplace model, connecting handmade product designers with buyers through a curated application process.",
    content: [
      p(
        "Zesta Art&Design has launched its new marketplace model where handmade product makers can manage their own shops and buyers can place custom orders. This launch was the first concrete step of Zesta Art&Design's vision of 'meaningful, careful production over mass production.'",
      ),
      h2("A curated designer community", "kuratorlu-topluluk"),
      p(
        "Producers who want to join the platform are evaluated through an application process; approved designers gain access to a dedicated panel where they can manage their own product catalogs. This curated approach aims for Zesta Art&Design to be a community that prioritizes quality and authenticity rather than a mass marketplace.",
      ),
      h2("The custom order model", "ozel-siparis-modeli"),
      p(
        "Most of the products on Zesta are produced on demand, not from stock. This model allows producers to grow without carrying inventory risk, while giving buyers a product experience truly prepared for them.",
      ),
      quote("Behind every product is a name, a process, and a labor of love — Zesta Art&Design aims to make this visible."),
      h2("Transparent earnings tracking for designers", "seffaf-kazanc"),
      p(
        "The designer panel includes real sales statistics and a payout request flow; producers can track their earnings in real time and create payment requests directly from the panel. Requests are processed through an approval workflow.",
      ),
      h2("Buyer experience", "alici-deneyimi"),
      p(
        "On the store side, standard e-commerce flows such as category-based discovery, cart, and order tracking have been redesigned to fit the custom order model. Legal content such as terms of use and privacy text is presented via a 'read and accept' flow integrated into registration and application forms.",
      ),
      h2("What's next", "zesta-sirada-ne-var"),
      p(
        "The Zesta Art&Design team continues to further streamline the designer application process and improve the buyer experience.",
      ),
    ],
    category: "Brand Launch",
    publishedAt: "2026-07-18",
    readTime: "5 min",
  },
];

export function getNewsroomPostBySlug(slug: string): NewsroomPost | undefined {
  return newsroomPosts.find((p) => p.slug === slug);
}
