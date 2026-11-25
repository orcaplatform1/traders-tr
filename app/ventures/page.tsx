import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { VenturesSection } from "@/components/ventures-section";

export const metadata: Metadata = pageMetadata({
  title: "Ventures",
  description: "Some ideas are ready to be built. Some are still taking shape.",
  path: "/ventures",
});

export default function VenturesPage() {
  return <VenturesSection />;
}
