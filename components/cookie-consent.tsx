"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "traders-tr-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Çerez izni"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-border-default bg-surface-2 p-5 shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-[14px] leading-relaxed text-text-secondary">
        Sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. Detaylar için{" "}
        <Link href="/cerez-politikasi" className="text-text-link underline underline-offset-2 hover:text-text-link-hover">
          Çerez Politikası
        </Link>
        &apos;nı inceleyebilirsiniz.
      </p>

      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="border border-border-default px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground"
        >
          Reddet
        </button>
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="rounded-sm bg-accent px-4 py-2 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
