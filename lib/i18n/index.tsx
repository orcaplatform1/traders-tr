"use client";
import { createContext, useContext, useSyncExternalStore } from "react";

export type Lang = "tr" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "tr",
  setLang: () => {},
});

// Dil tercihi localStorage'da; useSyncExternalStore ile sunucuda "tr", istemcide kayitli deger
const langListeners = new Set<() => void>();
let memoryLang: Lang | null = null;

function subscribeLang(cb: () => void) {
  langListeners.add(cb);
  return () => {
    langListeners.delete(cb);
  };
}

function readLang(): Lang {
  if (memoryLang) return memoryLang;
  try {
    return localStorage.getItem("lang") === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, readLang, (): Lang => "tr");

  function setLang(l: Lang) {
    memoryLang = l;
    try { localStorage.setItem("lang", l); } catch {}
    langListeners.forEach((cb) => cb());
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return function t(tr: string, en: string): string {
    return lang === "en" ? en : tr;
  };
}
