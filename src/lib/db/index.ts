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

// In-Memory resilient database engine
class DatabaseStore {
  users: Map<string, UserRecord> = new Map();
  guardianships: Map<string, GuardianshipRecord> = new Map();
  tutorProfiles: Map<string, TutorProfileRecord> = new Map();
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
}

export const db = new DatabaseStore();
