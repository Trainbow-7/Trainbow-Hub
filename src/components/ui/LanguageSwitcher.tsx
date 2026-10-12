"use client";

import React, { useState, useEffect } from "react";
import { SUPPORTED_LOCALES, LocaleCode } from "@/lib/i18n";

interface LanguageSwitcherProps {
  className?: string;
  onLocaleChange?: (locale: LocaleCode) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  onLocaleChange,
}) => {
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trainbow_locale") as LocaleCode | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setCurrentLocale(saved);
      }
    } catch {
      // safe fallback
    }

    const handler = (e: CustomEvent<{ locale: LocaleCode }>) => {
      if (e.detail?.locale) {
        setCurrentLocale(e.detail.locale);
      }
    };

    window.addEventListener("trainbow-locale-change" as any, handler);
    return () => window.removeEventListener("trainbow-locale-change" as any, handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as LocaleCode;
    setCurrentLocale(nextLocale);
    try {
      localStorage.setItem("trainbow_locale", nextLocale);
      window.dispatchEvent(
        new CustomEvent("trainbow-locale-change", { detail: { locale: nextLocale } })
      );
    } catch {
      // safe fallback
    }
    if (onLocaleChange) {
      onLocaleChange(nextLocale);
    }
  };

  return (
    <div className={`relative inline-flex items-center gap-1.5 ${className}`}>
      <label htmlFor="language-switcher-select" className="sr-only">
        Select interface language
      </label>
      <span className="text-sm font-medium text-neutral-slate-600 select-none" aria-hidden="true">
        🌐
      </span>
      <select
        id="language-switcher-select"
        value={currentLocale}
        onChange={handleChange}
        aria-label="Select interface language"
        className="text-xs font-semibold rounded-lg bg-neutral-slate-100 dark:bg-neutral-slate-800 text-neutral-slate-900 dark:text-neutral-slate-100 border border-neutral-slate-300 dark:border-neutral-slate-700 py-1.5 px-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors cursor-pointer"
      >
        {SUPPORTED_LOCALES.map((loc) => (
          <option key={loc.code} value={loc.code}>
            {loc.name} ({loc.nativeName})
          </option>
        ))}
      </select>
    </div>
  );
};
