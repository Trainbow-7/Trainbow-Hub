"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ArrowRightIcon, LoaderIcon } from "@/components/ui/icons";

export interface FormStepProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  description?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormStep({
  currentStep,
  totalSteps,
  title,
  description,
  onBack,
  onNext,
  nextLabel = "Continue",
  nextDisabled = false,
  isLoading = false,
  children,
  className,
}: FormStepProps) {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("w-full flex flex-col min-h-full", className)}>
      {/* Top Step Progress Bar */}
      <div className="w-full bg-neutral-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-6">
        <div
          className="bg-brand-blue-600 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header with back button */}
      <div className="flex items-center justify-between mb-4">
        {onBack && currentStep > 1 ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-slate-600 hover:text-neutral-slate-900 dark:text-slate-400 dark:hover:text-white min-h-[44px] -ml-2 px-2"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}
        <span className="text-xs font-bold text-neutral-slate-500 uppercase tracking-wider">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      {/* Title & Description */}
      <div className="mb-6">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-neutral-slate-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-neutral-slate-600 dark:text-slate-400 mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Body Content */}
      <div className="flex-1 pb-24 sm:pb-8">{children}</div>

      {/* Sticky Bottom Actions on Mobile, inline on desktop */}
      {onNext && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-[#0B1226]/95 backdrop-blur-md border-t border-neutral-slate-200 dark:border-white/10 pb-[max(1rem,env(safe-area-inset-bottom))] sm:static sm:p-0 sm:bg-transparent sm:border-0 sm:pt-6 z-30">
          <div className="max-w-md mx-auto sm:max-w-none flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onNext}
              disabled={nextDisabled || isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-control font-semibold text-white bg-brand-blue-600 hover:bg-brand-blue-700 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm"
            >
              {isLoading ? (
                <>
                  <LoaderIcon className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{nextLabel}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

