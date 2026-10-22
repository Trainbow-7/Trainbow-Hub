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
export const SEED_COURSES: CourseItem[] = [
  {
    id: "crs-waec-math",
    slug: "waec-ssce-mathematics-mastery",
    title: "WAEC & SSCE Comprehensive Mathematics Mastery",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "WAEC Prep (SS 1-3)",
    instructorName: "Mr Oyedeji S.T",
    instructorTitle: "Senior Mathematics Lecturer & WAEC Chief Examiner Consultant",
    instructorAvatar: "OS",
    priceMinorUnits: 4000000, // ₦40,000 or included with subscription
    currency: "NGN",
    rating: 4.9,
    reviewCount: 84,
    lessonCount: 33,
    durationHours: 26,
    shortDescription: "Complete syllabus coverage for West African Senior School Certificate Examination (WASSCE) Mathematics with worked past papers.",
    fullDescription: "Master every component of the WAEC General Mathematics curriculum. This intensive course covers General Mathematics Papers 1 (Objectives) and 2 (Theory), with special focus on quadratic functions, circle theorems, trigonometry, statistics, and 3D vectors.",
    syllabus: [
      {
        id: "m1",
        title: "Module 1: Number & Numeration",
        lessons: [
          { id: "l1", title: "Fractions & Decimals Operations", durationMinutes: 45, isFreePreview: true },
          { id: "l2", title: "Percentages & Percentage Change", durationMinutes: 40, isFreePreview: false },
          { id: "l3", title: "Ratio & Proportional Sharing", durationMinutes: 45, isFreePreview: true },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Commercial Arithmetic",
        lessons: [
          { id: "l4", title: "Profit, Loss & Percentage Margins", durationMinutes: 45, isFreePreview: false },
          { id: "l5", title: "Discount & Commercial Markups", durationMinutes: 40, isFreePreview: false },
          { id: "l6", title: "Simple & Compound Interest Calculations", durationMinutes: 50, isFreePreview: false },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Algebra",
        lessons: [
          { id: "l7", title: "Linear Equations & Word Problems", durationMinutes: 50, isFreePreview: false },
          { id: "l8", title: "Linear Inequalities & Number Line Graphs", durationMinutes: 45, isFreePreview: false },
          { id: "l9", title: "Simultaneous Equations & Direct/Inverse Variation", durationMinutes: 55, isFreePreview: false },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Indices & Logarithms",
        lessons: [
          { id: "l10", title: "Laws of Indices & Fractional Powers", durationMinutes: 45, isFreePreview: false },
          { id: "l11", title: "Laws of Logarithms & Base Change", durationMinutes: 50, isFreePreview: false },
          { id: "l12", title: "Logarithmic Calculations & WAEC Exam Problems", durationMinutes: 55, isFreePreview: false },
        ],
      },
      {
        id: "m5",
        title: "Module 5: Geometry",
        lessons: [
          { id: "l13", title: "Angles & Triangle Properties", durationMinutes: 45, isFreePreview: false },
          { id: "l14", title: "Polygons & Interior/Exterior Angles", durationMinutes: 45, isFreePreview: false },
          { id: "l15", title: "Circles Theorems & Geometric Constructions", durationMinutes: 60, isFreePreview: false },
        ],
      },
      {
        id: "m6",
        title: "Module 6: Mensuration",
        lessons: [
          { id: "l16", title: "Perimeter & Area of Plane Shapes", durationMinutes: 45, isFreePreview: false },
          { id: "l17", title: "Surface Area of Prisms, Cylinders & Cones", durationMinutes: 50, isFreePreview: false },
          { id: "l18", title: "Volume of Composite Solids & Spheres", durationMinutes: 55, isFreePreview: false },
        ],
      },
      {
        id: "m7",
        title: "Module 7: Statistics",
        lessons: [
          { id: "l19", title: "Mean, Median & Mode of Grouped Data", durationMinutes: 50, isFreePreview: false },
          { id: "l20", title: "Frequency Tables & Histograms", durationMinutes: 45, isFreePreview: false },
          { id: "l21", title: "Cumulative Frequency Curves (Ogive) & Percentiles", durationMinutes: 55, isFreePreview: false },
        ],
      },
      {
        id: "m8",
        title: "Module 8: Probability",
        lessons: [
          { id: "l22", title: "Simple Probability & Sample Spaces", durationMinutes: 40, isFreePreview: false },
          { id: "l23", title: "Addition & Multiplication Rules of Probability", durationMinutes: 45, isFreePreview: false },
          { id: "l24", title: "Tree Diagrams & Mutually Exclusive Events", durationMinutes: 50, isFreePreview: false },
        ],
      },
      {
        id: "m9",
        title: "Module 9: Coordinate Geometry",
        lessons: [
          { id: "l25", title: "Cartesian Graphs, Midpoint & Distance Formula", durationMinutes: 45, isFreePreview: false },
          { id: "l26", title: "Gradient of Straight Lines & Collinearity", durationMinutes: 45, isFreePreview: false },
          { id: "l27", title: "Equations of Straight Lines (Parallel & Perpendicular)", durationMinutes: 50, isFreePreview: false },
        ],
      },
      {
        id: "m10",
        title: "Module 10: Trigonometry",
        lessons: [
          { id: "l28", title: "Sine, Cosine & Tangent Ratios (SOH CAH TOA)", durationMinutes: 45, isFreePreview: false },
          { id: "l29", title: "Angles of Elevation & Depression", durationMinutes: 50, isFreePreview: false },
          { id: "l30", title: "Bearings & Sine/Cosine Rules for Triangles", durationMinutes: 60, isFreePreview: false },
        ],
      },
      {
        id: "m11",
        title: "Module 11: Vectors & Transformations",
        lessons: [
          { id: "l31", title: "Vector Representation, Addition & Scalar Multiplication", durationMinutes: 45, isFreePreview: false },
          { id: "l32", title: "Reflections & Rotations on the Coordinate Plane", durationMinutes: 50, isFreePreview: false },
          { id: "l33", title: "Translations, Enlargement & Scale Factors", durationMinutes: 55, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Confidently solve WAEC Section B theory questions with full working marks",
      "Avoid frequent calculation traps in indices, logarithm, and surd simplifications",
      "Master geometric theorems and clear formal diagram proofs",
      "Achieve high accuracy on the 50 objective questions in under 60 minutes",
    ],
    prerequisites: ["Completion of JSS 3 Mathematics or equivalent foundation"],
  },
  {
    id: "crs-jamb-math",
    slug: "jamb-utme-speed-mathematics",
    title: "JAMB UTME Speed & Strategy Mathematics",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "JAMB UTME Prep",
    instructorName: "Engr. Chinedu Eze",
    instructorTitle: "Lead STEM Instructor & CBT Speed Specialist",
    instructorAvatar: "CE",
    priceMinorUnits: 1800000, // ₦18,000
    currency: "NGN",
    rating: 4.8,
    reviewCount: 62,
    lessonCount: 35,
    durationHours: 25,
    shortDescription: "Techniques, short-cuts, and timed CBT drills for scoring 85+ in JAMB UTME Mathematics.",
    fullDescription: "JAMB requires both speed and precision: 40 questions in under 45 minutes. Learn rapid calculation shortcuts, elimination tactics for multiple choice options, and review the most heavily tested topics in Calculus, Coordinate Geometry, Matrices, and Permutation/Combination.",
    syllabus: [
      {
        id: "jm1",
        title: "Module 1: CBT Time Management & Quick-Elimination Rules",
        lessons: [
          { id: "jl1", title: "Analyzing the JAMB Syllabus Frequency Distribution", durationMinutes: 30, isFreePreview: true },
          { id: "jl2", title: "Elimination Tricks for Polynomial & Matrix Options", durationMinutes: 45, isFreePreview: true },
        ],
      },
      {
        id: "jm2",
        title: "Module 2: Differentiation, Integration & Rate of Change",
        lessons: [
          { id: "jl3", title: "Rapid Derivative Rules & Maxima/Minima Problems", durationMinutes: 50, isFreePreview: false },
          { id: "jl4", title: "Definite and Indefinite Integrals with Boundary Conditions", durationMinutes: 50, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Solve multiple choice problems in under 60 seconds each using rapid deduction",
      "Master differentiation, integration, limits, and coordinate geometry shortcuts",
      "Eliminate wrong answers with substitution and parity checks",
    ],
    prerequisites: ["Senior Secondary 2 or 3 mathematics background"],
  },
  {
    id: "crs-jss3-math",
    slug: "jss3-basic-mathematics-bece-prep",
    title: "JSS 3 Basic Mathematics & BECE Exam Prep",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "JSS 1-3",
    instructorName: "Mrs. Folashade Adeleke",
    instructorTitle: "Head of Junior Secondary Mathematics, Lagos State",
    instructorAvatar: "FA",
    priceMinorUnits: 1500000, // ₦15,000
    currency: "NGN",
    rating: 4.9,
    reviewCount: 51,
    lessonCount: 28,
    durationHours: 20,
    shortDescription: "Solidify core mathematical concepts for Junior WAEC / Basic Education Certificate Examination (BECE).",
    fullDescription: "Bridge the transition from junior to senior secondary. Clear explanations for fractions, ratios, directed numbers, simple algebraic equations, factorization, Pythagoras theorem, plane shapes, and basic statistics.",
    syllabus: [
      {
        id: "sm1",
        title: "Module 1: Algebra & Linear Factorization",
        lessons: [
          { id: "sl1", title: "Expanding Brackets & Collecting Like Terms", durationMinutes: 35, isFreePreview: true },
          { id: "sl2", title: "Simple Linear Equations with Fractions", durationMinutes: 40, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Excel in BECE/Junior WAEC Mathematics with distinctions",
      "Build total confidence with algebraic equations and fractions",
      "Smooth transition into Senior Secondary 1 science or commerce tracks",
    ],
    prerequisites: ["Primary 6 / JSS 1-2 Mathematics"],
  },
  {
    id: "crs-ss2-trig",
    slug: "ss2-algebra-and-trigonometry-deep-dive",
    title: "Senior Secondary Algebra & Trigonometry Deep Dive",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "SS 2",
    instructorName: "Dr. Amina Bello",
    instructorTitle: "Associate Professor of Applied Mathematics",
    instructorAvatar: "AB",
    priceMinorUnits: 2000000, // ₦20,000
    currency: "NGN",
    rating: 4.8,
    reviewCount: 39,
    lessonCount: 24,
    durationHours: 18,
    shortDescription: "In-depth treatment of trigonometric ratios, sine/cosine rules, bearing and distances, and arithmetic/geometric progressions.",
    fullDescription: "Senior Secondary 2 is where mathematical rigor accelerates. Master Sequence and Series (AP & GP), Linear Inequalities in two variables, Compound Angles, Trigonometric Graphs, and Bearings with angle elevation/depression.",
    syllabus: [
      {
        id: "am1",
        title: "Module 1: Sequence & Series (AP and GP)",
        lessons: [
          { id: "al1", title: "nth Term and Sum of Arithmetic Progressions", durationMinutes: 45, isFreePreview: true },
          { id: "al2", title: "Geometric Progressions & Sum to Infinity", durationMinutes: 45, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Calculate 3-figure bearings, angles of elevation and depression with precision",
      "Apply Sine and Cosine rules to solve any scalene triangle problem",
      "Derive and apply formulas for AP and GP real-world problems",
    ],
    prerequisites: ["SS 1 Mathematics"],
  },
  {
    id: "crs-pri6-ncee",
    slug: "primary6-quantitative-reasoning-common-entrance",
    title: "Primary 6 Quantitative Reasoning & Mathematics",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "Primary 1-6",
    instructorName: "Mr. Emeka Nwosu",
    instructorTitle: "National Common Entrance Specialist",
    instructorAvatar: "EN",
    priceMinorUnits: 1200000, // ₦12,000
    currency: "NGN",
    rating: 4.9,
    reviewCount: 47,
    lessonCount: 20,
    durationHours: 15,
    shortDescription: "Tailored preparation for National Common Entrance Examination (NCEE) and top secondary school entrance exams.",
    fullDescription: "Fun, patient, visual learning for younger students. Covers decimals, percentages, LCM/HCF, word problems, perimeter, area, volume, and complex pattern detection for quantitative aptitude papers.",
    syllabus: [
      {
        id: "pm1",
        title: "Module 1: Decimals, Fractions and Percentages",
        lessons: [
          { id: "pl1", title: "Converting Fractions to Decimals and Percentages", durationMinutes: 30, isFreePreview: true },
          { id: "pl2", title: "Real-Life Money and Profit & Loss Calculations", durationMinutes: 35, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Score in the 90th percentile for Federal Unity Colleges entrance exams",
      "Decipher pattern-based quantitative reasoning diagrams swiftly",
      "Build a joyful, fear-free attitude towards mathematical thinking",
    ],
    prerequisites: ["Primary 5 Mathematics"],
  },
  {
    id: "crs-igcse-math",
    slug: "cambridge-igcse-extended-mathematics",
    title: "Cambridge IGCSE Extended Mathematics Complete Guide",
    subjectSlug: "mathematics",
    subjectName: "Mathematics",
    level: "Cambridge IGCSE",
    instructorName: "Mrs. Zainab Aliyu",
    instructorTitle: "Certified Cambridge International Educator",
    instructorAvatar: "ZA",
    priceMinorUnits: 3000000, // ₦30,000
    currency: "NGN",
    rating: 5.0,
    reviewCount: 33,
    lessonCount: 40,
    durationHours: 30,
    shortDescription: "Target A* in Cambridge IGCSE Mathematics (0580) with extended curriculum coverage and structured exam past questions.",
    fullDescription: "Comprehensive training for students sitting Cambridge International Examinations. Covers vectors, transformations, function notation, matrix transformations, probability trees, cumulative frequency curves, and extended algebraic techniques.",
    syllabus: [
      {
        id: "im1",
        title: "Module 1: Functions, Vectors and Matrices",
        lessons: [
          { id: "il1", title: "Composite Functions and Inverse Functions", durationMinutes: 45, isFreePreview: true },
          { id: "il2", title: "Column Vectors, Magnitude and Geometric Proofs", durationMinutes: 50, isFreePreview: false },
        ],
      },
    ],
    learningOutcomes: [
      "Tackle both Paper 2 and Paper 4 extended questions with confidence",
      "Master calculator operations and exact mathematical representations",
      "Secure an A* grade in Cambridge 0580 syllabus",
    ],
    prerequisites: ["Senior Secondary 1 or Year 10 Mathematics"],
  },
];

// -----------------------------------------------------------------------------
// 12 VETTED NIGERIAN TUTORS
// -----------------------------------------------------------------------------
export const SEED_TUTORS: TutorItem[] = [
  {
    id: "tut-01",
    slug: "dr-tayo-okafor",
    name: "Dr. Tayo Okafor",
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
    name: "Engr. Chinedu Eze",
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
    name: "Mrs. Folashade Adeleke",
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
    name: "Dr. Amina Bello",
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
    name: "Mr. Emeka Nwosu",
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
    name: "Mrs. Zainab Aliyu",
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
