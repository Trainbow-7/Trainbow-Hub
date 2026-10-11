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
  tutorProfileSlug?: string;
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

export type BookingStatus =
  | "HELD"
  | "PENDING_PAYMENT"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED"
  | "EXPIRED"
  | "NO_SHOW"
  | "DISPUTED";

export type PaymentStatus =
  | "INITIATED"
  | "VERIFIED"
  | "FAILED"
  | "ABANDONED"
  | "REFUND_REQUESTED"
  | "REFUND_APPROVED"
  | "REFUNDED";

export type LedgerEntryType =
  | "BOOKING_CREDIT"
  | "COMMISSION_DEBIT"
  | "REFUND_DEBIT"
  | "PAYOUT";

export interface SlotHoldRecord {
  id: string;
  tutorSlug: string;
  studentId: string;
  slotDate: string;
  slotTime: string;
  expiresAt: Date;
  status: "ACTIVE" | "EXPIRED" | "CONVERTED";
  createdAt: Date;
}

export interface BookingRecord {
  id: string;
  studentId: string;
  tutorSlug: string;
  tutorName: string;
  subject: string;
  slotDate: string;
  slotTime: string;
  amountMinorUnits: number;
  commissionMinorUnits: number;
  tutorEarningsMinorUnits: number;
  currency: string;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentReference?: string;
  meetingLink?: string;
  cancellationReason?: string;
  rescheduledFromId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentTransactionRecord {
  id: string;
  reference: string;
  bookingId: string;
  studentId: string;
  amountMinorUnits: number;
  currency: string;
  status: PaymentStatus;
  channel: string;
  paystackResponse?: any;
  verifiedAt?: Date;
  idempotencyKey: string;
  createdAt: Date;
}

export interface TutorLedgerEntryRecord {
  id: string;
  tutorSlug: string;
  bookingId: string;
  transactionReference: string;
  type: LedgerEntryType;
  amountMinorUnits: number;
  currency: string;
  description: string;
  createdAt: Date;
}

// ============================================================================
// Phase F: Socratic AI & Tutor Escalation Types
// ============================================================================

export type AIRole = "SYSTEM" | "USER" | "ASSISTANT";
export type AIHintLevel = "HINT_1" | "HINT_2" | "HINT_3" | "FULL_SOLUTION";
export type AIFeedbackRating = "HELPFUL" | "NOT_HELPFUL" | "REPORT_ERROR";

export interface AIMathVerification {
  isValid: boolean;
  equation?: string;
  method?: string;
  discriminant?: number;
  roots?: number[];
  stepCheck?: string;
  notes?: string;
}

export interface AIConversationRecord {
  id: string;
  userId: string;
  title: string;
  curriculum: string;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIMessageRecord {
  id: string;
  conversationId: string;
  role: AIRole;
  content: string;
  hintLevel: AIHintLevel;
  verification?: AIMathVerification;
  pedagogicalSummary?: string;
  isEscalated?: boolean;
  createdAt: Date;
}

export interface AIQuotaRecord {
  id: string;
  userId: string;
  dateKey: string;
  queryCount: number;
  maxQuota: number;
  resetAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIFeedbackRecord {
  id: string;
  messageId: string;
  userId: string;
  rating: AIFeedbackRating;
  comments?: string;
  createdAt: Date;
}

export interface AIEscalationRecord {
  id: string;
  conversationId: string;
  messageId: string;
  studentId: string;
  tutorSlug: string;
  tutorName: string;
  problemSnippet: string;
  studentAttempt: string;
  suggestedTopic: string;
  status: "PENDING_BOOKING" | "BOOKED" | "RESOLVED";
  createdAt: Date;
}

// ============================================================================
// Phase G: Online Virtual Classroom & Safeguarding Types
// ============================================================================

export type ClassroomSessionStatus = "SCHEDULED" | "LIVE" | "COMPLETED" | "CANCELLED" | "EXPIRED";
export type AttendanceStatus = "ATTENDED" | "PARTIAL" | "MISSED";
export type SafeguardingSeverity = "LOW" | "MEDIUM" | "HIGH" | "URGENT";
export type SafeguardingCategory = "INAPPROPRIATE_BEHAVIOR" | "HARASSMENT" | "TECHNICAL_FAILURE" | "SAFETY_CONCERN" | "UNAUTHORIZED_RECORDING";
export type SafeguardingStatus = "OPEN" | "INVESTIGATING" | "RESOLVED" | "DISMISSED";

export interface ClassroomSessionRecord {
  id: string;
  bookingId: string;
  roomName: string;
  roomUrl: string;
  status: ClassroomSessionStatus;
  recordingEnabled: boolean; // CL-06: default false
  startsAt: Date;
  expiresAt: Date;
  endedAt?: Date;
  lowBandwidthFallbackUsed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClassroomAttendanceRecord {
  id: string;
  sessionId: string;
  bookingId: string;
  userId: string;
  role: "STUDENT" | "TUTOR" | "GUARDIAN";
  joinedAt: Date;
  leftAt?: Date;
  durationSeconds: number;
  status: AttendanceStatus;
  createdAt: Date;
}

export interface SafeguardingIncidentRecord {
  id: string;
  sessionId?: string;
  bookingId?: string;
  reporterId: string;
  reportedUserId?: string;
  severity: SafeguardingSeverity;
  category: SafeguardingCategory;
  description: string;
  sessionTimestampSeconds?: number;
  status: SafeguardingStatus;
  assignedTo?: string;
  resolutionNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TutorReviewRecord {
  id: string;
  bookingId: string;
  studentId: string;
  tutorSlug: string;
  rating: number; // 1-5
  reviewText: string;
  isPublic: boolean;
  createdAt: Date;
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
  slotHolds: Map<string, SlotHoldRecord> = new Map();
  bookings: Map<string, BookingRecord> = new Map();
  paymentTransactions: Map<string, PaymentTransactionRecord> = new Map();
  tutorLedgerEntries: Map<string, TutorLedgerEntryRecord> = new Map();
  aiConversations: Map<string, AIConversationRecord> = new Map();
  aiMessages: Map<string, AIMessageRecord> = new Map();
  aiQuotas: Map<string, AIQuotaRecord> = new Map();
  aiFeedbacks: Map<string, AIFeedbackRecord> = new Map();
  aiEscalations: Map<string, AIEscalationRecord> = new Map();
  classroomSessions: Map<string, ClassroomSessionRecord> = new Map();
  classroomAttendances: Map<string, ClassroomAttendanceRecord> = new Map();
  safeguardingIncidents: Map<string, SafeguardingIncidentRecord> = new Map();
  tutorReviews: Map<string, TutorReviewRecord> = new Map();
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
    this.slotHolds.clear();
    this.bookings.clear();
    this.paymentTransactions.clear();
    this.tutorLedgerEntries.clear();
    this.aiConversations.clear();
    this.aiMessages.clear();
    this.aiQuotas.clear();
    this.aiFeedbacks.clear();
    this.aiEscalations.clear();
    this.classroomSessions.clear();
    this.classroomAttendances.clear();
    this.safeguardingIncidents.clear();
    this.tutorReviews.clear();

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

    // Seed initial demo booking: Chioma Adeleke booked Dr. Tayo Okafor (BK-01 .. BK-09)
    const seedBooking: BookingRecord = {
      id: "bkg-seed-001",
      studentId: studentUser.id,
      tutorSlug: "dr-tayo-okafor",
      tutorName: "Dr. Tayo Okafor",
      subject: "Mathematics",
      slotDate: "2026-10-14",
      slotTime: "16:00 - 17:00",
      amountMinorUnits: 750000, // ₦7,500
      commissionMinorUnits: 112500, // ₦1,125 (15%)
      tutorEarningsMinorUnits: 637500, // ₦6,375
      currency: "NGN",
      bookingStatus: "CONFIRMED",
      paymentStatus: "VERIFIED",
      paymentReference: "tb_pay_seed_001",
      meetingLink: "/classroom/bkg-seed-001",
      createdAt: new Date("2026-10-10"),
      updatedAt: new Date("2026-10-10"),
    };
    this.bookings.set(seedBooking.id, seedBooking);

    // Phase G Seed Classroom Session (CL-01, CL-06)
    const seedSession: ClassroomSessionRecord = {
      id: "cls-seed-001",
      bookingId: seedBooking.id,
      roomName: `trb-cls-${seedBooking.id}`,
      roomUrl: "https://trainbow-sandbox.daily.co/trb-cls-bkg-seed-001",
      status: "SCHEDULED",
      recordingEnabled: false, // CL-06: Strict NDPA default false
      startsAt: new Date(Date.now() - 10 * 60 * 1000), // starts 10 mins ago
      expiresAt: new Date(Date.now() + 65 * 60 * 1000), // expires in 65 mins
      lowBandwidthFallbackUsed: false,
      createdAt: new Date("2026-10-10"),
      updatedAt: new Date("2026-10-10"),
    };
    this.classroomSessions.set(seedSession.id, seedSession);

    // Matching seed payment transaction
    const seedTx: PaymentTransactionRecord = {
      id: "ptx-seed-001",
      reference: "tb_pay_seed_001",
      bookingId: seedBooking.id,
      studentId: studentUser.id,
      amountMinorUnits: 750000,
      currency: "NGN",
      status: "VERIFIED",
      channel: "card",
      verifiedAt: new Date("2026-10-10"),
      idempotencyKey: "idemp_seed_001",
      createdAt: new Date("2026-10-10"),
    };
    this.paymentTransactions.set(seedTx.reference, seedTx);

    // Matching seed tutor ledger entry (PY-04, PY-05)
    const seedCredit: TutorLedgerEntryRecord = {
      id: "led-seed-001",
      tutorSlug: "dr-tayo-okafor",
      bookingId: seedBooking.id,
      transactionReference: seedTx.reference,
      type: "BOOKING_CREDIT",
      amountMinorUnits: 750000,
      currency: "NGN",
      description: "Booking credit for session on 2026-10-14",
      createdAt: new Date("2026-10-10"),
    };
    const seedDebit: TutorLedgerEntryRecord = {
      id: "led-seed-002",
      tutorSlug: "dr-tayo-okafor",
      bookingId: seedBooking.id,
      transactionReference: seedTx.reference,
      type: "COMMISSION_DEBIT",
      amountMinorUnits: 112500,
      currency: "NGN",
      description: "Trainbow Platform 15% commission fee",
      createdAt: new Date("2026-10-10"),
    };
    this.tutorLedgerEntries.set(seedCredit.id, seedCredit);
    this.tutorLedgerEntries.set(seedDebit.id, seedDebit);

    // Phase F: Seed initial Socratic conversation and verified hint for studentUser (AI-01, AI-02, AI-03, AI-04)
    const seedConv: AIConversationRecord = {
      id: "conv-seed-001",
      userId: studentUser.id,
      title: "Solving 2x² - 5x + 3 = 0 (WAEC SSCE)",
      curriculum: "WAEC_SSCE",
      subject: "Mathematics",
      createdAt: new Date("2026-10-10T14:30:00Z"),
      updatedAt: new Date("2026-10-10T14:32:00Z"),
    };
    this.aiConversations.set(seedConv.id, seedConv);

    const seedMsgUser: AIMessageRecord = {
      id: "msg-seed-001",
      conversationId: seedConv.id,
      role: "USER",
      content: "How do I solve 2x² - 5x + 3 = 0 by factorisation for my WAEC SSCE exam?",
      hintLevel: "HINT_1",
      createdAt: new Date("2026-10-10T14:30:05Z"),
    };
    this.aiMessages.set(seedMsgUser.id, seedMsgUser);

    const seedMsgAssistant: AIMessageRecord = {
      id: "msg-seed-002",
      conversationId: seedConv.id,
      role: "ASSISTANT",
      content: "[AI-Generated Mathematical Guidance — Verified by Trainbow Hub Engine]\n\nLet us tackle this step by step using Socratic reasoning for WAEC SSCE Mathematics.\n\n### Step 1: Identify the standard quadratic form\nThe equation is already in the standard form **ax² + bx + c = 0**, where:\n- **a = 2**\n- **b = -5**\n- **c = 3**\n\n### Concept Clue (Hint 1):\nFor factorisation when **a ≠ 1**, find two numbers **p** and **q** such that:\n1. Their product **p × q = a × c = 2 × 3 = 6**\n2. Their sum **p + q = b = -5**\n\nThink: Which two negative integers multiply to give +6 and add up to -5?",
      hintLevel: "HINT_1",
      verification: {
        isValid: true,
        equation: "2x² - 5x + 3 = 0",
        method: "Quadratic Factorisation",
        discriminant: 1,
        roots: [1.5, 1],
        stepCheck: "Discriminant Δ = (-5)² - 4(2)(3) = 25 - 24 = 1 > 0 (Two real distinct roots: x₁ = 1.5, x₂ = 1)",
        notes: "Programmatically verified by Trainbow Math Engine.",
      },
      pedagogicalSummary: "Guide student to find factors p and q multiplying to +6 and adding to -5.",
      createdAt: new Date("2026-10-10T14:30:08Z"),
    };
    this.aiMessages.set(seedMsgAssistant.id, seedMsgAssistant);
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

  async findTutorBySlug(slug: string): Promise<TutorProfileRecord | null> {
    await this.init();
    for (const tp of this.tutorProfiles.values()) {
      if (tp.slug === slug) return { ...tp };
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

  // ============================================================================
  // Phase E: Slot Hold Repository Methods (BK-01, BK-02)
  // ============================================================================

  async createSlotHold(params: {
    tutorSlug: string;
    studentId: string;
    slotDate: string;
    slotTime: string;
    durationMinutes?: number;
  }): Promise<SlotHoldRecord> {
    await this.init();
    const duration = params.durationMinutes ?? 10;
    const now = new Date();

    // Clean up expired holds for this slot
    for (const hold of this.slotHolds.values()) {
      if (
        hold.tutorSlug === params.tutorSlug &&
        hold.slotDate === params.slotDate &&
        hold.slotTime === params.slotTime &&
        hold.status === "ACTIVE" &&
        hold.expiresAt.getTime() <= now.getTime()
      ) {
        hold.status = "EXPIRED";
      }
    }

    // Check for existing confirmed or held booking (concurrency conflict BK-02)
    for (const b of this.bookings.values()) {
      if (
        b.tutorSlug === params.tutorSlug &&
        b.slotDate === params.slotDate &&
        b.slotTime === params.slotTime &&
        (b.bookingStatus === "CONFIRMED" || b.bookingStatus === "HELD")
      ) {
        throw new Error("This slot is already booked for another confirmed lesson.");
      }
    }

    // Check for another active hold by a different learner (BK-02)
    for (const hold of this.slotHolds.values()) {
      if (
        hold.tutorSlug === params.tutorSlug &&
        hold.slotDate === params.slotDate &&
        hold.slotTime === params.slotTime &&
        hold.status === "ACTIVE" &&
        hold.expiresAt.getTime() > now.getTime()
      ) {
        if (hold.studentId !== params.studentId) {
          const remainingSec = Math.ceil((hold.expiresAt.getTime() - now.getTime()) / 1000);
          throw new Error(`Slot is temporarily reserved by another learner (${remainingSec}s remaining).`);
        } else {
          // Same student refreshing hold
          hold.expiresAt = new Date(now.getTime() + duration * 60 * 1000);
          return { ...hold };
        }
      }
    }

    // Create new hold
    const id = `hld-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const expiresAt = new Date(now.getTime() + duration * 60 * 1000);
    const newHold: SlotHoldRecord = {
      id,
      tutorSlug: params.tutorSlug,
      studentId: params.studentId,
      slotDate: params.slotDate,
      slotTime: params.slotTime,
      expiresAt,
      status: "ACTIVE",
      createdAt: now,
    };
    this.slotHolds.set(id, newHold);
    return { ...newHold };
  }

  async findSlotHold(id: string): Promise<SlotHoldRecord | null> {
    await this.init();
    const hold = this.slotHolds.get(id);
    if (!hold) return null;

    if (hold.status === "ACTIVE" && hold.expiresAt.getTime() <= Date.now()) {
      hold.status = "EXPIRED";
    }
    return { ...hold };
  }

  async releaseSlotHold(id: string): Promise<boolean> {
    await this.init();
    const hold = this.slotHolds.get(id);
    if (hold && hold.status === "ACTIVE") {
      hold.status = "EXPIRED";
      return true;
    }
    return false;
  }

  // ============================================================================
  // Phase E: Booking Repository Methods (BK-01 .. BK-09)
  // ============================================================================

  async createBooking(data: {
    studentId: string;
    tutorSlug: string;
    tutorName: string;
    subject?: string;
    slotDate: string;
    slotTime: string;
    amountMinorUnits: number;
    commissionMinorUnits?: number;
    tutorEarningsMinorUnits?: number;
    currency?: string;
    bookingStatus?: BookingStatus;
    paymentStatus?: PaymentStatus;
    paymentReference?: string;
  }): Promise<BookingRecord> {
    await this.init();
    const id = `bkg-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const now = new Date();
    const commissionMinorUnits = data.commissionMinorUnits ?? Math.round(data.amountMinorUnits * 0.15);
    const tutorEarningsMinorUnits = data.tutorEarningsMinorUnits ?? (data.amountMinorUnits - commissionMinorUnits);

    const record: BookingRecord = {
      id,
      studentId: data.studentId,
      tutorSlug: data.tutorSlug,
      tutorName: data.tutorName,
      subject: data.subject || "Mathematics",
      slotDate: data.slotDate,
      slotTime: data.slotTime,
      amountMinorUnits: data.amountMinorUnits,
      commissionMinorUnits,
      tutorEarningsMinorUnits,
      currency: data.currency || "NGN",
      bookingStatus: data.bookingStatus || "HELD",
      paymentStatus: data.paymentStatus || "INITIATED",
      paymentReference: data.paymentReference,
      createdAt: now,
      updatedAt: now,
    };

    this.bookings.set(id, record);
    return { ...record };
  }

  async findBookingById(id: string): Promise<BookingRecord | null> {
    await this.init();
    const b = this.bookings.get(id);
    return b ? { ...b } : null;
  }

  async findBookingByReference(paymentReference: string): Promise<BookingRecord | null> {
    await this.init();
    for (const b of this.bookings.values()) {
      if (b.paymentReference === paymentReference) {
        return { ...b };
      }
    }
    return null;
  }

  async findBookingsByStudentId(studentId: string): Promise<BookingRecord[]> {
    await this.init();
    const results: BookingRecord[] = [];
    for (const b of this.bookings.values()) {
      if (b.studentId === studentId) {
        results.push({ ...b });
      }
    }
    return results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async findBookingsByTutorSlug(tutorSlug: string): Promise<BookingRecord[]> {
    await this.init();
    const results: BookingRecord[] = [];
    for (const b of this.bookings.values()) {
      if (b.tutorSlug === tutorSlug) {
        results.push({ ...b });
      }
    }
    return results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async updateBooking(id: string, updates: Partial<BookingRecord>): Promise<BookingRecord | null> {
    await this.init();
    const existing = this.bookings.get(id);
    if (!existing) return null;

    const updated: BookingRecord = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.bookings.set(id, updated);
    return { ...updated };
  }

  /**
   * Idempotent Payment Confirmation & Ledger Settlement (BK-03, BK-04, PY-02, PY-03, PY-04, PY-05)
   */
  async confirmBookingWithPayment(params: {
    bookingId: string;
    paymentReference: string;
    channel?: string;
    paystackResponse?: any;
    idempotencyKey?: string;
  }): Promise<{ booking: BookingRecord; transaction: PaymentTransactionRecord; isReplay: boolean }> {
    await this.init();
    const booking = this.bookings.get(params.bookingId);
    if (!booking) {
      throw new Error(`Booking ${params.bookingId} not found`);
    }

    // Idempotency check: if already confirmed and matching reference, return existing record
    if (booking.bookingStatus === "CONFIRMED" && booking.paymentReference === params.paymentReference) {
      const existingTx = this.paymentTransactions.get(params.paymentReference);
      return {
        booking: { ...booking },
        transaction: existingTx ?? {
          id: `ptx-${params.paymentReference}`,
          reference: params.paymentReference,
          bookingId: booking.id,
          studentId: booking.studentId,
          amountMinorUnits: booking.amountMinorUnits,
          currency: booking.currency,
          status: "VERIFIED",
          channel: params.channel || "card",
          paystackResponse: params.paystackResponse,
          verifiedAt: new Date(),
          idempotencyKey: params.idempotencyKey || `idemp-${params.paymentReference}`,
          createdAt: booking.createdAt,
        },
        isReplay: true,
      };
    }

    const now = new Date();
    const idempotencyKey = params.idempotencyKey || `idemp-${params.paymentReference}`;

    // Update booking
    booking.bookingStatus = "CONFIRMED";
    booking.paymentStatus = "VERIFIED";
    booking.paymentReference = params.paymentReference;
    booking.meetingLink = `/classroom/${booking.id}`;
    booking.updatedAt = now;
    this.bookings.set(booking.id, booking);

    // Phase G: Create or ensure classroom session exists
    const roomName = `trb-cls-${booking.id}`;
    const newSession: ClassroomSessionRecord = {
      id: `cls-${booking.id}`,
      bookingId: booking.id,
      roomName,
      roomUrl: `https://trainbow-sandbox.daily.co/${roomName}`,
      status: "SCHEDULED",
      recordingEnabled: false, // CL-06
      startsAt: now,
      expiresAt: new Date(now.getTime() + 75 * 60 * 1000),
      lowBandwidthFallbackUsed: false,
      createdAt: now,
      updatedAt: now,
    };
    this.classroomSessions.set(newSession.id, newSession);

    // Convert any associated slot holds to CONVERTED
    for (const hold of this.slotHolds.values()) {
      if (
        hold.tutorSlug === booking.tutorSlug &&
        hold.slotDate === booking.slotDate &&
        hold.slotTime === booking.slotTime
      ) {
        hold.status = "CONVERTED";
      }
    }

    // Record verified transaction
    const transaction: PaymentTransactionRecord = {
      id: `ptx-${Date.now()}-${Math.random().toString(36).substring(7)}`,
      reference: params.paymentReference,
      bookingId: booking.id,
      studentId: booking.studentId,
      amountMinorUnits: booking.amountMinorUnits,
      currency: booking.currency,
      status: "VERIFIED",
      channel: params.channel || "card",
      paystackResponse: params.paystackResponse,
      verifiedAt: now,
      idempotencyKey,
      createdAt: now,
    };
    this.paymentTransactions.set(params.paymentReference, transaction);

    // Record immutable ledger entries (PY-04, PY-05)
    const creditEntry: TutorLedgerEntryRecord = {
      id: `led-${Date.now()}-crd`,
      tutorSlug: booking.tutorSlug,
      bookingId: booking.id,
      transactionReference: params.paymentReference,
      type: "BOOKING_CREDIT",
      amountMinorUnits: booking.amountMinorUnits,
      currency: booking.currency,
      description: `Gross lesson booking credit (${booking.slotDate} ${booking.slotTime})`,
      createdAt: now,
    };
    const commissionEntry: TutorLedgerEntryRecord = {
      id: `led-${Date.now()}-deb`,
      tutorSlug: booking.tutorSlug,
      bookingId: booking.id,
      transactionReference: params.paymentReference,
      type: "COMMISSION_DEBIT",
      amountMinorUnits: booking.commissionMinorUnits,
      currency: booking.currency,
      description: `Trainbow platform 15% commission fee`,
      createdAt: now,
    };
    this.tutorLedgerEntries.set(creditEntry.id, creditEntry);
    this.tutorLedgerEntries.set(commissionEntry.id, commissionEntry);

    return { booking: { ...booking }, transaction, isReplay: false };
  }

  /**
    * Reschedule an existing booking with conflict validation (BK-06)
    */
  async rescheduleBooking(
    bookingIdOrParams: string | { bookingId: string; newSlotDate: string; newSlotTime: string },
    newSlotDate?: string,
    newSlotTime?: string
  ): Promise<BookingRecord> {
    await this.init();
    const params =
      typeof bookingIdOrParams === "string"
        ? { bookingId: bookingIdOrParams, newSlotDate: newSlotDate!, newSlotTime: newSlotTime! }
        : bookingIdOrParams;

    const booking = this.bookings.get(params.bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    if (booking.bookingStatus !== "CONFIRMED") {
      throw new Error(`Cannot reschedule booking with status ${booking.bookingStatus}`);
    }

    const now = new Date();

    // If same slot requested, return current booking
    if (booking.slotDate === params.newSlotDate && booking.slotTime === params.newSlotTime) {
      return { ...booking };
    }

    // Check conflict against existing confirmed bookings for that tutor
    for (const b of this.bookings.values()) {
      if (
        b.id !== params.bookingId &&
        b.tutorSlug === booking.tutorSlug &&
        b.slotDate === params.newSlotDate &&
        b.slotTime === params.newSlotTime &&
        b.bookingStatus === "CONFIRMED"
      ) {
        throw new Error("The requested reschedule slot is already booked.");
      }
    }

    // Check conflict against active holds by other learners
    for (const hold of this.slotHolds.values()) {
      if (
        hold.studentId !== booking.studentId &&
        hold.tutorSlug === booking.tutorSlug &&
        hold.slotDate === params.newSlotDate &&
        hold.slotTime === params.newSlotTime &&
        hold.status === "ACTIVE" &&
        hold.expiresAt.getTime() > now.getTime()
      ) {
        throw new Error("The requested reschedule slot is temporarily reserved by another learner.");
      }
    }

    // Apply reschedule
    booking.rescheduledFromId = `${booking.slotDate} ${booking.slotTime}`;
    booking.slotDate = params.newSlotDate;
    booking.slotTime = params.newSlotTime;
    booking.updatedAt = now;
    this.bookings.set(booking.id, booking);

    return { ...booking };
  }

  /**
    * Cancel booking and record policy-based refund outcome (BK-07, PY-06)
    */
  async cancelBooking(
    bookingIdOrParams: string | { bookingId: string; reason?: string },
    reason?: string
  ): Promise<BookingRecord> {
    await this.init();
    const params =
      typeof bookingIdOrParams === "string"
        ? { bookingId: bookingIdOrParams, reason: reason || "User requested cancellation" }
        : { bookingId: bookingIdOrParams.bookingId, reason: bookingIdOrParams.reason || "User requested cancellation" };

    const booking = this.bookings.get(params.bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    if (booking.bookingStatus === "CANCELLED" || booking.bookingStatus === "COMPLETED") {
      throw new Error(`Booking is already ${booking.bookingStatus}`);
    }

    const now = new Date();
    booking.bookingStatus = "CANCELLED";
    booking.paymentStatus = "REFUND_APPROVED";
    booking.cancellationReason = params.reason;
    booking.updatedAt = now;
    this.bookings.set(booking.id, booking);

    // Record refund debit in financial ledger
    const refundDebit: TutorLedgerEntryRecord = {
      id: `led-${Date.now()}-ref`,
      tutorSlug: booking.tutorSlug,
      bookingId: booking.id,
      transactionReference: booking.paymentReference || `ref-${booking.id}`,
      type: "REFUND_DEBIT",
      amountMinorUnits: booking.tutorEarningsMinorUnits,
      currency: booking.currency,
      description: `Refund reversal for cancelled session (${booking.slotDate}): ${params.reason}`,
      createdAt: now,
    };
    this.tutorLedgerEntries.set(refundDebit.id, refundDebit);

    return { ...booking };
  }

  // ============================================================================
  // Phase E: Payment Transaction & Ledger Repository Methods
  // ============================================================================

  async findPaymentTransactionByReference(reference: string): Promise<PaymentTransactionRecord | null> {
    await this.init();
    const tx = this.paymentTransactions.get(reference);
    return tx ? { ...tx } : null;
  }

  async findLedgerEntriesByTutorSlug(tutorSlug: string): Promise<TutorLedgerEntryRecord[]> {
    await this.init();
    const results: TutorLedgerEntryRecord[] = [];
    for (const entry of this.tutorLedgerEntries.values()) {
      if (entry.tutorSlug === tutorSlug) {
        results.push({ ...entry });
      }
    }
    return results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // ============================================================================
  // Phase F: Socratic AI & Tutor Escalation Repository Methods (AI-01 through AI-12)
  // ============================================================================

  getQuotaDateKey(): string {
    return new Date().toISOString().slice(0, 10);
  }

  async getOrCreateUserQuota(userId: string, role?: string): Promise<AIQuotaRecord> {
    await this.init();
    const dateKey = this.getQuotaDateKey();
    const key = `${userId}:${dateKey}`;
    let quota = this.aiQuotas.get(key);
    if (!quota) {
      const isUnlimited = role === "TUTOR" || role === "ADMIN";
      const isPro = role === "PRO_STUDENT";
      const maxQuota = isUnlimited ? 999999 : isPro ? 100 : 10;

      const resetAt = new Date();
      resetAt.setUTCHours(23, 59, 59, 999);

      quota = {
        id: `qta-${userId}-${dateKey}`,
        userId,
        dateKey,
        queryCount: 0,
        maxQuota,
        resetAt,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.aiQuotas.set(key, quota);
    }
    return { ...quota };
  }

  async checkAndIncrementQuota(
    userId: string,
    role?: string
  ): Promise<{ allowed: boolean; remaining: number; maxQuota: number; resetAt: Date }> {
    await this.init();
    const dateKey = this.getQuotaDateKey();
    const key = `${userId}:${dateKey}`;
    const quota = await this.getOrCreateUserQuota(userId, role);

    if (quota.queryCount >= quota.maxQuota) {
      return {
        allowed: false,
        remaining: 0,
        maxQuota: quota.maxQuota,
        resetAt: quota.resetAt,
      };
    }

    quota.queryCount += 1;
    quota.updatedAt = new Date();
    this.aiQuotas.set(key, quota);

    return {
      allowed: true,
      remaining: Math.max(0, quota.maxQuota - quota.queryCount),
      maxQuota: quota.maxQuota,
      resetAt: quota.resetAt,
    };
  }

  async createAIConversation(params: {
    userId: string;
    title: string;
    curriculum?: string;
    subject?: string;
  }): Promise<AIConversationRecord> {
    await this.init();
    const now = new Date();
    const record: AIConversationRecord = {
      id: `conv-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: params.userId,
      title: params.title.trim() || "Mathematics Socratic Inquiry",
      curriculum: params.curriculum || "WAEC_SSCE",
      subject: params.subject || "Mathematics",
      createdAt: now,
      updatedAt: now,
    };
    this.aiConversations.set(record.id, record);
    return { ...record };
  }

  async findAIConversationsByUserId(userId: string): Promise<AIConversationRecord[]> {
    await this.init();
    const list: AIConversationRecord[] = [];
    for (const c of this.aiConversations.values()) {
      if (c.userId === userId) {
        list.push({ ...c });
      }
    }
    return list.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  async findAIConversationById(id: string, userId?: string): Promise<AIConversationRecord | null> {
    await this.init();
    const c = this.aiConversations.get(id);
    if (!c) return null;
    if (userId && c.userId !== userId) return null;
    return { ...c };
  }

  async deleteAIConversation(id: string, userId: string): Promise<boolean> {
    await this.init();
    const c = this.aiConversations.get(id);
    if (!c || c.userId !== userId) return false;
    this.aiConversations.delete(id);
    for (const [msgId, msg] of this.aiMessages.entries()) {
      if (msg.conversationId === id) {
        this.aiMessages.delete(msgId);
      }
    }
    return true;
  }

  async createAIMessage(params: {
    conversationId: string;
    role: AIRole;
    content: string;
    hintLevel: AIHintLevel;
    verification?: AIMathVerification;
    pedagogicalSummary?: string;
  }): Promise<AIMessageRecord> {
    await this.init();
    const now = new Date();
    const record: AIMessageRecord = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      conversationId: params.conversationId,
      role: params.role,
      content: params.content,
      hintLevel: params.hintLevel,
      verification: params.verification,
      pedagogicalSummary: params.pedagogicalSummary,
      createdAt: now,
    };
    this.aiMessages.set(record.id, record);

    const conv = this.aiConversations.get(params.conversationId);
    if (conv) {
      conv.updatedAt = now;
      this.aiConversations.set(conv.id, conv);
    }

    return { ...record };
  }

  async findAIMessagesByConversationId(conversationId: string): Promise<AIMessageRecord[]> {
    await this.init();
    const list: AIMessageRecord[] = [];
    for (const m of this.aiMessages.values()) {
      if (m.conversationId === conversationId) {
        list.push({ ...m });
      }
    }
    return list.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  async recordAIFeedback(params: {
    messageId: string;
    userId: string;
    rating: AIFeedbackRating;
    comments?: string;
  }): Promise<AIFeedbackRecord> {
    await this.init();
    const record: AIFeedbackRecord = {
      id: `fbk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      messageId: params.messageId,
      userId: params.userId,
      rating: params.rating,
      comments: params.comments,
      createdAt: new Date(),
    };
    this.aiFeedbacks.set(record.id, record);
    return { ...record };
  }

  async createAIEscalation(params: {
    conversationId: string;
    messageId: string;
    studentId: string;
    tutorSlug?: string;
    problemSnippet: string;
    studentAttempt?: string;
    suggestedTopic?: string;
  }): Promise<AIEscalationRecord> {
    await this.init();
    const tutorSlug = params.tutorSlug || "dr-tayo-okafor";
    const tutor = this.tutorProfiles.get(tutorSlug);
    const tutorName = tutor ? tutor.title : "Dr. Tayo Okafor";

    const record: AIEscalationRecord = {
      id: `esc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      conversationId: params.conversationId,
      messageId: params.messageId,
      studentId: params.studentId,
      tutorSlug,
      tutorName,
      problemSnippet: params.problemSnippet,
      studentAttempt: params.studentAttempt || "Student requested live tutor breakdown after hints.",
      suggestedTopic: params.suggestedTopic || "Mathematics Clarification",
      status: "PENDING_BOOKING",
      createdAt: new Date(),
    };
    this.aiEscalations.set(record.id, record);

    const msg = this.aiMessages.get(params.messageId);
    if (msg) {
      msg.isEscalated = true;
      this.aiMessages.set(msg.id, msg);
    }

    return { ...record };
  }

  async findAIEscalationsByStudentId(studentId: string): Promise<AIEscalationRecord[]> {
    await this.init();
    const list: AIEscalationRecord[] = [];
    for (const e of this.aiEscalations.values()) {
      if (e.studentId === studentId) {
        list.push({ ...e });
      }
    }
    return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // ============================================================================
  // Phase G: Virtual Classroom & Safeguarding Methods (CL-01 through CL-06)
  // ============================================================================

  async findClassroomSessionByBookingId(bookingId: string): Promise<ClassroomSessionRecord | null> {
    await this.init();
    for (const session of this.classroomSessions.values()) {
      if (session.bookingId === bookingId) {
        return { ...session };
      }
    }
    return null;
  }

  async findClassroomSessionById(sessionId: string): Promise<ClassroomSessionRecord | null> {
    await this.init();
    const session = this.classroomSessions.get(sessionId);
    return session ? { ...session } : null;
  }

  async getOrCreateClassroomSession(bookingId: string): Promise<ClassroomSessionRecord | null> {
    await this.init();
    const booking = this.bookings.get(bookingId);
    if (!booking) return null;

    let existing = await this.findClassroomSessionByBookingId(bookingId);
    if (existing) return existing;

    const roomName = `trb-cls-${booking.id}`;
    const now = new Date();
    const newSession: ClassroomSessionRecord = {
      id: `cls-${booking.id}`,
      bookingId: booking.id,
      roomName,
      roomUrl: `https://trainbow-sandbox.daily.co/${roomName}`,
      status: booking.bookingStatus === "CONFIRMED" ? "SCHEDULED" : "EXPIRED",
      recordingEnabled: false, // CL-06: Strict NDPA default false
      startsAt: now,
      expiresAt: new Date(now.getTime() + 75 * 60 * 1000),
      lowBandwidthFallbackUsed: false,
      createdAt: now,
      updatedAt: now,
    };
    this.classroomSessions.set(newSession.id, newSession);
    return { ...newSession };
  }

  async recordAttendanceJoin(params: {
    sessionId: string;
    bookingId: string;
    userId: string;
    role: "STUDENT" | "TUTOR" | "GUARDIAN";
  }): Promise<ClassroomAttendanceRecord> {
    await this.init();
    const session = this.classroomSessions.get(params.sessionId);
    if (session && session.status === "SCHEDULED") {
      session.status = "LIVE";
      session.updatedAt = new Date();
      this.classroomSessions.set(session.id, session);
    }

    const record: ClassroomAttendanceRecord = {
      id: `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      sessionId: params.sessionId,
      bookingId: params.bookingId,
      userId: params.userId,
      role: params.role,
      joinedAt: new Date(),
      durationSeconds: 0,
      status: "ATTENDED",
      createdAt: new Date(),
    };
    this.classroomAttendances.set(record.id, record);
    return { ...record };
  }

  async recordAttendanceLeave(attendanceId: string): Promise<ClassroomAttendanceRecord | null> {
    await this.init();
    const record = this.classroomAttendances.get(attendanceId);
    if (!record) return null;

    const now = new Date();
    record.leftAt = now;
    record.durationSeconds = Math.max(0, Math.floor((now.getTime() - record.joinedAt.getTime()) / 1000));
    this.classroomAttendances.set(record.id, record);
    return { ...record };
  }

  async findAttendancesBySessionId(sessionId: string): Promise<ClassroomAttendanceRecord[]> {
    await this.init();
    const list: ClassroomAttendanceRecord[] = [];
    for (const a of this.classroomAttendances.values()) {
      if (a.sessionId === sessionId) {
        list.push({ ...a });
      }
    }
    return list;
  }

  async createSafeguardingIncident(params: {
    sessionId?: string;
    bookingId?: string;
    reporterId: string;
    reportedUserId?: string;
    severity: SafeguardingSeverity;
    category: SafeguardingCategory;
    description: string;
    sessionTimestampSeconds?: number;
  }): Promise<SafeguardingIncidentRecord> {
    await this.init();
    const incident: SafeguardingIncidentRecord = {
      id: `inc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      sessionId: params.sessionId,
      bookingId: params.bookingId,
      reporterId: params.reporterId,
      reportedUserId: params.reportedUserId,
      severity: params.severity,
      category: params.category,
      description: params.description,
      sessionTimestampSeconds: params.sessionTimestampSeconds,
      status: "OPEN",
      assignedTo: "Safeguarding Lead (Grace Danladi)",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.safeguardingIncidents.set(incident.id, incident);
    return { ...incident };
  }

  async findSafeguardingIncidents(): Promise<SafeguardingIncidentRecord[]> {
    await this.init();
    return Array.from(this.safeguardingIncidents.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async completeSessionAndBooking(bookingId: string, tutorSlug: string): Promise<{ booking: BookingRecord; session: ClassroomSessionRecord }> {
    await this.init();
    const booking = this.bookings.get(bookingId);
    if (!booking) throw new Error("Booking not found");

    const session = await this.getOrCreateClassroomSession(bookingId);
    if (!session) throw new Error("Classroom session not found");

    const now = new Date();
    booking.bookingStatus = "COMPLETED";
    booking.updatedAt = now;
    this.bookings.set(booking.id, booking);

    session.status = "COMPLETED";
    session.endedAt = now;
    session.updatedAt = now;
    this.classroomSessions.set(session.id, session);

    return { booking: { ...booking }, session: { ...session } };
  }

  async createTutorReview(params: {
    bookingId: string;
    studentId: string;
    tutorSlug: string;
    rating: number;
    reviewText: string;
  }): Promise<TutorReviewRecord> {
    await this.init();
    if (params.rating < 1 || params.rating > 5) {
      throw new Error("Rating must be between 1 and 5 stars");
    }

    const review: TutorReviewRecord = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      bookingId: params.bookingId,
      studentId: params.studentId,
      tutorSlug: params.tutorSlug,
      rating: params.rating,
      reviewText: params.reviewText,
      isPublic: true,
      createdAt: new Date(),
    };
    this.tutorReviews.set(review.id, review);

    // Recompute tutor average rating
    const tutor = Array.from(this.tutorProfiles.values()).find(t => t.slug === params.tutorSlug);
    if (tutor) {
      const tutorReviews = Array.from(this.tutorReviews.values()).filter(r => r.tutorSlug === params.tutorSlug);
      const sum = tutorReviews.reduce((acc, r) => acc + r.rating, 0);
      tutor.rating = Number((sum / tutorReviews.length).toFixed(1));
      tutor.completedLessons = (tutor.completedLessons || 0) + 1;
      this.tutorProfiles.set(tutor.id, tutor);
    }

    return { ...review };
  }

  async findReviewByBookingId(bookingId: string): Promise<TutorReviewRecord | null> {
    await this.init();
    for (const r of this.tutorReviews.values()) {
      if (r.bookingId === bookingId) {
        return { ...r };
      }
    }
    return null;
  }

  async findReviewsByTutorSlug(tutorSlug: string): Promise<TutorReviewRecord[]> {
    await this.init();
    return Array.from(this.tutorReviews.values())
      .filter(r => r.tutorSlug === tutorSlug)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async revokeClassroomSession(bookingId: string): Promise<boolean> {
    await this.init();
    for (const session of this.classroomSessions.values()) {
      if (session.bookingId === bookingId) {
        session.status = "CANCELLED";
        session.updatedAt = new Date();
        this.classroomSessions.set(session.id, session);
        return true;
      }
    }
    return false;
  }
}


const globalForDb = globalThis as unknown as { db?: DatabaseStore };
export const db = globalForDb.db ?? new DatabaseStore();
if (process.env.NODE_ENV !== "production") globalForDb.db = db;
