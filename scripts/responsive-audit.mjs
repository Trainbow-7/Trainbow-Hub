import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const AUDIT_DIR = path.join(process.cwd(), "screenshots", "audit");

if (!fs.existsSync(AUDIT_DIR)) {
  fs.mkdirSync(AUDIT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: "320x568", width: 320, height: 568, isMobile: true },
  { name: "360x740", width: 360, height: 740, isMobile: true },
  { name: "375x667", width: 375, height: 667, isMobile: true },
  { name: "390x844", width: 390, height: 844, isMobile: true },
  { name: "412x915", width: 412, height: 915, isMobile: true },
  { name: "667x375", width: 667, height: 375, isMobile: true }, // phone landscape
  { name: "768x1024", width: 768, height: 1024, isTablet: true }, // tablet portrait
  { name: "1024x768", width: 1024, height: 768, isTablet: true }, // tablet landscape
  { name: "1280x800", width: 1280, height: 800, isDesktop: true },
  { name: "1536x900", width: 1536, height: 900, isDesktop: true },
];

const ROUTES = [
  { name: "home", path: "/", auth: null },
  { name: "about", path: "/about", auth: null },
  { name: "academy", path: "/academy", auth: null },
  { name: "academy-mathematics", path: "/academy/mathematics", auth: null },
  { name: "course-waec", path: "/courses/waec-ssce-mathematics-mastery", auth: null },
  { name: "course-jamb", path: "/courses/jamb-utme-speed-mathematics", auth: null },
  { name: "lesson-fractions", path: "/courses/waec-ssce-mathematics-mastery/lessons/fractions-decimals-operations", auth: null },
  { name: "lesson-trig", path: "/courses/ss2-algebra-and-trigonometry-deep-dive/lessons/trig-ratios-four-quadrants-cast", auth: null },
  { name: "ai-workspace", path: "/ai", auth: null },
  { name: "music", path: "/music", auth: null },
  { name: "pricing", path: "/pricing", auth: null },
  { name: "request-tutor", path: "/request-tutor", auth: null },
  { name: "request-tutor-new", path: "/request-tutor/new", auth: null },
  { name: "login", path: "/login", auth: null },
  { name: "register", path: "/register", auth: null },
  { name: "become-a-tutor", path: "/become-a-tutor", auth: null },
  { name: "faq", path: "/faq", auth: null },
  { name: "contact", path: "/contact", auth: null },
  { name: "legal-terms", path: "/legal/terms", auth: null },
  { name: "legal-privacy", path: "/legal/privacy", auth: null },
  { name: "student-dashboard", path: "/dashboard", auth: "student" },
  { name: "student-bookings", path: "/bookings", auth: "student" },
  { name: "parent-guardian", path: "/guardian", auth: "parent" },
  { name: "tutor-dashboard", path: "/dashboard/tutor", auth: "tutor" },
  { name: "admin-overview", path: "/admin", auth: "admin" },
  { name: "admin-matching", path: "/admin/matching", auth: "admin" },
];

const CREDENTIALS = {
  student: { email: "student@trainbowhub.ng", password: "Trainbow2026!" },
  parent: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
  tutor: { email: "tutor@trainbowhub.ng", password: "Trainbow2026!" },
  admin: { email: "admin@trainbowhub.ng", password: "TrainbowAdmin2026!" },
};

async function runAudit() {
  console.log("=== STARTING COMPREHENSIVE RESPONSIVE AUDIT ===");
  const browser = await chromium.launch({ headless: true });
  const auditResults = [];

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);

    // Prepare contexts
    const publicContext = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const publicPage = await publicContext.newPage();

    // Authenticated contexts cached per role for this viewport
    const authContexts = {};

    for (const r of ROUTES) {
      let activePage = publicPage;

      if (r.auth) {
        if (!authContexts[r.auth]) {
          const creds = CREDENTIALS[r.auth];
          const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
          await ctx.request.post(`${BASE_URL}/api/auth/login`, {
            data: { email: creds.email, password: creds.password },
          });
          authContexts[r.auth] = { context: ctx, page: await ctx.newPage() };
        }
        activePage = authContexts[r.auth].page;
      }

      try {
        await activePage.goto(`${BASE_URL}${r.path}`, { waitUntil: "networkidle", timeout: 25000 });
        await activePage.waitForTimeout(400);

        // Run in-page evaluation
        const pageIssues = await activePage.evaluate((isMobileVp) => {
          const issues = [];
          const winWidth = window.innerWidth;
          const docScrollWidth = document.scrollingElement.scrollWidth;

          // 1. Horizontal Page Overflow
          if (docScrollWidth > winWidth + 1.5) {
            const overflowingEls = [];
            document.querySelectorAll("*").forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.right > winWidth + 2 && rect.width > 0 && rect.height > 0) {
                // Ignore SVG defs or elements inside horizontally scrollable containers
                let parent = el.parentElement;
                let insideScrollContainer = false;
                while (parent) {
                  const style = window.getComputedStyle(parent);
                  if (style.overflowX === "auto" || style.overflowX === "scroll") {
                    insideScrollContainer = true;
                    break;
                  }
                  parent = parent.parentElement;
                }
                if (!insideScrollContainer && overflowingEls.length < 5) {
                  overflowingEls.push({
                    tag: el.tagName.toLowerCase(),
                    className: (el.className || "").toString().slice(0, 60),
                    right: Math.round(rect.right),
                    overflow: Math.round(rect.right - winWidth),
                  });
                }
              }
            });

            issues.push({
              type: "HORIZONTAL_OVERFLOW",
              severity: "CRITICAL",
              details: `Page scrollWidth (${docScrollWidth}px) exceeds window width (${winWidth}px) by ${docScrollWidth - winWidth}px`,
              offendingElements: overflowingEls,
            });
          }

          // 2. Tap target sizes (< 44x44 on mobile/tablets)
          if (isMobileVp) {
            const smallTargets = [];
            const clickableSelectors = "button, a, input, select, textarea, [role='button']";
            document.querySelectorAll(clickableSelectors).forEach((el) => {
              const rect = el.getBoundingClientRect();
              // Exclude hidden elements or tiny inline markdown links
              if (rect.width > 0 && rect.height > 0 && el.offsetParent !== null) {
                const isInlineTextLink = el.tagName === "A" && el.closest("p, span") && rect.height < 30;
                if (!isInlineTextLink && (rect.width < 44 || rect.height < 44)) {
                  if (smallTargets.length < 8) {
                    smallTargets.push({
                      tag: el.tagName.toLowerCase(),
                      text: (el.innerText || el.getAttribute("aria-label") || "").trim().slice(0, 30),
                      width: Math.round(rect.width),
                      height: Math.round(rect.height),
                      className: (el.className || "").toString().slice(0, 50),
                    });
                  }
                }
              }
            });

            if (smallTargets.length > 0) {
              issues.push({
                type: "SMALL_TAP_TARGETS",
                severity: "WARNING",
                count: smallTargets.length,
                details: `${smallTargets.length} interactive elements under 44x44 CSS px`,
                elements: smallTargets,
              });
            }

            // 3. Inputs with font size < 16px (Causes iOS Safari auto-zoom)
            const smallInputs = [];
            document.querySelectorAll("input:not([type='hidden']), select, textarea").forEach((input) => {
              const style = window.getComputedStyle(input);
              const fontSize = parseFloat(style.fontSize);
              if (fontSize < 15.5 && input.offsetParent !== null) {
                smallInputs.push({
                  name: input.getAttribute("name") || input.getAttribute("id") || input.getAttribute("type") || "input",
                  fontSize: `${fontSize}px`,
                  tag: input.tagName.toLowerCase(),
                });
              }
            });

            if (smallInputs.length > 0) {
              issues.push({
                type: "INPUT_ZOOM_RISK",
                severity: "WARNING",
                details: `${smallInputs.length} form inputs have font-size < 16px, triggering iOS auto-zoom`,
                inputs: smallInputs,
              });
            }
          }

          // 4. Tables overflowing container without responsive wrapper
          document.querySelectorAll("table").forEach((tbl) => {
            const rect = tbl.getBoundingClientRect();
            let parent = tbl.parentElement;
            let hasScrollWrapper = false;
            while (parent && parent !== document.body) {
              const style = window.getComputedStyle(parent);
              if (style.overflowX === "auto" || style.overflowX === "scroll") {
                hasScrollWrapper = true;
                break;
              }
              parent = parent.parentElement;
            }
            if (!hasScrollWrapper && rect.width > winWidth) {
              issues.push({
                type: "UNWRAPPED_TABLE",
                severity: "HIGH",
                details: `Table width (${Math.round(rect.width)}px) exceeds viewport without overflow-x container`,
              });
            }
          });

          return issues;
        }, vp.isMobile || vp.isTablet);

        const hasCritical = pageIssues.some((i) => i.severity === "CRITICAL" || i.severity === "HIGH");
        let screenshotFile = null;

        // Capture screenshot if issues exist or for primary viewports (360px, 390px, 768px)
        if (hasCritical || ["360x740", "390x844", "768x1024"].includes(vp.name)) {
          screenshotFile = `audit_${vp.name}_${r.name}.png`;
          const filePath = path.join(AUDIT_DIR, screenshotFile);
          await activePage.screenshot({ path: filePath, fullPage: true });
        }

        auditResults.push({
          route: r.name,
          path: r.path,
          viewport: vp.name,
          width: vp.width,
          height: vp.height,
          issues: pageIssues,
          screenshot: screenshotFile,
        });

        if (pageIssues.length > 0) {
          console.log(`  ⚠ ${r.name} (${vp.name}): ${pageIssues.length} issues detected`);
        } else {
          console.log(`  ✓ ${r.name} (${vp.name}): clean`);
        }
      } catch (err) {
        console.error(`  ✗ Error auditing ${r.name} at ${vp.name}:`, err.message);
      }
    }

    await publicContext.close();
    for (const k of Object.keys(authContexts)) {
      await authContexts[k].context.close();
    }
  }

  await browser.close();

  // Save audit data to JSON
  fs.writeFileSync(
    path.join(process.cwd(), "docs", "responsive-audit.json"),
    JSON.stringify(auditResults, null, 2),
    "utf8"
  );

  // Generate markdown report
  generateMarkdownReport(auditResults);
}

function generateMarkdownReport(results) {
  let md = `# Trainbow HUB Comprehensive Responsive Audit Report

**Audit Execution Date**: ${new Date().toISOString()}  
**Target Viewports Evaluated**: 320x568, 360x740, 375x667, 390x844, 412x915, 667x375 (landscape), 768x1024 (tablet), 1024x768 (tablet landscape), 1280x800, 1536x900.  
**Total Test Checks Executed**: ${results.length} route-viewport combinations.

---

## 1. Executive Summary & Audit Matrix

| Route | 320x568 | 360x740 | 375x667 | 390x844 | 412x915 | 667x375 (L) | 768x1024 | 1024x768 | 1280x800 | 1536x900 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
`;

  // Aggregate by route
  const routesSet = [...new Set(results.map((r) => r.route))];
  const viewportsList = [
    "320x568",
    "360x740",
    "375x667",
    "390x844",
    "412x915",
    "667x375",
    "768x1024",
    "1024x768",
    "1280x800",
    "1536x900",
  ];

  for (const rt of routesSet) {
    let row = `| \`${rt}\` `;
    for (const vp of viewportsList) {
      const match = results.find((r) => r.route === rt && r.viewport === vp);
      if (!match) {
        row += `| - `;
      } else if (match.issues.some((i) => i.severity === "CRITICAL")) {
        row += `| 🔴 `;
      } else if (match.issues.some((i) => i.severity === "HIGH" || i.severity === "WARNING")) {
        row += `| ⚠️ `;
      } else {
        row += `| 🟢 `;
      }
    }
    row += `|\n`;
    md += row;
  }

  md += `
*Legend: 🟢 Clean / No layout defects; ⚠️ Minor tap target or font-size warning; 🔴 Horizontal overflow or layout break.*

---

## 2. Issues Breakdown by Category

`;

  // Categorize issues
  const overflowIssues = results.filter((r) => r.issues.some((i) => i.type === "HORIZONTAL_OVERFLOW"));
  const smallTapIssues = results.filter((r) => r.issues.some((i) => i.type === "SMALL_TAP_TARGETS"));
  const inputZoomIssues = results.filter((r) => r.issues.some((i) => i.type === "INPUT_ZOOM_RISK"));
  const tableIssues = results.filter((r) => r.issues.some((i) => i.type === "UNWRAPPED_TABLE"));

  md += `### 2.1 Horizontal Page Overflow (Critical)
**Total occurrences**: ${overflowIssues.length} route/viewport pairs.
`;

  for (const r of overflowIssues) {
    const issue = r.issues.find((i) => i.type === "HORIZONTAL_OVERFLOW");
    md += `- **Route \`${r.route}\` at ${r.viewport}**: ${issue.details}\n`;
    if (issue.offendingElements && issue.offendingElements.length > 0) {
      issue.offendingElements.forEach((el) => {
        md += `  - Offending tag: \`<${el.tag}>\`, class: \`${el.className}\`, overflow: +${el.overflow}px\n`;
      });
    }
  }

  md += `\n### 2.2 Interactive Tap Targets Under 44x44 CSS px
**Total occurrences**: ${smallTapIssues.length} route/viewport pairs.
`;
  for (const r of smallTapIssues.slice(0, 15)) {
    const issue = r.issues.find((i) => i.type === "SMALL_TAP_TARGETS");
    md += `- **Route \`${r.route}\` at ${r.viewport}**: ${issue.details}\n`;
  }

  md += `\n### 2.3 Form Inputs with Font Size < 16px (iOS Safari Auto-Zoom Risk)
**Total occurrences**: ${inputZoomIssues.length} route/viewport pairs.
`;
  for (const r of inputZoomIssues) {
    const issue = r.issues.find((i) => i.type === "INPUT_ZOOM_RISK");
    md += `- **Route \`${r.route}\` at ${r.viewport}**: ${issue.details}\n`;
  }

  md += `\n### 2.4 Unwrapped Tables
**Total occurrences**: ${tableIssues.length} route/viewport pairs.
`;
  for (const r of tableIssues) {
    const issue = r.issues.find((i) => i.type === "UNWRAPPED_TABLE");
    md += `- **Route \`${r.route}\` at ${r.viewport}**: ${issue.details}\n`;
  }

  md += `
---

## 3. Recommended Remediation Plan
1. **Global Viewport & Insets**: Enforce \`viewport-fit=cover\`, dynamic viewport units (\`dvh\`), and root-level horizontal overflow prevention.
2. **Global Navigation Collapse**: Replace desktop multi-link navbar with mobile sheet toggle below 1024px.
3. **Typography & Inputs**: Increase form inputs to $\ge 16\\text{px}$ font-size across mobile breakpoints.
4. **Interactive Target Sizing**: Ensure min 44x44px bounding boxes with touch-target expansions.
5. **Component Primitives**: Introduce \`ResponsiveContainer\`, \`ResponsiveGrid\`, \`ResponsiveTable\`, \`BottomSheet\`, \`TabBar\`, \`ScrollableTabs\`, \`StickyActionBar\`.
`;

  fs.writeFileSync(path.join(process.cwd(), "docs", "responsive-audit.md"), md, "utf8");
  console.log("Successfully generated docs/responsive-audit.md and docs/responsive-audit.json");
}

runAudit().catch(console.error);

