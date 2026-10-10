import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format money in integer minor units (Kobo) to display string in NGN
 * E.g., 250000 Kobo -> "₦2,500.00"
 */
export function formatCurrency(minorUnits: number, currency = "NGN"): string {
  const majorUnits = minorUnits / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(majorUnits);
}

/**
 * Format date in Africa/Lagos (WAT) time
 */
export function formatDateTimeLagos(date: Date | string | number): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}
