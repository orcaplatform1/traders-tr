import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BrandsPageContent } from "./page-content";

export const metadata: Metadata = pageMetadata({
  title: "Our Brands",
  description: "Independent brands. A shared vision.",
  path: "/brands",
});

export default function BrandsPage() {
  return <BrandsPageContent />;
}
