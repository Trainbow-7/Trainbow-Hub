import { describe, it, expect } from "vitest";

/**
 * Calculates relative luminance for an sRGB hex color according to WCAG 2.2 standards.
 * Reference: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
function getRelativeLuminance(hexColor: string): number {
  const cleanHex = hexColor.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  const rLin = toLinear(r);
  const gLin = toLinear(g);
  const bLin = toLinear(b);

  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Calculates contrast ratio between two hex colors according to WCAG 2.2.
 * Reference: https://www.w3.org/WAI/GL/wiki/Contrast_ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getRelativeLuminance(color1);
  const lum2 = getRelativeLuminance(color2);

  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (brighter + 0.05) / (darker + 0.05);
}

describe("WCAG 2.2 AA Contrast Requirements Suite", () => {
  // WCAG 2.2 Level AA thresholds
  const MIN_BODY_CONTRAST = 4.5;
  const MIN_LARGE_TEXT_CONTRAST = 3.0;

  describe("Dark Surfaces & Hero (Navy 900 #0B1B3A, Navy 950 #070F24)", () => {
    it("enforces white text on Navy 900 exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#FFFFFF", "#0B1B3A");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(15); // ~16.9:1
    });

    it("enforces Slate 100 (#F1F5F9) on Navy 900 exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#F1F5F9", "#0B1B3A");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(14);
    });

    it("enforces white text on Navy 950 page background exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#FFFFFF", "#070F24");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
    });

    it("enforces white text on Dark Surface (#111A2E) exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#FFFFFF", "#111A2E");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
    });
  });

  describe("Light Surfaces (Slate 50 #F8FAFC, Card White #FFFFFF)", () => {
    it("enforces Slate 900 (#0F172A) text on White card exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#0F172A", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(15);
    });

    it("enforces Slate 900 (#0F172A) text on Slate 50 page bg exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#0F172A", "#F8FAFC");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
    });

    it("enforces Slate 600 (#475569) muted text on White card exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#475569", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(6.5);
    });

    it("enforces Slate 600 (#475569) muted text on Slate 50 page bg exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#475569", "#F8FAFC");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
    });
  });

  describe("Service Accents & Invariant Guardrails", () => {
    it("enforces white text on Blue 600 (#2563EB) exceeds 4.5:1 for Academy/primary CTA", () => {
      const ratio = getContrastRatio("#FFFFFF", "#2563EB");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(5.0);
    });

    it("enforces white text on Violet 600 (#7C3AED) exceeds 4.5:1 for AI actions", () => {
      const ratio = getContrastRatio("#FFFFFF", "#7C3AED");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(5.5);
    });

    it("enforces white text on Teal 700 (#0F766E) exceeds 4.5:1 for Tutor actions", () => {
      const ratio = getContrastRatio("#FFFFFF", "#0F766E");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(5.0);
    });

    it("enforces dark text Slate 900 (#0F172A) on Amber 500 (#F59E0B) exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#0F172A", "#F59E0B");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(7.0);
    });

    it("enforces dark text Slate 900 (#0F172A) on Teal 500 (#14B8A6) exceeds 4.5:1", () => {
      const ratio = getContrastRatio("#0F172A", "#14B8A6");
      expect(ratio).toBeGreaterThanOrEqual(MIN_BODY_CONTRAST);
      expect(ratio).toBeGreaterThan(6.5);
    });

    it("PROVES the invariant: white text on Amber 500 (#F59E0B) FAILS and is forbidden", () => {
      const forbiddenRatio = getContrastRatio("#FFFFFF", "#F59E0B");
      expect(forbiddenRatio).toBeLessThan(MIN_BODY_CONTRAST);
      expect(forbiddenRatio).toBeLessThan(MIN_LARGE_TEXT_CONTRAST);
    });

    it("PROVES the invariant: white text on Teal 500 (#14B8A6) FAILS and is forbidden", () => {
      const forbiddenRatio = getContrastRatio("#FFFFFF", "#14B8A6");
      expect(forbiddenRatio).toBeLessThan(MIN_BODY_CONTRAST);
      expect(forbiddenRatio).toBeLessThan(MIN_LARGE_TEXT_CONTRAST);
    });
  });
});
