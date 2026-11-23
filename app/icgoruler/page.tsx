import type { Metadata } from "next";
import { InsightsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts from a venture perspective.",
  alternates: { canonical: "/icgoruler" },
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}
