"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "traders-tr-cookie-consent";

const noopSubscribe = () => () => {};

function readConsentMissing(): boolean {
  try {
    return !window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

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

const ICON = "h-4 w-4 shrink-0";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  );
}

const PILL = "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors";
const PILL_SOLID = `${PILL} bg-white text-black hover:bg-white/90`;
const PILL_GHOST = `${PILL} border border-white/25 bg-transparent text-white hover:border-white/50`;

export function CookieConsent() {
  // Sunucuda gizli, istemcide kayitli onay yoksa gorunur
  const consentMissing = useSyncExternalStore(noopSubscribe, readConsentMissing, () => false);
  const [dismissed, setDismissed] = useState(false);
  const visible = consentMissing && !dismissed;
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  function save(prefs: CookiePrefs) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
    setDismissed(true);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 rounded-[20px] border border-white/10 bg-[#0B0B10]/85 p-5 text-white shadow-lg backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-full sm:max-w-[420px]"
    >
      {!showPreferences ? (
        <>
          <p className="text-[14px] leading-relaxed text-white">
            We use cookies to improve your experience. See our{" "}
            <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-white/80">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white/80">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics: true, marketing: true })}
              className={PILL_SOLID}
            >
              <CheckIcon /> Accept all
            </button>
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics: false, marketing: false })}
              className={PILL_GHOST}
            >
              <XIcon /> Reject
            </button>
            <button type="button" onClick={() => setShowPreferences(true)} className={PILL_GHOST}>
              <SlidersIcon /> Preferences
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[14px] font-medium text-white">Cookie Preferences</p>
            <p className="mt-1 text-[13px] leading-relaxed text-white/70">
              Choose which cookie categories you allow below.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-[14px] border border-white/10 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-white">Necessary Cookies (Always Active)</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-white/70">
                  Technically required for the PRIZOMA homepage to load securely and for partnership and contact forms to function reliably. (Cannot be disabled)
                </p>
              </div>
              <Toggle checked onChange={() => {}} disabled label="Necessary cookies (always active)" />
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-white">Performance &amp; Analytics Cookies</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-white/70">
                  Helps us improve our platform by analysing how visitors browse the &quot;Insights&quot;, &quot;Brands&quot; and &quot;Ventures&quot; sections.
                </p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} label="Toggle performance and analytics cookies" />
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium text-white">Marketing &amp; Advertising Cookies</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-white/70">
                  Allows us to tailor corporate communications, including new brand launches, ecosystem announcements and partnership updates, to your interests.
                </p>
              </div>
              <Toggle checked={marketing} onChange={setMarketing} label="Toggle marketing and advertising cookies" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowPreferences(false)} className={PILL_GHOST}>
              Back
            </button>
            <button
              type="button"
              onClick={() => save({ necessary: true, analytics, marketing })}
              className={PILL_SOLID}
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
