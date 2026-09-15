import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "TRADERS, teknoloji, ticaret ve finansın kesişiminde işletmeler kuran ve işleten çok markalı bir girişim şirketidir.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutSection />;
}
