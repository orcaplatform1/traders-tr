import type { Metadata } from "next";
import { NewsroomPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Company announcements.",
  alternates: { canonical: "/basin-merkezi" },
};

export default function NewsroomPage() {
  return <NewsroomPageContent />;
}
