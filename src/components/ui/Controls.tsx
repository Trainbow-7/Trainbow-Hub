import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "flex min-h-[96px] w-full rounded-md border border-neutral-slate-300 bg-white px-3 py-2 text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-status-red-600 focus:ring-status-red-600",
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p className="text-xs text-neutral-slate-500">{helperText}</p>
        )}
        {error && <p className="text-xs font-medium text-status-red-600">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const checkboxId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border-neutral-slate-300 text-brand-blue-600 focus:ring-brand-blue-600 mt-0.5 cursor-pointer",
            className
          )}
          {...props}
        />
        {(label || description) && (
          <div className="space-y-0.5">
            {label && (
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-neutral-slate-900 cursor-pointer block select-none"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-neutral-slate-500">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
