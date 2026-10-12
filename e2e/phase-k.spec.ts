import { test, expect } from "@playwright/test";

test.describe("Phase K: Trainbow HUB Music — Theory, Instruments, Voice & Repertoire (MU-01 to MU-05)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset database to ensure clean, predictable state
    await page.request.post("/api/auth/reset");
  });

  test("1. Music Catalogue, Unified Account Invariant & Discipline Tracks (MU-01, ADR-012)", async ({
    page,
  }) => {
    await page.goto("/music");

    // Verify main page heading and Phase K badge
    await expect(page.locator("h1")).toContainText("Master Instrument, Theory & Voice");
    await expect(page.getByText("Trainbow HUB Music — Phase K", { exact: false })).toBeVisible();
    await expect(page.getByText("ABRSM & MUSON Curriculum Accredited", { exact: false })).toBeVisible();

    // Verify ADR-012 Single Sign-On Invariant Banner
    await expect(page.getByText("Single Sign-On, One Calendar, Shared Naira Wallet", { exact: false })).toBeVisible();
    await expect(page.getByText("ADR-012 Invariant", { exact: false })).toBeVisible();

    // Verify instrument discipline tracks
    await expect(page.getByText("Classical & Contemporary Piano")).toBeVisible();
    await expect(page.getByText("Voice & Vocal Coaching")).toBeVisible();
    await expect(page.getByText("Classical Violin & Strings")).toBeVisible();
    await expect(page.getByText("Music Theory & Fundamentals")).toBeVisible();

    // Verify multi-format tuition highlight (MU-02)
    await expect(page.getByText("Live WebRTC Classroom (Online)")).toBeVisible();
    await expect(page.getByText("In-Person Physical Music Studio")).toBeVisible();
  });

  test("2. Vetted Music Instructors & Multi-Format Lesson Booking (MU-01, MU-02)", async ({
    page,
  }) => {
    await page.goto("/music");

    // Switch to Vetted Music Instructors tab
    await page.locator("#tab-tutors").click();

    // Verify seeded instructors
    await expect(page.getByText("Pastor Emmanuel Adeyemi")).toBeVisible();
    await expect(page.getByText("Concert Pianist, MUSON Fellow & ABRSM Examiner")).toBeVisible();
    await expect(page.getByText("Lady Folashade Balogun")).toBeVisible();
    await expect(page.getByText("Operatic Vocal Coach & Lead Classical Violinist")).toBeVisible();

    // Open booking modal for Pastor Emmanuel
    await page.locator("#btn-book-pastor-emmanuel-adeyemi").click();

    // Verify modal elements
    await expect(page.getByText("Book Lesson with Pastor Emmanuel Adeyemi")).toBeVisible();
    await expect(page.getByText("Session Format (MU-02):")).toBeVisible();

    // Select In-Person Physical Studio format
    await page.getByText("Physical Studio", { exact: false }).click();

    // Confirm booking
    await page.locator("#btn-confirm-lesson-booking").click();

    // Verify confirmation
    await expect(page.getByText("Booking Confirmed!")).toBeVisible();
    await expect(page.getByText("Physical Studio lesson with Pastor Emmanuel Adeyemi", { exact: false })).toBeVisible();
  });

  test("3. Licensed Repertoire Browser, Copyright Protection & Audio Samples (MU-04)", async ({
    page,
  }) => {
    await page.goto("/music");

    // Switch to Repertoire tab
    await page.locator("#tab-repertoire").click();

    // Verify licensed sheet music pieces
    await expect(page.getByText("Minuet in G major, BWV Anh. 114")).toBeVisible();
    await expect(page.getByText("Christian Petzold / J.S. Bach")).toBeVisible();
    await expect(page.getByText("ABRSM Grade 3 Sight Reading & Aural Specimen Tests")).toBeVisible();
    await expect(page.getByText("African Pianism: Yoruba Folk Themes & Polyrhythmic Studies")).toBeVisible();

    // Verify license types and copyright notices
    await expect(page.getByText("PUBLIC DOMAIN", { exact: true })).toBeVisible();
    await expect(page.getByText("ABRSM LICENSED", { exact: true })).toBeVisible();
    await expect(page.getByText("TRAINBOW ORIGINAL", { exact: true })).toBeVisible();
    await expect(page.getByText("ABRSM-LIC-2026-NG-8841")).toBeVisible();

    // Test audio preview toggle
    const audioBtn = page.getByRole("button", { name: /Audio Sample/i }).first();
    await expect(audioBtn).toBeVisible();
    await audioBtn.click();
    await expect(page.getByRole("button", { name: /Stop Preview/i }).first()).toBeVisible();
  });

  test("4. Student Practice Logging, Digital Metronome & History (MU-03)", async ({
    page,
  }) => {
    await page.goto("/music");

    // Switch to Practice Log tab
    await page.locator("#tab-practice").click();

    // Verify digital metronome
    await expect(page.getByText("Digital Metronome")).toBeVisible();
    await expect(page.locator("#slider-metronome-bpm")).toBeVisible();

    // Toggle metronome on and off
    const toggleMetronomeBtn = page.locator("#btn-toggle-metronome");
    await expect(toggleMetronomeBtn).toContainText("Start Metronome");
    await toggleMetronomeBtn.click();
    await expect(toggleMetronomeBtn).toContainText("Stop");
    await toggleMetronomeBtn.click();
    await expect(toggleMetronomeBtn).toContainText("Start Metronome");

    // Verify existing practice history table
    await expect(page.getByText("Recent Practice Rehearsals")).toBeVisible();
    await expect(page.getByText("Bach Minuet in G major (bars 1-16)", { exact: false })).toBeVisible();
    await expect(page.getByText("84 BPM", { exact: false })).toBeVisible();

    // Fill practice log form
    await page.locator("#select-instrument").selectOption("Violin");
    await page.locator("#input-duration").fill("35");
    await page.locator("#input-tempo").fill("92");
    await page.locator("#input-pieces").fill("Seitz Concerto No. 5 in D major (Movement 1)");
    await page.locator("#input-notes").fill("Clean detached bowing and clear shifts into 3rd position.");

    // Submit practice log
    await page.locator("#btn-submit-practice-log").click();

    // Verify success banner and table update
    await expect(page.getByText("Great practice! Added 35 mins for Violin.")).toBeVisible();
    await expect(page.getByText("Seitz Concerto No. 5 in D major (Movement 1)", { exact: false })).toBeVisible();
  });

  test("5. ABRSM & MUSON Theory Syllabus & Grade Modules (MU-05)", async ({
    page,
  }) => {
    await page.goto("/music");

    // Switch to Syllabus tab
    await page.locator("#tab-syllabus").click();

    // Verify curriculum modules
    await expect(page.getByText("ABRSM & MUSON Theory Mastery Curriculum (MU-05)")).toBeVisible();
    await expect(page.getByText("Module 1")).toBeVisible();
    await expect(page.getByText("Stave Notation, Time Signatures & Major/Minor Scales")).toBeVisible();
    await expect(page.getByText("Lesson 1: Treble & Bass Clefs and Pitch")).toBeVisible();

    await expect(page.getByText("Module 2")).toBeVisible();
    await expect(page.getByText("Intervals, Chords, Cadences & Aural Perception")).toBeVisible();
    await expect(page.getByText("Lesson 4: Melodic & Harmonic Intervals")).toBeVisible();
  });
});
