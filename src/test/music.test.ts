import { describe, it, expect, beforeEach } from "vitest";
import { db, MusicLicenseType } from "@/lib/db";

describe("Phase K: Trainbow HUB Music — Theory, Instruments, Voice & Repertoire (MU-01 to MU-05, ADR-012)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  // ==============================================================================
  // 1. MU-01: Music Catalogue, Vetted Faculty & Unified Account Architecture
  // ==============================================================================
  describe("1. Music Catalogue & Vetted Faculty (MU-01, ADR-012)", () => {
    it("seeds verified music faculty with ABRSM and MUSON credentials", async () => {
      const musicTutors = await db.listMusicTutors();
      expect(musicTutors.length).toBeGreaterThanOrEqual(2);

      const emmanuel = musicTutors.find((t) => t.profile.slug === "pastor-emmanuel-adeyemi");
      expect(emmanuel).toBeDefined();
      expect(emmanuel?.tutor.fullName).toBe("Pastor Emmanuel Adeyemi");
      expect(emmanuel?.profile.title).toContain("MUSON Fellow");
      expect(emmanuel?.profile.ninVerified).toBe(true);
      expect(emmanuel?.profile.trcnCertified).toBe(true);
      expect(emmanuel?.profile.status).toBe("APPROVED");
      expect(emmanuel?.profile.hourlyRateMinorUnits).toBe(1200000); // ₦12,000/hr

      const folashade = musicTutors.find((t) => t.profile.slug === "lady-folashade-balogun");
      expect(folashade).toBeDefined();
      expect(folashade?.tutor.fullName).toBe("Lady Folashade Balogun");
      expect(folashade?.profile.title).toContain("Vocal Coach");
      expect(folashade?.profile.hourlyRateMinorUnits).toBe(1000000); // ₦10,000/hr
    });

    it("verifies unified account architecture: zero disparate logins or secondary auth tables", async () => {
      // Invariant: Music instructor is stored in the same User table with standard role
      const musicTutor = await db.findUserByEmail("music.tutor@trainbowhub.ng");
      expect(musicTutor).toBeDefined();
      expect(musicTutor?.role).toBe("TUTOR");
      expect(musicTutor?.id).toBe("usr-tut-music-006");

      // Student uses the exact same account for mathematics and music
      const student = await db.findUserByEmail("student@trainbowhub.ng");
      expect(student).toBeDefined();
      expect(student?.id).toBe("usr-std-001");
      expect(student?.fullName).toBe("Chioma Adeleke");
    });

    it("retrieves verified tutor subject qualifications for music theory", async () => {
      const qualifications = await db.listTutorSubjectQualifications("pastor-emmanuel-adeyemi");
      expect(qualifications.length).toBeGreaterThanOrEqual(1);

      const musicQual = qualifications.find((q) => q.subjectSlug === "music-theory");
      expect(musicQual).toBeDefined();
      expect(musicQual?.status).toBe("APPROVED");
      expect(musicQual?.credentialType).toBe("MUSON_FELLOW_ABRSM_DIPLOMA");
      expect(musicQual?.levels).toContain("Grade 1-5 ABRSM/MUSON");
    });
  });

  // ==============================================================================
  // 2. MU-02: Multi-Format Sessions & Unified Booking Calendar
  // ==============================================================================
  describe("2. Multi-Format Sessions & Calendar Integration (MU-02)", () => {
    it("retrieves seeded music booking alongside academic timetable", async () => {
      const musicBooking = await db.findBookingById("bkg-music-001");
      expect(musicBooking).toBeDefined();
      expect(musicBooking?.subject).toBe("Music Theory & Piano");
      expect(musicBooking?.tutorSlug).toBe("pastor-emmanuel-adeyemi");
      expect(musicBooking?.studentId).toBe("usr-std-001");
      expect(musicBooking?.bookingStatus).toBe("CONFIRMED");
      expect(musicBooking?.paymentStatus).toBe("VERIFIED");
      expect(musicBooking?.meetingLink).toContain("cls-music-001");
    });

    it("links music lesson to virtual classroom session with WebRTC audio and safeguarding", async () => {
      const session = await db.findClassroomSessionByBookingId("bkg-music-001");
      expect(session).toBeDefined();
      expect(session?.tutorSlug).toBe("pastor-emmanuel-adeyemi");
      expect(session?.studentId).toBe("usr-std-001");
      expect(session?.webrtcProvider).toBe("AGORA");
      expect(session?.recordingEnabled).toBe(true);
      expect(session?.status).toBe("SCHEDULED");
    });
  });

  // ==============================================================================
  // 3. MU-03: Music Practice Logs, Tempo/BPM & Repertoire Progress
  // ==============================================================================
  describe("3. Music Practice Logs & Progress Monitoring (MU-03)", () => {
    it("retrieves seeded practice logs for student with tempo and pieces", async () => {
      const logs = await db.getStudentPracticeLogs("usr-std-001");
      expect(logs.length).toBeGreaterThanOrEqual(2);

      const pianoLog = logs.find((l) => l.instrument === "Piano");
      expect(pianoLog).toBeDefined();
      expect(pianoLog?.piecesPracticed).toContain("Bach Minuet in G major");
      expect(pianoLog?.durationMinutes).toBe(45);
      expect(pianoLog?.tempoBpm).toBe(84);
      expect(pianoLog?.notes).toContain("phrasing");

      const voiceLog = logs.find((l) => l.instrument === "Voice");
      expect(voiceLog).toBeDefined();
      expect(voiceLog?.piecesPracticed).toContain("Caro Mio Ben");
      expect(voiceLog?.durationMinutes).toBe(30);
      expect(voiceLog?.tempoBpm).toBe(72);
    });

    it("creates a new practice session log with metronome tempo and qualitative notes", async () => {
      const created = await db.createMusicPracticeLog({
        studentId: "usr-std-001",
        instrument: "Violin",
        durationMinutes: 40,
        piecesPracticed: "Kreutzer 42 Studies No. 2, Suzuki Book 4 Seitz Concerto No. 5",
        tempoBpm: 96,
        notes: "Focused on martelé bowing at the frog and high third finger intonation.",
        practicedAt: new Date("2026-10-12T11:00:00Z"),
      });

      expect(created.id).toBeDefined();
      expect(created.instrument).toBe("Violin");
      expect(created.tempoBpm).toBe(96);

      const allLogs = await db.getStudentPracticeLogs("usr-std-001");
      expect(allLogs.length).toBe(3);
      expect(allLogs[0].id).toBe(created.id); // Most recent first
    });

    it("calculates consolidated music overview metrics accurately", async () => {
      const overview = await db.getMusicOverview("usr-std-001");
      expect(overview.totalPracticeMinutes).toBe(75); // 45 + 30
      expect(overview.totalPracticeSessions).toBe(2);
      expect(overview.uniquePiecesPracticed).toBe(2);
      expect(overview.licensedMaterialsCount).toBeGreaterThanOrEqual(4);
      expect(overview.tutorsCount).toBeGreaterThanOrEqual(2);
    });
  });

  // ==============================================================================
  // 4. MU-04: Licensed Materials & Intellectual Property Management
  // ==============================================================================
  describe("4. Licensed Materials & Copyright Repertoire (MU-04)", () => {
    it("lists seeded licensed repertoire covering multiple license categories", async () => {
      const allMaterials = await db.listMusicLicensedMaterials();
      expect(allMaterials.length).toBeGreaterThanOrEqual(4);

      const licenseTypes = allMaterials.map((m) => m.licenseType);
      expect(licenseTypes).toContain("PUBLIC_DOMAIN");
      expect(licenseTypes).toContain("ABRSM_LICENSED");
      expect(licenseTypes).toContain("TRAINBOW_ORIGINAL");
      expect(licenseTypes).toContain("MUSON_CURRICULUM");
    });

    it("filters licensed materials by instrument and license type", async () => {
      const pianoScores = await db.listMusicLicensedMaterials({ instrument: "Piano" });
      expect(pianoScores.length).toBeGreaterThanOrEqual(2);
      expect(pianoScores.every((s) => s.instrument.includes("Piano"))).toBe(true);

      const abrsmScores = await db.listMusicLicensedMaterials({ licenseType: "ABRSM_LICENSED" });
      expect(abrsmScores.length).toBeGreaterThanOrEqual(1);
      expect(abrsmScores[0].licenseNumber).toBe("ABRSM-LIC-2026-NG-8841");
      expect(abrsmScores[0].copyrightNotice).toContain("Associated Board of the Royal Schools of Music");
    });

    it("searches repertoire by composer or title", async () => {
      const bachResults = await db.listMusicLicensedMaterials({ search: "Bach" });
      expect(bachResults.length).toBe(1);
      expect(bachResults[0].title).toContain("Minuet in G major");
      expect(bachResults[0].publisher).toContain("Anna Magdalena Bach");
    });

    it("registers a new commissioned copyrighted score with legal notice", async () => {
      const created = await db.createMusicLicensedMaterial({
        title: "Highlife Fantasia for Solo Clarinet & Piano",
        composer: "Victor Olaiya / Trainbow Contemporary Faculty",
        instrument: "Clarinet & Piano",
        licenseType: "COPYRIGHT_COMMISSIONED",
        licenseNumber: "TBH-COM-2026-CL-009",
        publisher: "Trainbow Contemporary Editions",
        copyrightNotice: "© 2026 Trainbow Technologies Ltd. Commissioned under Nigerian Copyright Act 2022.",
        scorePdfUrl: "/scores/highlife-fantasia.pdf",
        audioSampleUrl: "https://trainbow.ng/audio/highlife-sample.mp3",
        gradeLevel: "Grade 5 MUSON",
        isLicensed: true,
      });

      expect(created.id).toBeDefined();
      expect(created.licenseNumber).toBe("TBH-COM-2026-CL-009");
      expect(created.isLicensed).toBe(true);

      const fetched = await db.getMusicLicensedMaterial(created.id);
      expect(fetched?.title).toBe("Highlife Fantasia for Solo Clarinet & Piano");
    });
  });

  // ==============================================================================
  // 5. MU-05: Dynamic Music Curriculum & Course Syllabus Authoring
  // ==============================================================================
  describe("5. Extensible Music Curriculum Authoring (MU-05)", () => {
    it("publishes comprehensive ABRSM & MUSON Music Theory course with structured modules", async () => {
      const course = await db.findAuthoringCourseBySlug("abrsm-muson-music-theory-mastery");
      expect(course).toBeDefined();
      expect(course?.subjectSlug).toBe("music-theory");
      expect(course?.status).toBe("PUBLISHED");
      expect(course?.priceMinorUnits).toBe(2000000); // ₦20,000
      expect(course?.level).toBe("Grade 1-5 ABRSM/MUSON");
      expect(course?.syllabus.length).toBe(2);

      // Verify Module 1: Staves and Scales
      const mod1 = course?.syllabus[0];
      expect(mod1.title).toContain("Stave Notation");
      expect(mod1.lessons.length).toBe(3);
      expect(mod1.lessons[0].title).toContain("Treble & Bass Clefs");

      // Verify Module 2: Intervals and Cadences
      const mod2 = course?.syllabus[1];
      expect(mod2.title).toContain("Intervals, Chords, Cadences");
      expect(mod2.lessons.length).toBe(3);
      expect(mod2.lessons[1].title).toContain("Tonic Triads, Inversions");
    });

    it("allows authoring a new music curriculum module without code deployment", async () => {
      const newCourse = await db.createOrUpdateAuthoringCourse({
        authorId: "usr-tut-music-006",
        title: "MUSON Grade 1 Practical Piano Repertoire & Technique",
        slug: "muson-grade-1-practical-piano",
        subjectSlug: "music-theory",
        level: "Grade 1 MUSON",
        status: "PUBLISHED",
        priceMinorUnits: 1500000,
        shortDescription: "Core examination pieces, scales in contrary motion, and broken chords for MUSON Grade 1.",
        fullDescription: "Interactive finger technique masterclass taught by concert pianists with video demonstrations.",
        syllabus: [
          {
            id: "gp1-m1",
            title: "Scales & Arpeggios in Contrary Motion",
            lessons: [
              { id: "gp1-l1", title: "C Major Contrary Motion Scale", durationMinutes: 30, isFreePreview: true },
            ],
          },
        ],
      });

      expect(newCourse.id).toBeDefined();
      expect(newCourse.slug).toBe("muson-grade-1-practical-piano");

      const courses = await db.listAuthoringCourses({ subjectSlug: "music-theory" });
      expect(courses.length).toBeGreaterThanOrEqual(2);
    });
  });
});
