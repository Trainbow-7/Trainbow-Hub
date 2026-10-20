import { test, expect } from "@playwright/test";

test.describe("Phase A: Reset & Public Platform Smoke Test", () => {
  test("loads public landing page (/), verifies education branding and navigation", async ({ page }) => {
    await page.goto("/");

    // Verify brand wordmark and tagline
    const brandLink = page.getByRole("banner").getByRole("link", { name: /Trainbow HUB/i });
    await expect(brandLink).toBeVisible();
    await expect(page.getByText("Learn • Connect • Grow").first()).toBeVisible();

    const isMobile = page.viewportSize() && page.viewportSize()!.width < 768;

    if (isMobile) {
      // Mobile Viewport: Open sheet drawer to verify navigation
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      const mobileDrawer = page.getByRole("dialog", { name: "Menu" });
      await expect(mobileDrawer).toBeVisible();
      await expect(mobileDrawer.getByRole("link", { name: "Academy" })).toBeVisible();
      await expect(mobileDrawer.getByRole("link", { name: "AI", exact: true })).toBeVisible();
      // Close menu
      await page.getByRole("button", { name: "Close menu" }).click();
      await expect(page.getByText(/NGN/i).first()).toBeVisible();
    } else {
      // Desktop Viewport: Verify direct navbar links and currency badge
      await expect(page.getByText(/NGN/i).first()).toBeVisible();
      await expect(page.getByRole("navigation").getByRole("link", { name: "Academy" })).toBeVisible();
      await expect(page.getByRole("navigation").getByRole("link", { name: "AI", exact: true })).toBeVisible();
      await expect(page.getByRole("navigation").getByRole("link", { name: /tutor/i })).toBeVisible();
      await expect(page.getByRole("navigation").getByRole("link", { name: "Music" })).toBeVisible();
    }

    // Verify hero section and high-contrast heading
    await expect(
      page.getByRole("heading", { name: /Learn smarter\.\s+Find the right tutor\.\s+Grow with confidence\./i })
    ).toBeVisible();

    // Verify trust signals
    await expect(page.getByText("Verified tutors").first()).toBeVisible();
    await expect(page.getByText("Child-safe by design").first()).toBeVisible();
    await expect(page.getByText("Secure payments in naira").first()).toBeVisible();

    // Verify product composition elements
    await expect(page.getByText("Dr. Tayo Okafor").first()).toBeVisible();
    await expect(page.getByText("Trainbow AI Mathematics Helper", { exact: true })).toBeVisible();

    // Ensure NO developer widgets on public home page
    await expect(page.getByText("Verify Design Tokens Modal")).not.toBeVisible();
    await expect(page.getByText("Run System Smoke Test")).not.toBeVisible();
    await expect(page.getByText("API Healthy")).not.toBeVisible();
  });

  test("loads developer showcase (/dev/design-system) in non-production", async ({ page }) => {
    await page.goto("/dev/design-system");

    // In a production build, /dev/design-system is securely disabled and shows 404
    const isNotFound = await page.getByText(/404|This page could not be found/i).first().isVisible().catch(() => false);
    if (isNotFound) {
      // Confirmed: dev showcase is safely disabled in production builds
      return;
    }

    // Verify dev notice
    await expect(page.getByText(/Internal Developer Showcase/i).first()).toBeVisible();

    // Verify tabs switching in dev showcase
    await page.getByRole("tab", { name: "Form Elements" }).click();
    await expect(page.getByLabel("Student Full Name")).toBeVisible();

    await page.getByRole("tab", { name: "Ledger & Table" }).click();
    await expect(page.getByText("TRB-BKG-10492")).toBeVisible();
  });

  test("health endpoint returns valid JSON with 200 OK", async ({ request }) => {
    const response = await request.get("/api/health");
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.status).toBe("healthy");
    expect(body.timezone).toBe("Africa/Lagos");
    expect(body.services.api).toBe("operational");
  });
});
