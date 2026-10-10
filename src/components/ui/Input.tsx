import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              "flex h-10 w-full rounded-md border border-neutral-slate-200 bg-white px-3 py-2 text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-status-red-600 focus-visible:ring-status-red-600",
              className
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs font-medium text-status-red-600">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-neutral-slate-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
