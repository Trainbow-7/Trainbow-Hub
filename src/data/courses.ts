import { PRIMARY_INSTRUCTOR } from "./instructor";
import { TrackId, EXAM_TRACKS, SUBJECT_PRICES, formatNaira } from "./pricing";
import { TopicVideo, RECOVERED_MATHEMATICS_VIDEOS, getTopicVideo, getTopicVideoBySubject } from "./videos";

export type DepartmentId = "core" | "science" | "commercial" | "arts";

export interface DepartmentConfig {
  id: DepartmentId;
  name: string;
  tagline: string;
  badge: string;
  accentColor: string;
}

export const DEPARTMENTS: Record<DepartmentId, DepartmentConfig> = {
  core: {
    id: "core",
    name: "Core / General",
    tagline: "Essential subjects required for all students across all academic tracks.",
    badge: "Compulsory Foundation",
    accentColor: "border-brand-blue-600 bg-brand-blue-50 text-brand-blue-700",
  },
  science: {
    id: "science",
    name: "Science",
    tagline: "Pure sciences, applied sciences, and advanced quantitative reasoning.",
    badge: "STEM & Engineering",
    accentColor: "border-emerald-600 bg-emerald-50 text-emerald-700",
  },
  commercial: {
    id: "commercial",
    name: "Commercial",
    tagline: "Business calculations, financial principles, trade, and economic decision-making.",
    badge: "Business & Finance",
    accentColor: "border-amber-600 bg-amber-50 text-amber-700",
  },
  arts: {
    id: "arts",
    name: "Arts & Humanities",
    tagline: "Governance, critical literary analysis, societal ethics, and global geography.",
    badge: "Humanities & Law",
    accentColor: "border-purple-600 bg-purple-50 text-purple-700",
  },
};

export interface SyllabusSubtopic {
  name: string;
  keyExamPoints?: string[];
}

export interface SyllabusTopic {
  name: string;
  subtopics: string[];
  video?: TopicVideo | null;
}

export interface SyllabusModule {
  id: string;
  title: string;
  durationMinutes: number;
  topics: SyllabusTopic[];
}

export interface SubjectCatalogueItem {
  id: string;
  slug: string;
  name: string;
  department: DepartmentId;
  shortDescription: string;
  fullOverview: string;
  lessonCount: number;
  durationHours: number;
  rating: number;
  reviewCount: number;
  curriculumCoverage: number; // 100%
  highFrequencyExamTopics: string[];
  commonMistakes: string[];
  pastQuestionsCount: number;
  cbtDrillsCount: number;
  officialBoards: string[];
  learningOutcomes: string[];
  syllabus: SyllabusModule[];
}

export const CATALOGUE_SUBJECTS: SubjectCatalogueItem[] = [
  // ==========================================================================
  // CORE / GENERAL
  // ==========================================================================
  {
    id: "mathematics",
    slug: "mathematics",
    name: "Mathematics",
    department: "core",
    shortDescription: "Complete syllabus coverage from foundational numeracy to advanced calculus, geometry, and trigonometry.",
    fullOverview:
      "Taught and moderated by Mr Oyedeji S.T (Senior Mathematics Lecturer & WAEC Chief Examiner Consultant). This flagship course provides complete, rigorous mastery of all syllabus modules across WAEC, NECO, JAMB UTME, BECE, Primary NCEE, and Cambridge IGCSE (0580). Features step-by-step mark scheme breakdowns, objective short-cuts, and proofs.",
    lessonCount: 42,
    durationHours: 32,
    rating: 4.9,
    reviewCount: 142,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME", "Cambridge IGCSE 0580", "BECE", "NCEE"],
    highFrequencyExamTopics: [
      "Quadratic Equations & Parabolic Graphs",
      "Simultaneous Equations (Linear & Quadratic)",
      "Circle Theorems & Angle Subtensions",
      "Bearings & Trigonometric Distances (Sine/Cosine Rules)",
      "Logarithms, Indices & Surd Simplifications",
      "Statistics: Cumulative Frequency (Ogive) & Grouped Mean",
      "Probability Trees & Mutually Exclusive Events",
      "Coordinate Geometry (Gradient, Midpoint & Perpendicular Lines)",
      "Matrices & Determinants (2x2 and 3x3)",
      "Calculus Basics: Differentiation & Definite Integration",
    ],
    commonMistakes: [
      "Sign errors when expanding negative brackets (e.g. -(a - b) = -a + b)",
      "Forgetting to switch inequality signs when multiplying or dividing by negative numbers",
      "Leaving irrational denominators instead of rationalizing surds",
      "Confusing angle of elevation with angle of depression from observer eye-level",
      "Omitting units in mensuration ($cm^2$ for area, $cm^3$ for volume)",
      "Incorrectly reading cumulative frequency curves without plotting at upper class boundaries",
    ],
    pastQuestionsCount: 1250,
    cbtDrillsCount: 450,
    learningOutcomes: [
      "Attain guaranteed A1 in WAEC/NECO General Mathematics with full working marks in Paper 2",
      "Score 85+ in JAMB UTME Mathematics using speed deduction and elimination tactics",
      "Master Cambridge IGCSE 0580 extended papers with precision algebraic manipulation",
      "Build unshakeable confidence in geometry, trigonometry, and calculus",
    ],
    syllabus: [
      {
        id: "m-math-1",
        title: "Module 1: Number & Numeration",
        durationMinutes: 180,
        topics: [
          {
            name: "Fractions & Decimals Operations",
            subtopics: ["Conversion of terminating & recurring decimals", "BODMAS with mixed fractions", "Approximations & significant figures"],
            video: RECOVERED_MATHEMATICS_VIDEOS["fractions-decimals"],
          },
          {
            name: "Number Bases",
            subtopics: ["Conversion of fractional bases", "Modular arithmetic", "Unknown base subscripts"],
            video: RECOVERED_MATHEMATICS_VIDEOS["number-bases"],
          },
          {
            name: "Percentages & Percentage Change",
            subtopics: ["Percentage increase/decrease", "Reverse percentage problems", "Profit and loss margins"],
            video: RECOVERED_MATHEMATICS_VIDEOS["percentages"],
          },
          {
            name: "Ratio & Proportional Sharing",
            subtopics: ["Direct and inverse ratios", "Proportional division of financial sums", "Scale factor ratios"],
            video: RECOVERED_MATHEMATICS_VIDEOS["ratio-proportion"],
          },
          {
            name: "Surds",
            subtopics: ["Rules of surds", "Conjugate pairs & rationalization of denominators", "Simplifying complex radical expressions"],
            video: RECOVERED_MATHEMATICS_VIDEOS["surds"],
          },
          {
            name: "Sets & Venn Diagrams",
            subtopics: ["2-set and 3-set problem solving", "Universal set, complement, union, and intersection"],
            video: RECOVERED_MATHEMATICS_VIDEOS["sets-venn-diagrams"],
          },
        ],
      },
      {
        id: "m-math-2",
        title: "Module 2: Commercial Arithmetic",
        durationMinutes: 160,
        topics: [
          {
            name: "Profit, Loss & Percentage Margins",
            subtopics: ["Cost price vs selling price", "Percentage markup vs margin", "Break-even calculations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["profit-loss"],
          },
          {
            name: "Discount & Commercial Markups",
            subtopics: ["Trade discount vs cash discount", "Successive percentage discounts", "Value Added Tax (VAT)"],
            video: RECOVERED_MATHEMATICS_VIDEOS["discount-markups"],
          },
          {
            name: "Simple & Compound Interest Calculations",
            subtopics: ["Simple interest formula I = PRT/100", "Compound interest formula A = P(1+r/n)^nt", "Depreciation & inflation"],
            video: RECOVERED_MATHEMATICS_VIDEOS["simple-compound-interest"],
          },
        ],
      },
      {
        id: "m-math-3",
        title: "Module 3: Algebraic Processes",
        durationMinutes: 240,
        topics: [
          {
            name: "Linear Equations & Word Problems",
            subtopics: ["Formulating algebraic equations from real-life problems", "Clearing fractional denominators", "Linear change of subject"],
            video: RECOVERED_MATHEMATICS_VIDEOS["linear-equations"],
          },
          {
            name: "Linear Inequalities & Number Line Graphs",
            subtopics: ["Inequalities in one variable", "Reversing sign on negative division", "Combined range inequalities"],
            video: RECOVERED_MATHEMATICS_VIDEOS["linear-inequalities"],
          },
          {
            name: "Simultaneous Equations & Variation",
            subtopics: ["Elimination and substitution methods", "Direct, inverse, joint, and partial variation", "Word problems with 2 unknowns"],
            video: RECOVERED_MATHEMATICS_VIDEOS["simultaneous-equations"],
          },
          {
            name: "Quadratic Equations & Parabolic Roots",
            subtopics: ["Factorization and completing the square", "Quadratic formula derivation", "Discriminant nature of roots"],
            video: RECOVERED_MATHEMATICS_VIDEOS["quadratic-equations"],
          },
        ],
      },
      {
        id: "m-math-4",
        title: "Module 4: Indices & Logarithms",
        durationMinutes: 200,
        topics: [
          {
            name: "Laws of Indices & Fractional Powers",
            subtopics: ["Multiplication, division, and power of power laws", "Negative and fractional exponents", "Exponential equations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["indices"],
          },
          {
            name: "Laws of Logarithms & Base Change",
            subtopics: ["Product, quotient, and power rules of logarithms", "Change of base formula", "Logarithmic identities"],
            video: RECOVERED_MATHEMATICS_VIDEOS["logarithms-rules"],
          },
          {
            name: "Logarithmic Calculations & Exam Problems",
            subtopics: ["Four-figure tables vs calculator rules", "Characteristic and mantissa", "Solving logarithmic quadratic equations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["logarithmic-calculations"],
          },
        ],
      },
      {
        id: "m-math-5",
        title: "Module 5: Geometry",
        durationMinutes: 220,
        topics: [
          {
            name: "Angles & Triangle Properties",
            subtopics: ["Sum of interior angles of triangles", "Exterior angle theorem", "Congruence and similarity criteria"],
            video: RECOVERED_MATHEMATICS_VIDEOS["angles-triangles"],
          },
          {
            name: "Polygons & Interior/Exterior Angles",
            subtopics: ["Formula (2n - 4) x 90° for interior angles", "Sum of exterior angles equals 360°", "Regular n-gon calculations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["polygons"],
          },
          {
            name: "Circle Theorems & Geometric Proofs",
            subtopics: ["Angle subtended at center is twice circumference", "Angles in same segment", "Opposite angles of cyclic quadrilateral", "Alternate segment theorem"],
            video: RECOVERED_MATHEMATICS_VIDEOS["circle-theorems"],
          },
        ],
      },
      {
        id: "m-math-6",
        title: "Module 6: Mensuration",
        durationMinutes: 220,
        topics: [
          {
            name: "Perimeter & Area of Plane Shapes",
            subtopics: ["Triangles, parallelograms, trapeziums, rhombuses", "Arc length and sector area formulas", "Segment area calculations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["perimeter-area"],
          },
          {
            name: "Surface Area of Prisms, Cylinders & Cones",
            subtopics: ["Total and curved surface area of cylinders", "Cone slant height and curved area pi*r*l", "Frustums of cones and pyramids"],
            video: RECOVERED_MATHEMATICS_VIDEOS["surface-area"],
          },
          {
            name: "Volume of Composite Solids & Spheres",
            subtopics: ["Sphere volume 4/3 pi*r^3 and hemisphere area", "Cylinder and prism volumes", "Composite industrial tanks and containers"],
            video: RECOVERED_MATHEMATICS_VIDEOS["volume-composite-solids"],
          },
        ],
      },
      {
        id: "m-math-7",
        title: "Module 7: Statistics",
        durationMinutes: 210,
        topics: [
          {
            name: "Mean, Median & Mode of Grouped Data",
            subtopics: ["Assumed mean method", "Class midpoints and frequency multiplication", "Modal class and grouped median formula"],
            video: RECOVERED_MATHEMATICS_VIDEOS["grouped-data"],
          },
          {
            name: "Frequency Tables & Histograms",
            subtopics: ["Class boundaries and intervals", "Frequency density histograms with unequal class widths", "Frequency polygons"],
            video: RECOVERED_MATHEMATICS_VIDEOS["frequency-tables-histograms"],
          },
          {
            name: "Cumulative Frequency Curves (Ogive) & Percentiles",
            subtopics: ["Upper class boundary plotting", "Median and quartile estimation", "Interquartile range and percentiles"],
            video: RECOVERED_MATHEMATICS_VIDEOS["ogive-cumulative-frequency"],
          },
        ],
      },
      {
        id: "m-math-8",
        title: "Module 8: Probability",
        durationMinutes: 190,
        topics: [
          {
            name: "Simple Probability & Sample Spaces",
            subtopics: ["Experimental vs theoretical probability", "Sample space listing for coins, dice, and cards", "Complementary events P(A') = 1 - P(A)"],
            video: RECOVERED_MATHEMATICS_VIDEOS["simple-probability"],
          },
          {
            name: "Addition & Multiplication Rules of Probability",
            subtopics: ["Mutually exclusive events P(A or B)", "Independent events P(A and B)", "Probability with and without replacement"],
            video: RECOVERED_MATHEMATICS_VIDEOS["addition-multiplication-rules"],
          },
          {
            name: "Tree Diagrams & Mutually Exclusive Events",
            subtopics: ["Drawing multi-stage probability trees", "Branch multiplication and path addition", "Conditional probability introductory problems"],
            video: RECOVERED_MATHEMATICS_VIDEOS["tree-diagrams"],
          },
        ],
      },
      {
        id: "m-math-9",
        title: "Module 9: Coordinate Geometry",
        durationMinutes: 190,
        topics: [
          {
            name: "Cartesian Graphs, Midpoint & Distance Formula",
            subtopics: ["Distance between two points d = sqrt((x2-x1)^2 + (y2-y1)^2)", "Midpoint coordinates ((x1+x2)/2, (y1+y2)/2)", "Collinearity testing"],
            video: RECOVERED_MATHEMATICS_VIDEOS["distance-midpoint"],
          },
          {
            name: "Gradient of Straight Lines & Collinearity",
            subtopics: ["Slope m = (y2-y1)/(x2-x1)", "Positive, negative, zero, and undefined slopes", "Angle of inclination theta = arctan(m)"],
            video: RECOVERED_MATHEMATICS_VIDEOS["gradient-slope"],
          },
          {
            name: "Equations of Straight Lines (Parallel & Perpendicular)",
            subtopics: ["Point-slope form and slope-intercept form y = mx + c", "Parallel lines condition m1 = m2", "Perpendicular lines condition m1 * m2 = -1"],
            video: RECOVERED_MATHEMATICS_VIDEOS["equations-of-lines"],
          },
        ],
      },
      {
        id: "m-math-10",
        title: "Module 10: Trigonometry & Bearings",
        durationMinutes: 220,
        topics: [
          {
            name: "Sine, Cosine & Tangent Ratios (SOH CAH TOA)",
            subtopics: ["Right-angled triangle trig definitions", "Special angles 30°, 45°, 60° without calculator", "Trigonometric ratios in four quadrants"],
            video: RECOVERED_MATHEMATICS_VIDEOS["trigonometric-ratios"],
          },
          {
            name: "Angles of Elevation & Depression",
            subtopics: ["Observer horizontal reference line", "Alternate interior angles relationship", "Solving multi-triangle height problems"],
            video: RECOVERED_MATHEMATICS_VIDEOS["angles-elevation-depression"],
          },
          {
            name: "Bearings & Sine/Cosine Rules for Triangles",
            subtopics: ["Three-figure bearings (000° to 360°)", "Sine Rule a/sinA = b/sinB = c/sinC", "Cosine Rule a^2 = b^2 + c^2 - 2bc*cosA", "Area of scalene triangle 1/2*ab*sinC"],
            video: RECOVERED_MATHEMATICS_VIDEOS["bearings-distances"],
          },
        ],
      },
      {
        id: "m-math-11",
        title: "Module 11: Vectors, Transformations & Calculus",
        durationMinutes: 240,
        topics: [
          {
            name: "Vector Representation, Addition & Scalar Multiplication",
            subtopics: ["Column vectors (x, y)", "Magnitude |v| = sqrt(x^2 + y^2)", "Triangle and parallelogram laws of addition", "Unit vectors and scalar product"],
            video: RECOVERED_MATHEMATICS_VIDEOS["vectors-addition"],
          },
          {
            name: "Reflections & Rotations on the Coordinate Plane",
            subtopics: ["Reflection in x-axis, y-axis, and line y = x", "Rotations of 90°, 180°, 270° about origin", "Matrix transformation representations"],
            video: RECOVERED_MATHEMATICS_VIDEOS["reflections-rotations"],
          },
          {
            name: "Translations, Enlargement & Scale Factors",
            subtopics: ["Vector translations T = (a, b)", "Center of enlargement and scale factor k", "Area scale factor k^2"],
            video: RECOVERED_MATHEMATICS_VIDEOS["transformations-enlargement"],
          },
          {
            name: "Calculus Basics (Differentiation & Rate of Change)",
            subtopics: ["Limits and first principles", "Power rule d/dx(x^n) = n*x^(n-1)", "Tangents, normals, and turning points for JAMB"],
            video: RECOVERED_MATHEMATICS_VIDEOS["calculus-differentiation"],
          },
          {
            name: "Integral Calculus Basics",
            subtopics: ["Indefinite integration with constant C", "Definite integration and boundary conditions", "Area under curves"],
            video: RECOVERED_MATHEMATICS_VIDEOS["integral-calculus"],
          },
        ],
      },
    ],
  },
  {
    id: "english-language",
    slug: "english-language",
    name: "English Language",
    department: "core",
    shortDescription: "Comprehension passage strategies, summary writing precision, lexis & structure, and oral English phonetics.",
    fullOverview:
      "Engineered by veteran language examiners to elevate students to distinctions in WAEC Paper 1 (Lexis and Structure), Paper 2 (Essay & Summary), and Paper 3 (Test of Orals), as well as JAMB UTME Use of English (including the prescribed reading text).",
    lessonCount: 38,
    durationHours: 28,
    rating: 4.8,
    reviewCount: 98,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME", "BECE"],
    highFrequencyExamTopics: [
      "Summary Writing: Extracting Core Points Without Extraneous Details",
      "Grammatical Concord: Subject-Verb Agreement Rules",
      "Idiomatic Expressions & Phrasal Verbs",
      "Punctuation & Sentence Mechanics in Continuous Writing",
      "Vowel & Consonant Contrasts in Oral English",
      "Stress Placement (Monosyllables, Disyllables, Polysyllables)",
      "JAMB Prescribed Prose Literature Analysis",
    ],
    commonMistakes: [
      "Including illustrations, quotations, or preamble in summary answers",
      "Violating subject-verb concord with indefinite pronouns (e.g. 'each of the boys are')",
      "Dangling participles and comma splices in formal letters and essays",
      "Misidentifying silent letters in test of orals (e.g. debt, subtle, doubt)",
    ],
    pastQuestionsCount: 1100,
    cbtDrillsCount: 500,
    learningOutcomes: [
      "Score maximum points on WAEC Summary Writing by adhering to examiner marking keys",
      "Master 15 complex rules of concord and structural ambiguity",
      "Achieve 80+ in JAMB UTME Use of English",
    ],
    syllabus: [
      {
        id: "m-eng-1",
        title: "Module 1: Lexis & Grammatical Structures",
        durationMinutes: 180,
        topics: [
          { name: "Parts of Speech & Functions", subtopics: ["Nouns, pronouns, verbs, tenses and aspect", "Prepositional usage"], video: getTopicVideoBySubject("english-language", "Parts of Speech & Functions") },
          { name: "Concord Rules", subtopics: ["Proximity rule", "Notional concord", "Compound subjects"], video: getTopicVideoBySubject("english-language", "Concord Rules") },
          { name: "Clauses & Sentences", subtopics: ["Noun clauses, adjectival clauses, adverbial clauses", "Conditional sentences"], video: getTopicVideoBySubject("english-language", "Clauses & Sentences") },
        ],
      },
      {
        id: "m-eng-2",
        title: "Module 2: Comprehension & Summary Writing",
        durationMinutes: 200,
        topics: [
          { name: "Reading for Stated & Implied Meanings", subtopics: ["Inference", "Tone and mood", "Figures of speech in context"], video: getTopicVideoBySubject("english-language", "Reading for Stated & Implied Meanings") },
          { name: "Examiner-Approved Summary Technique", subtopics: ["Sentence brevity", "Eliminating examples and metaphors"], video: getTopicVideoBySubject("english-language", "Examiner-Approved Summary Technique") },
        ],
      },
      {
        id: "m-eng-3",
        title: "Module 3: Continuous Writing & Essay Composition",
        durationMinutes: 180,
        topics: [
          { name: "Formal & Informal Correspondence", subtopics: ["Salutation, body structure, formal sign-off"], video: getTopicVideoBySubject("english-language", "Formal & Informal Correspondence") },
          { name: "Argumentative & Expository Essays", subtopics: ["Thesis formulation, paragraph coherence, counterarguments"], video: getTopicVideoBySubject("english-language", "Argumentative & Expository Essays") },
        ],
      },
      {
        id: "m-eng-4",
        title: "Module 4: Oral English (Test of Orals)",
        durationMinutes: 160,
        topics: [
          { name: "Vowels & Diphthongs", subtopics: ["Short vs long vowels", "Phonetic transcriptions"], video: getTopicVideoBySubject("english-language", "Vowels & Diphthongs") },
          { name: "Consonants & Clusters", subtopics: ["Plosives, fricatives, nasals", "Silent letters"], video: getTopicVideoBySubject("english-language", "Consonants & Clusters") },
          { name: "Stress & Intonation", subtopics: ["Word stress patterns", "Sentence intonation (rising vs falling)"], video: getTopicVideoBySubject("english-language", "Stress & Intonation") },
        ],
      },
    ],
  },
  {
    id: "civic-education",
    slug: "civic-education",
    name: "Civic Education",
    department: "core",
    shortDescription: "Citizenship duties, constitution, rule of law, human rights, democracy, and community leadership.",
    fullOverview:
      "A complete guide to the Nigerian Civic Education curriculum for WAEC and NECO. Covers fundamental human rights, youth empowerment, combating drug abuse and human trafficking, and national integrity.",
    lessonCount: 26,
    durationHours: 18,
    rating: 4.8,
    reviewCount: 65,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE"],
    highFrequencyExamTopics: [
      "Values & Citizenship: Responsibilities vs Rights",
      "Rule of Law & Separation of Powers",
      "Universal Declaration of Human Rights (UDHR)",
      "Drug Abuse, Human Trafficking & National Agencies (NDLEA, NAPTIP)",
      "Electoral Systems & Pillars of Democracy",
    ],
    commonMistakes: [
      "Confusing citizenship by birth with citizenship by registration or naturalization",
      "Failing to give concrete examples of civic responsibilities in Paper 2 essay questions",
    ],
    pastQuestionsCount: 620,
    cbtDrillsCount: 220,
    learningOutcomes: [
      "Deliver structured answers earning top marks in WAEC Civic Education theory",
      "Master the constitutional framework of democratic governance in Nigeria",
    ],
    syllabus: [
      {
        id: "m-civ-1",
        title: "Module 1: Citizenship, Rights & Values",
        durationMinutes: 150,
        topics: [
          { name: "National Ethics & Integrity", subtopics: ["Self-reliance", "Civic duties", "Orderliness in society"], video: getTopicVideoBySubject("civic-education", "National Ethics & Integrity") },
          { name: "Human Rights", subtopics: ["UDHR classifications", "Limitations of human rights"], video: getTopicVideoBySubject("civic-education", "Human Rights") },
        ],
      },
      {
        id: "m-civ-2",
        title: "Module 2: Democracy & Constitutional Governance",
        durationMinutes: 160,
        topics: [
          { name: "Rule of Law", subtopics: ["Principles of justice", "Independent judiciary"], video: getTopicVideoBySubject("civic-education", "Rule of Law") },
          { name: "Democratic Institutions", subtopics: ["INEC and electoral processes", "Civil society oversight"], video: getTopicVideoBySubject("civic-education", "Democratic Institutions") },
        ],
      },
    ],
  },
  {
    id: "basic-science-ict",
    slug: "basic-science-ict",
    name: "Basic Science & ICT",
    department: "core",
    shortDescription: "Foundational sciences, digital literacy, basic electronics, and computer science applications.",
    fullOverview:
      "Bridges Junior Secondary science with introductory computing and Senior Secondary preparation. Perfectly structured for BECE and NCEE candidates.",
    lessonCount: 28,
    durationHours: 20,
    rating: 4.9,
    reviewCount: 54,
    curriculumCoverage: 100,
    officialBoards: ["BECE / Junior WAEC", "NCEE Primary 6", "NECO BECE"],
    highFrequencyExamTopics: [
      "Energy Transformations & Simple Machines",
      "Living Things & Environmental Sanitation",
      "Computer Hardware, Operating Systems & Input/Output Devices",
      "Internet Safety, Coding Fundamentals & Algorithms",
    ],
    commonMistakes: [
      "Confusing potential energy formulas with kinetic energy",
      "Misidentifying primary storage with secondary storage devices",
    ],
    pastQuestionsCount: 750,
    cbtDrillsCount: 280,
    learningOutcomes: [
      "Secure straight distinctions in Junior WAEC Basic Science & Technology",
      "Understand practical applications of computer systems and logic gates",
    ],
    syllabus: [
      {
        id: "m-sci-ict-1",
        title: "Module 1: Matter, Energy & Systems",
        durationMinutes: 160,
        topics: [
          { name: "Living & Non-Living Systems", subtopics: ["Cells, tissues, classification of organisms"], video: getTopicVideoBySubject("basic-science-ict", "Living & Non-Living Systems") },
          { name: "Energy & Work", subtopics: ["Work done, mechanical advantage of levers and pulleys"], video: getTopicVideoBySubject("basic-science-ict", "Energy & Work") },
        ],
      },
      {
        id: "m-sci-ict-2",
        title: "Module 2: ICT & Computational Thinking",
        durationMinutes: 160,
        topics: [
          { name: "Computer Architecture", subtopics: ["CPU, ALU, RAM vs ROM, peripherals"], video: getTopicVideoBySubject("basic-science-ict", "Computer Architecture") },
          { name: "Data Processing & Algorithms", subtopics: ["Flowcharts, pseudocode, basic spreadsheet formulas"], video: getTopicVideoBySubject("basic-science-ict", "Data Processing & Algorithms") },
        ],
      },
    ],
  },

  // ==========================================================================
  // SCIENCE DEPARTMENT
  // ==========================================================================
  {
    id: "physics",
    slug: "physics",
    name: "Physics",
    department: "science",
    shortDescription: "Mechanics, thermal physics, waves & optics, electricity, electromagnetism, and modern atomic physics.",
    fullOverview:
      "Rigorous physics instruction balancing theoretical derivations, formula applications, and practical laboratory techniques for WAEC Paper 1, 2, and 3 (Alternative to Practical), plus high-speed calculations for JAMB UTME.",
    lessonCount: 40,
    durationHours: 30,
    rating: 4.9,
    reviewCount: 110,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME", "Cambridge IGCSE 0625"],
    highFrequencyExamTopics: [
      "Equations of Motion, Projectiles & Circular Motion",
      "Newton's Laws of Motion & Momentum Conservation",
      "Work, Energy, Power & Machine Efficiencies",
      "Waves, Resonance & Optical Mirrors/Lenses",
      "Ohm's Law, Resistor Networks & Kirchhoff's Rules",
      "Electromagnetic Induction & Transformers",
      "Photoelectric Effect, Half-Life & Nuclear Reactions",
    ],
    commonMistakes: [
      "Confusing scalar and vector quantities in 2D momentum problems",
      "Neglecting friction or resolving forces incorrectly along inclined planes",
      "Forgetting SI unit conversions (e.g. converting grams to kg or cm to meters)",
      "Drawing light rays without propagation arrows in optics diagrams",
    ],
    pastQuestionsCount: 1150,
    cbtDrillsCount: 420,
    learningOutcomes: [
      "Effortlessly resolve vectors and solve complex projectile trajectory problems",
      "Score maximum points on WAEC practical physics graph plotting and slope determinations",
      "Solve JAMB circuit and electromagnetic problems in under 50 seconds",
    ],
    syllabus: [
      {
        id: "m-phy-1",
        title: "Module 1: Mechanics & Dynamics",
        durationMinutes: 220,
        topics: [
          { name: "Kinematics & Projectiles", subtopics: ["Uniform acceleration formulas", "Trajectory equations", "Time of flight and range"], video: getTopicVideoBySubject("physics", "Kinematics & Projectiles") },
          { name: "Dynamics & Friction", subtopics: ["Newton's three laws", "Coefficient of static vs dynamic friction"], video: getTopicVideoBySubject("physics", "Dynamics & Friction") },
          { name: "Equilibrium of Forces", subtopics: ["Lami's theorem", "Moments and couples", "Centers of gravity"], video: getTopicVideoBySubject("physics", "Equilibrium of Forces") },
        ],
      },
      {
        id: "m-phy-2",
        title: "Module 2: Thermal & Wave Physics",
        durationMinutes: 200,
        topics: [
          { name: "Heat Transfer & Gas Laws", subtopics: ["Specific heat capacity", "Latent heat", "Boyle's and Charles' laws"], video: getTopicVideoBySubject("physics", "Heat Transfer & Gas Laws") },
          { name: "Waves & Optics", subtopics: ["Refraction at curved surfaces", "Snell's law", "Sound harmonics and resonance"], video: getTopicVideoBySubject("physics", "Waves & Optics") },
        ],
      },
      {
        id: "m-phy-3",
        title: "Module 3: Electricity & Electromagnetism",
        durationMinutes: 220,
        topics: [
          { name: "Electrostatics & Current Electricity", subtopics: ["Coulomb's law", "Resistor and capacitor networks", "Internal resistance"], video: getTopicVideoBySubject("physics", "Electrostatics & Current Electricity") },
          { name: "Magnetic Fields & Induction", subtopics: ["Faraday's and Lenz's laws", "AC generators and transformers"], video: getTopicVideoBySubject("physics", "Magnetic Fields & Induction") },
        ],
      },
      {
        id: "m-phy-4",
        title: "Module 4: Atomic & Nuclear Physics",
        durationMinutes: 180,
        topics: [
          { name: "Quantum Nature of Light", subtopics: ["Photoelectric effect", "Einstein's photoelectric equation", "X-rays"], video: getTopicVideoBySubject("physics", "Quantum Nature of Light") },
          { name: "Radioactivity", subtopics: ["Alpha, beta, gamma decay", "Half-life decay equations", "Nuclear binding energy"], video: getTopicVideoBySubject("physics", "Radioactivity") },
        ],
      },
    ],
  },
  {
    id: "chemistry",
    slug: "chemistry",
    name: "Chemistry",
    department: "science",
    shortDescription: "Atomic structure, chemical bonding, stoichiometry, periodic table trends, organic chemistry, and qualitative analysis.",
    fullOverview:
      "A complete laboratory and theoretical journey through general, physical, inorganic, and organic chemistry. Features deep preparation for WAEC volumetric & qualitative analysis (salt analysis).",
    lessonCount: 38,
    durationHours: 29,
    rating: 4.8,
    reviewCount: 95,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME", "Cambridge IGCSE 0620"],
    highFrequencyExamTopics: [
      "Stoichiometry: Mole Concept, Empirical & Molecular Formulas",
      "Redox Reactions & Balancing Half-Equations",
      "Chemical Equilibrium & Le Chatelier's Principle",
      "Acids, Bases, Salts & Titration Calculations",
      "Organic Homologous Series (Alkanes to Esters)",
      "Identification of Cations & Anions (Qualitative Salt Analysis)",
      "Electrochemistry: Faraday's Laws & Electrolysis",
    ],
    commonMistakes: [
      "Failure to balance chemical equations before calculating stoichiometric ratios",
      "Misidentifying oxidation states in polyatomic ions (e.g. $Cr_2O_7^{2-}$)",
      "Writing incorrect state symbols in precipitation and acid-base equations",
    ],
    pastQuestionsCount: 1120,
    cbtDrillsCount: 410,
    learningOutcomes: [
      "Execute volumetric titration calculations to 3 decimal places without error",
      "Identify unknown salts and gas evolutions with examiner-precise observations",
      "Master organic reaction mechanisms and IUPAC naming",
    ],
    syllabus: [
      {
        id: "m-chm-1",
        title: "Module 1: Atomic Structure & Chemical Bonding",
        durationMinutes: 200,
        topics: [
          { name: "Atomic Models & Electronic Configuration", subtopics: ["s, p, d, f orbitals", "Hund's rule", "Pauli exclusion principle"], video: getTopicVideoBySubject("chemistry", "Atomic Models & Electronic Configuration") },
          { name: "Periodic Trends", subtopics: ["Electronegativity", "Ionization energy", "Atomic and ionic radius"], video: getTopicVideoBySubject("chemistry", "Periodic Trends") },
          { name: "Chemical Bonds", subtopics: ["Electrovalent, covalent, coordinate, and metallic bonding"], video: getTopicVideoBySubject("chemistry", "Chemical Bonds") },
        ],
      },
      {
        id: "m-chm-2",
        title: "Module 2: Stoichiometry & Chemical Energetics",
        durationMinutes: 210,
        topics: [
          { name: "The Mole & Volumetric Calculations", subtopics: ["Molarity, standard solutions, percentage purity"], video: getTopicVideoBySubject("chemistry", "The Mole & Volumetric Calculations") },
          { name: "Thermodynamics & Rates of Reaction", subtopics: ["Enthalpy changes", "Activation energy", "Catalysts"], video: getTopicVideoBySubject("chemistry", "Thermodynamics & Rates of Reaction") },
        ],
      },
      {
        id: "m-chm-3",
        title: "Module 3: Organic Chemistry & Polymers",
        durationMinutes: 230,
        topics: [
          { name: "Hydrocarbons", subtopics: ["Fractional distillation of petroleum", "Alkanes, alkenes, alkynes"], video: getTopicVideoBySubject("chemistry", "Hydrocarbons") },
          { name: "Oxygenated Compounds", subtopics: ["Alkanols, alkanoic acids, esters, fats and oils", "Saponification"], video: getTopicVideoBySubject("chemistry", "Oxygenated Compounds") },
        ],
      },
    ],
  },
  {
    id: "biology",
    slug: "biology",
    name: "Biology",
    department: "science",
    shortDescription: "Cellular biology, physiology, human anatomy, genetics, heredity, ecology, and evolutionary science.",
    fullOverview:
      "Deeply illustrated biological study covering cellular organelles, plant physiology (photosynthesis, transpiration), animal systems (circulatory, nervous, endocrine), Mendelian genetics, and ecological adaptations.",
    lessonCount: 36,
    durationHours: 26,
    rating: 4.8,
    reviewCount: 88,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Mendelian Genetics & Monohybrid/Dihybrid Crosses",
      "Blood Transfusion, Rh Factor & Sex-Linked Traits (Haemophilia, Color Blindness)",
      "Photosynthesis: Light vs Dark Reactions & Chloroplast Structure",
      "Human Circulatory & Excretory Systems (Heart & Kidney)",
      "Ecological Food Webs, Pyramids of Energy & Nitrogen Cycle",
    ],
    commonMistakes: [
      "Spelling biological terms and scientific names without underlining genus and species",
      "Drawing biological diagrams without title, magnification, or clear continuous lines",
      "Confusing osmosis with diffusion and active transport",
    ],
    pastQuestionsCount: 980,
    cbtDrillsCount: 390,
    learningOutcomes: [
      "Produce examination-grade biological drawings adhering strictly to WAEC guidelines",
      "Solve genetic inheritance and probability questions flawlessly",
    ],
    syllabus: [
      {
        id: "m-bio-1",
        title: "Module 1: Cell Physiology & Organisation of Life",
        durationMinutes: 180,
        topics: [
          { name: "Cellular Structure", subtopics: ["Organelle functions", "Plant vs animal cell differences", "Microscopy"], video: getTopicVideoBySubject("biology", "Cellular Structure") },
          { name: "Transport Mechanisms", subtopics: ["Osmosis, diffusion, plasmolysis, turgidity"], video: getTopicVideoBySubject("biology", "Transport Mechanisms") },
        ],
      },
      {
        id: "m-bio-2",
        title: "Module 2: Genetics, Heredity & Evolution",
        durationMinutes: 200,
        topics: [
          { name: "Mendelian Genetics", subtopics: ["Punnett squares, genotype vs phenotype, test crosses"], video: getTopicVideoBySubject("biology", "Mendelian Genetics") },
          { name: "Chromosomes & DNA", subtopics: ["Replication, mutations, sickle cell anaemia trait"], video: getTopicVideoBySubject("biology", "Chromosomes & DNA") },
        ],
      },
    ],
  },
  {
    id: "further-mathematics",
    slug: "further-mathematics",
    name: "Further Mathematics",
    department: "science",
    shortDescription: "Advanced algebra, polynomial theory, 3D vectors, matrices, advanced calculus, statistics, and mechanics.",
    fullOverview:
      "Designed for STEM leaders and engineering aspirants. Delivers masterclasses in pure mathematics, applied statistics, and Newtonian mechanics with rigorous examiner solutions.",
    lessonCount: 44,
    durationHours: 35,
    rating: 5.0,
    reviewCount: 76,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "Cambridge Additional Mathematics 0606"],
    highFrequencyExamTopics: [
      "Roots of Polynomials & De Moivre's Complex Numbers",
      "Integration by Parts, Substitution & Partial Fractions",
      "Vector Cross Product & 3D Planes",
      "Probability Distributions (Binomial, Poisson, Normal)",
      "Mechanics: Coplanar Forces, Friction on Inclines & Projectiles",
    ],
    commonMistakes: [
      "Forgetting integration constants ($+C$) in indefinite integration",
      "Misidentifying matrix non-commutativity ($AB \\neq BA$)",
    ],
    pastQuestionsCount: 880,
    cbtDrillsCount: 310,
    learningOutcomes: [
      "Score distinctions in WAEC Further Mathematics Papers 1 & 2",
      "Prepare for university-level engineering analysis",
    ],
    syllabus: [
      {
        id: "m-fmath-1",
        title: "Module 1: Pure Mathematics & Advanced Calculus",
        durationMinutes: 240,
        topics: [
          { name: "Advanced Differentiation", subtopics: ["Chain, product, quotient rules", "Implicit differentiation"], video: getTopicVideoBySubject("further-mathematics", "Advanced Differentiation") },
          { name: "Advanced Integration", subtopics: ["Integration by parts", "Definite integral applications to volumes of revolution"], video: getTopicVideoBySubject("further-mathematics", "Advanced Integration") },
        ],
      },
      {
        id: "m-fmath-2",
        title: "Module 2: Mechanics & Statistics",
        durationMinutes: 220,
        topics: [
          { name: "Dynamics & Momentum", subtopics: ["Impulse, elastic and inelastic collisions"], video: getTopicVideoBySubject("further-mathematics", "Dynamics & Momentum") },
          { name: "Statistical Distributions", subtopics: ["Binomial probabilities", "Normal distribution curves"], video: getTopicVideoBySubject("further-mathematics", "Statistical Distributions") },
        ],
      },
    ],
  },
  {
    id: "agricultural-science",
    slug: "agricultural-science",
    name: "Agricultural Science",
    department: "science",
    shortDescription: "Crop production, soil science, animal husbandry, farm mechanization, agricultural economics, and agribusiness.",
    fullOverview:
      "Comprehensive syllabus covering agronomy, veterinary health, soil nutrient management, farm management economics, and modern sustainable practices for WAEC and NECO.",
    lessonCount: 30,
    durationHours: 22,
    rating: 4.8,
    reviewCount: 61,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE"],
    highFrequencyExamTopics: [
      "Soil Fertility, pH, Fertilizer Formulations & Erosion Control",
      "Crop Husbandry (Cereals, Legumes, Tubers & Cash Crops)",
      "Animal Nutrition & Digestive Anatomy (Ruminant vs Non-Ruminant)",
      "Agricultural Extension & Cooperatives",
    ],
    commonMistakes: [
      "Confusing signs of nitrogen deficiency with potassium or phosphorus deficiency",
    ],
    pastQuestionsCount: 720,
    cbtDrillsCount: 260,
    learningOutcomes: [
      "Master agricultural theory and practical specimen identification for WASSCE",
    ],
    syllabus: [
      {
        id: "m-agr-1",
        title: "Module 1: Soil Science & Agronomy",
        durationMinutes: 170,
        topics: [
          { name: "Soil Chemistry & Physics", subtopics: ["Soil texture, profile, nutrient cycles"], video: getTopicVideoBySubject("agricultural-science", "Soil Chemistry & Physics") },
          { name: "Crop Pathology", subtopics: ["Fungal, bacterial, and viral diseases of crops"], video: getTopicVideoBySubject("agricultural-science", "Crop Pathology") },
        ],
      },
    ],
  },

  // ==========================================================================
  // COMMERCIAL DEPARTMENT
  // ==========================================================================
  {
    id: "financial-accounting",
    slug: "financial-accounting",
    name: "Financial Accounting",
    department: "commercial",
    shortDescription: "Double-entry bookkeeping, final accounts, ledger posting, bank reconciliations, and manufacturing accounts.",
    fullOverview:
      "A complete professional-standard accounting course for senior secondary students. Covers trial balances, balance sheet adjustments (depreciation, bad debts, accruals), partnership accounts, and company financial statements.",
    lessonCount: 36,
    durationHours: 27,
    rating: 4.9,
    reviewCount: 82,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE"],
    highFrequencyExamTopics: [
      "Bank Reconciliation Statements & Adjusted Cash Book",
      "Correction of Errors & Suspense Accounts",
      "Financial Statements of Sole Traders with Adjustments",
      "Partnership Accounts: Profit Sharing, Goodwill & Dissolution",
      "Company Accounts: Share Capital & Debentures",
      "Incomplete Records & Single Entry Systems",
    ],
    commonMistakes: [
      "Entering debits and credits on the wrong ledger side",
      "Failing to adjust closing inventory in both trading account and current assets",
      "Treating unpresented cheques as uncredited lodgments in bank reconciliation",
    ],
    pastQuestionsCount: 850,
    cbtDrillsCount: 290,
    learningOutcomes: [
      "Balance complex trial balances and post suspense account adjustments cleanly",
      "Format balance sheets and income statements to current IFRS standards for WAEC",
    ],
    syllabus: [
      {
        id: "m-acc-1",
        title: "Module 1: Principles of Double Entry & Ledgers",
        durationMinutes: 190,
        topics: [
          { name: "Books of Original Entry", subtopics: ["Sales, purchases, returns journals, cash books"], video: getTopicVideoBySubject("financial-accounting", "Books of Original Entry") },
          { name: "Trial Balance & Errors", subtopics: ["Errors affecting vs not affecting trial balance agreement"], video: getTopicVideoBySubject("financial-accounting", "Trial Balance & Errors") },
        ],
      },
      {
        id: "m-acc-2",
        title: "Module 2: Final Accounts & Specialized Accounts",
        durationMinutes: 210,
        topics: [
          { name: "Trading, Profit & Loss Accounts", subtopics: ["Depreciation methods", "Provision for doubtful debts"], video: getTopicVideoBySubject("financial-accounting", "Trading, Profit & Loss Accounts") },
          { name: "Partnership & Company Statements", subtopics: ["Capital and current accounts", "Appropriation accounts"], video: getTopicVideoBySubject("financial-accounting", "Partnership & Company Statements") },
        ],
      },
    ],
  },
  {
    id: "commerce",
    slug: "commerce",
    name: "Commerce",
    department: "commercial",
    shortDescription: "Domestic and international trade, transport, warehousing, banking, insurance, and consumer protection.",
    fullOverview:
      "Explores modern commercial transactions, supply chains, trade documents, stock exchanges, and e-commerce developments tailored for WAEC, NECO, and JAMB.",
    lessonCount: 32,
    durationHours: 24,
    rating: 4.8,
    reviewCount: 71,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Aids to Trade: Banking, Insurance, Transport & Advertising",
      "Wholesale & Retail Trade: Functions and Intermediaries",
      "International Trade: Balance of Payments & Exchange Rates",
      "Business Ownership: Sole Proprietorships vs Public Limited Companies",
    ],
    commonMistakes: [
      "Confusing bill of lading with charter party in maritime transport",
      "Conflating insurable interest with indemnity principles",
    ],
    pastQuestionsCount: 790,
    cbtDrillsCount: 320,
    learningOutcomes: [
      "Explain international trade barriers and commercial banking instruments clearly",
    ],
    syllabus: [
      {
        id: "m-com-1",
        title: "Module 1: Foundations of Trade & Aids to Trade",
        durationMinutes: 180,
        topics: [
          { name: "Commercial Enterprises", subtopics: ["Types of business entities", "Privatization and commercialization"], video: getTopicVideoBySubject("commerce", "Commercial Enterprises") },
          { name: "Financial Intermediation", subtopics: ["Central Bank functions", "Commercial banking instruments"], video: getTopicVideoBySubject("commerce", "Financial Intermediation") },
        ],
      },
    ],
  },
  {
    id: "economics",
    slug: "economics",
    name: "Economics",
    department: "commercial",
    shortDescription: "Microeconomic principles, market equilibrium, macroeconomics, fiscal policy, national income, and development.",
    fullOverview:
      "Master demand and supply elasticity, production theory, market structures (perfect competition vs monopoly), inflation, national income accounting, and monetary policy.",
    lessonCount: 38,
    durationHours: 28,
    rating: 4.9,
    reviewCount: 94,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Price Elasticity of Demand & Supply (Calculations & Curves)",
      "Production Possibility Curve (PPC) & Opportunity Cost",
      "National Income Accounting (GDP, GNP, NNP & Output/Income Methods)",
      "Monetary & Fiscal Policies for Combating Inflation",
      "International Trade & Comparative Advantage Theory",
    ],
    commonMistakes: [
      "Confusing a change in demand with a change in quantity demanded",
      "Misinterpreting consumer surplus graphically",
    ],
    pastQuestionsCount: 1050,
    cbtDrillsCount: 400,
    learningOutcomes: [
      "Accurately calculate elasticity coefficients and draw economic equilibrium curves",
      "Secure top scores in WAEC economics data response and essay questions",
    ],
    syllabus: [
      {
        id: "m-eco-1",
        title: "Module 1: Microeconomic Foundations",
        durationMinutes: 200,
        topics: [
          { name: "Demand & Supply Analysis", subtopics: ["Equilibrium price determination", "Tax and subsidy effects"], video: getTopicVideoBySubject("economics", "Demand & Supply Analysis") },
          { name: "Consumer & Production Theory", subtopics: ["Utility maximization", "Diminishing returns"], video: getTopicVideoBySubject("economics", "Consumer & Production Theory") },
        ],
      },
      {
        id: "m-eco-2",
        title: "Module 2: Macroeconomics & Public Finance",
        durationMinutes: 210,
        topics: [
          { name: "National Income & Money", subtopics: ["Circular flow of income", "Quantity theory of money"], video: getTopicVideoBySubject("economics", "National Income & Money") },
          { name: "Fiscal & Monetary Policy", subtopics: ["Government budgets", "Treasury bills and reserve ratios"], video: getTopicVideoBySubject("economics", "Fiscal & Monetary Policy") },
        ],
      },
    ],
  },
  {
    id: "business-studies-office-practice",
    slug: "business-studies-office-practice",
    name: "Business Studies & Office Practice",
    department: "commercial",
    shortDescription: "Office equipment, communication channels, business correspondence, record filing, and clerical duties.",
    fullOverview:
      "Ideal for Junior Secondary BECE candidates and commercial foundation students. Covers practical office procedures, business ethics, and keyboarding skills.",
    lessonCount: 26,
    durationHours: 19,
    rating: 4.8,
    reviewCount: 52,
    curriculumCoverage: 100,
    officialBoards: ["BECE / Junior WAEC", "NECO BECE"],
    highFrequencyExamTopics: [
      "Filing Systems & Office Document Security",
      "Business Documents: Invoices, Receipts & Credit Notes",
      "Telephone Etiquette & Communication Protocols",
    ],
    commonMistakes: [
      "Confusing centralized filing with decentralized filing benefits",
    ],
    pastQuestionsCount: 640,
    cbtDrillsCount: 230,
    learningOutcomes: [
      "Understand modern business administration and clerical office operations",
    ],
    syllabus: [
      {
        id: "m-bus-1",
        title: "Module 1: The Modern Office Environment",
        durationMinutes: 160,
        topics: [
          { name: "Office Departments & Layouts", subtopics: ["Open plan vs closed offices", "Clerical staff roles"], video: getTopicVideoBySubject("business-studies-office-practice", "Office Departments & Layouts") },
          { name: "Information Management", subtopics: ["Indexing, electronic filing, data confidentiality"], video: getTopicVideoBySubject("business-studies-office-practice", "Information Management") },
        ],
      },
    ],
  },

  // ==========================================================================
  // ARTS / HUMANITIES DEPARTMENT
  // ==========================================================================
  {
    id: "literature-in-english",
    slug: "literature-in-english",
    name: "Literature-in-English",
    department: "arts",
    shortDescription: "African and non-African drama, poetry, and prose analysis, literary devices, characterization, and themes.",
    fullOverview:
      "Detailed literary dissection of WAEC and NECO prescribed texts across African drama, non-African drama, African poetry, and non-African poetry. Teaches context analysis and essay structure.",
    lessonCount: 36,
    durationHours: 26,
    rating: 4.9,
    reviewCount: 78,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Thematic Explorations & Dramatic Techniques in Prescribed Texts",
      "Poetic Devices: Metaphor, Simile, Personification, Enjambment, Tone",
      "Character Flaws (Hamartia) & Tragic Irony in Shakespearean Drama",
      "Cultural Context & Colonial Conflict in African Prose",
    ],
    commonMistakes: [
      "Narrating the plot instead of critically analyzing themes and literary devices",
      "Misidentifying poetic meters and verse forms",
    ],
    pastQuestionsCount: 820,
    cbtDrillsCount: 340,
    learningOutcomes: [
      "Write high-scoring literary essays demonstrating sharp critical insight and textual quotation",
    ],
    syllabus: [
      {
        id: "m-lit-1",
        title: "Module 1: Drama & Dramatic Techniques",
        durationMinutes: 190,
        topics: [
          { name: "African Prescribed Drama", subtopics: ["Thematic concerns", "Stagecraft and character analysis"], video: getTopicVideoBySubject("literature-in-english", "African Prescribed Drama") },
          { name: "Non-African Drama", subtopics: ["Tragic structure", "Soliloquy and dramatic irony"], video: getTopicVideoBySubject("literature-in-english", "Non-African Drama") },
        ],
      },
      {
        id: "m-lit-2",
        title: "Module 2: Poetry & Literary Devices",
        durationMinutes: 190,
        topics: [
          { name: "African Poetry Anthology", subtopics: ["Rhyme schemes, imagery, socio-political commentary"], video: getTopicVideoBySubject("literature-in-english", "African Poetry Anthology") },
          { name: "Non-African Poetry", subtopics: ["Sonnets, odes, elegies, stylistic evaluation"], video: getTopicVideoBySubject("literature-in-english", "Non-African Poetry") },
        ],
      },
    ],
  },
  {
    id: "government",
    slug: "government",
    name: "Government",
    department: "arts",
    shortDescription: "Political systems, constitutional history of Nigeria, public administration, and international organizations.",
    fullOverview:
      "Covers basic political concepts (sovereignty, rule of law, ideology), pre-colonial Nigerian administrative systems (Hausa-Fulani, Yoruba, Igbo), colonial constitutional developments, and Nigerian foreign policy.",
    lessonCount: 34,
    durationHours: 25,
    rating: 4.8,
    reviewCount: 80,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Pre-Colonial Political Systems in Nigeria (Emirate, Oyo, Acephalous)",
      "Constitutional Developments: Clifford (1922) to 1999 Constitution",
      "Federalism in Nigeria: Structure, Revenue Allocation & Issues",
      "ECOWAS, African Union (AU), OPEC & UN Peacekeeping Roles",
    ],
    commonMistakes: [
      "Confusing the features of parliamentary and presidential systems of government",
      "Forgetting the key defects and milestones of each historical Nigerian constitution",
    ],
    pastQuestionsCount: 920,
    cbtDrillsCount: 380,
    learningOutcomes: [
      "Master Nigerian constitutional timeline and governance concepts for WAEC & JAMB",
    ],
    syllabus: [
      {
        id: "m-gov-1",
        title: "Module 1: Political Theories & Systems",
        durationMinutes: 180,
        topics: [
          { name: "Basic Political Concepts", subtopics: ["Statehood, sovereignty, citizenship, political socialization"], video: getTopicVideoBySubject("government", "Basic Political Concepts") },
          { name: "Government Structures", subtopics: ["Unitary, federal, confederal", "Parliamentary vs presidential"], video: getTopicVideoBySubject("government", "Government Structures") },
        ],
      },
      {
        id: "m-gov-2",
        title: "Module 2: Nigerian Political History & Foreign Policy",
        durationMinutes: 200,
        topics: [
          { name: "Colonial & Constitutional Milestones", subtopics: ["Richards, Macpherson, Lyttelton constitutions"], video: getTopicVideoBySubject("government", "Colonial & Constitutional Milestones") },
          { name: "Regional & Global Organizations", subtopics: ["ECOWAS, Commonwealth, African Union"], video: getTopicVideoBySubject("government", "Regional & Global Organizations") },
        ],
      },
    ],
  },
  {
    id: "crk-irk",
    slug: "crk-irk",
    name: "CRK / IRK",
    department: "arts",
    shortDescription: "Christian Religious Knowledge & Islamic Religious Knowledge moral teachings, sacred history, and doctrines.",
    fullOverview:
      "Comprehensive theological and historical curriculum covering biblical narratives and prophetic teachings, moral ethics, and social responsibilities aligned to WAEC and NECO standards.",
    lessonCount: 28,
    durationHours: 20,
    rating: 4.8,
    reviewCount: 59,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE"],
    highFrequencyExamTopics: [
      "Sovereignty & Fatherhood of God / Tawheed Principles",
      "Leadership of the Prophets & Moral Decisions",
      "Faith in Times of Trial & Community Harmony",
    ],
    commonMistakes: [
      "Failing to correlate historical religious passages with modern moral application",
    ],
    pastQuestionsCount: 680,
    cbtDrillsCount: 240,
    learningOutcomes: [
      "Structure theological essays with accurate scriptural references and moral synthesis",
    ],
    syllabus: [
      {
        id: "m-rel-1",
        title: "Module 1: Sacred History & Doctrine",
        durationMinutes: 160,
        topics: [
          { name: "Foundational Texts & Context", subtopics: ["Historical settings of the revelations"], video: getTopicVideoBySubject("crk-irk", "Foundational Texts & Context") },
          { name: "Moral Teachings & Society", subtopics: ["Honesty, justice, peace-building, forgiveness"], video: getTopicVideoBySubject("crk-irk", "Moral Teachings & Society") },
        ],
      },
    ],
  },
  {
    id: "history",
    slug: "history",
    name: "History",
    department: "arts",
    shortDescription: "Pre-colonial empires, transatlantic slave trade, colonial era, nationalism, and post-independence Africa.",
    fullOverview:
      "Rich historical narrative covering the Kanem-Bornu Empire, Benin Kingdom, Oyo Empire, the Sokoto Caliphate, European contact, the scramble for Africa, and post-colonial nation building.",
    lessonCount: 28,
    durationHours: 21,
    rating: 4.9,
    reviewCount: 48,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE"],
    highFrequencyExamTopics: [
      "Socio-Political Structures of Ancient West African Empires",
      "European Incursion, Berlin Conference (1884-1885) & Colonial Rule",
      "Nationalist Movements & Pan-Africanism",
    ],
    commonMistakes: [
      "Anachronisms in chronology of pre-colonial empires",
    ],
    pastQuestionsCount: 620,
    cbtDrillsCount: 210,
    learningOutcomes: [
      "Demonstrate comprehensive mastery of West African and global history",
    ],
    syllabus: [
      {
        id: "m-his-1",
        title: "Module 1: Ancient West African Civilizations",
        durationMinutes: 170,
        topics: [
          { name: "Sudanic & Forest Empires", subtopics: ["Ghana, Mali, Songhai, Benin, Oyo"], video: getTopicVideoBySubject("history", "Sudanic & Forest Empires") },
          { name: "Trade Networks", subtopics: ["Trans-Saharan trade and cultural exchange"], video: getTopicVideoBySubject("history", "Trade Networks") },
        ],
      },
    ],
  },
  {
    id: "geography",
    slug: "geography",
    name: "Geography",
    department: "arts",
    shortDescription: "Physical landforms, weather & climate, human population, settlement patterns, map work, and GIS.",
    fullOverview:
      "Rigorous physical, human, and regional geography preparation. Special focus on WAEC Paper 1 (Practical & Physical Geography) covering topographical map reading, contours, cross-sections, and climate graphs.",
    lessonCount: 34,
    durationHours: 25,
    rating: 4.8,
    reviewCount: 72,
    curriculumCoverage: 100,
    officialBoards: ["WAEC WASSCE", "NECO SSCE", "JAMB UTME"],
    highFrequencyExamTopics: [
      "Topographical Map Reading: Scale, Gradient, Contours & Intervisibility",
      "Earth's Structure, Plate Tectonics & Volcanism",
      "Atmospheric Circulation, Precipitation & Koppen Climate Types",
      "Settlement Patterns, Urbanization & Population Geography of Nigeria",
    ],
    commonMistakes: [
      "Calculating gradient without converting vertical interval and horizontal equivalent to the same units",
      "Drawing inaccurate cross-section profiles without labeling vertical exaggeration",
    ],
    pastQuestionsCount: 880,
    cbtDrillsCount: 330,
    learningOutcomes: [
      "Extract full marks on WAEC topographical map reduction, enlargement, and cross-section drawings",
      "Master climate types and geological weathering processes",
    ],
    syllabus: [
      {
        id: "m-geo-1",
        title: "Module 1: Map Reading & Practical Geography",
        durationMinutes: 190,
        topics: [
          { name: "Topographical Maps", subtopics: ["Grid references, scale conversions, measuring straight and curved distances"], video: getTopicVideoBySubject("geography", "Topographical Maps") },
          { name: "Contour Interpretation", subtopics: ["Spurs, valleys, ridges, knolls, vertical interval"], video: getTopicVideoBySubject("geography", "Contour Interpretation") },
        ],
      },
      {
        id: "m-geo-2",
        title: "Module 2: Physical & Human Geography",
        durationMinutes: 190,
        topics: [
          { name: "Geomorphology", subtopics: ["Weathering, river erosion and deposition, desert landforms"], video: getTopicVideoBySubject("geography", "Geomorphology") },
          { name: "Human Settlements & Resources", subtopics: ["Rural-urban migration, mineral resources of Nigeria"], video: getTopicVideoBySubject("geography", "Human Settlements & Resources") },
        ],
      },
    ],
  },
];

/**
 * Helper to fetch a subject by slug or ID
 */
export function getSubjectBySlug(slug: string): SubjectCatalogueItem | undefined {
  return CATALOGUE_SUBJECTS.find((s) => s.slug === slug || s.id === slug);
}

/**
 * Helper to get all subjects grouped by department
 */
export function getSubjectsByDepartment(departmentId: DepartmentId): SubjectCatalogueItem[] {
  return CATALOGUE_SUBJECTS.filter((s) => s.department === departmentId);
}

