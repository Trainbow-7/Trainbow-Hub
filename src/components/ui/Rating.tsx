import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number; // 0 to 5
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
  size = "sm",
  className,
  showValue = true,
}: RatingProps) {
  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-amber-500" role="img" aria-label={`Rated ${value} out of ${max} stars`}>
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < Math.floor(value);
          const half = !filled && i < value;
          return (
            <Star
              key={i}
              className={cn(
                iconSizes[size],
                filled ? "fill-amber-400 text-amber-500" : half ? "fill-amber-200 text-amber-500" : "text-neutral-slate-300"
              )}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs font-bold text-neutral-slate-900 ml-0.5">
          {value.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className="text-xs text-neutral-slate-500">
          ({count})
        </span>
      )}
    </div>
  );
}
