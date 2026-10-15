import { test, expect } from "@playwright/test";

test.describe("Phase B: Public Website, Catalogue & Legal Slice", () => {
  test("loads /academy and verifies subject catalogue", async ({ page }) => {
    await page.goto("/academy");
    await expect(page.getByRole("heading", { name: /Curriculum-Aligned Courses & Revision Mastery/i })).toBeVisible();
    await expect(page.getByText("Mathematics").first()).toBeVisible();
    await expect(page.getByText("English Language").first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Explore Syllabus" }).first()).toBeVisible();
  });

  test("loads /academy/mathematics and displays courses & tutors", async ({ page }) => {
    await page.goto("/academy/mathematics");
    await expect(page.getByRole("heading", { name: "Mathematics", exact: true })).toBeVisible();
    await expect(page.getByText(/WAEC & SSCE Comprehensive Mathematics Mastery/i)).toBeVisible();
    await expect(page.getByText(/JAMB UTME Speed & Strategy Mathematics/i)).toBeVisible();
    await expect(page.getByText(/Verified Mathematics Tutors/i)).toBeVisible();
  });

  test("loads course details page (/courses/waec-ssce-mathematics-mastery)", async ({ page }) => {
    await page.goto("/courses/waec-ssce-mathematics-mastery");
    await expect(page.getByRole("heading", { name: /WAEC & SSCE Comprehensive Mathematics Mastery/i })).toBeVisible();
    await expect(page.getByText(/Dr\. Tayo Okafor/i).first()).toBeVisible();
    await expect(page.getByText(/Course Syllabus/i).first()).toBeVisible();
    await expect(page.getByText(/Free Preview/i).first()).toBeVisible();
    await expect(page.getByText(/Enrol in Course/i)).toBeVisible();
  });

  test("loads /ai page and verifies Socratic methodology and safety architecture", async ({ page }) => {
    await page.goto("/ai");
    await expect(page.getByRole("heading", { name: /Trainbow HUB AI:/i })).toBeVisible();
    await expect(page.getByText(/Hints Before Solutions/i)).toBeVisible();
    await expect(page.getByText(/Programmatic Verification/i)).toBeVisible();
    await expect(page.getByText(/Architectural Safeguards for Nigerian Students/i)).toBeVisible();
  });

  test("verifies /tutors redirects to /request-tutor with concierge matching", async ({ page }) => {
    await page.goto("/tutors");
    await expect(page).toHaveURL(/.*\/request-tutor/);
    await expect(page.getByRole("heading", { name: /Get matched with a verified tutor/i })).toBeVisible();
    await expect(page.getByText(/Mr Oyedeji S.T/i).first()).toBeVisible();
  });

  test("verifies tutor profile route (/tutors/dr-tayo-okafor) redirects to /request-tutor", async ({ page }) => {
    await page.goto("/tutors/dr-tayo-okafor");
    await expect(page).toHaveURL(/.*\/request-tutor/);
    await expect(page.getByRole("heading", { name: /Get matched with a verified tutor/i })).toBeVisible();
  });

  test("loads /music and verifies music tuition overview", async ({ page }) => {
    await page.goto("/music");
    await expect(page.getByRole("heading", { name: /Master Instrument, Theory & Voice/i })).toBeVisible();
    await expect(page.getByText("ABRSM & MUSON Curriculum Accredited").first()).toBeVisible();
  });

  test("loads /pricing and verifies clear pricing tiers and refund policy breakdown", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByRole("heading", { name: /Clear Pricing\. Zero Hidden Fees\./i })).toBeVisible();
    await expect(page.getByText("₦3,500").first()).toBeVisible();
    await expect(page.getByText("From ₦5,000").first()).toBeVisible();
    await expect(page.getByText(/Payment Safeguards & Refund Policy/i)).toBeVisible();
  });

  test("loads /about, /contact, /faq, and /become-a-tutor", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { name: /Empowering Nigerian Learners/i })).toBeVisible();

    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: /Contact Support & Inquiries/i })).toBeVisible();

    await page.goto("/faq");
    await expect(page.getByRole("heading", { name: /Frequently Asked Questions/i })).toBeVisible();

    await page.goto("/become-a-tutor");
    await expect(page.getByRole("heading", { name: /Teach on Trainbow HUB/i })).toBeVisible();
  });

  test("verifies all four legal pages display the mandatory NDPA legal review banner", async ({ page }) => {
    const legalPages = [
      "/legal/terms",
      "/legal/privacy",
      "/legal/safeguarding",
      "/legal/refunds",
    ];

    const expectedBannerText = "DRAFT POLICY — Flagged for formal legal review by a qualified Nigerian legal practitioner under the Nigeria Data Protection Act 2023.";

    for (const path of legalPages) {
      await page.goto(path);
      await expect(page.getByText(expectedBannerText)).toBeVisible();
    }
  });

  test("verifies robots.txt and sitemap.xml endpoints", async ({ request }) => {
    const robotsRes = await request.get("/robots.txt");
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain("Disallow: /dev/");
    expect(robotsText).toContain("Disallow: /admin/");
    expect(robotsText).toContain("sitemap.xml");

    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.status()).toBe(200);
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).toContain("trainbowhub.ng");
    expect(sitemapText).toContain("/academy");
    expect(sitemapText).toContain("/request-tutor");
    expect(sitemapText).toContain("/legal/safeguarding");
  });
});
