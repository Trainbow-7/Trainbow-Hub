import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "brand" | "ai" | "tutor" | "success";
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  size = "md",
  variant = "brand",
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const fillColors = {
    brand: "bg-brand-blue-600",
    ai: "bg-service-ai-600",
    tutor: "bg-service-tutor-700",
    success: "bg-status-green-600",
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-xs font-semibold text-neutral-slate-700">
          {label && <span>{label}</span>}
          {showPercentage && <span className="font-mono text-neutral-slate-500">{percentage}%</span>}
        </div>
      )}
      <div
        className={cn(
          "w-full rounded-full bg-neutral-slate-200 overflow-hidden",
          sizeClasses[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn("h-full transition-all duration-300 rounded-full", fillColors[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
