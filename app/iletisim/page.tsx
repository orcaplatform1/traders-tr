import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bir fikriniz mi var? Ne inşa ettiğinizi anlatın.",
  alternates: { canonical: "/iletisim" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return <ContactSection defaultCategory={category} />;
}
