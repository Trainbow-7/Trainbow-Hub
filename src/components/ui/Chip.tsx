import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  count?: number;
  selected?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
}

export function Chip({
  className,
  label,
  count,
  selected = false,
  onRemove,
  onClick,
  ...props
}: ChipProps) {
  const isClickable = !!onClick;

  return (
    <div
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (isClickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ease-out select-none",
        isClickable && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:ring-offset-1 active:scale-95",
        selected
          ? "bg-brand-blue-600 text-white font-semibold shadow-sm"
          : "bg-neutral-slate-100 text-neutral-slate-700 hover:bg-neutral-slate-200 border border-neutral-slate-200",
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {typeof count === "number" && (
        <span
          className={cn(
            "inline-flex items-center justify-center px-1.5 py-0.2 rounded-full text-[10px] font-bold leading-none",
            selected
              ? "bg-white/20 text-white"
              : "bg-neutral-slate-200 text-neutral-slate-600"
          )}
        >
          {count}
        </span>
      )}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label={`Remove filter ${label}`}
          className={cn(
            "ml-0.5 rounded-full p-0.5 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors",
            selected ? "text-white" : "text-neutral-slate-500"
          )}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
