"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  className?: string;
  isPrimary?: boolean; // Used for card header on mobile
}

export interface ResponsiveTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string;
  mode?: "auto" | "scroll" | "card"; // 'auto' uses cards on mobile, table on desktop
  className?: string;
  emptyMessage?: string;
}

export function ResponsiveTable<T extends Record<string, any>>({
  columns,
  data,
  keyExtractor,
  mode = "auto",
  className,
  emptyMessage = "No records found.",
}: ResponsiveTableProps<T>) {
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  if (data.length === 0) {
    return (
      <div className="text-center py-8 px-4 text-sm text-neutral-slate-500 border border-neutral-slate-200 rounded-control bg-white dark:bg-[#0B1226] dark:border-white/10">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile Card Mode (< md) if mode is auto or card */}
      <div
        className={cn(
          "space-y-3",
          mode === "auto" ? "md:hidden" : mode === "card" ? "block" : "hidden"
        )}
      >
        {data.map((row, rowIndex) => {
          const primaryCol = columns.find((c) => c.isPrimary) || columns[0];
          const otherCols = columns.filter((c) => c !== primaryCol);

          return (
            <div
              key={keyExtractor(row, rowIndex)}
              className="p-4 rounded-card border border-neutral-slate-200 dark:border-white/10 bg-white dark:bg-[#111A2E] shadow-sm space-y-2.5"
            >
              {/* Primary title */}
              <div className="font-heading font-semibold text-neutral-slate-900 dark:text-white border-b border-neutral-slate-100 dark:border-white/5 pb-2">
                {primaryCol.render
                  ? primaryCol.render(row, rowIndex)
                  : String(row[primaryCol.key] ?? "")}
              </div>

              {/* Other key-values */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {otherCols.map((col) => (
                  <div key={col.key} className="space-y-0.5">
                    <span className="text-neutral-slate-500 dark:text-slate-400 font-medium">
                      {col.header}
                    </span>
                    <div className="text-neutral-slate-800 dark:text-slate-200 font-semibold">
                      {col.render
                        ? col.render(row, rowIndex)
                        : String(row[col.key] ?? "")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Table (>= md) or if mode is scroll */}
      <div
        className={cn(
          "w-full overflow-x-auto rounded-card border border-neutral-slate-200 dark:border-white/10 bg-white dark:bg-[#111A2E] shadow-sm",
          mode === "auto" ? "hidden md:block" : mode === "scroll" ? "block" : "hidden"
        )}
      >
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-slate-200 dark:border-white/10 bg-neutral-slate-50 dark:bg-white/[0.02]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-slate-600 dark:text-slate-300",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-slate-100 dark:divide-white/5">
            {data.map((row, rowIndex) => (
              <tr
                key={keyExtractor(row, rowIndex)}
                className="hover:bg-neutral-slate-50/70 dark:hover:bg-white/[0.02] transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-3 text-neutral-slate-800 dark:text-slate-200 align-middle",
                      col.className
                    )}
                  >
                    {col.render
                      ? col.render(row, rowIndex)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

