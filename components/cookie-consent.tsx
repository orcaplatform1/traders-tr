"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      aria-label="Çerez izni"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl border border-border-default bg-surface-2 p-5 shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[420px]"
    >
      {!showPreferences ? (
        <>
          <p className="text-[14px] leading-relaxed text-text-secondary">
            TRADERS.TR olarak, teknoloji, ticaret ve finans alanındaki dijital girişimlerimizi, iş ortaklığı
            süreçlerimizi ve ana sayfa deneyiminizi optimize etmek amacıyla yasalara uygun çerezler kullanıyoruz.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
            Sitemizdeki çerezleri dilediğiniz gibi yönetebilir, onayınızı serbestçe geri çekebilirsiniz. Detaylı
            bilgi için{" "}
            <Link href="/cerez-politikasi" className="text-text-link underline underline-offset-2 hover:text-text-link-hover">
              Çerez Politikası
            </Link>{" "}
            ve{" "}
            <Link href="/gizlilik-politikasi" className="text-text-link underline underline-offset-2 hover:text-text-link-hover">
              Gizlilik Politikası
            </Link>{" "}
            sayfalarımızı inceleyebilirsiniz.
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics: true, marketing: true })}
              className="rounded-sm bg-accent px-4 py-2 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400"
            >
              🟩 Tüm Çerezleri Kabul Et
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => save({ necessary: true, analytics: false, marketing: false })}
                className="flex-1 border border-border-default px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground"
              >
                🟥 Reddet
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="flex-1 border border-border-default px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground"
              >
                ⚙️ Tercihleri Yönet
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[14px] font-medium text-foreground">Çerez Tercihleri</p>
            <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
              Hangi çerez kategorilerine izin vereceğinizi aşağıdan seçebilirsiniz.
            </p>
          </div>

          <div className="flex flex-col gap-3 border border-border-default p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">🌐 Zorunlu Çerezler (Her Zaman Aktif)</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  TRADERS.TR kurumsal ana sayfasının güvenle yüklenmesi, iş ortaklığı ve iletişim formlarının
                  kararlı çalışması için teknik olarak zorunludur. (Kullanıcı tarafından kapatılamaz)
                </p>
              </div>
              <Toggle checked onChange={() => {}} disabled label="Zorunlu çerezler (her zaman aktif)" />
            </div>

            <div className="h-px bg-border-default" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">📊 Performans ve Analiz Çerezleri</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  Ziyaretçilerin &quot;İçgörüler&quot;, &quot;Markalarımız&quot; ve &quot;Girişimler&quot;
                  bölümlerindeki içerikleri nasıl incelediğini analiz ederek kurumsal platformumuzu geliştirmemize
                  yardımcı olur.
                </p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} label="Performans ve analiz çerezlerini aç/kapat" />
            </div>

            <div className="h-px bg-border-default" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-foreground">📢 Pazarlama ve Reklam Çerezleri</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
                  Bünyemizde geliştirilen yeni bağımsız markaların lansmanları, ekosistem duyuruları ve stratejik
                  iş ortaklığı süreçlerine yönelik kurumsal bildirimleri ilgi alanlarınıza göre optimize etmemizi
                  sağlar.
                </p>
              </div>
              <Toggle checked={marketing} onChange={setMarketing} label="Pazarlama ve reklam çerezlerini aç/kapat" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              Geri
            </button>
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics, marketing })}
              className="rounded-sm bg-accent px-4 py-2 text-[13px] font-medium tracking-wide text-slate-50 transition-colors hover:bg-blue-400"
            >
              Tercihleri Kaydet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
