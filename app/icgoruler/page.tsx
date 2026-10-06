import type { Metadata } from "next";
import { InsightsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "İçgörüler",
  description: "Girişim perspektifinden düşünceler.",
  alternates: { canonical: "/icgoruler" },
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}
