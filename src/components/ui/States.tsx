import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Inbox, Loader2 } from "lucide-react";
import { Button } from "./Button";

export function EmptyState({
  title = "No items found",
  description = "There are no records matching your request at this time.",
  actionText,
  onAction,
  icon: Icon = Inbox,
  className,
}: {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center rounded-lg border border-dashed border-neutral-slate-200 bg-neutral-slate-50/50",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-slate-100 text-neutral-slate-500 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="font-heading text-base font-bold text-neutral-slate-900">{title}</h4>
      <p className="mt-1 text-xs text-neutral-slate-600 max-w-sm">{description}</p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="outline" size="sm" className="mt-4">
          {actionText}
        </Button>
      )}
    </div>
  );
}

export function LoadingState({
  message = "Loading Trainbow HUB...",
  className,
}: {
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center",
        className
      )}
    >
      <Loader2 className="h-8 w-8 animate-spin text-brand-blue-600 mb-3" />
      <p className="text-sm font-medium text-neutral-slate-600">{message}</p>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again or contact support.",
  onRetry,
  className,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center rounded-lg border border-red-200 bg-red-50/30",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-status-red-600 mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h4 className="font-heading text-base font-bold text-status-red-600">{title}</h4>
      <p className="mt-1 text-xs text-neutral-slate-600 max-w-sm">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="destructive" size="sm" className="mt-4">
          Try Again
        </Button>
      )}
    </div>
  );
}
