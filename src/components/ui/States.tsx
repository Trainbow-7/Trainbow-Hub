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
        "flex flex-col items-center justify-center p-8 text-center rounded-card border border-red-200 bg-red-50/30",
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

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-slate-200/80 dark:bg-neutral-slate-800",
        className
      )}
      {...props}
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-card border border-neutral-slate-200 bg-white p-6 space-y-4 shadow-soft",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="space-y-2 pt-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-4/5" />
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-neutral-slate-100">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-28 rounded-control" />
      </div>
    </div>
  );
}
