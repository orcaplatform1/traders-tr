import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { InsightsPageContent } from "./page-content";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description: "Thoughts from a venture perspective.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsPageContent />;
}
