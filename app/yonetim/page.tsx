import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Yönetim Girişi",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await isAuthenticated()) {
    redirect("/yonetim/mesajlar");
  }

  return (
    <section className="flex min-h-[70vh] items-center py-28">
      <div className="container-edit max-w-sm">
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          Yönetim Girişi
        </h1>
        <p className="mt-2 text-[14px] text-muted">
          Bu alan yalnızca yetkili ekip üyeleri içindir.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}
