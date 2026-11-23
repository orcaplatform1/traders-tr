import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    id: "zesta",
    name: "Zesta Art&Design",
    slug: "zesta",
    logo: "/brand-logos/zesta.webp",
    monogram: "ZS",
    accent: "earth",
    category: "Art & Design Products",
    shortDescription:
      "Small Details. Big Stories. Every piece is made by hand, on demand, with care — from the workshops of artisans across Turkey to your home.",
    longDescription:
      "Zesta brings handmade products together with a meticulous production process, a custom-order model and a modern shopping experience.",
    whyItExists:
      "We saw that handcrafted products were not getting the quality they deserve in digital commerce. Zesta connects makers and buyers through a direct and trustworthy experience.",
    features: [
      "A curated maker community with a designer application and approval process",
      "A dedicated panel where each designer manages their own product catalogue",
      "Custom-order model: products are made by the maker on demand",
      "Real sales statistics and a payout request flow for designers",
      "A modern, mobile-first shopping experience and central store management",
    ],
    websiteUrl: "https://zesta.tr",
    status: "active",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    logo: "/brand-logos/kriptobeyan.webp",
    logoBackground: "light",
    monogram: "KB",
    accent: "emerald",
    category: "Digital Tax",
    shortDescription:
      "KriptoBeyan automates crypto tax calculation: connect your exchange accounts and wallets, have your transactions calculated with the FIFO method. Your draft report is ready when crypto tax season arrives.",
    longDescription:
      "KriptoBeyan makes it easy to understand and manage the tax and declaration obligations of crypto asset transactions in Turkey, for individuals and financial advisors.",
    whyItExists:
      "Crypto assets spread quickly, but the tax and declaration side remained largely unclear. KriptoBeyan fills this gap.",
    features: [
      "Import transaction history and automatically calculate taxable profit and loss",
      "A self-service declaration flow for individuals and a separate professional panel for financial advisors",
      "Advisor–client matching: advisors can manage the accounts of the clients they invite from a single panel",
      "Comprehensive reporting that separates different income types, including DeFi transactions",
      "Subscription-based access and a scalable structure for corporate use",
    ],
    websiteUrl: "https://kriptobeyan.com",
    status: "active",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "orca",
    name: "Wolf Club",
    slug: "orca",
    logo: "/brand-logos/wolf-club.webp",
    monogram: "OR",
    accent: "ocean",
    category: "Financial Education",
    shortDescription:
      "A unique education platform that brings together AI-powered personalized learning programs, hands-on courses, live market simulations and smart real-time data tools in a single ecosystem.",
    longDescription:
      "WOLF CLUB combines a structured curriculum, from financial literacy to advanced technical analysis, with a live community, AI mentorship and the ability to practise with real market data.",
    whyItExists:
      "We saw that financial education is mostly fragmented, poorly aligned with learners' interests and disconnected from practice. WOLF CLUB brings learning together on a single platform tied to measurable progress.",
    features: [
      "A structured curriculum from beginner to expert: lessons, quizzes and verifiable certificates on completion",
      "An AI mentor available 24/7, with personalised Q&A and topic explanations",
      "An AI-powered market scanner, a backtest simulator and risk-free practice with real market data",
      "Live market tools bringing crypto, forex, BIST100 and the economic calendar together in one panel",
      "An active TradingView-style community: analysis sharing, live lessons and student interaction",
    ],
    websiteUrl: "https://traders.tr",
    status: "developing",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "secbird",
    name: "Secbird",
    slug: "secbird",
    logo: "/brand-logos/secbird.webp",
    monogram: "SB",
    accent: "orange",
    category: "Privacy-Focused Email",
    shortDescription:
      "A privacy-focused email service by Prizoma GmbH, based in Zug, Switzerland. In development, with end-to-end encryption and servers located in Switzerland.",
    longDescription:
      "Secbird is a privacy-focused email service developed by Prizoma GmbH in the canton of Zug, Switzerland. The service is currently in development and is being built around end-to-end email encryption (OpenPGP) and zero-access encryption for incoming emails from outside senders. Its servers will be located in Switzerland.",
    whyItExists:
      "Email carries some of the most sensitive correspondence in business and private life, yet it is often not offered with protection that matches that sensitivity. Secbird is being developed to provide email that is encrypted by default, built on open source and audited libraries, and hosted in Switzerland.",
    features: [
      "End-to-end encryption (OpenPGP) in development: emails will be encrypted so that no one but the sender and the recipient can read them",
      "Zero-access encryption for incoming emails in development: emails from outside senders will be stored so that only the user's key can open them",
      "Encryption is being built on open source and audited cryptography libraries",
      "Servers will be located in Switzerland",
      "End-to-end encrypted live chat is being developed as an add-on to the email package",
    ],
    websiteUrl: "https://secbird.me",
    status: "developing",
    featured: true,
    displayOrder: 4,
  },
  {
    id: "ahenk",
    name: "Ahenk",
    slug: "ahenk",
    logo: "/brand-logos/ahenk.webp",
    monogram: "AH",
    accent: "wine",
    category: "Social Platform",
    shortDescription:
      "Compatible people, real meetings. Weekly group and one-on-one tables built on OCEAN Big Five personality matching — venue, time and reservation all arranged by Ahenk.",
    longDescription:
      "Ahenk turns meeting strangers into real encounters on a scientific basis. Users build their profiles with the OCEAN (Big Five) personality test; the algorithm matches them weekly with compatible people and sets up group or one-on-one tables. Time, venue and reservation are arranged entirely by Ahenk, so all the user has to do is show up.",
    whyItExists:
      "A good social circle is a choice, not luck. Against the shallow connection culture of digital life, Ahenk makes it easier to meet real people in real life, based on compatibility rather than chance.",
    features: [
      "Algorithmic matching based on the OCEAN Big Five personality test: genuinely compatible people, not random ones",
      "Three table formats: Group Table (new faces), Duo Table (one-on-one) and Bring a Buddy Table (go with your friend)",
      "Weekly organisation: venue, time and reservation arranged entirely by Ahenk, your only job is to show up",
      "Verified profiles and a table guarantee: if a table cannot be set up, the fee is refunded",
      "Active tables every week in Istanbul, Ankara, Izmir and 5 more cities; profile renewal every 180 days",
    ],
    websiteUrl: "https://ahenk.co",
    status: "developing",
    featured: true,
    displayOrder: 5,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
