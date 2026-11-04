import * as React from "react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  count?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
}

export function Rating({
  value,
  max = 5,
  count,
  className,
  showValue = true,
}: RatingProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5 text-xs text-neutral-slate-700", className)}>
      <span className="font-bold text-neutral-slate-900">
        ★ {value.toFixed(1)}
      </span>
      {count !== undefined && (
        <span className="text-neutral-slate-500">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}
