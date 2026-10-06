import type { Metadata } from "next";
import { BrandsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Markalarımız",
  description: "Bağımsız markalar. Ortak bir vizyon.",
  alternates: { canonical: "/markalar" },
};

export default function BrandsPage() {
  return <BrandsPageContent />;
}
