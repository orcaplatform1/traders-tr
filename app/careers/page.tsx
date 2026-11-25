import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CareersSection } from "@/components/careers-section";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "We would love to work with people who think independently and build with care.",
  path: "/careers",
});

export default function CareersPage() {
  return <CareersSection />;
}
