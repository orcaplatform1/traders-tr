import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Data Protection Notice",
  description: "How Prizoma GmbH processes personal data on prizoma.com in line with the Swiss Federal Act on Data Protection (revFADP).",
  path: "/data-protection",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
