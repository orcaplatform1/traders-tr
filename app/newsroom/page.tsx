import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { NewsroomPageContent } from "./page-content";

export const metadata: Metadata = pageMetadata({
  title: "Newsroom",
  description: "Company announcements.",
  path: "/newsroom",
});

export default function NewsroomPage() {
  return <NewsroomPageContent />;
}
