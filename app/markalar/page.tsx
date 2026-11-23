import type { Metadata } from "next";
import { BrandsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Our Brands",
  description: "Independent brands. A shared vision.",
  alternates: { canonical: "/markalar" },
};

export default function BrandsPage() {
  return <BrandsPageContent />;
}
