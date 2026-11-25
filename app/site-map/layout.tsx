import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Site Map",
  description: "All pages on prizoma.com: company, brands, insights, newsroom and legal pages in one place.",
  path: "/site-map",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
