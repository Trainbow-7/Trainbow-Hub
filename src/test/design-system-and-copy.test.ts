import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { MenuIcon, CloseIcon, PlayIcon, PauseIcon, CheckIcon, AlertIcon } from "@/components/ui/icons";
import { BRAND, BRAND_TAGLINE } from "@/lib/brand";

const SRC_DIR = path.resolve(__dirname, "..");

function getAllFiles(dir: string, extFilter = /\.(tsx|ts|jsx|js)$/): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        results = results.concat(getAllFiles(fullPath, extFilter));
      }
    } else if (extFilter.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

describe("Part 5: Design System, Icon Policy & UX Copy Verification", () => {
  describe("1. Icon Policy & Functional Registry", () => {
    it("should never import 'lucide-react' directly outside src/components/ui/icons.tsx", () => {
      const allSrcFiles = getAllFiles(SRC_DIR);
      const violations: string[] = [];

      for (const file of allSrcFiles) {
        const normalized = file.replace(/\\/g, "/");
        if (normalized.endsWith("/components/ui/icons.tsx")) continue;

        const content = fs.readFileSync(file, "utf8");
        if (/from\s+["']lucide-react["']/.test(content)) {
          violations.push(normalized);
        }
      }

      expect(violations, `Files violating icon policy by importing lucide-react directly: ${violations.join(", ")}`).toHaveLength(0);
    });

    it("should render fallback text labels when UI_ICONS=none", () => {
      const originalEnv = process.env.UI_ICONS;
      process.env.UI_ICONS = "none";

      try {
        const menuHtml = renderToString(React.createElement(MenuIcon, { fallbackText: "Menu" }));
        expect(menuHtml).toContain("Menu");
        expect(menuHtml).not.toContain("<svg");

        const closeHtml = renderToString(React.createElement(CloseIcon, { fallbackText: "Close" }));
        expect(closeHtml).toContain("Close");
        expect(closeHtml).not.toContain("<svg");

        const playHtml = renderToString(React.createElement(PlayIcon, { fallbackText: "Play" }));
        expect(playHtml).toContain("Play");

        const pauseHtml = renderToString(React.createElement(PauseIcon, { fallbackText: "Pause" }));
        expect(pauseHtml).toContain("Pause");
      } finally {
        if (originalEnv !== undefined) {
          process.env.UI_ICONS = originalEnv;
        } else {
          delete process.env.UI_ICONS;
        }
      }
    });
  });

  describe("2. No Decorative Emojis in Rendered Content & AI Templates", () => {
    it("should not contain decorative emojis in AI answer headings or templates", () => {
      const aiAdapterPath = path.join(SRC_DIR, "lib/adapters/ai.ts");
      const toolOrchestratorPath = path.join(SRC_DIR, "lib/ai/tool-orchestrator.ts");

      const files = [aiAdapterPath, toolOrchestratorPath];
      const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

      for (const file of files) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, "utf8");
          const lines = content.split("\n");
          lines.forEach((line, idx) => {
            // Exclude comments or test fixtures if any, check prompt and header templates
            if (line.includes("###") || line.includes("**Examiner") || line.includes("Hint Level")) {
              expect(emojiRegex.test(line), `Emoji found in line ${idx + 1} of ${file}: ${line}`).toBe(false);
            }
          });
        }
      }
    });

    it("should not contain decorative emoji glyphs in customer-facing public pages", () => {
      const publicPages = [
        "app/page.tsx",
        "app/about/page.tsx",
        "app/ai/page.tsx",
        "app/pricing/page.tsx",
        "app/request-tutor/page.tsx",
      ].map((p) => path.join(SRC_DIR, p));

      const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

      for (const page of publicPages) {
        if (fs.existsSync(page)) {
          const content = fs.readFileSync(page, "utf8");
          expect(emojiRegex.test(content), `Emoji found in ${page}`).toBe(false);
        }
      }
    });
  });

  describe("3. Banned Hype Words and Developer Jargon", () => {
    const BANNED_WORDS = [
      "omni",
      "intelligence engine",
      "live intelligence",
      "programmatic",
      "architectural",
      "governance",
      "anonymization",
      "seamless",
      "leverage",
      "unlock",
      "empower",
      "cutting-edge",
      "revolutionary",
      "next-gen",
      "supercharge",
      "private roster",
      "dependable income",
      "verified tutor",
    ];

    it("should not contain banned hype words in customer-facing pages and components", () => {
      const targetDirs = [path.join(SRC_DIR, "app"), path.join(SRC_DIR, "components")];
      const violations: { file: string; word: string; line: number }[] = [];

      for (const dir of targetDirs) {
        const files = getAllFiles(dir, /\.(tsx|jsx)$/);
        for (const file of files) {
          // Exclude internal API routes or dev tools from customer-facing check if any
          const normalized = file.replace(/\\/g, "/");
          if (normalized.includes("/app/api/")) continue;

          const content = fs.readFileSync(file, "utf8");
          const lines = content.split("\n");

          lines.forEach((lineText, idx) => {
            // Skip code comments or import lines
            const trimmed = lineText.trim();
            if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) return;

            for (const word of BANNED_WORDS) {
              const regex = new RegExp(`\\b${word}\\b`, "i");
              if (regex.test(lineText)) {
                violations.push({ file: normalized, word, line: idx + 1 });
              }
            }
          });
        }
      }

      expect(
        violations,
        `Banned words found:\n${violations.map((v) => `${v.file}:${v.line} -> "${v.word}"`).join("\n")}`
      ).toHaveLength(0);
    });
  });

  describe("4. Brand Tagline Consistency", () => {
    it("should maintain 'Learn • Build • Grow' as the canonical brand tagline", () => {
      expect(BRAND.tagline).toBe("Learn • Build • Grow");
      expect(BRAND_TAGLINE).toBe("Learn • Build • Grow");
    });

    it("should never contain legacy 'Learn, Connect, Grow' anywhere in src/", () => {
      const allFiles = getAllFiles(SRC_DIR, /\.(tsx|ts|jsx|js)$/);
      const matches: string[] = [];

      for (const file of allFiles) {
        if (file.includes("design-system-and-copy.test.ts")) continue;
        const content = fs.readFileSync(file, "utf8");
        if (/Learn,\s*Connect(?:,\s*|&|\sand\s)Grow/i.test(content)) {
          matches.push(file);
        }
      }

      expect(matches, `Legacy tagline found in: ${matches.join(", ")}`).toHaveLength(0);
    });
  });

  describe("5. Unconfirmed Legal Claims Audit", () => {
    it("should not assert unconfirmed NDPA compliance statements in user copy", () => {
      const allFiles = getAllFiles(path.join(SRC_DIR, "app"), /\.(tsx|jsx)$/);
      const matches: string[] = [];

      for (const file of allFiles) {
        const content = fs.readFileSync(file, "utf8");
        if (/compliance with the Nigeria Data Protection Act/i.test(content) || /ensuring compliance with/i.test(content)) {
          matches.push(file);
        }
      }

      expect(matches, `Unconfirmed NDPA compliance claim found in: ${matches.join(", ")}`).toHaveLength(0);
    });
  });

  describe("6. Hero Presentation & Truncation Guard", () => {
    it("should not render truncated ellipsis text in HeroHubVisual", () => {
      const heroPath = path.join(SRC_DIR, "components/home/HeroHubVisual.tsx");
      const content = fs.readFileSync(heroPath, "utf8");

      expect(content).not.toContain("...");
      expect(content).not.toContain("&hellip;");
      expect(content).not.toContain("…");
    });
  });

  describe("7. Repository Hygiene & Error Pages", () => {
    it("should have custom designed 404 and error pages", () => {
      expect(fs.existsSync(path.join(SRC_DIR, "app/not-found.tsx"))).toBe(true);
      expect(fs.existsSync(path.join(SRC_DIR, "app/error.tsx"))).toBe(true);
    });

    it("should have .gitignore entries for temporary screenshot and audit folders", () => {
      const gitignorePath = path.resolve(SRC_DIR, "../.gitignore");
      const content = fs.readFileSync(gitignorePath, "utf8");

      expect(content).toContain("screenshots/");
    });
  });
});
