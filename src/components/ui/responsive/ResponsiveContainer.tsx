import * as React from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "sm" | "lg" | "full" | "prose";
  padded?: boolean;
}

export function ResponsiveContainer({
  as: Component = "div",
  size = "default",
  padded = true,
  className,
  children,
  ...props
}: ResponsiveContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    sm: "max-w-4xl",
    lg: "max-w-[1400px]",
    full: "max-w-full",
    prose: "max-w-prose",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto",
        sizeClasses[size],
        padded && "px-4 sm:px-6 lg:px-8",
        // Safe area insets for notched phones
        "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

