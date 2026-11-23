import type { Metadata } from "next";
import { CareersSection } from "@/components/careers-section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We would love to work with people who think independently and build with care.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <CareersSection />;
}
