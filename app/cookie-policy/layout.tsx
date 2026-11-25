import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "What is stored in your browser while using prizoma.com, which third-party cookies may apply and how you can control storage.",
  path: "/cookie-policy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
