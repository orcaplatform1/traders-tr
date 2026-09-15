import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { LogoutButton } from "@/components/admin/logout-button";
import { ChangePasswordForm } from "@/components/admin/change-password-form";

export const metadata: Metadata = {
  title: "Ayarlar",
  robots: { index: false, follow: false },
};

export default async function AdminSettingsPage() {
  if (!(await isAuthenticated())) {
    redirect("/yonetim");
  }

  return (
    <section className="py-28 md:py-32">
      <div className="container-edit">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight text-foreground">Ayarlar</h1>
          <LogoutButton />
        </div>

        <ChangePasswordForm />
      </div>
    </section>
  );
}
