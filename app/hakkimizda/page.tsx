import type { Metadata } from "next";
import { AboutPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "TRADERS.TR; teknoloji, ticaret ve finansın kesişiminde yeni nesil işletmeler geliştiren, kuran ve işleten çok markalı bir girişim şirketidir.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
