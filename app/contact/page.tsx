import type { Metadata } from "next";
import { ContactPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have an idea? Tell us what you are building.",
  alternates: { canonical: "/contact" },
};

// URL'deki ?category= degeri formun ic kategori degerine cevrilir
const CATEGORY_PARAM: Record<string, string> = {
  partnership: "ortaklik",
  venture: "girisim",
  press: "basin",
  general: "genel",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return <ContactPageContent defaultCategory={category ? CATEGORY_PARAM[category] : undefined} />;
}
