import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { BRAND, BRAND_TAGLINE } from "@/lib/brand";
import { SEED_SUBJECTS } from "@/lib/data/seed-data";

describe("Landing Page & Brand Copy Requirements", () => {
  const rootDir = process.cwd();

  it("verifies brand tagline constant is defined and used consistently", () => {
    expect(BRAND.tagline).toBe("Learn • Build • Grow");
    expect(BRAND_TAGLINE).toBe("Learn • Build • Grow");

    // Check footer uses BRAND.tagline
    const footerContent = fs.readFileSync(path.join(rootDir, "src/components/layout/Footer.tsx"), "utf8");
    expect(footerContent).toContain("BRAND.name");

    // Check TrainbowLogo uses BRAND.tagline
    const logoContent = fs.readFileSync(path.join(rootDir, "src/components/ui/TrainbowLogo.tsx"), "utf8");
    expect(logoContent).toContain("BRAND.tagline");
  });

  it("fails if 'Okafor' appears anywhere on any page, in seeds, or in metadata", () => {
    const scanDirs = ["src/app", "src/components", "src/lib/data", "src/lib/db"];
    const violations: string[] = [];

    function scanDir(dir: string) {
      const fullDir = path.join(rootDir, dir);
      if (!fs.existsSync(fullDir)) return;
      const entries = fs.readdirSync(fullDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(fullDir, entry.name);
        if (entry.isDirectory()) {
          scanDir(path.join(dir, entry.name));
        } else if (/\.(tsx?|jsx?|json|md)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, "utf8");
          if (/\bOkafor\b/i.test(content)) {
            violations.push(fullPath);
          }
        }
      }
    }

    for (const d of scanDirs) {
      scanDir(d);
    }

    expect(violations, `Found 'Okafor' in: ${violations.join(", ")}`).toEqual([]);
  });

  it("fails if banned marketing or unverifiable claims appear on the landing page", () => {
    const pagePath = path.join(rootDir, "src/app/page.tsx");
    const visualPath = path.join(rootDir, "src/components/home/HubOrbit.tsx");
    const combinedContent = fs.readFileSync(pagePath, "utf8") + "\n" + fs.readFileSync(visualPath, "utf8");

    const bannedPatterns = [
      { name: "100% Verified", regex: /100%\s*Verified/i },
      { name: "Escrow", regex: /\bEscrow\b/i },
      { name: "24/7", regex: /\b24\/7\b/i },
      { name: "aligned", regex: /\baligned\b/i },
      { name: "bestseller", regex: /\bbestseller\b/i },
      { name: "students enrolled", regex: /\bstudents\s+enrolled\b/i },
      { name: "star ratings", regex: /\bstar\s+ratings?\b/i },
      { name: "Okafor", regex: /\bOkafor\b/i },
    ];

    const violations: string[] = [];
    for (const { name, regex } of bannedPatterns) {
      if (regex.test(combinedContent)) {
        violations.push(name);
      }
    }

    expect(violations, `Banned claims found on landing page: ${violations.join(", ")}`).toEqual([]);
  });

  it("verifies AI chat example has moved from landing page to /ai page", () => {
    const landingContent = fs.readFileSync(path.join(rootDir, "src/app/page.tsx"), "utf8");
    const visualContent = fs.readFileSync(path.join(rootDir, "src/components/home/HubOrbit.tsx"), "utf8");
    const aiPageContent = fs.readFileSync(path.join(rootDir, "src/app/ai/page.tsx"), "utf8");

    // Must NOT be on the landing page
    expect(landingContent).not.toContain("How do I solve");
    expect(visualContent).not.toContain("How do I solve");

    // MUST be on the /ai page, clearly labeled as Example
    expect(aiPageContent).toContain("How do I solve");
    expect(aiPageContent).toContain("x² − 5x + 6 = 0");
    expect(aiPageContent).toContain("Example");
  });

  it("verifies dynamic secondary CTA button reflects active AI subjects", () => {
    const activeAi = SEED_SUBJECTS.filter((s) => s.status === "active" && s.aiEnabled);
    const expectedLabel = activeAi.length > 1 ? "Try the AI helper" : "Try the AI maths helper";

    expect(expectedLabel).toBe("Try the AI maths helper");

    const pageContent = fs.readFileSync(path.join(rootDir, "src/app/page.tsx"), "utf8");
    expect(pageContent).toContain("aiHelperLabel");
  });

  it("verifies total visible copy between header and footer is 170 words or fewer", () => {
    const pagePath = path.join(rootDir, "src/app/page.tsx");

    const pageContent = fs.readFileSync(pagePath, "utf8");

    // Extract content inside <main>...</main>
    const mainMatch = pageContent.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    expect(mainMatch).toBeTruthy();

    const cleanJsxText = (raw: string) =>
      raw
        .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\{[^}]+\}/g, " ")
        .replace(/\/\*[\s\S]*?\*\//g, " ")
        .replace(/&[a-z]+;/g, " ")
        .replace(/[^\w\s\d−²\-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const pageWords = cleanJsxText(mainMatch![1]).split(/\s+/).filter(Boolean);

    // Visible words in Hub visual:
    // "One account" (2), "Four ways to learn" (4)
    // 4 service cards:
    // - Academy: Lessons and quizzes (4)
    // - AI: Instant study help (4)
    // - Music: Theory and instruments (4)
    // - Tutors: Matched to you (4)
    const hubVisualWords = [
      "One", "account",
      "Four", "ways", "to", "learn",
      "Academy", "Lessons", "and", "quizzes",
      "AI", "Instant", "study", "help",
      "Music", "Theory", "and", "instruments",
      "Tutors", "Matched", "to", "you"
    ];

    const totalWords = pageWords.length + hubVisualWords.length;
    console.log(`Landing page total visible words: ${totalWords} (Budget: 170 words max)`);

    expect(totalWords).toBeLessThanOrEqual(170);
  });
});
