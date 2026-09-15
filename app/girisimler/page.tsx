import type { Metadata } from "next";
import { VenturesSection } from "@/components/ventures-section";

export const metadata: Metadata = {
  title: "Girişimler",
  description: "Bazı fikirler inşa edilmeye hazır. Bazıları henüz oluşuyor.",
  alternates: { canonical: "/girisimler" },
};

export default function VenturesPage() {
  return <VenturesSection />;
}
