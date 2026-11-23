import type { Metadata } from "next";
import { ContactPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have an idea? Tell us what you are building.",
  alternates: { canonical: "/iletisim" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  return <ContactPageContent defaultCategory={kategori} />;
}
