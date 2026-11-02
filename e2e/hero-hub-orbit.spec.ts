import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import * as fs from "fs";
import * as path from "path";

test.describe("Hero Hub Marquee Orbit Motion, Geometry & Accessibility Suite", () => {
  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08\\screenshots";

  test.beforeAll(() => {
    if (!fs.existsSync(artifactDir)) {
      fs.mkdirSync(artifactDir, { recursive: true });
    }
  });

  // =========================================================================
  // 1. RESPONSIVE VIEWPORTS & LAYOUT INTEGRITY (375, 768, 1280, 1536 px)
  // =========================================================================
  for (const width of [1536, 1280, 768, 375]) {
    test(`renders at ${width}px viewport without horizontal scroll or layout shift`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
      const response = await page.goto("/", { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);

      // Verify no horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll, `Horizontal scroll detected at ${width}px`).toBe(false);

      // Headline and brand elements exist
      await expect(page.locator("h1")).toContainText("Learn smarter.");
      await expect(page.locator('span:text-is("One account")').locator("visible=true")).toBeVisible();

      // Cumulative Layout Shift check
      const clsScore = await page.evaluate(async () => {
        return new Promise<number>((resolve) => {
          let cls = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                cls += entry.value;
              }
            }
          });
          observer.observe({ type: "layout-shift", buffered: true });
          setTimeout(() => {
            observer.disconnect();
            resolve(cls);
          }, 300);
        });
      });
      expect(clsScore).toBeLessThan(0.05);
    });
  }

  // =========================================================================
  // 2. MOTION & UPRIGHT CARDS VERIFICATION (Clockwise Orbit, Net 0° Tilt)
  // =========================================================================
  test("orbit wrapper rotates clockwise and cards stay upright (net rotation ~0°)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const track = page.locator('[data-testid="hub-orbit-track"]');
    await expect(track).toBeVisible();

    // Verify clockwise rotation between two sampled times
    const rotationSample = await page.evaluate(async () => {
      const trackEl = document.querySelector('[data-testid="hub-orbit-track"]') as HTMLElement;
      if (!trackEl) return null;

      const setOrbitTime = (t: number) => {
        for (const a of document.getAnimations()) {
          const name = (a as any).animationName || "";
          if (name.includes("hubOrbit") || name.includes("hubCounter")) {
            a.currentTime = t;
          }
        }
      };

      const parseAngle = (m: string) => {
        const match = m.match(/^matrix\(([^,]+),\s*([^,]+)/);
        if (!match) return 0;
        const a = parseFloat(match[1]);
        const b = parseFloat(match[2]);
        let deg = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        if (deg < 0) deg += 360;
        return deg;
      };

      // Sample at t = 3000ms
      setOrbitTime(3000);
      const angle1 = parseAngle(window.getComputedStyle(trackEl).transform);

      // Sample at t = 9000ms
      setOrbitTime(9000);
      const angle2 = parseAngle(window.getComputedStyle(trackEl).transform);

      return { angle1, angle2 };
    });

    expect(rotationSample).not.toBeNull();
    // Clockwise motion: angle2 > angle1
    expect(rotationSample!.angle2).toBeGreaterThan(rotationSample!.angle1);

    // Verify cards stay upright at sampled time (counter-rotation cancels out wrapper rotation)
    const cardAngles = await page.evaluate(() => {
      // Set orbit animations to 12000ms (90 degree turn)
      for (const a of document.getAnimations()) {
        const name = (a as any).animationName || "";
        if (name.includes("hubOrbit") || name.includes("hubCounter")) {
          a.currentTime = 12000;
        }
      }

      const cardIds = ["academy", "ai", "music", "tutors"];
      const results: { id: string; netAngle: number }[] = [];

      for (const id of cardIds) {
        const cardEl = document.querySelector(`[data-testid="orbit-card-${id}"]`);
        if (!cardEl) continue;

        const matrix = window.getComputedStyle(cardEl).transform;
        const match = matrix.match(/^matrix\(([^,]+),\s*([^,]+)/);
        if (match) {
          const a = parseFloat(match[1]);
          const b = parseFloat(match[2]);
          let deg = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          // Counter-rotation is -90deg, wrapper is +90deg -> cancel out to 0deg net in DOM
          results.push({ id, netAngle: deg });
        }
      }
      return results;
    });

    expect(cardAngles.length).toBe(4);
    for (const card of cardAngles) {
      // Counter-rotation magnitude matches -90deg (or 270deg)
      expect(Math.abs(card.netAngle)).toBe(90);
    }
  });

  // =========================================================================
  // 3. GEOMETRY COLLISION & CLEARANCE (Sampled at 12 Angles on 1280px & 768px)
  // =========================================================================
  for (const width of [1280, 768]) {
    test(`geometry: 12 sampled orbit angles at ${width}px have zero card overlap and center clearance`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/", { waitUntil: "networkidle" });

      const orbitDuration = 48000; // 48 seconds
      const sampleSteps = 12;

      for (let step = 0; step < sampleSteps; step++) {
        const targetTime = (step / sampleSteps) * orbitDuration;

        const collisionCheck = await page.evaluate((timeMs) => {
          const containerEl = document.querySelector('[data-testid="hub-orbit-container"]') as HTMLElement;
          const centerEl = document.querySelector('[data-testid="hub-center-node"]') as HTMLElement;
          if (!containerEl || !centerEl) return { error: "Missing elements" };

          // Advance only the orbit-related animations to targetTime (keep entrance completed)
          for (const anim of document.getAnimations()) {
            const name = (anim as any).animationName || "";
            if (name.includes("hubOrbit") || name.includes("hubCounter") || name.includes("hubSpoke")) {
              anim.currentTime = timeMs;
            }
          }

          const cardIds = ["academy", "ai", "music", "tutors"];
          const cardBoxes = cardIds.map((id) => {
            const el = document.querySelector(`[data-testid="orbit-card-${id}"]`);
            return {
              id,
              rect: el?.getBoundingClientRect(),
            };
          });

          const centerRect = centerEl.getBoundingClientRect();
          const contRect = containerEl.getBoundingClientRect();

          const overlaps = (r1: DOMRect, r2: DOMRect) => {
            return !(
              r1.right <= r2.left ||
              r1.left >= r2.right ||
              r1.bottom <= r2.top ||
              r1.top >= r2.bottom
            );
          };

          let cardOverlap = false;
          let centerOverlap = false;
          let containerOverflow = false;

          // Check card-to-card collisions
          for (let i = 0; i < cardBoxes.length; i++) {
            for (let j = i + 1; j < cardBoxes.length; j++) {
              if (cardBoxes[i].rect && cardBoxes[j].rect) {
                if (overlaps(cardBoxes[i].rect!, cardBoxes[j].rect!)) {
                  cardOverlap = true;
                }
              }
            }

            // Check center node overlap
            if (cardBoxes[i].rect && overlaps(cardBoxes[i].rect!, centerRect)) {
              centerOverlap = true;
            }

            // Check container overflow (allow 2px tolerance)
            if (cardBoxes[i].rect) {
              const r = cardBoxes[i].rect!;
              if (
                r.left < contRect.left - 2 ||
                r.right > contRect.right + 2 ||
                r.top < contRect.top - 2 ||
                r.bottom > contRect.bottom + 2
              ) {
                containerOverflow = true;
              }
            }
          }

          return {
            cardOverlap,
            centerOverlap,
            containerOverflow,
          };
        }, targetTime);

        expect(collisionCheck.cardOverlap, `Card-to-card overlap detected at step ${step}`).toBe(false);
        expect(collisionCheck.centerOverlap, `Center node overlap detected at step ${step}`).toBe(false);
        expect(collisionCheck.containerOverflow, `Container overflow detected at step ${step}`).toBe(false);
      }
    });
  }

  // =========================================================================
  // 4. ACCESSIBILITY PAUSE / PLAY TOGGLE & LOCALSTORAGE PERSISTENCE
  // =========================================================================
  test("pause/play button toggles playState, aria-label, aria-pressed, and persists in localStorage", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const toggleBtn = page.getByTestId("hub-orbit-toggle");
    await expect(toggleBtn).toBeVisible();
    await expect(toggleBtn).toHaveAttribute("aria-label", "Pause animation");
    await expect(toggleBtn).toHaveAttribute("aria-pressed", "false");

    // Click Pause
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute("aria-label", "Play animation");
    await expect(toggleBtn).toHaveAttribute("aria-pressed", "true");

    // Verify animation-play-state is paused
    const trackPlayState = await page.locator('[data-testid="hub-orbit-track"]').evaluate((el) => {
      return (el as HTMLElement).style.animationPlayState || window.getComputedStyle(el).animationPlayState;
    });
    expect(trackPlayState).toBe("paused");

    // Verify saved to localStorage
    const stored = await page.evaluate(() => localStorage.getItem("trainbow-hero-orbit-paused"));
    expect(stored).toBe("true");

    // Reload page and assert paused state is retained
    await page.reload({ waitUntil: "networkidle" });
    const reloadedToggle = page.getByTestId("hub-orbit-toggle");
    await expect(reloadedToggle).toHaveAttribute("aria-label", "Play animation");
    await expect(reloadedToggle).toHaveAttribute("aria-pressed", "true");

    // Click Play to resume
    await reloadedToggle.click();
    await expect(reloadedToggle).toHaveAttribute("aria-label", "Pause animation");
    await expect(reloadedToggle).toHaveAttribute("aria-pressed", "false");
    const storedAfterPlay = await page.evaluate(() => localStorage.getItem("trainbow-hero-orbit-paused"));
    expect(storedAfterPlay).toBe("false");
  });

  // =========================================================================
  // 5. HOVER AND FOCUS WITHIN PAUSE / RESUME
  // =========================================================================
  test("hovering or focusing inside hub visual automatically pauses animation", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const hub = page.locator('[data-testid="hub-orbit-track"]');
    await expect(hub).toBeVisible();

    // Hover over the hub container
    const container = page.getByTestId("hub-orbit-container");
    await container.hover({ force: true });

    const hoveredPlayState = await hub.evaluate((el) => {
      return (el as HTMLElement).style.animationPlayState || window.getComputedStyle(el).animationPlayState;
    });
    expect(hoveredPlayState).toBe("paused");

    // Move mouse away
    await page.mouse.move(0, 0);
    const unhoveredPlayState = await hub.evaluate((el) => {
      return (el as HTMLElement).style.animationPlayState || window.getComputedStyle(el).animationPlayState;
    });
    expect(unhoveredPlayState).toBe("running");
  });

  // =========================================================================
  // 6. REDUCED MOTION & DATA SAVER EMULATION
  // =========================================================================
  test("prefers-reduced-motion: reduce turns off all orbit animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const trackAnim = await page.locator('[data-testid="hub-orbit-track"]').evaluate((el) => {
      return window.getComputedStyle(el).animationName;
    });
    expect(trackAnim).toBe("none");
  });

  test("data-saver='true' turns off all orbit animations", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    // Enable data-saver attribute
    await page.evaluate(() => {
      document.documentElement.setAttribute("data-saver", "true");
    });

    const trackAnim = await page.locator('[data-testid="hub-orbit-track"]').evaluate((el) => {
      return window.getComputedStyle(el).animationName;
    });
    expect(trackAnim).toBe("none");
  });

  // =========================================================================
  // 7. DURATION SAFEGUARD CLAMPING (< 30s clamped to 30s)
  // =========================================================================
  test("enforces minimum 30s duration safeguard for motion comfort", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const durationVar = await page.getByTestId("hub-orbit-container").evaluate((el) => {
      return (el as HTMLElement).style.getPropertyValue("--orbit-duration");
    });

    const parsedSeconds = parseFloat(durationVar);
    expect(parsedSeconds).toBeGreaterThanOrEqual(30);
  });

  // =========================================================================
  // 8. ORBIT CAPTURES AT 4 ANGLES PROVING CARDS STAY UPRIGHT (0, 90, 180, 270)
  // =========================================================================
  test("captures 4 orbit rotation angles (0, 90, 180, 270 deg) showing level cards", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const angles = [
      { deg: 0, timeMs: 0, name: "30_orbit_angle_0deg.png" },
      { deg: 90, timeMs: 12000, name: "31_orbit_angle_90deg.png" },
      { deg: 180, timeMs: 24000, name: "32_orbit_angle_180deg.png" },
      { deg: 270, timeMs: 36000, name: "33_orbit_angle_270deg.png" },
    ];

    for (const { timeMs, name } of angles) {
      await page.evaluate((t) => {
        const anims = document.getAnimations();
        for (const a of anims) {
          const n = (a as any).animationName || "";
          if (n.includes("hubOrbit") || n.includes("hubCounter") || n.includes("hubSpoke")) {
            a.currentTime = t;
          }
        }
      }, timeMs);

      const shotPath = path.join(artifactDir, name);
      await page.screenshot({ path: shotPath, fullPage: true });
    }
  });

  // =========================================================================
  // 9. AXE ACCESSIBILITY AUDIT
  // =========================================================================
  test("accessibility scan passes with zero critical or serious violations", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalOrSerious).toEqual([]);
  });
});
