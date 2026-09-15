import type { Metadata } from "next";
import { CareersSection } from "@/components/careers-section";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Bağımsız düşünen, özenle inşa eden insanlarla çalışmak isteriz.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <CareersSection />;
}
