import type { Metadata } from "next";
import { ContactPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bir fikriniz mi var? Ne inşa ettiğinizi anlatın.",
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
