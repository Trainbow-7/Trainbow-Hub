export type TrackId =
  | "primary-ncee"
  | "jss-bece"
  | "waec-ssce"
  | "jamb-utme"
  | "cambridge-igcse";

export interface ExamTrackConfig {
  id: TrackId;
  name: string;
  shortName: string;
  badge: string;
  targetExam: string;
  description: string;
}

export const EXAM_TRACKS: Record<TrackId, ExamTrackConfig> = {
  "waec-ssce": {
    id: "waec-ssce",
    name: "SS 1-3 (WAEC / NECO / SSCE)",
    shortName: "WAEC / SSCE",
    badge: "Senior Secondary",
    targetExam: "WASSCE & NECO Senior School Certificate",
    description: "In-depth theory and objective exam mastery with full step-by-step working marks.",
  },
  "jamb-utme": {
    id: "jamb-utme",
    name: "JAMB UTME CBT Prep",
    shortName: "JAMB UTME",
    badge: "Tertiary Matriculation",
    targetExam: "Joint Admissions and Matriculation Board UTME",
    description: "Speed calculation techniques, option elimination, and high-frequency CBT question banks.",
  },
  "cambridge-igcse": {
    id: "cambridge-igcse",
    name: "Cambridge IGCSE (0580 / Extended)",
    shortName: "Cambridge IGCSE",
    badge: "International",
    targetExam: "Cambridge Assessment International Education (CAIE)",
    description: "Extended curriculum with calculator strategies, structured papers, and mark schemes.",
  },
  "jss-bece": {
    id: "jss-bece",
    name: "JSS 1-3 (BECE / Junior WAEC)",
    shortName: "JSS / BECE",
    badge: "Junior Secondary",
    targetExam: "Basic Education Certificate Examination (BECE)",
    description: "Fundamental grounding in foundational concepts transitioning to senior secondary.",
  },
  "primary-ncee": {
    id: "primary-ncee",
    name: "Primary 1-6 (NCEE / Common Entrance)",
    shortName: "Primary NCEE",
    badge: "Primary / Common Entrance",
    targetExam: "National Common Entrance Examination (Federal Unity Colleges)",
    description: "Quantitative reasoning, foundational numeracy, and problem-solving aptitude.",
  },
};

export interface SubjectPriceConfig {
  subjectId: string;
  trackPrices: Record<TrackId, number>; // Price in Naira (₦)
  isPlaceholder?: boolean;
}

/**
 * ============================================================================
 * PRICE MATRIX CONFIGURATION
 * ============================================================================
 * All prices are stored in Nigerian Naira (₦).
 *
 * ANCHOR PRICES FOR MATHEMATICS (from specification):
 * - Primary 1-6 (NCEE): ₦12,000
 * - JSS 1-3 (BECE):     ₦15,000
 * - JAMB UTME:          ₦18,000
 * - SS 1-3 (WAEC/SSCE): ₦40,000
 * - Cambridge IGCSE:    ₦30,000
 *
 * OTHER SUBJECT PRICES ARE SENSIBLE PLACEHOLDERS (marked with /* PLACEHOLDER * /)
 * Feel free to modify the numbers below at any time.
 * ============================================================================
 */
export const SUBJECT_PRICES: Record<string, SubjectPriceConfig> = {
  // CORE / GENERAL
  mathematics: {
    subjectId: "mathematics",
    trackPrices: {
      "primary-ncee": 12000,   // ANCHOR: Primary ₦12,000
      "jss-bece": 15000,       // ANCHOR: JSS ₦15,000
      "waec-ssce": 40000,      // ANCHOR: WAEC/SSCE ₦40,000
      "jamb-utme": 18000,      // ANCHOR: JAMB UTME ₦18,000
      "cambridge-igcse": 30000,// ANCHOR: Cambridge IGCSE ₦30,000
    },
    isPlaceholder: false,
  },
  "english-language": {
    subjectId: "english-language",
    trackPrices: {
      "primary-ncee": 10000,   /* PLACEHOLDER */
      "jss-bece": 14000,       /* PLACEHOLDER */
      "waec-ssce": 35000,      /* PLACEHOLDER */
      "jamb-utme": 16000,      /* PLACEHOLDER */
      "cambridge-igcse": 28000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "civic-education": {
    subjectId: "civic-education",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 10000,       /* PLACEHOLDER */
      "waec-ssce": 25000,      /* PLACEHOLDER */
      "jamb-utme": 12000,      /* PLACEHOLDER */
      "cambridge-igcse": 22000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "basic-science-ict": {
    subjectId: "basic-science-ict",
    trackPrices: {
      "primary-ncee": 9000,    /* PLACEHOLDER */
      "jss-bece": 12000,       /* PLACEHOLDER */
      "waec-ssce": 28000,      /* PLACEHOLDER */
      "jamb-utme": 14000,      /* PLACEHOLDER */
      "cambridge-igcse": 25000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },

  // SCIENCE DEPARTMENT
  physics: {
    subjectId: "physics",
    trackPrices: {
      "primary-ncee": 10000,   /* PLACEHOLDER */
      "jss-bece": 14000,       /* PLACEHOLDER */
      "waec-ssce": 42000,      /* PLACEHOLDER */
      "jamb-utme": 19000,      /* PLACEHOLDER */
      "cambridge-igcse": 32000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  chemistry: {
    subjectId: "chemistry",
    trackPrices: {
      "primary-ncee": 10000,   /* PLACEHOLDER */
      "jss-bece": 14000,       /* PLACEHOLDER */
      "waec-ssce": 42000,      /* PLACEHOLDER */
      "jamb-utme": 19000,      /* PLACEHOLDER */
      "cambridge-igcse": 32000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  biology: {
    subjectId: "biology",
    trackPrices: {
      "primary-ncee": 9000,    /* PLACEHOLDER */
      "jss-bece": 13000,       /* PLACEHOLDER */
      "waec-ssce": 36000,      /* PLACEHOLDER */
      "jamb-utme": 17000,      /* PLACEHOLDER */
      "cambridge-igcse": 29000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "further-mathematics": {
    subjectId: "further-mathematics",
    trackPrices: {
      "primary-ncee": 11000,   /* PLACEHOLDER */
      "jss-bece": 16000,       /* PLACEHOLDER */
      "waec-ssce": 45000,      /* PLACEHOLDER */
      "jamb-utme": 20000,      /* PLACEHOLDER */
      "cambridge-igcse": 35000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "agricultural-science": {
    subjectId: "agricultural-science",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 11000,       /* PLACEHOLDER */
      "waec-ssce": 30000,      /* PLACEHOLDER */
      "jamb-utme": 15000,      /* PLACEHOLDER */
      "cambridge-igcse": 24000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },

  // COMMERCIAL DEPARTMENT
  "financial-accounting": {
    subjectId: "financial-accounting",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 12000,       /* PLACEHOLDER */
      "waec-ssce": 38000,      /* PLACEHOLDER */
      "jamb-utme": 18000,      /* PLACEHOLDER */
      "cambridge-igcse": 30000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  commerce: {
    subjectId: "commerce",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 11000,       /* PLACEHOLDER */
      "waec-ssce": 32000,      /* PLACEHOLDER */
      "jamb-utme": 15000,      /* PLACEHOLDER */
      "cambridge-igcse": 26000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  economics: {
    subjectId: "economics",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 12000,       /* PLACEHOLDER */
      "waec-ssce": 35000,      /* PLACEHOLDER */
      "jamb-utme": 17000,      /* PLACEHOLDER */
      "cambridge-igcse": 28000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "business-studies-office-practice": {
    subjectId: "business-studies-office-practice",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 11000,       /* PLACEHOLDER */
      "waec-ssce": 30000,      /* PLACEHOLDER */
      "jamb-utme": 14000,      /* PLACEHOLDER */
      "cambridge-igcse": 25000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },

  // ARTS / HUMANITIES DEPARTMENT
  "literature-in-english": {
    subjectId: "literature-in-english",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 12000,       /* PLACEHOLDER */
      "waec-ssce": 34000,      /* PLACEHOLDER */
      "jamb-utme": 16000,      /* PLACEHOLDER */
      "cambridge-igcse": 28000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  government: {
    subjectId: "government",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 11000,       /* PLACEHOLDER */
      "waec-ssce": 32000,      /* PLACEHOLDER */
      "jamb-utme": 16000,      /* PLACEHOLDER */
      "cambridge-igcse": 26000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  "crk-irk": {
    subjectId: "crk-irk",
    trackPrices: {
      "primary-ncee": 7000,    /* PLACEHOLDER */
      "jss-bece": 10000,       /* PLACEHOLDER */
      "waec-ssce": 26000,      /* PLACEHOLDER */
      "jamb-utme": 13000,      /* PLACEHOLDER */
      "cambridge-igcse": 22000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  history: {
    subjectId: "history",
    trackPrices: {
      "primary-ncee": 7000,    /* PLACEHOLDER */
      "jss-bece": 10000,       /* PLACEHOLDER */
      "waec-ssce": 28000,      /* PLACEHOLDER */
      "jamb-utme": 14000,      /* PLACEHOLDER */
      "cambridge-igcse": 24000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
  geography: {
    subjectId: "geography",
    trackPrices: {
      "primary-ncee": 8000,    /* PLACEHOLDER */
      "jss-bece": 12000,       /* PLACEHOLDER */
      "waec-ssce": 34000,      /* PLACEHOLDER */
      "jamb-utme": 16000,      /* PLACEHOLDER */
      "cambridge-igcse": 28000,/* PLACEHOLDER */
    },
    isPlaceholder: true,
  },
};

/**
 * Format numbers into standard Nigerian Naira with thousands separator (e.g. ₦40,000).
 */
export function formatNaira(amountInNaira: number): string {
  return `₦${amountInNaira.toLocaleString("en-NG")}`;
}

export const BUNDLE_DISCOUNTS = {
  SINGLE_SUBJECT: 0,
  DEPARTMENT_BUNDLE: 0.15, // 15% discount for 3+ subjects or full department
  FULL_PACKAGE_BUNDLE: 0.25, // 25% discount for 5+ subjects or full track package
};

export interface BundleCalculationResult {
  selectedCount: number;
  subtotal: number;
  discountRate: number;
  discountAmount: number;
  finalTotal: number;
  discountLabel: string | null;
}

/**
 * Live calculate subtotal, bundle discounts, and final total based on ticked subjects and track.
 */
export function calculateBundleTotal(
  subjectIds: string[],
  trackId: TrackId
): BundleCalculationResult {
  if (subjectIds.length === 0) {
    return {
      selectedCount: 0,
      subtotal: 0,
      discountRate: 0,
      discountAmount: 0,
      finalTotal: 0,
      discountLabel: null,
    };
  }

  const subtotal = subjectIds.reduce((sum, id) => {
    const priceConfig = SUBJECT_PRICES[id];
    const price = priceConfig?.trackPrices[trackId] ?? 30000;
    return sum + price;
  }, 0);

  let discountRate = 0;
  let discountLabel: string | null = null;

  if (subjectIds.length >= 5) {
    discountRate = BUNDLE_DISCOUNTS.FULL_PACKAGE_BUNDLE;
    discountLabel = "Full-Package Bundle (25% OFF)";
  } else if (subjectIds.length >= 3) {
    discountRate = BUNDLE_DISCOUNTS.DEPARTMENT_BUNDLE;
    discountLabel = "Department Bundle (15% OFF)";
  }

  const discountAmount = Math.round(subtotal * discountRate);
  const finalTotal = subtotal - discountAmount;

  return {
    selectedCount: subjectIds.length,
    subtotal,
    discountRate,
    discountAmount,
    finalTotal,
    discountLabel,
  };
}

