import type { Metadata } from "next";
import { VenturesSection } from "@/components/ventures-section";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Some ideas are ready to be built. Some are still taking shape.",
  alternates: { canonical: "/girisimler" },
};

export default function VenturesPage() {
  return <VenturesSection />;
}
