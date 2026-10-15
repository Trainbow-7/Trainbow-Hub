"use client";

import * as React from "react";
import { Globe, Sliders, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SUPPORTED_LOCALES, LocaleCode } from "@/lib/i18n";
import { isDataSaverEnabled, toggleDataSaver } from "@/lib/offline/sync";

export function UtilityPopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentLocale, setCurrentLocale] = React.useState<LocaleCode>("en");
  const [dataSaver, setDataSaver] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setDataSaver(isDataSaverEnabled());
    try {
      const saved = localStorage.getItem("trainbow_locale") as LocaleCode | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setCurrentLocale(saved);
      }
    } catch {
      // safe fallback
    }

    const dsHandler = (e: CustomEvent<{ enabled: boolean }>) => {
      setDataSaver(e.detail.enabled);
    };
    const locHandler = (e: CustomEvent<{ locale: LocaleCode }>) => {
      if (e.detail?.locale) setCurrentLocale(e.detail.locale);
    };

    window.addEventListener("trainbow-datasaver-change" as any, dsHandler);
    window.addEventListener("trainbow-locale-change" as any, locHandler);

    return () => {
      window.removeEventListener("trainbow-datasaver-change" as any, dsHandler);
      window.removeEventListener("trainbow-locale-change" as any, locHandler);
    };
  }, []);

  // Close when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggleDataSaver = () => {
    const next = toggleDataSaver();
    setDataSaver(next);
  };

  const handleLocaleSelect = (code: LocaleCode) => {
    setCurrentLocale(code);
    try {
      localStorage.setItem("trainbow_locale", code);
      window.dispatchEvent(
        new CustomEvent("trainbow-locale-change", { detail: { locale: code } })
      );
    } catch {
      // safe fallback
    }
  };

  const activeLocale = SUPPORTED_LOCALES.find((l) => l.code === currentLocale) || SUPPORTED_LOCALES[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Settings, language, and regional preferences"
        className={cn(
          "inline-flex items-center gap-2 h-10 px-3 rounded-control text-xs font-semibold border transition-all duration-150 ease-out select-none",
          isOpen
            ? "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-700 shadow-sm"
            : "border-neutral-slate-200 bg-white text-neutral-slate-700 hover:bg-neutral-slate-50 hover:border-neutral-slate-300"
        )}
      >
        <Globe className="h-4 w-4 text-brand-blue-600 shrink-0" />
        <span className="hidden sm:inline font-medium text-neutral-slate-800">
          {activeLocale.name.split(" ")[0]}
        </span>
        <span className="text-neutral-slate-300 font-normal">|</span>
        <span className="text-neutral-slate-600 font-bold">₦ NGN</span>
        {dataSaver && (
          <span className="h-2 w-2 rounded-full bg-service-tutor-700" title="Data Saver active" />
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Preferences Menu"
          className="absolute right-0 mt-2 w-80 rounded-panel bg-white p-4 shadow-floating border border-neutral-slate-200 z-50 text-left animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-slate-100">
            <div className="flex items-center gap-2">
              <Sliders className="h-4 w-4 text-brand-blue-600" />
              <h3 className="font-heading text-sm font-bold text-neutral-slate-900">
                Regional & Data Settings
              </h3>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-700">
              WAT (UTC+1)
            </span>
          </div>

          <div className="space-y-4 pt-3">
            {/* Currency Pill / Indication */}
            <div className="flex items-center justify-between p-2.5 rounded-control bg-neutral-slate-50 border border-neutral-slate-200/60">
              <div>
                <p className="text-xs font-bold text-neutral-slate-900">Currency & Billing</p>
                <p className="text-[11px] text-neutral-slate-500">Fixed to Nigerian Naira</p>
              </div>
              <span className="px-2.5 py-1 text-xs font-bold text-brand-navy-900 bg-white rounded-md border border-neutral-slate-200 shadow-xs">
                NGN (₦)
              </span>
            </div>

            {/* Data Saver Mode Toggle with explicit explanation */}
            <div className="p-2.5 rounded-control bg-neutral-slate-50 border border-neutral-slate-200/60 space-y-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-neutral-slate-900">Data Saver</span>
                  <p className="text-[11px] text-neutral-slate-500 leading-snug">
                    Loads fewer images and animations
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={dataSaver}
                  onClick={handleToggleDataSaver}
                  aria-label="Toggle Data Saver mode"
                  className={cn(
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600",
                    dataSaver ? "bg-service-tutor-700" : "bg-neutral-slate-300"
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-150 ease-out",
                      dataSaver ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Language Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-slate-700">
                Language
              </label>
              <div className="grid grid-cols-1 gap-1 max-h-48 overflow-y-auto pr-1">
                {SUPPORTED_LOCALES.map((locale) => {
                  const isSelected = locale.code === currentLocale;
                  return (
                    <button
                      key={locale.code}
                      type="button"
                      onClick={() => handleLocaleSelect(locale.code)}
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-2 rounded-control text-xs text-left transition-colors",
                        isSelected
                          ? "bg-brand-blue-50 font-bold text-brand-blue-700"
                          : "hover:bg-neutral-slate-100 text-neutral-slate-700"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span>{locale.name}</span>
                        <span className="text-[11px] text-neutral-slate-500 font-normal">
                          ({locale.nativeName})
                        </span>
                      </div>
                      {isSelected && <Check className="h-3.5 w-3.5 text-brand-blue-600" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
