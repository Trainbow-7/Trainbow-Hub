/**
 * Official Curricula, Syllabus Topics, and Distinct Course Definitions
 *
 * Mapped from official exam bodies:
 * 1. WAEC (West African Examinations Council) - WASSCE Core Mathematics (2024-2026)
 * 2. JAMB (Joint Admissions and Matriculation Board) - UTME Mathematics Syllabus
 * 3. NECO / BECE - Basic Education Certificate Examination (NERDC Junior Secondary)
 * 4. NERDC SS2 - Senior Secondary Algebra & Trigonometry Core
 * 5. NERDC / NECO NCEE - National Common Entrance Examination Primary 6 Quantitative & Math
 * 6. Cambridge International - IGCSE Mathematics (0580) Extended Curriculum (2025-2027)
 */

export interface SyllabusSourceData {
  id: string;
  examBody: string;
  subject: string;
  level: string;
  officialName: string;
  versionYear: string;
  url: string;
  lastCheckedAt: string;
}

export interface SyllabusTopicData {
  id: string;
  sourceId: string;
  topicCode: string;
  title: string;
  parentTopicId?: string;
  description: string;
  learningObjectives: string[];
  examBodyNotes?: string;
  sortOrder: number;
}

export interface CourseLessonData {
  id: string;
  slug: string;
  title: string;
  sortOrder: number;
  durationMinutes: number;
  isFreePreview: boolean;
  topicId: string;
  summary: string;
  objectives: string[];
  keyPoints: string[];
  reviewStatus: "verified" | "needs_teacher_review" | "rejected";
  teacherNotes?: string;
  markdownNotes?: string;
  videoId?: string;
}

export interface CourseModuleData {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
  lessons: CourseLessonData[];
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  subject: string;
  subjectSlug: string;
  track: string;
  level: string;
  examBody: string;
  instructorName: string;
  instructorTitle?: string;
  priceMinorUnits: number;
  currency: string;
  shortDescription: string;
  description: string;
  modules: CourseModuleData[];
  learningOutcomes: string[];
  prerequisites: string[];
}

// -----------------------------------------------------------------------------
// 1. SYLLABUS SOURCES
// -----------------------------------------------------------------------------
export const SYLLABUS_SOURCES: SyllabusSourceData[] = [
  {
    id: "src-waec-wassce-math",
    examBody: "WAEC",
    subject: "mathematics",
    level: "WAEC Prep (SS 1-3)",
    officialName: "West African Senior School Certificate Examination (WASSCE) General Mathematics Syllabus",
    versionYear: "2024-2026",
    url: "https://waeconline.org.ng/e-learning/Mathematics/mathsmenu.html",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "src-jamb-utme-math",
    examBody: "JAMB",
    subject: "mathematics",
    level: "JAMB UTME Prep",
    officialName: "Joint Admissions and Matriculation Board Unified Tertiary Matriculation Examination Mathematics Syllabus",
    versionYear: "2024-2026",
    url: "https://www.jamb.gov.ng/ibass",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "src-bece-jss3-math",
    examBody: "NECO/BECE",
    subject: "mathematics",
    level: "JSS 1-3",
    officialName: "National Examinations Council Basic Education Certificate Examination Basic Mathematics Curriculum (NERDC 9-Year UBE)",
    versionYear: "2024-2026",
    url: "https://neco.gov.ng",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "src-nerdc-ss2-math",
    examBody: "NERDC / WAEC",
    subject: "mathematics",
    level: "SS 2",
    officialName: "NERDC Senior Secondary Mathematics Curriculum (SS 2 Algebra & Trigonometry Core Scope)",
    versionYear: "2024-2026",
    url: "https://nerdc.org.ng",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "src-ncee-primary6-math",
    examBody: "NERDC / NECO (NCEE)",
    subject: "mathematics",
    level: "Primary 1-6",
    officialName: "National Common Entrance Examination Mathematics and Quantitative Reasoning Specifications (NERDC Primary Curriculum)",
    versionYear: "2024-2026",
    url: "https://neco.gov.ng",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "src-cie-igcse-0580",
    examBody: "CAMBRIDGE",
    subject: "mathematics",
    level: "Cambridge IGCSE",
    officialName: "Cambridge Assessment International Education IGCSE Mathematics 0580 Extended Curriculum",
    versionYear: "2025-2027",
    url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/",
    lastCheckedAt: "2026-11-01T00:00:00.000Z",
  },
];

// -----------------------------------------------------------------------------
// 2. THE 6 DISTINCT COURSES WITH REAL MODULES & LESSONS
// -----------------------------------------------------------------------------

export const COURSES_DATA: CourseData[] = [
  // ---------------------------------------------------------------------------
  // COURSE 1: WAEC & SSCE Comprehensive Mathematics Mastery
  // ---------------------------------------------------------------------------
  {
    id: "crs-waec-math",
    slug: "waec-ssce-mathematics-mastery",
    title: "WAEC & SSCE Comprehensive Mathematics Mastery",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "waec-ssce",
    level: "WAEC Prep (SS 1-3)",
    examBody: "WAEC",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Mathematics Faculty & Curriculum Specialists",
    priceMinorUnits: 4000000,
    currency: "NGN",
    shortDescription: "Complete syllabus coverage for West African Senior School Certificate Examination (WASSCE) Mathematics with worked past papers.",
    description: "Master every component of the WAEC General Mathematics curriculum. This intensive course covers General Mathematics Papers 1 (Objectives) and 2 (Theory), with special focus on quadratic functions, circle theorems, trigonometry, statistics, and 3D vectors.",
    learningOutcomes: [
      "Confidently solve WAEC Section B theory questions with full working marks",
      "Avoid frequent calculation traps in indices, logarithm, and surd simplifications",
      "Master geometric theorems and clear formal diagram proofs",
      "Achieve high accuracy on the 50 objective questions in under 60 minutes",
    ],
    prerequisites: ["Completion of JSS 3 Mathematics or equivalent foundation"],
    modules: [
      {
        id: "waec-m1",
        title: "Module 1: Number & Numeration",
        description: "Fractions, decimals, percentages, and proportional sharing.",
        sortOrder: 1,
        lessons: [
          {
            id: "l1",
            slug: "fractions-decimals-operations",
            title: "Fractions & Decimals Operations",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            topicId: "top-waec-num-01",
            summary: "Operations on proper, improper, mixed fractions and decimal place values.",
            objectives: [
              "Perform four operations on fractions and decimals",
              "Apply BODMAS / PEMDAS order of operations",
              "Convert fractions to recurring and terminating decimals",
            ],
            keyPoints: [
              "Always find the lowest common denominator for fraction addition/subtraction",
              "In division, invert the divisor and multiply",
              "Align decimal points strictly for vertical operations",
            ],
            reviewStatus: "verified",
            videoId: "Vb5c7ay0ziU",
          },
          {
            id: "l2",
            slug: "percentages-and-percentage-change",
            title: "Percentages & Percentage Change",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-waec-num-02",
            summary: "Percentage increases, decreases, and percentage error in measurements.",
            objectives: [
              "Calculate percentage increase and decrease",
              "Evaluate percentage error = |error| / actual x 100%",
            ],
            keyPoints: [
              "Percentage change is always divided by the original value",
              "Percentage error uses absolute error over true value",
            ],
            reviewStatus: "verified",
            videoId: "WYWPuG-8U5Q",
          },
          {
            id: "l3",
            slug: "ratio-and-proportional-sharing",
            title: "Ratio & Proportional Sharing",
            sortOrder: 3,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-num-03",
            summary: "Direct ratio sharing and division of quantities in specified proportions.",
            objectives: [
              "Express quantities in simplified ratio form",
              "Divide quantities into multi-part ratios",
            ],
            keyPoints: [
              "Sum the parts of the ratio first to find value per single share",
              "Verify the sum of allocated shares equals the original total",
            ],
            reviewStatus: "verified",
            videoId: "1b95K1e3L48",
          },
        ],
      },
      {
        id: "waec-m2",
        title: "Module 2: Commercial Arithmetic",
        description: "Profit, loss, discount, and simple & compound interest.",
        sortOrder: 2,
        lessons: [
          {
            id: "l4",
            slug: "profit-loss-percentage-margins",
            title: "Profit, Loss & Percentage Margins",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-com-01",
            summary: "Cost price, selling price, markups, and profit margins.",
            objectives: [
              "Determine cost price and selling price given profit percentage",
              "Distinguish margin on selling price from markup on cost price",
            ],
            keyPoints: [
              "Profit % = (Profit / Cost Price) * 100",
              "Margin % = (Profit / Selling Price) * 100",
            ],
            reviewStatus: "verified",
            videoId: "45X4s_EaV4I",
          },
          {
            id: "l5",
            slug: "simple-compound-interest-calculations",
            title: "Simple & Compound Interest Calculations",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-com-02",
            summary: "Formulas I = PRT/100 and A = P(1 + r/n)^nt for financial problems.",
            objectives: [
              "Calculate simple interest and principal",
              "Apply compound interest formula across multiple compounding periods",
            ],
            keyPoints: [
              "Simple interest grows linearly with time",
              "Compound interest adds accumulated interest into the principal for subsequent cycles",
            ],
            reviewStatus: "verified",
            videoId: "rmfZoR_mZpI",
          },
        ],
      },
      {
        id: "waec-m3",
        title: "Module 3: Algebraic Processes",
        description: "Linear equations, inequalities, and simultaneous systems.",
        sortOrder: 3,
        lessons: [
          {
            id: "l6",
            slug: "linear-equations-word-problems",
            title: "Linear Equations & Word Problems",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-alg-01",
            summary: "Translating English word statements into solvable algebraic equations.",
            objectives: [
              "Formulate equations from real-world descriptions",
              "Solve linear equations with brackets and fractions",
            ],
            keyPoints: [
              "Define variables clearly at the start of working",
              "Clear fractions by multiplying all terms by the LCM of denominators",
            ],
            reviewStatus: "verified",
            videoId: "D3b_A10qWp4",
          },
          {
            id: "l7",
            slug: "linear-inequalities-number-lines",
            title: "Linear Inequalities & Number Line Graphs",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-alg-02",
            summary: "Single and compound inequalities, graphical representation on number lines.",
            objectives: [
              "Solve multi-step linear inequalities",
              "Represent closed and open interval solutions on a number line",
            ],
            keyPoints: [
              "Reverse the inequality sign whenever multiplying or dividing by a negative number",
              "Filled dot represents <= or >=; open circle represents < or >",
            ],
            reviewStatus: "verified",
            videoId: "0X-bMelN53I",
          },
          {
            id: "l8",
            slug: "simultaneous-equations-variation",
            title: "Simultaneous Equations & Direct/Inverse Variation",
            sortOrder: 3,
            durationMinutes: 55,
            isFreePreview: false,
            topicId: "top-waec-alg-03",
            summary: "Elimination and substitution methods; direct, inverse, and joint variation.",
            objectives: [
              "Solve 2-variable linear systems algebraically",
              "Determine constant of proportionality k and form variation equations",
            ],
            keyPoints: [
              "Elimination is faster when variable coefficients match or have opposite signs",
              "Direct variation: y = kx; Inverse variation: y = k/x",
            ],
            reviewStatus: "verified",
            videoId: "V7H1oUHXpkg",
          },
        ],
      },
      {
        id: "waec-m4",
        title: "Module 4: Quadratic Equations & Functions",
        description: "Factorization, completing the square, quadratic formula, and graphs.",
        sortOrder: 4,
        lessons: [
          {
            id: "l9",
            slug: "quadratic-factorization-methods",
            title: "Quadratic Equations by Factorization",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-quad-01",
            summary: "Factoring trinomials ax^2 + bx + c = 0 using product-sum techniques.",
            objectives: [
              "Identify two factors multiplying to ac and summing to b",
              "Solve quadratic equations using the null factor law",
            ],
            keyPoints: [
              "Ensure the equation equals 0 before applying factorization",
              "Product ac and sum b determine the split of the middle term",
            ],
            reviewStatus: "verified",
            videoId: "qeByhTF8WEw",
          },
          {
            id: "l10",
            slug: "quadratic-formula-completing-square",
            title: "The Quadratic Formula & Completing the Square",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-quad-02",
            summary: "Derivation and application of x = (-b +- sqrt(b^2 - 4ac)) / (2a).",
            objectives: [
              "Complete the square for monic and non-monic quadratics",
              "Substitute into the quadratic formula accurately",
            ],
            keyPoints: [
              "Discriminant b^2 - 4ac dictates real, equal, or no real roots",
              "When b is negative, -b becomes positive",
            ],
            reviewStatus: "verified",
            videoId: "i7idZfS8t8w",
          },
          {
            id: "l11",
            slug: "simultaneous-linear-quadratic-systems",
            title: "Simultaneous Linear & Quadratic Systems",
            sortOrder: 3,
            durationMinutes: 55,
            isFreePreview: false,
            topicId: "top-waec-quad-03",
            summary: "Solving systems with one linear equation and one quadratic curve.",
            objectives: [
              "Isolate a linear variable and substitute into the quadratic expression",
              "Pair corresponding x and y values accurately",
            ],
            keyPoints: [
              "Linear-quadratic systems typically produce two coordinate pairs (x1, y1) and (x2, y2)",
              "Substitute back into the linear equation to avoid ambiguous signs",
            ],
            reviewStatus: "verified",
            videoId: "3s7cM8U7_nQ",
          },
        ],
      },
      {
        id: "waec-m5",
        title: "Module 5: Geometry & Circle Theorems",
        description: "Angle relationships, circle theorems, and cyclic quadrilaterals.",
        sortOrder: 5,
        lessons: [
          {
            id: "l12",
            slug: "angles-lines-polygons",
            title: "Angles on Lines, Triangles & Polygons",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-geo-01",
            summary: "Sum of interior angles (n - 2) * 180 degrees and exterior angles.",
            objectives: [
              "Calculate interior and exterior angles of regular polygons",
              "Apply parallel line angle rules (alternate, corresponding, interior)",
            ],
            keyPoints: [
              "Sum of exterior angles of any convex polygon is always 360 degrees",
              "Each exterior angle of a regular n-gon is 360 / n",
            ],
            reviewStatus: "verified",
            videoId: "sU-g3c5rJbE",
          },
          {
            id: "l13",
            slug: "circle-theorems-subtended-angles",
            title: "Circle Theorems: Subtended Angles & Cyclic Quads",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-geo-02",
            summary: "Angle at centre is twice angle at circumference; opposite angles of cyclic quad sum to 180.",
            objectives: [
              "Apply angle at centre = 2 x angle at circumference",
              "Use angles in same segment are equal",
              "Prove and apply cyclic quadrilateral theorems",
            ],
            keyPoints: [
              "Angle in a semicircle is always a right angle (90 degrees)",
              "Opposite angles of a cyclic quadrilateral are supplementary (sum to 180 degrees)",
            ],
            reviewStatus: "verified",
            videoId: "A1V6c_uP7gA",
          },
        ],
      },
      {
        id: "waec-m6",
        title: "Module 6: Trigonometry & Bearings",
        description: "SOHCAHTOA, sine/cosine rules, and 3-figure bearings.",
        sortOrder: 6,
        lessons: [
          {
            id: "l14",
            slug: "right-triangle-trig-sohcahtoa",
            title: "Right-Angled Trigonometry (SOHCAHTOA)",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-trig-01",
            summary: "Sine, cosine, and tangent ratios in right-angled triangles.",
            objectives: [
              "Identify opposite, adjacent, and hypotenuse relative to target angle",
              "Calculate unknown side lengths and angles using trigonometric ratios",
            ],
            keyPoints: [
              "sin(theta) = O/H, cos(theta) = A/H, tan(theta) = O/A",
              "Use inverse trig functions (sin^-1, cos^-1, tan^-1) when solving for angles",
            ],
            reviewStatus: "verified",
            videoId: "PUB0TaZ7bhA",
          },
          {
            id: "l15",
            slug: "sine-cosine-rules-scalene-triangles",
            title: "Sine & Cosine Rules for Scalene Triangles",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-trig-02",
            summary: "a/sin A = b/sin B = c/sin C and a^2 = b^2 + c^2 - 2bc cos A.",
            objectives: [
              "Apply Sine rule when given a matching side-angle pair",
              "Apply Cosine rule for SAS or SSS triangle problems",
            ],
            keyPoints: [
              "Cosine rule: isolate cos A = (b^2 + c^2 - a^2) / (2bc) when given three sides",
              "Area of triangle = 1/2 a b sin C",
            ],
            reviewStatus: "verified",
            videoId: "tvi4_bB_W0k",
          },
          {
            id: "l16",
            slug: "bearings-angles-elevation-depression",
            title: "Three-Figure Bearings & Angles of Elevation/Depression",
            sortOrder: 3,
            durationMinutes: 55,
            isFreePreview: false,
            topicId: "top-waec-trig-03",
            summary: "Navigational 3-figure bearings from True North and observer angles.",
            objectives: [
              "Draw clear bearing diagrams with North arrows at every station",
              "Calculate reverse bearings (back-bearings) by adding or subtracting 180 degrees",
            ],
            keyPoints: [
              "Bearings are measured clockwise from North and written with 3 digits (e.g., 045 deg)",
              "Angle of elevation equals angle of depression between two observer stations",
            ],
            reviewStatus: "verified",
            videoId: "x5jU7f6gT8I",
          },
        ],
      },
      {
        id: "waec-m7",
        title: "Module 7: Statistics & Probability",
        description: "Grouped data distributions, ogives, and probability rules.",
        sortOrder: 7,
        lessons: [
          {
            id: "l17",
            slug: "grouped-data-mean-median-mode",
            title: "Grouped Frequency Distributions: Mean & Modal Class",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-stat-01",
            summary: "Class intervals, class midpoints (x), and calculating mean = sum(fx) / sum(f).",
            objectives: [
              "Construct grouped frequency distribution tables",
              "Calculate mean using assumed mean or direct formula",
            ],
            keyPoints: [
              "Class mark x is the average of lower and upper class limits",
              "Modal class has the highest single frequency count",
            ],
            reviewStatus: "verified",
            videoId: "B1HEzNTGeZ4",
          },
          {
            id: "l18",
            slug: "cumulative-frequency-ogives",
            title: "Cumulative Frequency Curves & Percentiles",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-waec-stat-02",
            summary: "Plotting cumulative frequency against upper class boundaries.",
            objectives: [
              "Plot smooth cumulative frequency curves (ogives)",
              "Estimate median, lower quartile Q1, upper quartile Q3, and interquartile range",
            ],
            keyPoints: [
              "Always plot cumulative frequency at the UPPER class boundaries, not class midpoints",
              "Interquartile range IQR = Q3 - Q1",
            ],
            reviewStatus: "verified",
            videoId: "L_iN2kR9Vp8",
          },
          {
            id: "l19",
            slug: "probability-rules-tree-diagrams",
            title: "Probability Rules & Tree Diagrams",
            sortOrder: 3,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-waec-stat-03",
            summary: "Addition rule for mutually exclusive events and multiplication rule for independent events.",
            objectives: [
              "Calculate theoretical probabilities 0 <= P(E) <= 1",
              "Draw and evaluate probability tree diagrams with and without replacement",
            ],
            keyPoints: [
              "Multiply probabilities along tree branches (AND rule)",
              "Add probabilities across separate branches (OR rule)",
            ],
            reviewStatus: "verified",
            videoId: "obZzOq_wSCg",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COURSE 2: JAMB UTME Speed & Strategy Mathematics
  // ---------------------------------------------------------------------------
  {
    id: "crs-jamb-math",
    slug: "jamb-utme-speed-mathematics",
    title: "JAMB UTME Speed & Strategy Mathematics",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "jamb-utme",
    level: "JAMB UTME Prep",
    examBody: "JAMB",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "UTME Quantitative Specialist & CBT Strategy Lead",
    priceMinorUnits: 1800000,
    currency: "NGN",
    shortDescription: "Techniques, short-cuts, and timed CBT practice for JAMB UTME Mathematics.",
    description: "JAMB requires both speed and precision: 40 questions in under 45 minutes. Learn rapid calculation shortcuts, elimination tactics for multiple choice options, and review high-frequency topics in Surds, Matrices, Calculus, Coordinate Geometry, and Permutation/Combination.",
    learningOutcomes: [
      "Solve multiple choice problems in under 60 seconds each using rapid deduction",
      "Master differentiation, integration, limits, and coordinate geometry shortcuts",
      "Eliminate wrong answers with substitution and parity checks",
    ],
    prerequisites: ["Senior Secondary 2 or 3 mathematics background"],
    modules: [
      {
        id: "jamb-m1",
        title: "Module 1: CBT Time Management & Quick-Elimination Rules",
        description: "Pacing strategies and elimination tactics for 40 questions in 45 minutes.",
        sortOrder: 1,
        lessons: [
          {
            id: "jamb-l1",
            slug: "cbt-time-management-pacing",
            title: "CBT Time Management & Frequency Distribution",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: true,
            topicId: "top-jamb-strat-01",
            summary: "Topic distribution across the 40 questions and strategic pacing rules.",
            objectives: [
              "Allocate time per question band (Round 1 fast solve, Round 2 calculation)",
              "Identify high-frequency calculus and algebra clusters in past exams",
            ],
            keyPoints: [
              "Never spend more than 90 seconds on a single question on the first pass",
              "Mark flagged questions and return after clearing straightforward algebra items",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "jamb-l2",
            slug: "option-elimination-tactics",
            title: "Option Elimination via Parity & Back-Substitution",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-strat-02",
            summary: "Testing extreme values x = 0, 1, -1 and dimensional checks to eliminate distractors.",
            objectives: [
              "Eliminate at least two incorrect options before computing full algebra",
              "Use unit digit and sign parity checks on polynomial expansion answers",
            ],
            keyPoints: [
              "Plugging in simple test values (x = 0 or 1) eliminates 2 out of 4 options in seconds",
              "Examine constant terms to instantly weed out wrong signs",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "jamb-m2",
        title: "Module 2: Surds, Indices & Logarithms Shortcuts",
        description: "High-speed simplification of irrational numbers and fractional exponents.",
        sortOrder: 2,
        lessons: [
          {
            id: "jamb-l3",
            slug: "surd-rationalization-shortcuts",
            title: "Surd Rationalization & Conjugate Multiplication",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-surds-01",
            summary: "Rapid conjugate multiplication (a + sqrt(b))(a - sqrt(b)) = a^2 - b.",
            objectives: [
              "Rationalize binomial surd denominators without hesitation",
              "Simplify compound surds and extract perfect square factors",
            ],
            keyPoints: [
              "Conjugate of a + sqrt(b) is a - sqrt(b)",
              "Multiply numerator and denominator simultaneously to preserve equality",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "jamb-l4",
            slug: "logarithm-identities-change-of-base",
            title: "Logarithmic Identities & Base Transformations",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-logs-01",
            summary: "log_b(a) = log_c(a) / log_c(b) and fast exponent comparisons.",
            objectives: [
              "Convert non-standard base logarithms to common or natural bases",
              "Solve logarithmic equations with multiple unknown base subscripts",
            ],
            keyPoints: [
              "log(xy) = log x + log y; log(x/y) = log x - log y; log(x^n) = n log x",
              "Arguments of logarithms must always be strictly greater than zero",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "jamb-m3",
        title: "Module 3: Matrices & Determinants for UTME",
        description: "2x2 determinants, adjoints, inverses, and systems of linear equations.",
        sortOrder: 3,
        lessons: [
          {
            id: "jamb-l5",
            slug: "matrix-determinants-and-inverses",
            title: "2x2 Matrix Determinants & Inverse Matrices",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-jamb-mat-01",
            summary: "Calculating ad - bc, singular matrices where det = 0, and inverse A^-1.",
            objectives: [
              "Calculate 2x2 and 3x3 matrix determinants",
              "Determine values of k for which a matrix is singular (det = 0)",
            ],
            keyPoints: [
              "A matrix has no inverse if and only if its determinant is 0 (singular matrix)",
              "Inverse of [[a, b], [c, d]] is 1/(ad - bc) * [[d, -b], [-c, a]]",
            ],
            reviewStatus: "verified",
            videoId: "2zgiPzG6smQ",
          },
          {
            id: "jamb-l6",
            slug: "cramers-rule-linear-systems",
            title: "Cramer's Rule for Solving UTME Linear Systems",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-mat-02",
            summary: "Fast coordinate extraction x = Dx/D and y = Dy/D in under 40 seconds.",
            objectives: [
              "Apply Cramer's determinant rule to solve simultaneous equations",
              "Recognize when systems have unique, infinite, or no solutions",
            ],
            keyPoints: [
              "Dx is obtained by replacing column 1 of coefficient matrix with constant column",
              "If D = 0 and Dx != 0, the system has no solutions",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "jamb-m4",
        title: "Module 4: Differential & Integral Calculus",
        description: "Derivative shortcuts, extrema, tangents, and definite integrals.",
        sortOrder: 4,
        lessons: [
          {
            id: "jamb-l7",
            slug: "rapid-derivative-rules",
            title: "Rapid Derivative Rules: Power, Product & Chain",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-calc-01",
            summary: "d/dx(x^n) = n x^(n-1), chain rule shortcuts, and rate of change.",
            objectives: [
              "Differentiate polynomials, rational powers, and trigonometric expressions",
              "Compute rate of change and acceleration problems from displacement functions",
            ],
            keyPoints: [
              "Power rule: multiply by exponent and reduce exponent by 1",
              "Velocity v = ds/dt; Acceleration a = dv/dt = d^2s/dt^2",
            ],
            reviewStatus: "verified",
            videoId: "9Yz-RCdS2Tg",
          },
          {
            id: "jamb-l8",
            slug: "tangents-normals-turning-points",
            title: "Tangents, Normals & Turning Points",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-jamb-calc-02",
            summary: "Setting dy/dx = 0 to find maximum and minimum points on curves.",
            objectives: [
              "Find gradient of tangent at specified point x = x0",
              "Determine nature of stationary points using second derivative d^2y/dx^2",
            ],
            keyPoints: [
              "Normal gradient m_normal = -1 / m_tangent",
              "d^2y/dx^2 > 0 indicates a local minimum; < 0 indicates a local maximum",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "jamb-l9",
            slug: "definite-integrals-area-under-curves",
            title: "Definite Integrals & Area Under Curves",
            sortOrder: 3,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-calc-03",
            summary: "Evaluating integral_a^b f(x) dx and computing bounded geometric regions.",
            objectives: [
              "Integrate polynomial terms: integral x^n dx = x^(n+1)/(n+1) + C",
              "Evaluate definite integrals between boundaries a and b without constant C",
            ],
            keyPoints: [
              "Definite integral between limits a and b is F(b) - F(a)",
              "Area below the x-axis produces a negative integral value; take absolute value for geometric area",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "jamb-m5",
        title: "Module 5: Coordinate Geometry & Straight Lines",
        description: "Gradient, perpendicular lines, and point-line distances.",
        sortOrder: 5,
        lessons: [
          {
            id: "jamb-l10",
            slug: "perpendicular-parallel-line-conditions",
            title: "Parallel & Perpendicular Line Conditions",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-coord-01",
            summary: "Parallel lines m1 = m2; perpendicular lines m1 * m2 = -1.",
            objectives: [
              "Convert general line equations Ax + By + C = 0 into slope-intercept form y = mx + c",
              "Find equation of perpendicular bisector between two coordinates",
            ],
            keyPoints: [
              "Slope m = (y2 - y1) / (x2 - x1)",
              "Negative reciprocal slope for perpendicularity: m2 = -1 / m1",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "jamb-m6",
        title: "Module 6: Permutations, Combinations & Probability",
        description: "Factorial arrangements, committee selection, and independent events.",
        sortOrder: 6,
        lessons: [
          {
            id: "jamb-l11",
            slug: "permutations-vs-combinations-selection",
            title: "Permutations (nPr) vs Combinations (nCr)",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-jamb-perm-01",
            summary: "Distinguishing order-sensitive arrangements from order-free groups.",
            objectives: [
              "Calculate nPr = n! / (n - r)! and nCr = n! / (r!(n - r)!)",
              "Solve word problems involving word anagrams with repeated letters",
            ],
            keyPoints: [
              "If arrangement order matters (ranks, words, positions), use Permutation",
              "If grouping order does not matter (committees, handshakes, card hands), use Combination",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COURSE 3: JSS 3 Basic Mathematics & BECE Exam Prep
  // ---------------------------------------------------------------------------
  {
    id: "crs-jss3-math",
    slug: "jss3-basic-mathematics-bece-prep",
    title: "JSS 3 Basic Mathematics & BECE Exam Prep",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "jss-bece",
    level: "JSS 1-3",
    examBody: "NECO/BECE",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Junior Secondary Mathematics Specialists",
    priceMinorUnits: 1500000,
    currency: "NGN",
    shortDescription: "Solidify core mathematical concepts for Junior WAEC / Basic Education Certificate Examination (BECE).",
    description: "Bridge the transition from junior to senior secondary. Clear explanations for fractions, ratios, directed numbers, simple algebraic equations, factorization, Pythagoras theorem, plane shapes, and basic statistics.",
    learningOutcomes: [
      "Excel in BECE / Junior WAEC Mathematics with distinctions",
      "Build total confidence with algebraic equations and fractions",
      "Smooth transition into Senior Secondary 1 science or commerce tracks",
    ],
    prerequisites: ["Primary 6 / JSS 1-2 Mathematics"],
    modules: [
      {
        id: "bece-m1",
        title: "Module 1: Number Sense & Everyday Arithmetic",
        description: "Directed numbers, integers, fractions, and commercial basics.",
        sortOrder: 1,
        lessons: [
          {
            id: "bece-l1",
            slug: "directed-numbers-and-integers",
            title: "Directed Numbers & Adding/Subtracting Integers",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: true,
            topicId: "top-bece-num-01",
            summary: "Working with positive and negative integers on a number line.",
            objectives: [
              "Add, subtract, multiply, and divide positive and negative numbers",
              "Avoid double-negative errors in basic arithmetic",
            ],
            keyPoints: [
              "Subtracting a negative number is equivalent to adding a positive: -(-b) = +b",
              "Multiplying two negative numbers produces a positive result",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l2",
            slug: "fractions-decimals-significant-figures",
            title: "Fractions, Decimals & Significant Figures",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-bece-num-02",
            summary: "Converting fractions to decimals and rounding to specified significant figures.",
            objectives: [
              "Simplify fractions to lowest terms",
              "Round numbers to 1, 2, or 3 significant figures",
            ],
            keyPoints: [
              "Leading zeros are never significant (e.g. 0.0042 has 2 significant figures)",
              "Zeros between non-zero digits are always significant",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l3",
            slug: "simple-interest-and-discounts",
            title: "Simple Interest, Discounts & Everyday Money",
            sortOrder: 3,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-num-03",
            summary: "Calculating I = PRT/100, hire purchase, and trade discount in Naira.",
            objectives: [
              "Calculate simple interest earned or paid on loans",
              "Determine cash discount and hire purchase total payments",
            ],
            keyPoints: [
              "Time T must always be expressed in years",
              "Total amount A = Principal P + Interest I",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "bece-m2",
        title: "Module 2: Basic Algebra & Linear Equations",
        description: "Collecting terms, expanding brackets, and linear equations.",
        sortOrder: 2,
        lessons: [
          {
            id: "bece-l4",
            slug: "expanding-brackets-collecting-terms",
            title: "Expanding Brackets & Collecting Like Terms",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-bece-alg-01",
            summary: "Single brackets a(b + c) and double brackets (x + a)(x + b).",
            objectives: [
              "Expand single brackets using distributive property",
              "Expand double brackets using FOIL / grid methods",
            ],
            keyPoints: [
              "Sign rule: -a(b - c) = -ab + ac (carefully observe the negative bracket expansion)",
              "Only like terms with identical variable powers can be added together",
            ],
            reviewStatus: "verified",
            videoId: "v-6MShC82pc",
          },
          {
            id: "bece-l5",
            slug: "simple-linear-equations-fractions",
            title: "Simple Linear Equations with Fractions",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-alg-02",
            summary: "Solving equations like (2x + 1)/3 = (x - 2)/4 by cross-multiplication.",
            objectives: [
              "Cross-multiply fractional equations accurately",
              "Group variable terms on the left and constant numbers on the right",
            ],
            keyPoints: [
              "Multiply both sides by common denominator to eliminate all fractions immediately",
              "Check your answer by substituting back into original equation",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l6",
            slug: "algebraic-factorization-grouping",
            title: "Algebraic Factorization by Grouping",
            sortOrder: 3,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-bece-alg-03",
            summary: "Extracting common numerical and algebraic factors; grouping four terms in pairs.",
            objectives: [
              "Extract highest common factor (HCF) from algebraic expressions",
              "Factorize expressions like ax + ay + bx + by = (a + b)(x + y)",
            ],
            keyPoints: [
              "Group into two pairs that share common factors",
              "Verify the bracket contents are identical after first round of factoring",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "bece-m3",
        title: "Module 3: Geometry & Pythagoras' Theorem",
        description: "Angles on lines, polygons, and right-angled triangle calculations.",
        sortOrder: 3,
        lessons: [
          {
            id: "bece-l7",
            slug: "angles-on-lines-and-triangles",
            title: "Angles on Lines, Vertically Opposite & Triangles",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-bece-geo-01",
            summary: "Angles on a straight line sum to 180 degrees; angles in a triangle sum to 180 degrees.",
            objectives: [
              "Find missing angles on straight lines and intersections",
              "Apply exterior angle of a triangle equals sum of two opposite interior angles",
            ],
            keyPoints: [
              "Vertically opposite angles are equal",
              "Base angles of an isosceles triangle are equal",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l8",
            slug: "pythagoras-theorem-calculations",
            title: "Pythagoras' Theorem in Right Triangles",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-geo-02",
            summary: "a^2 + b^2 = c^2, finding hypotenuse and shorter perpendicular sides.",
            objectives: [
              "State Pythagoras' theorem for right-angled triangles",
              "Compute unknown side lengths to 1 or 2 decimal places",
            ],
            keyPoints: [
              "Hypotenuse is always the longest side, opposite the 90 degree right angle",
              "To find a shorter side: a^2 = c^2 - b^2",
            ],
            reviewStatus: "verified",
            videoId: "AA6RfgP-AHU",
          },
        ],
      },
      {
        id: "bece-m4",
        title: "Module 4: Mensuration & Shapes",
        description: "Perimeter, area of plane figures, and volume of prisms and cylinders.",
        sortOrder: 4,
        lessons: [
          {
            id: "bece-l9",
            slug: "perimeter-and-area-parallelograms-trapezia",
            title: "Perimeter & Area of Parallelograms and Trapezia",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-mens-01",
            summary: "Area of parallelogram = base x height; Area of trapezium = 1/2(a + b)h.",
            objectives: [
              "Calculate area of parallelograms using perpendicular height",
              "Calculate area of trapezia given two parallel sides a and b",
            ],
            keyPoints: [
              "Height must be strictly perpendicular to the base, not the slanted side length",
              "Express units in cm^2 or m^2 consistently",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l10",
            slug: "cylinder-volume-surface-area",
            title: "Volume and Surface Area of Cylinders",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-mens-02",
            summary: "V = pi * r^2 * h and total surface area A = 2 * pi * r * (r + h).",
            objectives: [
              "Calculate cylinder volume using radius and height",
              "Evaluate curved surface area 2 * pi * r * h for open and closed cans",
            ],
            keyPoints: [
              "Check whether the problem specifies a closed cylinder (2 circular ends) or open (1 end)",
              "Use pi = 22/7 or 3.142 as instructed by question",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "bece-m5",
        title: "Module 5: Basic Statistics & Probability",
        description: "Ungrouped data, mean, median, mode, and bar charts.",
        sortOrder: 5,
        lessons: [
          {
            id: "bece-l11",
            slug: "ungrouped-mean-median-mode",
            title: "Mean, Median & Mode of Ungrouped Data",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-bece-stat-01",
            summary: "Computing summary statistics from raw score lists and frequency tables.",
            objectives: [
              "Calculate arithmetic mean = sum(x) / N",
              "Find median by sorting data in ascending order first",
            ],
            keyPoints: [
              "Mode is the value appearing with the highest frequency",
              "If N is even, median is the average of the two middle values",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "bece-l12",
            slug: "pie-charts-and-bar-charts",
            title: "Constructing and Interpreting Pie Charts & Bar Charts",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-bece-stat-02",
            summary: "Converting frequency into sector angles: angle = (frequency / total) * 360 degrees.",
            objectives: [
              "Calculate sector angles for pie chart construction",
              "Read frequencies from bar charts and histogram bars",
            ],
            keyPoints: [
              "Sum of all sector angles in a pie chart must equal 360 degrees exactly",
              "Leave equal gaps between bars in a bar chart to distinguish from continuous histograms",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COURSE 4: Senior Secondary Algebra & Trigonometry Deep Dive
  // ---------------------------------------------------------------------------
  {
    id: "crs-ss2-trig",
    slug: "ss2-algebra-and-trigonometry-deep-dive",
    title: "Senior Secondary Algebra & Trigonometry Deep Dive",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "waec-ssce",
    level: "SS 2",
    examBody: "NERDC / WAEC",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Secondary Mathematics Faculty",
    priceMinorUnits: 2000000,
    currency: "NGN",
    shortDescription: "In-depth treatment of trigonometric ratios, sine/cosine rules, bearing and distances, and arithmetic/geometric progressions.",
    description: "Senior Secondary 2 is where mathematical rigor accelerates. Master Sequence and Series (AP & GP), Linear Inequalities in two variables, Compound Angles, Trigonometric Graphs, and Bearings with angle elevation/depression.",
    learningOutcomes: [
      "Calculate 3-figure bearings, angles of elevation and depression with precision",
      "Apply Sine and Cosine rules to solve any scalene triangle problem",
      "Derive and apply formulas for AP and GP real-world problems",
    ],
    prerequisites: ["SS 1 Mathematics foundation"],
    modules: [
      {
        id: "ss2-m1",
        title: "Module 1: Sequences & Series (AP & GP)",
        description: "Arithmetic and Geometric Progressions, sum of n terms, and sum to infinity.",
        sortOrder: 1,
        lessons: [
          {
            id: "ss2-l1",
            slug: "arithmetic-progressions-nth-term-sum",
            title: "Arithmetic Progressions (AP): nth Term & Sum",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            topicId: "top-ss2-seq-01",
            summary: "Common difference d, Tn = a + (n - 1)d, and Sn = n/2(2a + (n - 1)d).",
            objectives: [
              "Formulate equations for first term a and common difference d",
              "Calculate sum of arithmetic series across real-world finance contexts",
            ],
            keyPoints: [
              "Common difference d = T2 - T1 = T3 - T2",
              "When last term l is known: Sn = n/2(a + l)",
            ],
            reviewStatus: "verified",
            videoId: "_coC6ge8Ucw",
          },
          {
            id: "ss2-l2",
            slug: "geometric-progressions-growth",
            title: "Geometric Progressions (GP): nth Term & Sum",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-ss2-seq-02",
            summary: "Common ratio r, Tn = a * r^(n - 1), and sum Sn = a(1 - r^n)/(1 - r).",
            objectives: [
              "Determine common ratio r = T2 / T1",
              "Apply GP models to population growth and compound financial assets",
            ],
            keyPoints: [
              "When |r| < 1, use Sn = a(1 - r^n) / (1 - r)",
              "When |r| > 1, use Sn = a(r^n - 1) / (r - 1)",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "ss2-l3",
            slug: "sum-to-infinity-geometric-series",
            title: "Sum to Infinity of Convergent Geometric Series",
            sortOrder: 3,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-ss2-seq-03",
            summary: "Condition for convergence |r| < 1 and formula S_infinity = a / (1 - r).",
            objectives: [
              "State the necessary condition for a GP to converge",
              "Express recurring decimals as rational fractions using sum to infinity",
            ],
            keyPoints: [
              "A geometric series only has a sum to infinity if -1 < r < 1",
              "If r >= 1 or r <= -1, the series diverges and has no finite sum to infinity",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "ss2-m2",
        title: "Module 2: Quadratic Equations & Nature of Roots",
        description: "Completing square, discriminant, and graphing parabola extrema.",
        sortOrder: 2,
        lessons: [
          {
            id: "ss2-l4",
            slug: "completing-the-square-vertex-form",
            title: "Completing the Square and Expressing in Vertex Form",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-ss2-quad-01",
            summary: "Rewriting y = a(x - h)^2 + k to identify coordinates of turning point (h, k).",
            objectives: [
              "Complete the square when coefficient of x^2 is greater than 1",
              "Determine coordinates of vertex and state line of symmetry x = h",
            ],
            keyPoints: [
              "Divide by a first when factoring non-monic quadratics",
              "Vertex gives minimum point if a > 0; maximum point if a < 0",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "ss2-l5",
            slug: "discriminant-analysis-nature-of-roots",
            title: "Discriminant Analysis & Nature of Roots",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-ss2-quad-02",
            summary: "b^2 - 4ac > 0 (two distinct real roots), = 0 (repeated roots), < 0 (no real roots).",
            objectives: [
              "Calculate discriminant value without solving equation completely",
              "Find range of values of constant k for which equation has real roots",
            ],
            keyPoints: [
              "For real roots: b^2 - 4ac >= 0",
              "For equal / repeated roots (tangent to x-axis): b^2 - 4ac = 0",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "ss2-m3",
        title: "Module 3: Trigonometric Ratios & Graphs",
        description: "Angles in 4 quadrants, CAST rule, and trigonometric curves.",
        sortOrder: 3,
        lessons: [
          {
            id: "ss2-l6",
            slug: "trig-ratios-four-quadrants-cast",
            title: "Trigonometric Ratios in All Four Quadrants (CAST Rule)",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-ss2-trig-01",
            summary: "Evaluating sine, cosine, tangent for angles between 0 and 360 degrees.",
            objectives: [
              "Identify reference acute angle alpha for any given angle theta",
              "Apply the CAST diagram (Quadrant 1: All, Quadrant 2: Sin, Quadrant 3: Tan, Quadrant 4: Cos)",
            ],
            keyPoints: [
              "Quadrant 2: theta = 180 - alpha; Quadrant 3: theta = 180 + alpha; Quadrant 4: theta = 360 - alpha",
              "cos(180 - theta) = -cos(theta); sin(180 - theta) = sin(theta)",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "ss2-l7",
            slug: "trigonometric-graphs-amplitude-period",
            title: "Graphing y = a sin(bx) and y = a cos(bx)",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-ss2-trig-02",
            summary: "Amplitude |a|, period 360 / b degrees, and finding solution roots from graphs.",
            objectives: [
              "Plot trigonometric waves from 0 to 360 degrees",
              "State amplitude and period of transformed trigonometric functions",
            ],
            keyPoints: [
              "Amplitude is half the vertical distance between maximum and minimum values",
              "Period of sin(bx) or cos(bx) is 360 / b degrees",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "ss2-m4",
        title: "Module 4: Sine/Cosine Rules & Three-Figure Bearings",
        description: "Non-right triangles and precision navigational bearings.",
        sortOrder: 4,
        lessons: [
          {
            id: "ss2-l8",
            slug: "sine-and-cosine-rules-advanced",
            title: "Advanced Sine and Cosine Rules for Scalene Triangles",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-ss2-trig-03",
            summary: "Choosing between Sine and Cosine rule; handling obtuse angle ambiguities.",
            objectives: [
              "Select correct trigonometric rule based on given side/angle configuration",
              "Resolve ambiguous case of Sine rule when given SSA",
            ],
            keyPoints: [
              "Use Cosine rule when two sides and the included angle (SAS) are known",
              "Remember cos(obtuse angle) is negative: a^2 = b^2 + c^2 - 2bc(-cos(180 - A))",
            ],
            reviewStatus: "verified",
            videoId: "tvi4_bB_W0k",
          },
          {
            id: "ss2-l9",
            slug: "three-figure-bearings-and-elevation",
            title: "Three-Figure Bearings & Practical Surveying",
            sortOrder: 2,
            durationMinutes: 55,
            isFreePreview: false,
            topicId: "top-ss2-trig-04",
            summary: "Complex navigation problems with multiple stations, angles of elevation and depression.",
            objectives: [
              "Draw multi-station bearing diagrams with accurate North reference lines",
              "Combine bearings with Cosine rule to calculate direct straight-line distance back to start",
            ],
            keyPoints: [
              "Always draw a cross with a North arrow at EVERY landmark mentioned in the question",
              "Internal angles can be calculated using alternate interior angles between parallel North lines",
            ],
            reviewStatus: "verified",
            videoId: "x5jU7f6gT8I",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COURSE 5: Primary 6 Quantitative Reasoning & Mathematics
  // ---------------------------------------------------------------------------
  {
    id: "crs-pri6-ncee",
    slug: "primary6-quantitative-reasoning-common-entrance",
    title: "Primary 6 Quantitative Reasoning & Mathematics",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "primary-ncee",
    level: "Primary 1-6",
    examBody: "NERDC / NECO (NCEE)",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Primary Education & Quantitative Aptitude Specialists",
    priceMinorUnits: 1200000,
    currency: "NGN",
    shortDescription: "Tailored preparation for National Common Entrance Examination (NCEE) and top secondary school entrance exams.",
    description: "Fun, patient, visual learning for younger students. Covers decimals, percentages, LCM/HCF, word problems, perimeter, area, volume, and complex pattern detection for quantitative aptitude papers.",
    learningOutcomes: [
      "Score in the 90th percentile for Federal Unity Colleges entrance exams",
      "Decipher pattern-based quantitative reasoning diagrams swiftly",
      "Build a joyful, fear-free attitude towards mathematical thinking",
    ],
    prerequisites: ["Primary 5 Mathematics"],
    modules: [
      {
        id: "pri6-m1",
        title: "Module 1: Numbers, Place Value & Large Operations",
        description: "Place value up to millions, Roman numerals, and long division.",
        sortOrder: 1,
        lessons: [
          {
            id: "pri6-l1",
            slug: "place-value-millions-roman-numerals",
            title: "Place Value up to Millions & Roman Numerals to M",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: true,
            topicId: "top-pri6-num-01",
            summary: "Reading and writing large numbers up to millions; Roman numerals I, V, X, L, C, D, M.",
            objectives: [
              "Identify place values (Units, Tens, Hundreds, Thousands, Millions)",
              "Convert numbers between Arabic numerals and Roman numerals",
            ],
            keyPoints: [
              "Roman numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000",
              "A smaller numeral before a larger one means subtraction: IV = 4, IX = 9, XC = 90",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "pri6-l2",
            slug: "multiplication-long-division-algorithms",
            title: "Multiplication & Long Division Word Problems",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-pri6-num-02",
            summary: "Multi-digit multiplication and step-by-step long division with remainders.",
            objectives: [
              "Multiply 3-digit numbers by 2-digit numbers",
              "Perform long division step by step (Divide, Multiply, Subtract, Bring down)",
            ],
            keyPoints: [
              "Remember DMSB: Divide, Multiply, Subtract, Bring down",
              "Double-check remainders are smaller than the divisor",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "pri6-m2",
        title: "Module 2: Fractions, Decimals & Percentages",
        description: "Fractions, mixed numbers, decimal operations, and percentages.",
        sortOrder: 2,
        lessons: [
          {
            id: "pri6-l3",
            slug: "proper-improper-fractions-operations",
            title: "Fractions: Proper, Improper & Mixed Operations",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: false,
            topicId: "top-pri6-frac-01",
            summary: "Adding, subtracting, multiplying, and dividing proper and mixed fractions.",
            objectives: [
              "Convert mixed numbers to improper fractions and vice versa",
              "Apply common denominators to add and subtract fractions",
            ],
            keyPoints: [
              "To convert 2 3/4 to improper: (2 * 4 + 3) / 4 = 11/4",
              "In division: Keep the first fraction, Change division to multiplication, Flip the second fraction (KCF)",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "pri6-l4",
            slug: "percentages-and-ratio-sharing-pri6",
            title: "Percentages of Quantities & Ratio Sharing",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-pri6-frac-02",
            summary: "Calculating percentage of quantities and sharing money in given ratios.",
            objectives: [
              "Calculate percentage of items (e.g. 15% of ₦2,000)",
              "Share quantities in ratios like 2 : 3 : 5",
            ],
            keyPoints: [
              "15% means 15 out of 100: 15/100 * 2000 = ₦300",
              "Total parts = sum of ratio terms",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "pri6-m3",
        title: "Module 3: Money, Everyday Business & Measurements",
        description: "Profit, loss, perimeter, area, and metric measurement conversions.",
        sortOrder: 3,
        lessons: [
          {
            id: "pri6-l5",
            slug: "cost-price-selling-price-profit-loss",
            title: "Cost Price, Selling Price, Profit & Loss",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: false,
            topicId: "top-pri6-money-01",
            summary: "Real-world trade calculations with profit = SP - CP and loss = CP - SP.",
            objectives: [
              "Calculate profit and loss in Naira and Kobo",
              "Determine selling price given profit percentage",
            ],
            keyPoints: [
              "Selling Price = Cost Price + Profit",
              "Selling Price = Cost Price - Loss",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "pri6-l6",
            slug: "perimeter-and-area-squares-rectangles",
            title: "Perimeter & Area of Squares and Rectangles",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-pri6-mens-01",
            summary: "Perimeter P = 2(L + B) and Area A = L * B of rectangular shapes.",
            objectives: [
              "Calculate perimeter as distance around the boundary",
              "Compute area of rectangles and composite L-shaped figures",
            ],
            keyPoints: [
              "Perimeter is measured in linear units (cm, m); Area is measured in square units (cm^2, m^2)",
              "Split composite L-shapes into two distinct rectangles to calculate area",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "pri6-l7",
            slug: "volume-and-capacity-cubes-cuboids",
            title: "Volume and Capacity of Cubes & Rectangular Boxes",
            sortOrder: 3,
            durationMinutes: 35,
            isFreePreview: false,
            topicId: "top-pri6-mens-02",
            summary: "Volume V = Length x Breadth x Height and conversion to litres.",
            objectives: [
              "Calculate volume of cubes (s^3) and cuboids (L * B * H)",
              "Convert 1,000 cm^3 to 1 litre of liquid capacity",
            ],
            keyPoints: [
              "Volume is measured in cubic units (cm^3 or m^3)",
              "1 litre = 1,000 cm^3 = 1,000 millilitres (ml)",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "pri6-m4",
        title: "Module 4: Quantitative Aptitude & Diagram Logic",
        description: "Number patterns, circle puzzles, box codes, and symbol arithmetic.",
        sortOrder: 4,
        lessons: [
          {
            id: "pri6-l8",
            slug: "number-pattern-sequences",
            title: "Finding the Next Term in Number Pattern Sequences",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: false,
            topicId: "top-pri6-qa-01",
            summary: "Detecting arithmetic jumps, doubling patterns, square numbers, and alternating rules.",
            objectives: [
              "Identify constant differences between sequence terms",
              "Spot geometric doubling and alternating rule progressions",
            ],
            keyPoints: [
              "Look at differences between consecutive terms: +2, +4, +6, +8...",
              "Check if numbers are squares (1, 4, 9, 16, 25) or cubes",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "pri6-l9",
            slug: "box-and-triangle-quantitative-puzzles",
            title: "Solving Box, Circle & Triangle Quantitative Puzzles",
            sortOrder: 2,
            durationMinutes: 40,
            isFreePreview: false,
            topicId: "top-pri6-qa-02",
            summary: "Cracking sample patterns where corner numbers operate to produce the centre number.",
            objectives: [
              "Test sample diagrams with four basic operations (+, -, *, /)",
              "Apply discovered operational rules to solve missing numbers",
            ],
            keyPoints: [
              "Always test your hypothesis on BOTH provided sample diagrams before solving the question",
              "Common sample rules include: (Top * Bottom) / Left = Centre, or (A + B) * (C - D)",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COURSE 6: Cambridge IGCSE Extended Mathematics Complete Guide
  // ---------------------------------------------------------------------------
  {
    id: "crs-igcse-math",
    slug: "cambridge-igcse-extended-mathematics",
    title: "Cambridge IGCSE Extended Mathematics Complete Guide",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    track: "cambridge-igcse",
    level: "Cambridge IGCSE",
    examBody: "CAMBRIDGE",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "International Curriculum & Cambridge Mathematics Specialists",
    priceMinorUnits: 3000000,
    currency: "NGN",
    shortDescription: "Comprehensive coverage and past paper practice for Cambridge IGCSE Mathematics (0580).",
    description: "Comprehensive training for students sitting Cambridge International Examinations. Covers vectors, transformations, function notation, matrix transformations, probability trees, cumulative frequency curves, and extended algebraic techniques.",
    learningOutcomes: [
      "Tackle both Paper 2 and Paper 4 extended questions with confidence",
      "Master calculator operations and exact mathematical representations",
      "Excel in Cambridge 0580 extended syllabus assessments",
    ],
    prerequisites: ["Senior Secondary 1 or Year 10 Mathematics foundation"],
    modules: [
      {
        id: "igcse-m1",
        title: "Module 1: Number, Standard Form & Bounds",
        description: "Indices, upper and lower bounds, and error intervals.",
        sortOrder: 1,
        lessons: [
          {
            id: "igcse-l1",
            slug: "indices-standard-form-scientific-notation",
            title: "Indices, Fractional Powers & Standard Form",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            topicId: "top-igcse-num-01",
            summary: "Negative and fractional indices x^(p/q) = (q-th root of x)^p and standard form A * 10^n.",
            objectives: [
              "Simplify expressions involving fractional and negative powers",
              "Express numbers in standard form where 1 <= A < 10",
            ],
            keyPoints: [
              "x^(-n) = 1 / x^n; x^(1/2) = sqrt(x)",
              "Standard form coefficient A must be strictly between 1 and 10",
            ],
            reviewStatus: "verified",
            videoId: "p-W4aJjQ_zY",
          },
          {
            id: "igcse-l2",
            slug: "upper-lower-bounds-error-intervals",
            title: "Upper and Lower Bounds & Error Intervals",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-igcse-num-02",
            summary: "Finding maximum and minimum bounds when numbers are rounded to nearest unit, 1 d.p., or 2 s.f.",
            objectives: [
              "Determine upper and lower limits of rounded values",
              "Calculate maximum and minimum possible values of expressions like a / b",
            ],
            keyPoints: [
              "To maximize a quotient a / b: use Maximum(a) / Minimum(b)",
              "To minimize a quotient a / b: use Minimum(a) / Maximum(b)",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m2",
        title: "Module 2: Functions & Advanced Algebra",
        description: "Function notation, composite functions, and inverse functions.",
        sortOrder: 2,
        lessons: [
          {
            id: "igcse-l3",
            slug: "function-notation-evaluations",
            title: "Function Notation: Evaluating f(x) and g(x)",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-igcse-func-01",
            summary: "Understanding f: x -> ax + b, finding outputs for given inputs and solving f(x) = k.",
            objectives: [
              "Evaluate function outputs for numerical and algebraic inputs",
              "Solve equations in function notation f(x) = 0",
            ],
            keyPoints: [
              "f(3) means replace every x in the formula with 3",
              "f(x) = 3 means set the entire expression equal to 3 and solve for x",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "igcse-l4",
            slug: "composite-and-inverse-functions",
            title: "Composite Functions fg(x) and Inverse Functions f^-1(x)",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-igcse-func-02",
            summary: "Applying g first then f; algebraic rearrangement to find f^-1(x).",
            objectives: [
              "Form composite functions fg(x) and gf(x)",
              "Find inverse function by setting y = f(x), swapping variables and making y the subject",
            ],
            keyPoints: [
              "In fg(x), the inner function g(x) is evaluated first and substituted into f",
              "The graph of an inverse function f^-1(x) is the reflection of f(x) in the line y = x",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m3",
        title: "Module 3: Coordinate Geometry & Tangents to Curves",
        description: "Straight line equations, midpoint, and drawing tangents to curves.",
        sortOrder: 3,
        lessons: [
          {
            id: "igcse-l5",
            slug: "tangents-and-gradients-of-curves",
            title: "Drawing Tangents to Estimate Gradients of Curves",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-igcse-curve-01",
            summary: "Estimating instantaneous rate of change by placing a ruler tangent against non-linear curves.",
            objectives: [
              "Draw accurate tangents at specified point x = x0",
              "Calculate gradient = rise / run from the drawn tangent line",
            ],
            keyPoints: [
              "The tangent line touches the curve at exactly one point without crossing through it",
              "Select two points far apart on the tangent line to minimize gradient measurement error",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m4",
        title: "Module 4: 3D Trigonometry & Bearings",
        description: "3D right triangles, angles between lines and planes, and pyramid heights.",
        sortOrder: 4,
        lessons: [
          {
            id: "igcse-l6",
            slug: "3d-trigonometry-angles-between-lines-planes",
            title: "3D Trigonometry: Angles Between Lines & Planes",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-igcse-trig-01",
            summary: "Extracting 2D right-angled triangles from 3D cuboids, prisms, and pyramids.",
            objectives: [
              "Calculate lengths of space diagonals across cuboids using 3D Pythagoras d^2 = l^2 + w^2 + h^2",
              "Identify and calculate angle between a slant edge and base plane",
            ],
            keyPoints: [
              "Project the line onto the plane to locate the right angle on the base",
              "Redraw the vertical cross-sectional triangle as a clean 2D sketch before calculating",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m5",
        title: "Module 5: Vectors & Geometric Proofs",
        description: "Column vectors, vector algebra, magnitude, and parallel vector proofs.",
        sortOrder: 5,
        lessons: [
          {
            id: "igcse-l7",
            slug: "column-vectors-magnitude-parallelism",
            title: "Column Vectors, Magnitude & Vector Algebra",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-igcse-vec-01",
            summary: "Column vector notation (x, y), magnitude |v| = sqrt(x^2 + y^2), and scalar multiples.",
            objectives: [
              "Add, subtract, and multiply vectors by scalars",
              "Calculate vector magnitude |v| = sqrt(x^2 + y^2)",
            ],
            keyPoints: [
              "Vector AB = OB - OA (Position vector of B minus position vector of A)",
              "Two vectors are parallel if one is a scalar multiple of the other: v = k * u",
            ],
            reviewStatus: "needs_teacher_review",
          },
          {
            id: "igcse-l8",
            slug: "vector-geometry-collinearity-proofs",
            title: "Vector Geometry & Collinearity Proofs",
            sortOrder: 2,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-igcse-vec-02",
            summary: "Proving three points lie on a straight line (collinear) using vector multiples.",
            objectives: [
              "Express geometric paths in terms of given basis vectors a and b",
              "Prove points A, B, and C are collinear by showing AB = k * BC and sharing point B",
            ],
            keyPoints: [
              "To prove points A, B, C are collinear: show AB = k * BC and state that B is a common point",
              "Divide ratio segments: if P divides AB in ratio 2:3, then AP = 2/5 AB",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m6",
        title: "Module 6: Transformations & Matrices",
        description: "Reflections, rotations, enlargements with negative scale factors, and matrices.",
        sortOrder: 6,
        lessons: [
          {
            id: "igcse-l9",
            slug: "transformations-reflections-rotations-enlargements",
            title: "Reflections, Rotations & Negative Scale Factor Enlargements",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-igcse-trans-01",
            summary: "Describing fully single transformations: mirror line, centre & angle of rotation, scale factor k.",
            objectives: [
              "Enlarge shapes with negative fractional scale factors through a given centre",
              "Fully describe transformations without combining multiple operations",
            ],
            keyPoints: [
              "A negative scale factor enlargement inverts the shape through the centre of enlargement",
              "Cambridge marks will award zero marks if more than one transformation type is named",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
      {
        id: "igcse-m7",
        title: "Module 7: Extended Statistics & Probability",
        description: "Cumulative frequency curves, IQR, histograms, and conditional probability.",
        sortOrder: 7,
        lessons: [
          {
            id: "igcse-l10",
            slug: "cumulative-frequency-medians-iqr",
            title: "Cumulative Frequency Curves, Median & IQR",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: false,
            topicId: "top-igcse-stat-01",
            summary: "Plotting cumulative frequency curves and estimating 50th, 25th, and 75th percentiles.",
            objectives: [
              "Plot smooth cumulative frequency curves at upper class boundaries",
              "Read median, lower quartile Q1, upper quartile Q3, and interquartile range",
            ],
            keyPoints: [
              "Interquartile range IQR = Q3 - Q1",
              "Construct box-and-whisker plots from the 5-figure summary",
            ],
            reviewStatus: "verified",
            videoId: "L_iN2kR9Vp8",
          },
          {
            id: "igcse-l11",
            slug: "probability-tree-diagrams-without-replacement",
            title: "Probability Tree Diagrams Without Replacement",
            sortOrder: 2,
            durationMinutes: 45,
            isFreePreview: false,
            topicId: "top-igcse-prob-01",
            summary: "Conditional probability trees where denominator reduces on subsequent selections.",
            objectives: [
              "Construct probability trees for selections without replacement",
              "Compute conditional probabilities P(A and B) = P(A) * P(B|A)",
            ],
            keyPoints: [
              "When an item is not replaced, both the numerator and the denominator decrease by 1",
              "Verify branch probabilities from any single vertex sum to 1",
            ],
            reviewStatus: "needs_teacher_review",
          },
        ],
      },
    ],
  },
];
