"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";

const STORAGE_KEY = "traders-tr-cookie-consent";

type CookiePrefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
        checked ? "border-accent bg-accent" : "border-border-default bg-surface-3"
      }`}
    >
      <span
        className={`inline-block size-4 transform rounded-full bg-slate-50 transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(prefs: CookiePrefs) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("Çerez izni", "Cookie consent")}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-border-default bg-surface-2 p-5 shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[420px]"
    >
      {!showPreferences ? (
        <>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            {t(
              "TRADERS.TR olarak, teknoloji, ticaret ve finans alanındaki dijital girişimlerimizi, iş ortaklığı süreçlerimizi ve ana sayfa deneyiminizi optimize etmek amacıyla yasalara uygun çerezler kullanıyoruz.",
              "At TRADERS.TR, we use compliant cookies to optimise our digital ventures in technology, commerce and finance, our partnership processes, and your homepage experience."
            )}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
            {t(
              "Sitemizdeki çerezleri dilediğiniz gibi yönetebilir, onayınızı serbestçe geri çekebilirsiniz. Detaylı bilgi için",
              "You can manage cookies on our site as you wish and withdraw your consent at any time. For details, see our"
            )}{" "}
            <Link href="/cerez-politikasi" className="text-text-link underline underline-offset-2 hover:text-text-link-hover">
              {t("Çerez Politikası", "Cookie Policy")}
            </Link>{" "}
            {t("ve", "and")}{" "}
            <Link href="/gizlilik-politikasi" className="text-text-link underline underline-offset-2 hover:text-text-link-hover">
              {t("Gizlilik Politikası", "Privacy Policy")}
            </Link>{" "}
            {t("sayfalarımızı inceleyebilirsiniz.", "pages.")}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics: true, marketing: true })}
              className="rounded-sm bg-accent px-4 py-2 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400"
            >
              🟩 {t("Tüm Çerezleri Kabul Et", "Accept All Cookies")}
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => save({ necessary: true, analytics: false, marketing: false })}
                className="flex-1 border border-border-default px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground"
              >
                🟥 {t("Reddet", "Reject")}
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="flex-1 border border-border-default px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground"
              >
                ⚙️ {t("Tercihleri Yönet", "Manage Preferences")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[14px] font-medium text-foreground">{t("Çerez Tercihleri", "Cookie Preferences")}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
              {t(
                "Hangi çerez kategorilerine izin vereceğinizi aşağıdan seçebilirsiniz.",
                "Choose which cookie categories you allow below."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 border border-border-default p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  🌐 {t("Zorunlu Çerezler (Her Zaman Aktif)", "Necessary Cookies (Always Active)")}
                </p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  {t(
                    "TRADERS.TR kurumsal ana sayfasının güvenle yüklenmesi, iş ortaklığı ve iletişim formlarının kararlı çalışması için teknik olarak zorunludur. (Kullanıcı tarafından kapatılamaz)",
                    "Technically required for the TRADERS.TR homepage to load securely and for partnership and contact forms to function reliably. (Cannot be disabled)"
                  )}
                </p>
              </div>
              <Toggle checked onChange={() => {}} disabled label={t("Zorunlu çerezler (her zaman aktif)", "Necessary cookies (always active)")} />
            </div>

            <div className="h-px bg-border-default" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  📊 {t("Performans ve Analiz Çerezleri", "Performance & Analytics Cookies")}
                </p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  {t(
                    "Ziyaretçilerin \"İçgörüler\", \"Markalarımız\" ve \"Girişimler\" bölümlerindeki içerikleri nasıl incelediğini analiz ederek kurumsal platformumuzu geliştirmemize yardımcı olur.",
                    "Helps us improve our platform by analysing how visitors browse the \"Insights\", \"Brands\" and \"Ventures\" sections."
                  )}
                </p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} label={t("Performans ve analiz çerezlerini aç/kapat", "Toggle performance and analytics cookies")} />
            </div>

            <div className="h-px bg-border-default" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  📢 {t("Pazarlama ve Reklam Çerezleri", "Marketing & Advertising Cookies")}
                </p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  {t(
                    "Bünyemizde geliştirilen yeni bağımsız markaların lansmanları, ekosistem duyuruları ve stratejik iş ortaklığı süreçlerine yönelik kurumsal bildirimleri ilgi alanlarınıza göre optimize etmemizi sağlar.",
                    "Allows us to tailor corporate communications — including new brand launches, ecosystem announcements and partnership updates — to your interests."
                  )}
                </p>
              </div>
              <Toggle checked={marketing} onChange={setMarketing} label={t("Pazarlama ve reklam çerezlerini aç/kapat", "Toggle marketing and advertising cookies")} />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {t("Geri", "Back")}
            </button>
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics, marketing })}
              className="rounded-sm bg-accent px-4 py-2 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400"
            >
              {t("Tercihleri Kaydet", "Save Preferences")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
