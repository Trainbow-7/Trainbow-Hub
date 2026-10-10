import { test, expect } from "@playwright/test";

test.describe("Phase 0 Foundation Smoke Test", () => {
  test("loads landing page, verifies branding and API health status", async ({ page }) => {
    await page.goto("/");

    // Verify brand wordmark and tagline in header
    const brandLink = page.getByRole("banner").getByRole("link", { name: /Trainbow HUB/i });
    await expect(brandLink).toBeVisible();
    await expect(page.getByRole("banner").getByText("Learn • Connect • Grow")).toBeVisible();

    // Verify hero section
    await expect(
      page.getByRole("heading", { name: /The Resilient Learning Hub Built for/i })
    ).toBeVisible();

    // Verify service pillar cards
    await expect(page.getByText("Curriculum & Courses")).toBeVisible();
    await expect(page.getByText("Mathematics Assistant")).toBeVisible();
    await expect(page.getByText("1-on-1 Marketplace")).toBeVisible();

    // Verify health badge
    await expect(page.getByText(/API Healthy/i)).toBeVisible();

    // Verify tabs switching
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
