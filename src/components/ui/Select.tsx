import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-neutral-slate-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "flex h-11 w-full appearance-none rounded-control border border-neutral-slate-200 bg-white pl-3.5 pr-10 py-2 text-sm font-medium text-neutral-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:border-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150 ease-out shadow-sm cursor-pointer",
              error && "border-status-red-600 focus-visible:ring-status-red-600",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-slate-500">
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
        {error && (
          <p className="text-xs font-medium text-status-red-600">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
