"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ad en az 2 karakter olmalı").max(120),
  email: z.string().trim().email("Geçerli bir e-posta adresi girin").max(200),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Telefon numarası 10 haneli olmalı (başında 0 olmadan)"),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Konu gerekli").max(200),
  category: z.enum(["ortaklik", "girisim", "basin", "genel"]),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalı").max(4000),
  // honeypot: gercek kullanicilar bu alani gormez/doldurmaz
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: (formData.get("phone")?.toString() ?? "").replace(/\D/g, ""),
    company: formData.get("company")?.toString() ?? "",
    subject: formData.get("subject")?.toString() ?? "",
    category: formData.get("category")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof contactSchema>;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Formu kontrol edin.", fieldErrors };
  }

  // honeypot dolduysa sessizce basarili gibi davran (botu bilgilendirme)
  if (parsed.data.website) {
    return { status: "success" };
  }

  await prisma.contactSubmission.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: `+90${parsed.data.phone}`,
      company: parsed.data.company || null,
      subject: parsed.data.subject,
      category: parsed.data.category,
      message: parsed.data.message,
    },
  });

  return { status: "success" };
}
