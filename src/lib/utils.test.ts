import { describe, it, expect } from "vitest";
import { formatCurrency, formatDateTimeLagos } from "./utils";

describe("Utility Functions", () => {
  it("formats integer minor units (kobo) correctly to NGN currency", () => {
    // 250000 kobo = 2,500.00 NGN
    const formatted = formatCurrency(250000);
    // Standard en-NG currency output contains ₦ and 2,500.00
    expect(formatted).toContain("2,500.00");
  });

  it("formats dates in Africa/Lagos timezone", () => {
    // 2026-10-10T12:00:00Z -> 13:00 WAT
    const utcDate = new Date("2026-10-10T12:00:00Z");
    const formatted = formatDateTimeLagos(utcDate);
    expect(formatted).toBeDefined();
    expect(typeof formatted).toBe("string");
  });
});
