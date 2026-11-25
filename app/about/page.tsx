import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { AboutPageContent } from "./page-content";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "PRIZOMA is a multi-brand venture company that develops, builds and operates next-generation businesses at the intersection of technology, commerce and finance.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
