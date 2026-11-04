import * as React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    mobile?: 1 | 2;
    tablet?: 2 | 3;
    desktop?: 3 | 4 | 5;
  };
  gap?: "sm" | "md" | "lg" | "xl";
}

export function ResponsiveGrid({
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className,
  children,
  ...props
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-3 sm:gap-4",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-6 sm:gap-8 lg:gap-10",
  };

  const colClasses = cn(
    cols.mobile === 2 ? "grid-cols-2" : "grid-cols-1",
    cols.tablet === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
    cols.desktop === 4
      ? "lg:grid-cols-4"
      : cols.desktop === 5
      ? "lg:grid-cols-5"
      : "lg:grid-cols-3"
  );

  return (
    <div className={cn("grid w-full", colClasses, gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}

