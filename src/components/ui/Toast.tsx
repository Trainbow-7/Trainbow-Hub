"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
}

interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-4 right-4 z-50 flex max-w-sm flex-col gap-2 p-2 pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={cn(
              "pointer-events-auto flex items-start gap-3 rounded-lg border p-4 shadow-lg transition-all animate-in slide-in-from-bottom-2",
              toast.type === "success" && "border-green-200 bg-white text-status-green-600",
              toast.type === "warning" && "border-amber-200 bg-white text-status-orange-600",
              toast.type === "error" && "border-red-200 bg-white text-status-red-600",
              toast.type === "info" && "border-blue-200 bg-white text-brand-blue-600"
            )}
          >
            {toast.type === "success" && <CheckCircle2 className="h-5 w-5 shrink-0" />}
            {toast.type === "warning" && <AlertTriangle className="h-5 w-5 shrink-0" />}
            {toast.type === "error" && <AlertCircle className="h-5 w-5 shrink-0" />}
            {toast.type === "info" && <Info className="h-5 w-5 shrink-0" />}

            <div className="flex-1 text-left">
              <h5 className="text-sm font-semibold text-neutral-slate-900">{toast.title}</h5>
              {toast.description && (
                <p className="mt-0.5 text-xs text-neutral-slate-600">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-neutral-slate-400 hover:text-neutral-slate-600"
              aria-label="Dismiss toast"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
