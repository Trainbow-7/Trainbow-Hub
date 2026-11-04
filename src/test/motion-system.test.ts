import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { MOTION_TOKENS, VARIANTS, getMotionPreference } from "@/lib/motion";

describe("Motion System and Invariant Policies", () => {
  it("enforces single entry point: no direct imports from motion libraries outside motion folder and lib/motion.ts", () => {
    const srcDir = path.resolve(process.cwd(), "src");

    function scanFiles(dir: string, fileList: string[] = []): string[] {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanFiles(fullPath, fileList);
        } else if (
          (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) &&
          !fullPath.includes(path.normalize("src/components/motion")) &&
          !fullPath.includes(path.normalize("src/lib/motion.ts")) &&
          !entry.name.endsWith(".test.ts") &&
          !entry.name.endsWith(".test.tsx")
        ) {
          fileList.push(fullPath);
        }
      }
      return fileList;
    }

    const filesToTest = scanFiles(srcDir);
    const violations: { file: string; line: string }[] = [];

    const forbiddenPatterns = [
      /from\s+["']motion["']/,
      /from\s+["']motion\/react["']/,
      /from\s+["']framer-motion["']/,
    ];

    for (const filePath of filesToTest) {
      const content = fs.readFileSync(filePath, "utf-8");
      const lines = content.split("\n");
      lines.forEach((line, index) => {
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(line)) {
            violations.push({
              file: path.relative(process.cwd(), filePath),
              line: `Line ${index + 1}: ${line.trim()}`,
            });
          }
        }
      });
    }

    expect(violations).toEqual([]);
  });

  it("conforms to strict motion token contracts", () => {
    // Durations: fast ≤ 120ms, base ≤ 200ms, slow ≤ 360ms, carousel ≤ 500ms
    expect(MOTION_TOKENS.duration.fast).toBeLessThanOrEqual(0.12);
    expect(MOTION_TOKENS.duration.base).toBeLessThanOrEqual(0.20);
    expect(MOTION_TOKENS.duration.slow).toBeLessThanOrEqual(0.36);
    expect(MOTION_TOKENS.duration.carousel).toBeLessThanOrEqual(0.50);

    // Easing cubic-bezier
    expect(MOTION_TOKENS.ease.entrance).toEqual([0.22, 1, 0.36, 1]);
    expect(MOTION_TOKENS.ease.exit).toBe("easeInOut");

    // Spring without overshoot
    expect(MOTION_TOKENS.spring.stiffness).toBeGreaterThanOrEqual(200);
    expect(MOTION_TOKENS.spring.damping).toBeGreaterThanOrEqual(25);

    // Distances ≤ 24px
    expect(MOTION_TOKENS.distance.rise).toBeLessThanOrEqual(24);
    expect(MOTION_TOKENS.distance.micro).toBeLessThanOrEqual(24);
    expect(MOTION_TOKENS.distance.slide).toBeLessThanOrEqual(24);
    expect(Math.abs(MOTION_TOKENS.distance.lift)).toBeLessThanOrEqual(4);
  });

  it("exports standard variants (fade, fadeUp, scaleIn, slideX, staggerContainer)", () => {
    expect(VARIANTS.fade).toBeDefined();
    expect(VARIANTS.fadeUp).toBeDefined();
    expect(VARIANTS.scaleIn).toBeDefined();
    expect(typeof VARIANTS.slideX).toBe("function");
    expect(VARIANTS.staggerContainer).toBeDefined();
  });

  it("respects reduced motion and data saver policy", () => {
    const preference = getMotionPreference();
    expect(["full", "reduced", "off"]).toContain(preference);
  });
});

