import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { TRANSLATIONS } from "@/lib/translations";

type Language = "en" | "te";
const LanguageContext = createContext({ language: "en" as Language, setLanguage: (_: Language) => {}, t: (text: string) => text });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("healing-language");
    if (saved === "en" || saved === "te") setLanguage(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  function changeLanguage(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("healing-language", next);
  }
  function t(text: string) {
    const pair = TRANSLATIONS.find(([en, te]) => en === text || te === text);
    return pair?.[language === "en" ? 0 : 1] ?? text;
  }
  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-gold/40 bg-card/85 p-1 shadow-sm backdrop-blur-sm transition-all ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center pl-2 pr-1 text-primary/70">
        <Languages className="h-4 w-4" aria-hidden="true" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
          language === "en"
            ? "bg-gold-gradient text-accent-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("te")}
        aria-pressed={language === "te"}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ${
          language === "te"
            ? "bg-gold-gradient text-accent-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}