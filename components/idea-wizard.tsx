"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";

type WizardOptions = { email?: string; category?: string };

const IdeaWizardContext = createContext<{ open: (opts?: WizardOptions) => void; isOpen: boolean }>({
  open: () => {},
  isOpen: false,
});

export function useIdeaWizard() {
  return useContext(IdeaWizardContext);
}

// Tam ekran, asagidan yukari kayan tek girdili form sihirbazi
export function IdeaWizardProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(0);
  const [opts, setOpts] = useState<WizardOptions>({});

  const open = useCallback((next: WizardOptions = {}) => {
    setOpts(next);
    setSession((s) => s + 1);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <IdeaWizardContext.Provider value={{ open, isOpen }}>
      {children}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-0 z-[60] overflow-y-auto bg-background transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {session > 0 && (
          <ContactForm
            key={session}
            defaultCategory={opts.category}
            initialEmail={opts.email}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </IdeaWizardContext.Provider>
  );
}
