import { hashPassword } from "@/lib/auth/password";

export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  fullName: string;
  phoneNumber?: string;
  role: "STUDENT" | "PARENT" | "TUTOR" | "ADMIN";
  dateOfBirth?: string; // ISO date string
  isMinor: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GuardianshipRecord {
  id: string;
  studentId: string;
  guardianId: string;
  relationship: string;
  status: "PENDING_OTP" | "VERIFIED" | "REVOKED";
  guardianPhone: string;
  guardianEmail: string;
  otpCode: string; // 6-digit plain/stored
  otpExpiresAt: Date;
  otpAttempts: number;
  consentGivenAt?: Date;
  consentAuditLog?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TutorProfileRecord {
  id: string;
  userId: string;
  slug: string;
  title: string;
  bio: string;
  teachingApproach: string;
  hourlyRateMinorUnits: number;
  currency: string;
  rating: number;
  completedLessons: number;
  ninVerified: boolean;
  backgroundChecked: boolean;
  trcnCertified: boolean;
  status: "PENDING_REVIEW" | "APPROVED" | "SUSPENDED";
  settlementBankName?: string;
  settlementAccount?: string;
  settlementName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnrollmentRecord {
  id: string;
  userId: string;
  courseSlug: string;
  completedLessonIds: string[];
  lastAccessedLessonId: string;
  progressPercentage: number;
  enrolledAt: Date;
  updatedAt: Date;
}

export interface QuizAttemptRecord {
  id: string;
  userId: string;
  courseSlug: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  answers: Record<string, string>;
  recommendedTopics: string[];
  completedAt: Date;
}

export interface StudyStatsRecord {
  userId: string;
  streakDays: number;
  lastActiveDate: string; // ISO date string YYYY-MM-DD
  totalMinutesStudied: number;
  lessonsCompleted: number;
  updatedAt: Date;
}

export interface AuthoringCourseRecord {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  subjectSlug: string;
  level: string;
  status: "DRAFT" | "IN_REVIEW" | "PUBLISHED";
  version: number;
  changelog?: string;
  priceMinorUnits: number;
  shortDescription: string;
  fullDescription: string;
  syllabus: any[];
  createdAt: Date;
  updatedAt: Date;
}

// In-Memory resilient database engine
class DatabaseStore {
  users: Map<string, UserRecord> = new Map();
  guardianships: Map<string, GuardianshipRecord> = new Map();
  tutorProfiles: Map<string, TutorProfileRecord> = new Map();
  enrollments: Map<string, EnrollmentRecord> = new Map();
  quizAttempts: Map<string, QuizAttemptRecord> = new Map();
  studyStats: Map<string, StudyStatsRecord> = new Map();
  authoringCourses: Map<string, AuthoringCourseRecord> = new Map();
  private initialized = false;

  async reset() {
    this.initialized = false;
    await this.init(true);
  }

  async init(forceReset = false) {
    if (this.initialized && !forceReset) return;
    this.initialized = true;
    this.users.clear();
    this.guardianships.clear();
    this.tutorProfiles.clear();
    this.enrollments.clear();
    this.quizAttempts.clear();
    this.studyStats.clear();
    this.authoringCourses.clear();

    // Default password hash for all demo seed users
    const defaultHash = await hashPassword("Trainbow2026!");
    const adminHash = await hashPassword("TrainbowAdmin2026!");

    // 1. Adult Student
    const studentUser: UserRecord = {
      id: "usr-std-001",
      email: "student@trainbowhub.ng",
      passwordHash: defaultHash,
      fullName: "Chioma Adeleke",
      phoneNumber: "+2348021112233",
      role: "STUDENT",
      dateOfBirth: "2004-03-15",
      isMinor: false,
      isVerified: true,
      createdAt: new Date("2026-09-01"),
      updatedAt: new Date("2026-09-01"),
    };
    this.users.set(studentUser.id, studentUser);

    // Seed student's enrollment in WAEC Mathematics
    const studentEnrollment: EnrollmentRecord = {
      id: "enr-001",
      userId: studentUser.id,
      courseSlug: "waec-ssce-mathematics-mastery",
      completedLessonIds: ["l1"],
      lastAccessedLessonId: "l2",
      progressPercentage: 11,
      enrolledAt: new Date("2026-10-01"),
      updatedAt: new Date("2026-10-10"),
    };
    this.enrollments.set(`${studentUser.id}:${studentEnrollment.courseSlug}`, studentEnrollment);

    // Seed student's study stats
    const studentStats: StudyStatsRecord = {
      userId: studentUser.id,
      streakDays: 5,
      lastActiveDate: new Date().toISOString().split("T")[0],
      totalMinutesStudied: 145,
      lessonsCompleted: 1,
      updatedAt: new Date(),
    };
    this.studyStats.set(studentUser.id, studentStats);

    // Seed student's past quiz attempt with revision recommendation
    const pastQuiz: QuizAttemptRecord = {
      id: "qza-001",
      userId: studentUser.id,
      courseSlug: "waec-ssce-mathematics-mastery",
      lessonId: "l1",
      score: 67,
      totalQuestions: 3,
      correctCount: 2,
      answers: { q1: "A", q2: "A", q3: "A" },
      recommendedTopics: ["Unknown Number Bases & Linear Formulation"],
      completedAt: new Date("2026-10-09"),
    };
    this.quizAttempts.set(pastQuiz.id, pastQuiz);

    // 2. Minor Student (14 years old - requires guardian consent)
    const minorUser: UserRecord = {
      id: "usr-std-minor-002",
      email: "minor@trainbowhub.ng",
      passwordHash: defaultHash,
      fullName: "Kelechi Eze",
      phoneNumber: "+2348039998877",
      role: "STUDENT",
      dateOfBirth: "2012-05-20",
      isMinor: true,
      isVerified: false, // Pending guardian consent
      createdAt: new Date("2026-10-01"),
      updatedAt: new Date("2026-10-01"),
    };
    this.users.set(minorUser.id, minorUser);

    // 3. Parent / Guardian
    const parentUser: UserRecord = {
      id: "usr-prt-003",
      email: "parent@trainbowhub.ng",
      passwordHash: defaultHash,
      fullName: "Chief Emeka Eze",
      phoneNumber: "+2348035554433",
      role: "PARENT",
      dateOfBirth: "1978-11-12",
      isMinor: false,
      isVerified: true,
      createdAt: new Date("2026-09-15"),
      updatedAt: new Date("2026-09-15"),
    };
    this.users.set(parentUser.id, parentUser);

    // Link Parent to Minor Student
    const guardianship: GuardianshipRecord = {
      id: "gdn-001",
      studentId: minorUser.id,
      guardianId: parentUser.id,
      relationship: "Father",
      status: "PENDING_OTP",
      guardianPhone: parentUser.phoneNumber!,
      guardianEmail: parentUser.email,
      otpCode: "202610", // Pre-seeded OTP for deterministic verification
      otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
      otpAttempts: 0,
      createdAt: new Date("2026-10-05"),
      updatedAt: new Date("2026-10-05"),
    };
    this.guardianships.set(guardianship.id, guardianship);

    // 4. Verified Tutor (Dr. Tayo Okafor)
    const tutorUser: UserRecord = {
      id: "usr-tut-004",
      email: "tutor@trainbowhub.ng",
      passwordHash: defaultHash,
      fullName: "Dr. Tayo Okafor",
      phoneNumber: "+2348094443322",
      role: "TUTOR",
      dateOfBirth: "1985-08-22",
      isMinor: false,
      isVerified: true,
      createdAt: new Date("2026-08-10"),
      updatedAt: new Date("2026-08-10"),
    };
    this.users.set(tutorUser.id, tutorUser);

    const tutorProfile: TutorProfileRecord = {
      id: "tp-001",
      userId: tutorUser.id,
      slug: "dr-tayo-okafor",
      title: "Senior Lecturer in Mathematics & WAEC Examiner",
      bio: "Dedicated senior secondary mathematics educator with over a decade of university lecture and secondary exam coaching experience.",
      teachingApproach: "First principles reasoning, step-by-step Socratic inquiry, and past question analysis.",
      hourlyRateMinorUnits: 750000, // ₦7,500
      currency: "NGN",
      rating: 5.0,
      completedLessons: 142,
      ninVerified: true,
      backgroundChecked: true,
      trcnCertified: true,
      status: "APPROVED",
      settlementBankName: "Guaranty Trust Bank (GTBank)",
      settlementAccount: "0123456789",
      settlementName: "Dr. Tayo Okafor",
      createdAt: new Date("2026-08-10"),
      updatedAt: new Date("2026-08-10"),
    };
    this.tutorProfiles.set(tutorProfile.id, tutorProfile);

    // Seed Tutor's authored courses
    const waecCourse: AuthoringCourseRecord = {
      id: "ac-001",
      authorId: tutorUser.id,
      title: "WAEC & SSCE Comprehensive Mathematics Mastery",
      slug: "waec-ssce-mathematics-mastery",
      subjectSlug: "mathematics",
      level: "WAEC Prep (SS 1-3)",
      status: "PUBLISHED",
      version: 1,
      changelog: "Published initial WAEC curriculum with complete worked past exam papers.",
      priceMinorUnits: 2500000,
      shortDescription: "Complete syllabus coverage for WASSCE Mathematics with worked past papers.",
      fullDescription: "Master every component of the WAEC General Mathematics curriculum with worked solutions.",
      syllabus: [
        {
          id: "m1",
          title: "Module 1: Number Bases, Modular Arithmetic & Logarithms",
          lessons: [
            { id: "l1", title: "Conversion of Number Bases (Fractions & Decimals)", durationMinutes: 45, isFreePreview: true },
            { id: "l2", title: "Modular Arithmetic & Cyclic Algebra", durationMinutes: 40, isFreePreview: false },
            { id: "l3", title: "Indices & Logarithmic Laws with WAEC Past Problems", durationMinutes: 50, isFreePreview: true },
          ],
        },
        {
          id: "m2",
          title: "Module 2: Quadratic Equations & Simultaneous Non-Linear Equations",
          lessons: [
            { id: "l4", title: "Completing the Square & The Quadratic Formula", durationMinutes: 55, isFreePreview: false },
            { id: "l5", title: "Simultaneous Linear and Quadratic Equations", durationMinutes: 60, isFreePreview: false },
            { id: "l6", title: "Graphing Quadratic Curves & Finding Roots", durationMinutes: 50, isFreePreview: false },
          ],
        },
      ],
      createdAt: new Date("2026-09-10"),
      updatedAt: new Date("2026-10-01"),
    };
    this.authoringCourses.set(waecCourse.slug, waecCourse);

    const draftCourse: AuthoringCourseRecord = {
      id: "ac-002",
      authorId: tutorUser.id,
      title: "Further Mathematics: Calculus & 3D Vectors",
      slug: "further-mathematics-calculus-vectors",
      subjectSlug: "mathematics",
      level: "SS 3 & UTME Further Math",
      status: "DRAFT",
      version: 1,
      changelog: "Drafting lesson outlines for differentiation from first principles.",
      priceMinorUnits: 3000000,
      shortDescription: "Advanced secondary calculus, differentiation from first principles, and 3D vector spaces.",
      fullDescription: "Comprehensive deep-dive into Senior Secondary Further Mathematics topics for science aspirants.",
      syllabus: [
        {
          id: "fm1",
          title: "Module 1: Differentiation from First Principles",
          lessons: [
            { id: "fml1", title: "Limits, Continuity, and Tangent Gradients", durationMinutes: 50, isFreePreview: true },
            { id: "fml2", title: "Derivation of Standard Derivatives", durationMinutes: 55, isFreePreview: false },
          ],
        },
      ],
      createdAt: new Date("2026-10-08"),
      updatedAt: new Date("2026-10-08"),
    };
    this.authoringCourses.set(draftCourse.slug, draftCourse);

    // 5. System Administrator
    const adminUser: UserRecord = {
      id: "usr-adm-005",
      email: "admin@trainbowhub.ng",
      passwordHash: adminHash,
      fullName: "Trainbow Administrator",
      phoneNumber: "+23480087246269",
      role: "ADMIN",
      dateOfBirth: "1980-01-01",
      isMinor: false,
      isVerified: true,
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    };
    this.users.set(adminUser.id, adminUser);
  }

  // User repository methods
  async findUserByEmail(email: string): Promise<UserRecord | null> {
    await this.init();
    const normalized = email.toLowerCase().trim();
    for (const user of this.users.values()) {
      if (user.email.toLowerCase() === normalized) {
        return { ...user };
      }
    }
    return null;
  }

  async findUserById(id: string): Promise<UserRecord | null> {
    await this.init();
    const user = this.users.get(id);
    return user ? { ...user } : null;
  }

  async createUser(data: Omit<UserRecord, "id" | "createdAt" | "updatedAt">): Promise<UserRecord> {
    await this.init();
    const id = `usr-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const now = new Date();
    const user: UserRecord = {
      ...data,
      id,
      email: data.email.toLowerCase().trim(),
      createdAt: now,
      updatedAt: now,
    };
    this.users.set(id, user);
    return { ...user };
  }

  async updateUser(id: string, updates: Partial<UserRecord>): Promise<UserRecord | null> {
    await this.init();
    const existing = this.users.get(id);
    if (!existing) return null;
    const updated: UserRecord = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.users.set(id, updated);
    return { ...updated };
  }

  // Guardianship repository methods
  async findGuardianshipByStudentId(studentId: string): Promise<GuardianshipRecord | null> {
    await this.init();
    for (const g of this.guardianships.values()) {
      if (g.studentId === studentId) return { ...g };
    }
    return null;
  }

  async findGuardianshipsByGuardianId(guardianId: string): Promise<GuardianshipRecord[]> {
    await this.init();
    const results: GuardianshipRecord[] = [];
    for (const g of this.guardianships.values()) {
      if (g.guardianId === guardianId) results.push({ ...g });
    }
    return results;
  }

  async createGuardianship(data: Omit<GuardianshipRecord, "id" | "createdAt" | "updatedAt">): Promise<GuardianshipRecord> {
    await this.init();
    const id = `gdn-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const now = new Date();
    const record: GuardianshipRecord = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.guardianships.set(id, record);
    return { ...record };
  }

  async updateGuardianship(id: string, updates: Partial<GuardianshipRecord>): Promise<GuardianshipRecord | null> {
    await this.init();
    const existing = this.guardianships.get(id);
    if (!existing) return null;
    const updated: GuardianshipRecord = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.guardianships.set(id, updated);
    return { ...updated };
  }

  // Tutor Profile repository methods
  async findTutorProfileByUserId(userId: string): Promise<TutorProfileRecord | null> {
    await this.init();
    for (const tp of this.tutorProfiles.values()) {
      if (tp.userId === userId) return { ...tp };
    }
    return null;
  }

  async createTutorProfile(data: Omit<TutorProfileRecord, "id" | "createdAt" | "updatedAt">): Promise<TutorProfileRecord> {
    await this.init();
    const id = `tp-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const now = new Date();
    const record: TutorProfileRecord = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.tutorProfiles.set(id, record);
    return { ...record };
  }

  // Phase D: Enrollment repository methods
  async findEnrollmentsByUserId(userId: string): Promise<EnrollmentRecord[]> {
    await this.init();
    const results: EnrollmentRecord[] = [];
    for (const enr of this.enrollments.values()) {
      if (enr.userId === userId) {
        results.push({ ...enr });
      }
    }
    return results;
  }

  async findEnrollment(userId: string, courseSlug: string): Promise<EnrollmentRecord | null> {
    await this.init();
    const key = `${userId}:${courseSlug}`;
    const enr = this.enrollments.get(key);
    return enr ? { ...enr } : null;
  }

  async createOrUpdateEnrollment(data: {
    userId: string;
    courseSlug: string;
    completedLessonIds?: string[];
    lastAccessedLessonId?: string;
    progressPercentage?: number;
  }): Promise<EnrollmentRecord> {
    await this.init();
    const key = `${data.userId}:${data.courseSlug}`;
    const existing = this.enrollments.get(key);
    const now = new Date();

    if (existing) {
      const updated: EnrollmentRecord = {
        ...existing,
        completedLessonIds: data.completedLessonIds ?? existing.completedLessonIds,
        lastAccessedLessonId: data.lastAccessedLessonId ?? existing.lastAccessedLessonId,
        progressPercentage: data.progressPercentage ?? existing.progressPercentage,
        updatedAt: now,
      };
      this.enrollments.set(key, updated);
      return { ...updated };
    } else {
      const created: EnrollmentRecord = {
        id: `enr-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        userId: data.userId,
        courseSlug: data.courseSlug,
        completedLessonIds: data.completedLessonIds ?? [],
        lastAccessedLessonId: data.lastAccessedLessonId ?? "",
        progressPercentage: data.progressPercentage ?? 0,
        enrolledAt: now,
        updatedAt: now,
      };
      this.enrollments.set(key, created);
      return { ...created };
    }
  }

  // Phase D: Quiz Attempt repository methods
  async findQuizAttemptsByUserId(userId: string): Promise<QuizAttemptRecord[]> {
    await this.init();
    const results: QuizAttemptRecord[] = [];
    for (const q of this.quizAttempts.values()) {
      if (q.userId === userId) {
        results.push({ ...q });
      }
    }
    return results.sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime());
  }

  async createQuizAttempt(data: Omit<QuizAttemptRecord, "id" | "completedAt">): Promise<QuizAttemptRecord> {
    await this.init();
    const id = `qza-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const record: QuizAttemptRecord = {
      ...data,
      id,
      completedAt: new Date(),
    };
    this.quizAttempts.set(id, record);
    return { ...record };
  }

  // Phase D: Study Stats repository methods
  async getStudyStats(userId: string): Promise<StudyStatsRecord> {
    await this.init();
    let stats = this.studyStats.get(userId);
    if (!stats) {
      stats = {
        userId,
        streakDays: 1,
        lastActiveDate: new Date().toISOString().split("T")[0],
        totalMinutesStudied: 0,
        lessonsCompleted: 0,
        updatedAt: new Date(),
      };
      this.studyStats.set(userId, stats);
    }
    return { ...stats };
  }

  async updateStudyStats(userId: string, updates: Partial<StudyStatsRecord>): Promise<StudyStatsRecord> {
    await this.init();
    const existing = await this.getStudyStats(userId);
    const updated: StudyStatsRecord = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.studyStats.set(userId, updated);
    return { ...updated };
  }

  // Phase D: Authoring Course repository methods
  async findAuthoringCoursesByAuthorId(authorId: string): Promise<AuthoringCourseRecord[]> {
    await this.init();
    const results: AuthoringCourseRecord[] = [];
    for (const ac of this.authoringCourses.values()) {
      if (ac.authorId === authorId) {
        results.push({ ...ac });
      }
    }
    return results;
  }

  async findAuthoringCourseBySlug(slug: string): Promise<AuthoringCourseRecord | null> {
    await this.init();
    const ac = this.authoringCourses.get(slug);
    return ac ? { ...ac } : null;
  }

  async createOrUpdateAuthoringCourse(data: {
    authorId: string;
    title: string;
    slug: string;
    subjectSlug: string;
    level: string;
    status: "DRAFT" | "IN_REVIEW" | "PUBLISHED";
    version?: number;
    changelog?: string;
    priceMinorUnits: number;
    shortDescription: string;
    fullDescription: string;
    syllabus: any[];
  }): Promise<AuthoringCourseRecord> {
    await this.init();
    const existing = this.authoringCourses.get(data.slug);
    const now = new Date();

    if (existing) {
      const updated: AuthoringCourseRecord = {
        ...existing,
        ...data,
        version: data.version ?? existing.version,
        updatedAt: now,
      };
      this.authoringCourses.set(data.slug, updated);
      return { ...updated };
    } else {
      const created: AuthoringCourseRecord = {
        id: `ac-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        ...data,
        version: data.version ?? 1,
        createdAt: now,
        updatedAt: now,
      };
      this.authoringCourses.set(data.slug, created);
      return { ...created };
    }
  }
}

export const db = new DatabaseStore();
