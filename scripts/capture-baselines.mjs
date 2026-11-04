import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUTPUT_DIR = path.join(process.cwd(), "screenshots", "baselines");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const PUBLIC_ROUTES = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "academy", path: "/academy" },
  { name: "academy-mathematics", path: "/academy/mathematics" },
  { name: "course-waec", path: "/courses/waec-ssce-mathematics-mastery" },
  { name: "course-jamb", path: "/courses/jamb-utme-speed-mathematics" },
  { name: "lesson-fractions", path: "/courses/waec-ssce-mathematics-mastery/lessons/fractions-decimals-operations" },
  { name: "lesson-trig", path: "/courses/ss2-algebra-and-trigonometry-deep-dive/lessons/trig-ratios-four-quadrants-cast" },
  { name: "ai-workspace", path: "/ai" },
  { name: "music", path: "/music" },
  { name: "pricing", path: "/pricing" },
  { name: "request-tutor", path: "/request-tutor" },
  { name: "request-tutor-new", path: "/request-tutor/new" },
  { name: "login", path: "/login" },
  { name: "register", path: "/register" },
  { name: "become-a-tutor", path: "/become-a-tutor" },
  { name: "faq", path: "/faq" },
  { name: "contact", path: "/contact" },
  { name: "legal-terms", path: "/legal/terms" },
  { name: "legal-privacy", path: "/legal/privacy" },
  { name: "legal-refunds", path: "/legal/refunds" },
  { name: "legal-safeguarding", path: "/legal/safeguarding" },
];

const AUTH_ACCOUNTS = [
  {
    role: "student",
    email: "student@trainbowhub.ng",
    password: "Trainbow2026!",
    routes: [
      { name: "student-dashboard", path: "/dashboard" },
      { name: "student-bookings", path: "/bookings" },
    ],
  },
  {
    role: "parent",
    email: "parent@trainbowhub.ng",
    password: "Trainbow2026!",
    routes: [
      { name: "parent-guardian", path: "/guardian" },
      { name: "parent-guardian-consent", path: "/guardian/consent" },
    ],
  },
  {
    role: "tutor",
    email: "tutor@trainbowhub.ng",
    password: "Trainbow2026!",
    routes: [
      { name: "tutor-dashboard", path: "/dashboard/tutor" },
      { name: "tutor-authoring", path: "/authoring" },
    ],
  },
  {
    role: "admin",
    email: "admin@trainbowhub.ng",
    password: "TrainbowAdmin2026!",
    routes: [
      { name: "admin-overview", path: "/admin" },
      { name: "admin-matching", path: "/admin/matching" },
      { name: "admin-roster", path: "/admin/roster" },
      { name: "admin-release-gates", path: "/release-gates" },
    ],
  },
  {
    role: "support-director",
    email: "director@trainbowhub.ng",
    password: "TrainbowAdmin2026!",
    routes: [
      { name: "director-matching", path: "/admin/matching" },
    ],
  },
];

const VIEWPORTS = [
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "desktop-1536", width: 1536, height: 960 },
];

async function capture() {
  console.log("=== CAPTURING GOLDEN DESKTOP BASELINES (1280px & 1536px) ===");
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n--- Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);

    // 1. Capture public routes
    const pubContext = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const pubPage = await pubContext.newPage();

    for (const r of PUBLIC_ROUTES) {
      try {
        await pubPage.goto(`${BASE_URL}${r.path}`, { waitUntil: "networkidle", timeout: 25000 });
        await pubPage.waitForTimeout(600);
        const fileName = `baseline_${vp.width}px_${r.name}.png`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        await pubPage.screenshot({ path: filePath, fullPage: true });
        console.log(`  ✓ Public: ${r.name} -> ${fileName}`);
      } catch (err) {
        console.error(`  ✗ Failed public ${r.name}:`, err.message);
      }
    }
    await pubContext.close();

    // 2. Capture authenticated routes for each role
    for (const acc of AUTH_ACCOUNTS) {
      console.log(`\n  Logging in as ${acc.role} (${acc.email})...`);
      const authContext = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const authPage = await authContext.newPage();

      try {
        // Log in via API
        const loginRes = await authContext.request.post(`${BASE_URL}/api/auth/login`, {
          data: { email: acc.email, password: acc.password },
        });

        if (!loginRes.ok()) {
          console.error(`  ✗ Login failed for ${acc.role}: HTTP ${loginRes.status()}`);
          await authContext.close();
          continue;
        }

        for (const r of acc.routes) {
          try {
            await authPage.goto(`${BASE_URL}${r.path}`, { waitUntil: "networkidle", timeout: 25000 });
            await authPage.waitForTimeout(600);
            const fileName = `baseline_${vp.width}px_${r.name}.png`;
            const filePath = path.join(OUTPUT_DIR, fileName);
            await authPage.screenshot({ path: filePath, fullPage: true });
            console.log(`    ✓ Auth [${acc.role}]: ${r.name} -> ${fileName}`);
          } catch (err) {
            console.error(`    ✗ Failed auth ${r.name}:`, err.message);
          }
        }
      } catch (err) {
        console.error(`  ✗ Auth error for ${acc.role}:`, err.message);
      } finally {
        await authContext.close();
      }
    }
  }

  await browser.close();
  console.log("\n=== ALL DESKTOP BASELINE SCREENSHOTS CAPTURED ===");
}

capture().catch((err) => {
  console.error("Capture baselines script failed:", err);
  process.exit(1);
});

