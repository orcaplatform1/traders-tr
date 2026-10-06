import type { Metadata } from "next";
import { NewsroomPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Basın Merkezi",
  description: "Şirket duyuruları.",
  alternates: { canonical: "/basin-merkezi" },
};

export default function NewsroomPage() {
  return <NewsroomPageContent />;
}
