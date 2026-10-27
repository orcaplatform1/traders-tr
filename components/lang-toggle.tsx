"use client";
import { useLang } from "@/lib/i18n";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <style>{`
        .lang-toggle {
          background: transparent;
        }
        .lang-toggle-border {
          background: transparent;
          border: 1px solid #e2e8f0;
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lang-toggle:hover .lang-toggle-border {
          border-color: #cbd5e1;
        }
        .lang-toggle-pill {
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
        }
      `}</style>
      <button
        type="button"
        onClick={() => setLang(isEn ? "tr" : "en")}
        aria-label={isEn ? "Türkçeye geç" : "Switch to English"}
        className={`lang-toggle group relative flex h-8 w-[62px] shrink-0 items-center rounded-full p-0.5 transition-all duration-300 ${className}`}
      >
        <span aria-hidden className="lang-toggle-border pointer-events-none absolute inset-0 rounded-full" />
        <span
          aria-hidden
          className={`lang-toggle-pill absolute top-0.5 h-7 w-7 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isEn ? "left-[calc(100%-30px)]" : "left-0.5"
          }`}
        />
        {/* TR bayrak */}
        <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://flagcdn.com/w40/tr.png"
            alt="TR"
            className={`h-[15px] w-auto rounded-[3px] transition-all duration-300 ${
              !isEn ? "opacity-100 scale-100" : "opacity-30 scale-90"
            }`}
          />
        </span>
        {/* GB bayrak */}
        <span className="relative z-10 ml-auto flex h-7 w-7 shrink-0 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="EN"
            className={`h-[15px] w-auto rounded-[3px] transition-all duration-300 ${
              isEn ? "opacity-100 scale-100" : "opacity-30 scale-90"
            }`}
          />
        </span>
      </button>
    </>
  );
}
