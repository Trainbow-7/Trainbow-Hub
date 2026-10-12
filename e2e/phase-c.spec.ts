import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("Phase C: Identity, RBAC & Guardian Consent Architecture", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
  });

  test("Login page renders all credentials presets and allows 1-tap sign-in", async ({ page, isMobile }) => {
    await page.goto("/login");

    // Header & Brand elements
    await expect(page.locator("h1")).toContainText("Sign in to your account");
    await expect(page.getByText("Quick Demo Sign-In (1-Tap Selection)")).toBeVisible();

    // Verify all 5 demo role presets are visible
    await expect(page.getByRole("button", { name: "Learner (Adult)" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Learner \(Minor/i })).toBeVisible();
    await expect(page.getByRole("button", { name: "Parent / Guardian" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Vetted Tutor" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Platform Admin" })).toBeVisible();

    // Click Adult Learner preset
    await page.getByRole("button", { name: "Learner (Adult)" }).click();

    // Verify form filled
    const emailInput = page.locator("#email");
    const passwordInput = page.locator("#password");
    await expect(emailInput).toHaveValue("student@trainbowhub.ng");
    await expect(passwordInput).toHaveValue("Trainbow2026!");

    // Submit login
    await page.getByRole("button", { name: "Sign in", exact: true }).click();

    // Should redirect to home
    await page.waitForURL("/");

    if (isMobile) {
      // On mobile, check user details in drawer sheet
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.locator('[data-testid="mobile-user-name"]')).toContainText("Chioma Adeleke");
      await expect(page.locator('[data-testid="mobile-user-role"]')).toHaveText("Learner");
      // Log out
      await page.getByRole("button", { name: "Log out" }).click();
      // Reopen menu to verify guest actions
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.getByRole("link", { name: "Log in" }).or(page.getByRole("button", { name: "Log in" }))).toBeVisible();
    } else {
      // Desktop navbar indicator
      await expect(page.locator('[data-testid="navbar-user-name"]')).toHaveText("Chioma");
      await expect(page.locator('[data-testid="navbar-user-role"]')).toHaveText("Learner");
      // Log out
      await page.getByRole("button", { name: "Sign out of account" }).click();
      await expect(page.getByRole("link", { name: "Log in" }).or(page.getByRole("button", { name: "Log in" }))).toBeVisible();
    }
  });

  test("Registration dynamically detects minor age and displays NDPA guardian fields", async ({ page }) => {
    await page.goto("/register");

    // Verify tabs
    await expect(page.getByRole("tab", { name: /Learner/i })).toBeVisible();
    await expect(page.getByRole("tab", { name: /Parent/i })).toBeVisible();
    await expect(page.getByRole("tab", { name: /Tutor/i })).toBeVisible();

    // Fill common learner info
    const timestamp = Date.now();
    await page.locator("#reg-fullname").fill(`Olumide Adeleke ${timestamp}`);
    await page.locator("#reg-email").fill(`olumide-${timestamp}@example.com`);
    await page.locator("#reg-password").fill("Trainbow2026!");

    // Initially with empty DOB, guardian card should not be visible
    await expect(page.getByText("Parent / Guardian Consent Required (NDPA 2023 Section 31)")).not.toBeVisible();

    // Enter a minor DOB (age 14: 2012-05-15)
    await page.locator("#reg-dob").fill("2012-05-15");

    // NDPA Safeguard card should immediately become visible
    await expect(page.getByText("Parent / Guardian Consent Required (NDPA 2023 Section 31)")).toBeVisible();
    await expect(page.locator("#guardian-name")).toBeVisible();
    await expect(page.locator("#guardian-rel")).toBeVisible();

    // Fill guardian information
    await page.locator("#guardian-name").fill("Mrs. Folake Adeleke");
    await page.locator("#guardian-email").fill("folake.adeleke@example.com");

    // Submit registration
    await page.getByRole("button", { name: /Create Account & Send Guardian Passcode/i }).click();

    // Should redirect to guardian consent page
    await page.waitForURL(/\/guardian\/consent\?studentId=/);
    await expect(page.locator("h1")).toContainText("Parent / Guardian Verification");
  });

  test("Minor student login redirects to NDPA 2023 guardian consent portal and completes OTP verification", async ({ page }) => {
    // Reset seed data before testing minor verification flow
    await page.request.post("/api/auth/reset");

    await page.goto("/login");

    // Click Minor Learner preset
    await page.getByRole("button", { name: /Learner \(Minor/i }).click();
    await expect(page.locator("#email")).toHaveValue("minor@trainbowhub.ng");

    // Submit
    await page.getByRole("button", { name: "Sign in", exact: true }).click();

    // Should be redirected to guardian consent page
    await page.waitForURL(/\/guardian\/consent\?studentId=/);

    // Verify statutory headings
    await expect(page.getByText("NDPA 2023 Section 31 Statutory Safeguard")).toBeVisible();
    await expect(page.locator("h1")).toContainText("Parent / Guardian Verification");

    // Use demo OTP code helper
    await page.getByRole("button", { name: "Use Demo Code (202610)" }).click();
    const otpInput = page.locator("#guardian-otp");
    await expect(otpInput).toHaveValue("202610");

    // Submit verification
    await page.getByRole("button", { name: /Authorize & Activate/i }).click();

    // Verify success state
    await expect(page.locator("h2")).toContainText("Guardian Consent Confirmed!");
    await expect(page.getByText("Statutory Compliance Audit Log Recorded")).toBeVisible();
    await expect(page.getByRole("button", { name: "Explore Academy Courses" })).toBeVisible();
  });

  test("Tutor sign-in displays verified tutor role and Dr. Tayo Okafor profile", async ({ page, isMobile }) => {
    await page.goto("/login");

    // Click Tutor preset
    await page.getByRole("button", { name: "Vetted Tutor" }).click();
    await expect(page.locator("#email")).toHaveValue("tutor@trainbowhub.ng");

    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await page.waitForURL("/");

    if (isMobile) {
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.locator('[data-testid="mobile-user-name"]')).toContainText("Dr. Tayo Okafor");
      await expect(page.locator('[data-testid="mobile-user-role"]')).toHaveText("Tutor");
    } else {
      await expect(page.locator('[data-testid="navbar-user-name"]')).toHaveText("Dr.");
      await expect(page.locator('[data-testid="navbar-user-role"]')).toHaveText("Tutor");
    }
  });

  test("Administrator sign-in displays admin role", async ({ page, isMobile }) => {
    await page.goto("/login");

    // Click Admin preset
    await page.getByRole("button", { name: "Platform Admin" }).click();
    await expect(page.locator("#email")).toHaveValue("admin@trainbowhub.ng");

    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await page.waitForURL("/");

    if (isMobile) {
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.locator('[data-testid="mobile-user-name"]')).toContainText("Trainbow Administrator");
      await expect(page.locator('[data-testid="mobile-user-role"]')).toHaveText("Admin");
    } else {
      await expect(page.locator('[data-testid="navbar-user-name"]')).toHaveText("Trainbow");
      await expect(page.locator('[data-testid="navbar-user-role"]')).toHaveText("Admin");
    }
  });
});
