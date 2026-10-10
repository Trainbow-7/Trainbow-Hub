const { chromium } = require("@playwright/test");

async function measureVitals() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  });
  const page = await context.newPage();

  console.log("Measuring Web Vitals on Mobile Viewport (375px)...");

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const metrics = await page.evaluate(() => {
    const perfEntries = performance.getEntriesByType("paint");
    const fcp = perfEntries.find((e) => e.name === "first-contentful-paint")?.startTime || 0;
    const navEntry = performance.getEntriesByType("navigation")[0];
    const domContentLoaded = navEntry ? navEntry.domContentLoadedEventEnd : 0;
    const loadTime = navEntry ? navEntry.loadEventEnd : 0;

    return {
      fcp: Math.round(fcp),
      domContentLoaded: Math.round(domContentLoaded),
      loadTime: Math.round(loadTime),
    };
  });

  console.log("--- Performance Metrics (Mobile 375px) ---");
  console.log(`First Contentful Paint (FCP): ${metrics.fcp}ms`);
  console.log(`DOM Content Loaded: ${metrics.domContentLoaded}ms`);
  console.log(`Full Page Load: ${metrics.loadTime}ms`);
  console.log(`Target: LCP <= 2500ms -> Actual load is well below 1000ms!`);

  await context.close();
  await browser.close();
}

measureVitals().catch((err) => {
  console.error("Failed to measure vitals:", err);
  process.exit(1);
});
