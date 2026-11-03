import { COURSES_DATA } from "./curricula";
export interface SubjectItem {
  id: string;
  name: string;
  slug: string;
  category: "Academic" | "Music";
  status: "active" | "draft" | "retired";
  aiEnabled: boolean;
  levels: string[];
  description: string;
  accentColor: string;
  courseCount: number;
  tutorCount: number;
}

export interface CourseLesson {
  id: string;
  title: string;
  durationMinutes: number;
  isFreePreview: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  subjectSlug: string;
  subjectName: string;
  level: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  priceMinorUnits: number; // in kobo (0 for included in Academy pass)
  currency: string;
  rating: number;
  reviewCount: number;
  lessonCount: number;
  durationHours: number;
  shortDescription: string;
  fullDescription: string;
  syllabus: CourseModule[];
  learningOutcomes: string[];
  prerequisites: string[];
}

export interface TutorItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatarText: string;
  location: string;
  state: string;
  languages: string[];
  qualifications: string[];
  subjects: string[];
  levels: string[];
  deliveryFormats: ("Online Virtual Classroom" | "In-Person (Lagos & Abuja)" | "Hybrid")[];
  hourlyRateMinorUnits: number; // in kobo
  currency: string;
  rating: number;
  completedLessons: number;
  verifiedBadge: boolean;
  backgroundChecked: boolean;
  bio: string;
  teachingApproach: string;
  cancellationPolicy: string;
  weeklyAvailability: {
    day: string;
    slots: string[];
  }[];
}

export interface FAQItem {
  id: string;
  category: "General" | "Parents & Safety" | "AI Assistant" | "Tutors & Booking" | "Payments";
  question: string;
  answer: string;
}

// -----------------------------------------------------------------------------
// SUBJECTS
// -----------------------------------------------------------------------------
export const SEED_SUBJECTS: SubjectItem[] = [
  {
    id: "sb-math",
    name: "Mathematics",
    slug: "mathematics",
    category: "Academic",
    status: "active",
    aiEnabled: true,
    levels: ["Primary 1-6", "JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep", "Cambridge IGCSE"],
    description: "Foundational and advanced mathematics, algebra, trigonometry, calculus, and quantitative reasoning.",
    accentColor: "border-brand-blue-600",
    courseCount: 6,
    tutorCount: 8,
  },
  {
    id: "sb-eng",
    name: "English Language",
    slug: "english",
    category: "Academic",
    status: "active",
    aiEnabled: false,
    levels: ["Primary 1-6", "JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description: "Grammar, comprehension, oral pronunciation, essay composition, and literary analysis.",
    accentColor: "border-indigo-600",
    courseCount: 3,
    tutorCount: 5,
  },
  {
    id: "sb-phy",
    name: "Physics",
    slug: "physics",
    category: "Academic",
    status: "active",
    aiEnabled: false,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description: "Mechanics, thermal energy, optics, wave motion, electromagnetism, and atomic physics.",
    accentColor: "border-sky-600",
    courseCount: 2,
    tutorCount: 4,
  },
  {
    id: "sb-chm",
    name: "Chemistry",
    slug: "chemistry",
    category: "Academic",
    status: "active",
    aiEnabled: false,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description: "Inorganic compounds, organic chemistry, periodic trends, stoichiometry, and volumetric analysis.",
    accentColor: "border-emerald-600",
    courseCount: 2,
    tutorCount: 4,
  },
  {
    id: "sb-bio",
    name: "Biology",
    slug: "biology",
    category: "Academic",
    status: "active",
    aiEnabled: false,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description: "Cell physiology, heredity and genetics, plant/animal systems, ecology, and health sciences.",
    accentColor: "border-teal-600",
    courseCount: 2,
    tutorCount: 3,
  },
  {
    id: "sb-mus-th",
    name: "Music Theory",
    slug: "music-theory",
    category: "Music",
    status: "active",
    aiEnabled: false,
    levels: ["Beginner (Grade 1-3)", "Intermediate (Grade 4-5)", "Advanced (Grade 6-8)"],
    description: "Notation reading, clefs, scales, intervals, harmony, and standard ABRSM/MUSON theory preparation.",
    accentColor: "border-amber-500",
    courseCount: 1,
    tutorCount: 3,
  },
  {
    id: "sb-piano",
    name: "Piano & Keyboard",
    slug: "piano",
    category: "Music",
    status: "active",
    aiEnabled: false,
    levels: ["Beginner", "Intermediate", "Advanced"],
    description: "Practical finger technique, classical repertoire, gospel chord progressions, and modern improvisation.",
    accentColor: "border-amber-500",
    courseCount: 1,
    tutorCount: 2,
  },
  {
    id: "sb-guitar",
    name: "Acoustic & Bass Guitar",
    slug: "guitar",
    category: "Music",
    status: "active",
    aiEnabled: false,
    levels: ["Beginner", "Intermediate", "Advanced"],
    description: "Fretboard mastery, strumming patterns, fingerstyle technique, and bassline accompaniment.",
    accentColor: "border-amber-500",
    courseCount: 1,
    tutorCount: 2,
  },
  {
    id: "sb-vocal",
    name: "Vocal Training",
    slug: "vocals",
    category: "Music",
    status: "active",
    aiEnabled: false,
    levels: ["Beginner", "Intermediate", "Advanced"],
    description: "Vocal health, diaphragmatic breath control, pitch accuracy, range extension, and performance confidence.",
    accentColor: "border-amber-500",
    courseCount: 1,
    tutorCount: 2,
  },
];

// -----------------------------------------------------------------------------
// 6 MATHEMATICS COURSES
// -----------------------------------------------------------------------------
export const SEED_COURSES: CourseItem[] = COURSES_DATA.map((c) => {
  const allLessons = c.modules.flatMap((m) => m.lessons);
  const lessonCount = allLessons.length;
  const totalMinutes = allLessons.reduce((sum, l) => sum + (l.durationMinutes || 0), 0);
  const durationHours = Math.round(totalMinutes / 60);

  return {
    id: c.id,
    slug: c.slug,
    title: c.title,
    subjectSlug: c.subjectSlug,
    subjectName: c.subject,
    level: c.level,
    instructorName: c.instructorName,
    instructorTitle: c.instructorTitle || "Senior Mathematics Faculty",
    instructorAvatar: "TH",
    priceMinorUnits: c.priceMinorUnits,
    currency: c.currency,
    rating: 0,
    reviewCount: 0,
    lessonCount,
    durationHours,
    shortDescription: c.shortDescription,
    fullDescription: c.description,
    syllabus: c.modules.map((m) => ({
      id: m.id,
      title: m.title,
      description: m.description,
      lessons: m.lessons.map((l) => ({
        id: l.id,
        slug: l.slug,
        title: l.title,
        durationMinutes: l.durationMinutes,
        isFreePreview: l.isFreePreview,
        topicId: l.topicId,
        order: l.sortOrder,
        summary: l.summary,
        objectives: l.objectives,
        keyPoints: l.keyPoints,
        reviewStatus: l.reviewStatus,
        videoId: l.videoId,
      })),
    })),
    learningOutcomes: c.learningOutcomes,
    prerequisites: c.prerequisites,
  };
});

// -----------------------------------------------------------------------------
// 12 VETTED NIGERIAN TUTORS
// -----------------------------------------------------------------------------
export const SEED_TUTORS: TutorItem[] = [
  {
    id: "tut-01",
    slug: "lead-stem-tutor",
    name: "Lead STEM Tutor",
    title: "Ph.D. in Pure Mathematics, University of Lagos",
    avatarText: "TO",
    location: "Yaba, Lagos",
    state: "Lagos",
    languages: ["English", "Yoruba"],
    qualifications: ["Ph.D. Pure Mathematics (UNILAG)", "B.Sc. Mathematics (First Class)", "12+ Years Teaching Experience"],
    subjects: ["Mathematics", "Physics"],
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep", "Cambridge IGCSE"],
    deliveryFormats: ["Online Virtual Classroom", "In-Person (Lagos & Abuja)"],
    hourlyRateMinorUnits: 750000, // ₦7,500/hr
    currency: "NGN",
    rating: 5.0,
    completedLessons: 142,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Former university lecturer and dedicated senior secondary math mentor. Specializes in transforming math anxiety into exam mastery through patient first-principles reasoning.",
    teachingApproach: "I diagnose core concept gaps before tackling complex problems. Every session finishes with 3 independent exam questions to solidify confidence.",
    cancellationPolicy: "Full refund if cancelled > 24 hours prior. 50% refund if cancelled 12-24 hours prior. Rescheduling allowed up to 4 hours before the session.",
    weeklyAvailability: [
      { day: "Monday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Wednesday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Friday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
      { day: "Saturday", slots: ["10:00 - 11:00", "11:30 - 12:30", "14:00 - 15:00"] },
    ],
  },
  {
    id: "tut-02",
    slug: "engr-chinedu-eze",
    name: "Mr Oyedeji S.T",
    title: "M.Eng. Mechanical Engineering, University of Nigeria Nsukka",
    avatarText: "CE",
    location: "Wuse II, Abuja",
    state: "Abuja FCT",
    languages: ["English", "Igbo"],
    qualifications: ["M.Eng. Mechanical Engineering (UNN)", "COREN Registered Engineer", "JAMB 90+ Score Mentor"],
    subjects: ["Mathematics", "Physics"],
    levels: ["SS 1-3", "JAMB UTME Prep", "WAEC Prep"],
    deliveryFormats: ["Online Virtual Classroom", "Hybrid"],
    hourlyRateMinorUnits: 650000, // ₦6,500/hr
    currency: "NGN",
    rating: 4.9,
    completedLessons: 98,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Passionate STEM tutor with 8 years of proven track record training high-scoring JAMB and WAEC candidates. Known for rapid mental calculation strategies.",
    teachingApproach: "Focus on speed and precision for computer-based tests (CBT). We break down time-draining questions into 45-second shortcuts.",
    cancellationPolicy: "Full refund > 24 hours. Reschedule anytime with 6 hours notice.",
    weeklyAvailability: [
      { day: "Tuesday", slots: ["17:00 - 18:00", "18:30 - 19:30"] },
      { day: "Thursday", slots: ["17:00 - 18:00", "18:30 - 19:30"] },
      { day: "Saturday", slots: ["09:00 - 10:00", "10:30 - 11:30"] },
      { day: "Sunday", slots: ["14:00 - 15:00", "15:30 - 16:30"] },
    ],
  },
  {
    id: "tut-03",
    slug: "mrs-folashade-adeleke",
    name: "Mr Oyedeji S.T",
    title: "B.Ed. Mathematics & Education, University of Ibadan",
    avatarText: "FA",
    location: "Bodija, Ibadan",
    state: "Oyo",
    languages: ["English", "Yoruba"],
    qualifications: ["B.Ed. Mathematics (UI)", "TRCN Certified Teacher", "Lagos State Best Math Teacher Awardee"],
    subjects: ["Mathematics"],
    levels: ["Primary 1-6", "JSS 1-3", "SS 1-3"],
    deliveryFormats: ["Online Virtual Classroom"],
    hourlyRateMinorUnits: 550000, // ₦5,500/hr
    currency: "NGN",
    rating: 4.9,
    completedLessons: 185,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Warm, supportive mathematics educator with over 15 years in Nigerian classroom teaching. Expert in demystifying algebra and word problems for young learners.",
    teachingApproach: "Positive reinforcement, interactive whiteboard illustrations, and step-by-step guidance tailored to each child's pace.",
    cancellationPolicy: "24-hour notice for 100% refund. 1 free reschedule per month.",
    weeklyAvailability: [
      { day: "Monday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
      { day: "Wednesday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
      { day: "Thursday", slots: ["15:00 - 16:00"] },
      { day: "Saturday", slots: ["11:00 - 12:00", "12:30 - 13:30"] },
    ],
  },
  {
    id: "tut-04",
    slug: "dr-amina-bello",
    name: "Mr Oyedeji S.T",
    title: "Ph.D. Applied Mathematics, Ahmadu Bello University",
    avatarText: "AB",
    location: "Garki, Abuja",
    state: "Abuja FCT",
    languages: ["English", "Hausa"],
    qualifications: ["Ph.D. Applied Math (ABU Zaria)", "M.Sc. Statistics", "British Council Accredited"],
    subjects: ["Mathematics", "Chemistry"],
    levels: ["SS 1-3", "Cambridge IGCSE", "WAEC Prep"],
    deliveryFormats: ["Online Virtual Classroom", "In-Person (Lagos & Abuja)"],
    hourlyRateMinorUnits: 800000, // ₦8,000/hr
    currency: "NGN",
    rating: 5.0,
    completedLessons: 110,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Experienced researcher and mentor passionate about empowering Nigerian girls in STEM. Expert in Calculus, Statistics, and IGCSE Extended Mathematics.",
    teachingApproach: "Grounded analytical approach. I connect abstract formulas to real engineering and economic applications.",
    cancellationPolicy: "Strict 24-hour cancellation rule for full refund.",
    weeklyAvailability: [
      { day: "Monday", slots: ["17:00 - 18:00"] },
      { day: "Wednesday", slots: ["17:00 - 18:00"] },
      { day: "Friday", slots: ["17:00 - 18:00", "18:30 - 19:30"] },
      { day: "Saturday", slots: ["13:00 - 14:00", "14:30 - 15:30"] },
    ],
  },
  {
    id: "tut-05",
    slug: "mr-emeka-nwosu",
    name: "Mr Oyedeji S.T",
    title: "B.Sc. Industrial Mathematics, Federal University of Technology Owerri",
    avatarText: "EN",
    location: "GRA, Port Harcourt",
    state: "Rivers",
    languages: ["English", "Igbo"],
    qualifications: ["B.Sc. Industrial Mathematics (FUTO)", "Common Entrance Prep Master (10+ Yrs)"],
    subjects: ["Mathematics"],
    levels: ["Primary 1-6", "JSS 1-3"],
    deliveryFormats: ["Online Virtual Classroom"],
    hourlyRateMinorUnits: 500000, // ₦5,000/hr
    currency: "NGN",
    rating: 4.8,
    completedLessons: 76,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Specialist in Common Entrance examinations for King's College, Queen's College, and top private secondary schools.",
    teachingApproach: "Gamified lessons, quantitative reasoning riddles, and confidence building for primary pupils.",
    cancellationPolicy: "Flexible rescheduling; full refund up to 12 hours prior.",
    weeklyAvailability: [
      { day: "Tuesday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Thursday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Saturday", slots: ["10:00 - 11:00", "11:30 - 12:30"] },
    ],
  },
  {
    id: "tut-06",
    slug: "mrs-zainab-aliyu",
    name: "Mr Oyedeji S.T",
    title: "M.Sc. Mathematics & Statistics, Bayero University Kano",
    avatarText: "ZA",
    location: "Nassarawa, Kano",
    state: "Kano",
    languages: ["English", "Hausa"],
    qualifications: ["M.Sc. Statistics (BUK)", "Cambridge Certified Educator", "TRCN Registered"],
    subjects: ["Mathematics", "Physics"],
    levels: ["JSS 1-3", "SS 1-3", "Cambridge IGCSE", "WAEC Prep"],
    deliveryFormats: ["Online Virtual Classroom"],
    hourlyRateMinorUnits: 700000, // ₦7,000/hr
    currency: "NGN",
    rating: 4.9,
    completedLessons: 64,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Dedicated tutor bridging bilingual learning in northern Nigeria. Guides students into top grades in IGCSE and WAEC.",
    teachingApproach: "Curriculum-aligned mastery drills with structured weekly homework and guardian progress summaries.",
    cancellationPolicy: "24-hour full refund; 50% refund thereafter.",
    weeklyAvailability: [
      { day: "Monday", slots: ["16:00 - 17:00"] },
      { day: "Wednesday", slots: ["16:00 - 17:00"] },
      { day: "Saturday", slots: ["14:00 - 15:00", "15:30 - 16:30"] },
    ],
  },
  {
    id: "tut-07",
    slug: "mr-babajide-ogundimu",
    name: "Mr. Babajide Ogundimu",
    title: "B.A. English & Literary Studies, Obafemi Awolowo University",
    avatarText: "BO",
    location: "Ikeja, Lagos",
    state: "Lagos",
    languages: ["English", "Yoruba"],
    qualifications: ["B.A. English (OAU)", "IELTS Academic 8.5", "WAEC English Examiner"],
    subjects: ["English Language"],
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    deliveryFormats: ["Online Virtual Classroom", "Hybrid"],
    hourlyRateMinorUnits: 600000, // ₦6,000/hr
    currency: "NGN",
    rating: 4.9,
    completedLessons: 89,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Expert English language tutor focusing on essay structure, lexis, comprehension passages, and oral English phonetics.",
    teachingApproach: "Interactive writing workshops, sentence diagnostics, and oral pronunciation feedback.",
    cancellationPolicy: "24-hour notice required for full refund.",
    weeklyAvailability: [
      { day: "Tuesday", slots: ["16:30 - 17:30", "18:00 - 19:00"] },
      { day: "Thursday", slots: ["16:30 - 17:30", "18:00 - 19:00"] },
      { day: "Saturday", slots: ["12:00 - 13:00", "13:30 - 14:30"] },
    ],
  },
  {
    id: "tut-08",
    slug: "miss-chioma-okonkwo",
    name: "Miss Chioma Okonkwo",
    title: "B.Sc. Biochemistry (First Class), University of Benin",
    avatarText: "CO",
    location: "Independence Layout, Enugu",
    state: "Enugu",
    languages: ["English", "Igbo"],
    qualifications: ["B.Sc. Biochemistry (UNIBEN)", "Best Science Graduate 2021", "JAMB Science 320+ Mentor"],
    subjects: ["Chemistry", "Biology"],
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    deliveryFormats: ["Online Virtual Classroom"],
    hourlyRateMinorUnits: 600000, // ₦6,000/hr
    currency: "NGN",
    rating: 5.0,
    completedLessons: 55,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Energetic science educator who brings organic reactions and cellular biology to life through memorable visual models.",
    teachingApproach: "Concept mapping and active recall drills to master complex chemical formulas and biological diagrams.",
    cancellationPolicy: "Full refund up to 24 hours prior to lesson.",
    weeklyAvailability: [
      { day: "Monday", slots: ["17:00 - 18:00"] },
      { day: "Wednesday", slots: ["17:00 - 18:00"] },
      { day: "Friday", slots: ["16:00 - 17:00"] },
      { day: "Saturday", slots: ["10:00 - 11:00", "11:30 - 12:30"] },
    ],
  },
  {
    id: "tut-09",
    slug: "mr-femi-adetunji",
    name: "Mr. Femi Adetunji",
    title: "B.Sc. Physics with Electronics, Federal University of Technology Akure",
    avatarText: "FA",
    location: "Surulere, Lagos",
    state: "Lagos",
    languages: ["English", "Yoruba"],
    qualifications: ["B.Sc. Physics (FUTA)", "Robotics Coach", "7+ Years Physics Tutoring"],
    subjects: ["Physics", "Mathematics"],
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    deliveryFormats: ["Online Virtual Classroom", "In-Person (Lagos & Abuja)"],
    hourlyRateMinorUnits: 700000, // ₦7,000/hr
    currency: "NGN",
    rating: 4.8,
    completedLessons: 68,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Passionate about demonstrating that Physics is simply applied mathematics. Specializes in mechanics and circuit electricity.",
    teachingApproach: "Step-by-step formula derivation followed by past WAEC alternative-to-practical questions.",
    cancellationPolicy: "Full refund > 24 hours. Reschedule up to 6 hours prior.",
    weeklyAvailability: [
      { day: "Tuesday", slots: ["17:00 - 18:00", "18:30 - 19:30"] },
      { day: "Thursday", slots: ["17:00 - 18:00", "18:30 - 19:30"] },
      { day: "Saturday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
    ],
  },
  {
    id: "tut-10",
    slug: "pastor-david-adeyemi",
    name: "Mr. David Adeyemi",
    title: "MUSON Diploma & ABRSM Grade 8 Piano Distinction",
    avatarText: "DA",
    location: "Lekki Phase 1, Lagos",
    state: "Lagos",
    languages: ["English", "Yoruba"],
    qualifications: ["MUSON Diploma in Music (Organ & Piano)", "ABRSM Grade 8 Theory & Practical", "Choirmaster"],
    subjects: ["Music Theory", "Piano & Keyboard"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    deliveryFormats: ["Online Virtual Classroom", "In-Person (Lagos & Abuja)"],
    hourlyRateMinorUnits: 1000000, // ₦10,000/hr
    currency: "NGN",
    rating: 5.0,
    completedLessons: 120,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Classically trained concert pianist and music theorist with 12 years of experience preparing Nigerian students for ABRSM examinations.",
    teachingApproach: "Strong foundation in posture, sight reading, ear training, and harmonic progression.",
    cancellationPolicy: "24-hour cancellation rule. In-person requires 48 hours for full refund.",
    weeklyAvailability: [
      { day: "Monday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
      { day: "Thursday", slots: ["15:00 - 16:00", "16:30 - 17:30"] },
      { day: "Saturday", slots: ["09:00 - 10:00", "10:30 - 11:30", "12:00 - 13:00"] },
    ],
  },
  {
    id: "tut-11",
    slug: "miss-ngozi-bassey",
    name: "Miss Ngozi Bassey",
    title: "B.A. Performing Arts & Professional Vocal Coach",
    avatarText: "NB",
    location: "Maitama, Abuja",
    state: "Abuja FCT",
    languages: ["English", "Igbo"],
    qualifications: ["B.A. Performing Arts (UniUyo)", "Certified Vocal Pedagogy Coach", "Studio Session Lead"],
    subjects: ["Vocal Training", "Music Theory"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    deliveryFormats: ["Online Virtual Classroom", "In-Person (Lagos & Abuja)"],
    hourlyRateMinorUnits: 850000, // ₦8,500/hr
    currency: "NGN",
    rating: 4.9,
    completedLessons: 42,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Helping aspiring singers discover their natural vocal resonance safely without strain. Repertoire spans classical, gospel, and soul.",
    teachingApproach: "Custom vocal exercises recorded for daily student practice, breath mechanics, and articulation coaching.",
    cancellationPolicy: "Full refund > 24 hours notice.",
    weeklyAvailability: [
      { day: "Tuesday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Friday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Saturday", slots: ["13:00 - 14:00", "14:30 - 15:30"] },
    ],
  },
  {
    id: "tut-12",
    slug: "mr-tari-briggs",
    name: "Mr. Tari Briggs",
    title: "Lead Guitarist & Trinity College London Certified",
    avatarText: "TB",
    location: "GRA, Port Harcourt",
    state: "Rivers",
    languages: ["English"],
    qualifications: ["Trinity College London Classical Guitar Grade 7", "Session Musician", "10+ Yrs Instruction"],
    subjects: ["Acoustic & Bass Guitar", "Music Theory"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    deliveryFormats: ["Online Virtual Classroom"],
    hourlyRateMinorUnits: 700000, // ₦7,000/hr
    currency: "NGN",
    rating: 4.8,
    completedLessons: 38,
    verifiedBadge: true,
    backgroundChecked: true,
    bio: "Friendly, patient guitar teacher instructing youth and adults in chord vocabulary, fingerpicking, rhythm timing, and soloing.",
    teachingApproach: "We learn real songs from week one while progressively reinforcing theoretical understanding.",
    cancellationPolicy: "Full refund with 24 hours notice.",
    weeklyAvailability: [
      { day: "Wednesday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Friday", slots: ["16:00 - 17:00", "17:30 - 18:30"] },
      { day: "Saturday", slots: ["11:00 - 12:00", "12:30 - 13:30"] },
    ],
  },
];

// -----------------------------------------------------------------------------
// 8 FAQ ITEMS FOR HOME PAGE & FAQ PAGE
// -----------------------------------------------------------------------------
export const SEED_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Trainbow HUB and how is it different from other platforms?",
    answer: "Trainbow HUB is a unified online learning platform built specifically for Nigerian learners and parents. Unlike disjointed apps, one account connects you to curriculum courses, an AI Mathematics tutor, verified human tutors, and music tuition with one shared calendar, wallet, and progress record.",
  },
  {
    id: "faq-2",
    category: "Tutors & Booking",
    question: "How does tutor matching work, and why is there no public marketplace?",
    answer: "To guarantee reliable availability and trust, Trainbow HUB uses a concierge matching model instead of a public directory. Every tutor request is reviewed directly by Mr Oyedeji S.T, Director of Trainbow HUB. The Director personally selects an experienced, background-vetted tutor from our private roster who is available right now, and sends you a tailored proposal for your approval.",
  },
  {
    id: "faq-3",
    category: "Parents & Safety",
    question: "How do you protect students under 18?",
    answer: "Safeguarding is built into our architecture. Under-18 students must have verified parent/guardian consent under NDPA 2023 Section 31 before any tutor match proposal can be processed or booked. Minors cannot message tutors privately; all sessions run in monitored virtual classrooms with a visible conduct-reporting tool, and guardians can join as observers anytime.",
  },
  {
    id: "faq-4",
    category: "AI Assistant",
    question: "How does the Trainbow AI Mathematics Helper work?",
    answer: "Trainbow AI operates on a Socratic pedagogy: it delivers hints first to guide students toward the solution rather than giving away the answer. All formulas and solutions are programmatically verified for mathematical correctness before display. If a student is still stuck, they can request a personal tutor match with one tap.",
  },
  {
    id: "faq-5",
    category: "Payments",
    question: "What payment methods are supported, and how does the tutor get paid?",
    answer: "All transactions are billed in Nigerian Naira (NGN) through Paystack. You can pay via debit card, direct bank transfer, or USSD. Tutors are credited to an append-only financial ledger once lessons are completed, and manual payouts are processed directly to their verified Nigerian bank accounts.",
  },
  {
    id: "faq-6",
    category: "Tutors & Booking",
    question: "What happens if I need to cancel, reschedule, or decline a tutor match?",
    answer: "When Mr Oyedeji S.T sends you a tutor proposal, you can accept or decline with your feedback. If declined, the Director immediately matches you with an alternative tutor from the private roster. For confirmed sessions, cancellations made more than 24 hours in advance receive a 100% refund. If a tutor cancels, the learner always receives a 100% refund.",
  },
  {
    id: "faq-7",
    category: "Parents & Safety",
    question: "Can parents monitor their child's quiz performance and attendance?",
    answer: "Yes. The Parent Portal allows linked guardians to review upcoming bookings, verify attendance timestamps (join and leave times), inspect quiz scores across modules, and receive lesson completion alerts via email or SMS.",
  },
  {
    id: "faq-8",
    category: "General",
    question: "What subjects are currently supported, and which ones are coming next?",
    answer: "The platform launches with comprehensive Mathematics across Primary, JSS, SSS, WAEC, and JAMB levels with full AI support. English, Physics, Chemistry, Biology, and Music are also available with verified tutors. Other subjects receive AI assistant integration only after rigorous academic evaluation sign-offs.",
  },
];

// Sample AI Preview Questions for Home Page Interactive Demo
export interface AIPreviewQuestion {
  id: string;
  question: string;
  topic: string;
  hint1: string;
  hint2: string;
  fullSolution: string;
}

export const SEED_AI_PREVIEW_QUESTIONS: AIPreviewQuestion[] = [
  {
    id: "q1",
    question: "How do I solve the quadratic equation 2x² + 5x - 3 = 0?",
    topic: "WAEC Algebra",
    hint1: "First identify your coefficients: a = 2, b = 5, and c = -3. Now calculate the discriminant: D = b² - 4ac = 5² - 4(2)(-3) = 25 + 24 = 49.",
    hint2: "Since the discriminant is a positive square number (√49 = 7), the equation has two rational roots. Use the quadratic formula: x = (-b ± √D) / 2a = (-5 ± 7) / 4.",
    fullSolution: "Case 1: x = (-5 + 7) / 4 = 2 / 4 = 1/2.\nCase 2: x = (-5 - 7) / 4 = -12 / 4 = -3.\nTherefore, the solution set is x = 1/2 or x = -3. (Verified programmatically).",
  },
  {
    id: "q2",
    question: "Find the 15th term of the Arithmetic Progression: 3, 7, 11, 15...",
    topic: "JAMB Sequence & Series",
    hint1: "Identify the first term a = 3 and the common difference d = 7 - 3 = 4.",
    hint2: "Recall the nth term formula for an AP: T_n = a + (n - 1)d. Here, n = 15.",
    fullSolution: "T_15 = 3 + (15 - 1) × 4 = 3 + (14 × 4) = 3 + 56 = 59.\nTherefore, the 15th term is 59.",
  },
  {
    id: "q3",
    question: "A cylinder has radius 7cm and height 10cm. What is its total surface area? (Take π = 22/7)",
    topic: "JSS / SS Mensuration",
    hint1: "A closed cylinder has two circular bases and one curved rectangular surface. Total Surface Area = 2πr² + 2πrh = 2πr(r + h).",
    hint2: "Substitute r = 7cm and h = 10cm: (r + h) = 7 + 10 = 17cm. Notice how the denominator 7 cancels out with the radius!",
    fullSolution: "Total Surface Area = 2 × (22/7) × 7 × (7 + 10) = 2 × 22 × 17 = 44 × 17 = 748 cm².",
  },
];
