import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "ai"
    | "tutor"
    | "destructive";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      // Primary: Blue 600 with white text (passes WCAG AA)
      primary:
        "bg-brand-blue-600 text-white hover:bg-brand-blue-700 focus-visible:ring-brand-blue-600 shadow-sm",
      secondary:
        "bg-brand-blue-50 text-brand-blue-600 hover:bg-brand-blue-100 focus-visible:ring-brand-blue-600",
      outline:
        "border border-neutral-slate-200 bg-white text-neutral-slate-900 hover:bg-neutral-slate-50 focus-visible:ring-brand-blue-600",
      ghost:
        "text-neutral-slate-600 hover:bg-neutral-slate-100 hover:text-neutral-slate-900 focus-visible:ring-neutral-slate-400",
      // AI: Violet 600 with white text (passes WCAG AA)
      ai: "bg-service-ai-600 text-white hover:bg-service-ai-700 focus-visible:ring-service-ai-600 shadow-sm",
      // Tutor: Teal 700 with white text (passes WCAG AA)
      tutor:
        "bg-service-tutor-700 text-white hover:bg-service-tutor-600 focus-visible:ring-service-tutor-700 shadow-sm",
      destructive:
        "bg-status-red-600 text-white hover:bg-status-red-700 focus-visible:ring-status-red-600 shadow-sm",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
