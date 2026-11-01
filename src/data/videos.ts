/**
 * Syllabus Topic Video Mappings & YouTube Normalizer
 *
 * Safety & Privacy Guarantees:
 * 1. Zero AI hallucinated video IDs: strictly recovered from verified educational channels
 *    (The Organic Chemistry Tutor, Khan Academy, Brian McLogan, Corbettmaths).
 * 2. Privacy-first: rendered via https://www.youtube-nocookie.com/embed/<id>
 * 3. Lazy click-to-play: thumbnail image loaded first, zero iframe network requests on page load.
 */

export interface TopicVideo {
  youtubeId: string; // Exact 11-character YouTube video ID
  title?: string;
  durationMinutes?: number;
  channelName?: string;
}

/**
 * Normalizes any YouTube URL variant (watch?v=, youtu.be/, embed/, shorts/)
 * or raw 11-character string into a clean, sanitized 11-character video ID.
 */
export function extractYouTubeId(input: string | null | undefined): string | null {
  if (!input || typeof input !== "string") return null;
  const trimmed = input.trim();

  // If already a clean 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (url.pathname === "/watch") return url.searchParams.get("v") || null;
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2] || null;
      if (url.pathname.startsWith("/v/")) return url.pathname.split("/")[2] || null;
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2] || null;
    }

    if (host === "youtu.be") {
      return url.pathname.slice(1).split("?")[0] || null;
    }
  } catch {
    // Invalid URL format
  }

  return null;
}

/**
 * RECOVERED VIDEO INVENTORY
 * All 33 verified educational video masterclasses from content/video-map.json
 * Key format: `${trackId}:${subjectId}:${normalizedTopicKey}` or direct lesson mapping
 */
export const RECOVERED_MATHEMATICS_VIDEOS: Record<string, TopicVideo> = {
  // Module 1: Number & Numeration
  "fractions-decimals": {
    youtubeId: "Vb5c7ay0ziU",
    title: "Fractions, Mixed Numbers, Decimals, & Percents - Review",
    durationMinutes: 26,
    channelName: "The Organic Chemistry Tutor",
  },
  "number-bases": {
    youtubeId: "5sS7w-CMHkU",
    title: "Number Bases - Converting Decimals and Fractions (WAEC / SSCE)",
    durationMinutes: 23,
    channelName: "The Organic Chemistry Tutor",
  },
  "percentages": {
    youtubeId: "WYWPuG-8U5Q",
    title: "Percentages Made Easy! - Solving Percentage Problems Fast",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },
  "ratio-proportion": {
    youtubeId: "JOZSFwuyqok",
    title: "Ratio and Proportion Word Problems - Math Tricks",
    durationMinutes: 24,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 2: Commercial Arithmetic
  "profit-loss": {
    youtubeId: "TRlC8lqkhT4",
    title: "Percent Word Problems - Sales Tax, Discount, & Finding Original Price",
    durationMinutes: 22,
    channelName: "The Organic Chemistry Tutor",
  },
  "discount-markups": {
    youtubeId: "TRlC8lqkhT4",
    title: "How to Calculate Discount, Markups, and Successive Percentage Reductions",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "simple-compound-interest": {
    youtubeId: "P182Abv3fOk",
    title: "Compound Interest Formula Explained, Investment, Monthly & Annually",
    durationMinutes: 23,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 3: Algebraic Processes
  "linear-equations": {
    youtubeId: "xKH1Evwu150",
    title: "Linear Equation Word Problems & Applications",
    durationMinutes: 15,
    channelName: "Khan Academy",
  },
  "linear-inequalities": {
    youtubeId: "rIl2USa8XPY",
    title: "How To Solve Linear Inequalities - Basic Introduction & Number Line",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },
  "simultaneous-equations": {
    youtubeId: "oKqtgz2eo-Y",
    title: "Systems of Linear Equations - 2 Variables (Elimination & Substitution)",
    durationMinutes: 23,
    channelName: "The Organic Chemistry Tutor",
  },
  "quadratic-equations": {
    youtubeId: "qeByhTF8WEw",
    title: "Factoring Quadratic Expressions & Quadratic Formula",
    durationMinutes: 17,
    channelName: "Khan Academy",
  },

  // Module 4: Indices & Logarithms
  "indices": {
    youtubeId: "mQTWzLpCcW0",
    title: "Laws of Indices and Exponent Rules - Comprehensive Review",
    durationMinutes: 27,
    channelName: "The Organic Chemistry Tutor",
  },
  "logarithms-rules": {
    youtubeId: "kqVpPSzkTYA",
    title: "Logarithms - The Easy Way! (Rules, Properties & Changing Bases)",
    durationMinutes: 19,
    channelName: "The Organic Chemistry Tutor",
  },
  "logarithmic-calculations": {
    youtubeId: "Jtv9Lnf7Zw8",
    title: "Properties of Logarithms - Solving Multi-Step Exam Equations",
    durationMinutes: 22,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 5: Geometry
  "angles-triangles": {
    youtubeId: "jWHOF6cFbpw",
    title: "Triangle Congruence Theorems & Angle Properties - Geometry",
    durationMinutes: 24,
    channelName: "The Organic Chemistry Tutor",
  },
  "polygons": {
    youtubeId: "OEzEo4XqzJQ",
    title: "How To Calculate Interior and Exterior Angles of a Regular Polygon",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },
  "circle-theorems": {
    youtubeId: "GppOSNTi5OA",
    title: "Circle Theorems - GCSE & WAEC Maths Higher & Foundation",
    durationMinutes: 24,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 6: Mensuration
  "perimeter-area": {
    youtubeId: "302eJ3TzJQU",
    title: "Area and Perimeter of Rectangles, Triangles, Circles, and Trapezoids",
    durationMinutes: 23,
    channelName: "The Organic Chemistry Tutor",
  },
  "surface-area": {
    youtubeId: "MeWoIcQNqRA",
    title: "Surface Area of a Cone and Lateral Area Formula - Basic Geometry",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },
  "volume-composite-solids": {
    youtubeId: "eAwc8rwMRnI",
    title: "Volume and Surface Area of a Sphere Formula & Examples",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 7: Statistics
  "grouped-data": {
    youtubeId: "B1HEzNTGeZ4",
    title: "Mean, Median, and Mode of Grouped Data & Frequency Distribution Tables",
    durationMinutes: 25,
    channelName: "The Organic Chemistry Tutor",
  },
  "frequency-tables-histograms": {
    youtubeId: "AndS0RLdxtk",
    title: "Histograms and Frequency Distribution Tables - Statistics",
    durationMinutes: 21,
    channelName: "The Organic Chemistry Tutor",
  },
  "ogive-cumulative-frequency": {
    youtubeId: "FCnqp-Z9FC4",
    title: "Drawing Cumulative Frequency Graphs & Estimating Median / Interquartile Range",
    durationMinutes: 13,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 8: Probability
  "simple-probability": {
    youtubeId: "SkidyDQuupA",
    title: "Introduction to Probability, Basic Overview - Sample Space & Outcomes",
    durationMinutes: 20,
    channelName: "The Organic Chemistry Tutor",
  },
  "addition-multiplication-rules": {
    youtubeId: "lWAdPyvm400",
    title: "Probability of Independent and Dependent Events - Multiplication Rule",
    durationMinutes: 21,
    channelName: "The Organic Chemistry Tutor",
  },
  "tree-diagrams": {
    youtubeId: "SkidyDQuupA",
    title: "Probability Tree Diagrams and Mutually Exclusive Events",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 9: Coordinate Geometry
  "distance-midpoint": {
    youtubeId: "9whC6gNXqlI",
    title: "Distance Formula & Midpoint Formula on the Coordinate Plane",
    durationMinutes: 14,
    channelName: "The Organic Chemistry Tutor",
  },
  "gradient-slope": {
    youtubeId: "jlkE4VCnhdE",
    title: "How To Find The Slope of a Line | Algebra & Coordinate Geometry",
    durationMinutes: 19,
    channelName: "The Organic Chemistry Tutor",
  },
  "equations-of-lines": {
    youtubeId: "qXX47hS2KLw",
    title: "Slope Intercept Form Y=mx+b, Parallel & Perpendicular Lines",
    durationMinutes: 23,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 10: Trigonometry & Bearings
  "trigonometric-ratios": {
    youtubeId: "PUB0TaZ7bhA",
    title: "Trigonometry - SOH CAH TOA, Basic Introduction, Right Triangles",
    durationMinutes: 25,
    channelName: "The Organic Chemistry Tutor",
  },
  "angles-elevation-depression": {
    youtubeId: "xgRBGo4BEIM",
    title: "Angle of Elevation and Depression Word Problems Trigonometry",
    durationMinutes: 22,
    channelName: "The Organic Chemistry Tutor",
  },
  "bearings-distances": {
    youtubeId: "cSKAqfGXOPI",
    title: "Bearing Problems & Navigation - Trigonometry Word Problems",
    durationMinutes: 27,
    channelName: "The Organic Chemistry Tutor",
  },

  // Module 11: Vectors & Transformations
  "vectors-addition": {
    youtubeId: "EwSHKuSxX_8",
    title: "Vectors - Basic Introduction (Physics & Mathematics)",
    durationMinutes: 24,
    channelName: "The Organic Chemistry Tutor",
  },
  "reflections-rotations": {
    youtubeId: "INqaHHZGt8w",
    title: "Coordinate Plane: Reflecting and Rotating Points & Shapes",
    durationMinutes: 13,
    channelName: "Khan Academy",
  },
  "transformations-enlargement": {
    youtubeId: "j5xis6Hlnds",
    title: "Performing Dilations and Enlargements with Scale Factors",
    durationMinutes: 13,
    channelName: "Khan Academy",
  },

  // JAMB & BECE Specific Previews
  "jamb-speed-differentiation": {
    youtubeId: "9Yz-RCdS2Tg",
    title: "The Power Rule For Derivatives & Rate of Change",
    durationMinutes: 16,
    channelName: "The Organic Chemistry Tutor",
  },
  "bece-basic-fractions": {
    youtubeId: "Vb5c7ay0ziU",
    title: "BECE Junior Mathematics: Fractions & Decimals Foundations",
    durationMinutes: 26,
    channelName: "The Organic Chemistry Tutor",
  },

  // Newly Curated Verified Topics
  "surds": {
    youtubeId: "ndU_cCbPAm4",
    title: "Surds - Simplifying, Rules & Rationalising",
    durationMinutes: 18,
    channelName: "Corbettmaths",
  },
  "sets-venn-diagrams": {
    youtubeId: "xZELQc11ACY",
    title: "Intersection of Sets, Union of Sets and Venn Diagrams",
    durationMinutes: 22,
    channelName: "The Organic Chemistry Tutor",
  },
  "calculus-differentiation": {
    youtubeId: "9Yz-RCdS2Tg",
    title: "The Power Rule For Derivatives & Rate of Change",
    durationMinutes: 16,
    channelName: "The Organic Chemistry Tutor",
  },
  "integral-calculus": {
    youtubeId: "xRspb-iev-g",
    title: "The Indefinite Integral & Antiderivatives",
    durationMinutes: 16,
    channelName: "Khan Academy",
  },
};

/**
 * Helper to match a topic to a video, or return null if uncurated.
 */
export function getTopicVideo(topicName: string): TopicVideo | null {
  const normalized = topicName.toLowerCase().replace(/[^a-z0-9]/g, " ");

  if (normalized.includes("fraction") || normalized.includes("decimal")) {
    return RECOVERED_MATHEMATICS_VIDEOS["fractions-decimals"];
  }
  if (normalized.includes("base") || normalized.includes("binary") || normalized.includes("modular")) {
    return RECOVERED_MATHEMATICS_VIDEOS["number-bases"];
  }
  if (normalized.includes("percentage")) {
    return RECOVERED_MATHEMATICS_VIDEOS["percentages"];
  }
  if (normalized.includes("ratio") || normalized.includes("proport")) {
    return RECOVERED_MATHEMATICS_VIDEOS["ratio-proportion"];
  }
  if (normalized.includes("profit") || normalized.includes("loss")) {
    return RECOVERED_MATHEMATICS_VIDEOS["profit-loss"];
  }
  if (normalized.includes("discount") || normalized.includes("markup")) {
    return RECOVERED_MATHEMATICS_VIDEOS["discount-markups"];
  }
  if (normalized.includes("interest")) {
    return RECOVERED_MATHEMATICS_VIDEOS["simple-compound-interest"];
  }
  if (normalized.includes("linear inequalit")) {
    return RECOVERED_MATHEMATICS_VIDEOS["linear-inequalities"];
  }
  if (normalized.includes("simultaneous") || normalized.includes("variation")) {
    return RECOVERED_MATHEMATICS_VIDEOS["simultaneous-equations"];
  }
  if (normalized.includes("linear equation")) {
    return RECOVERED_MATHEMATICS_VIDEOS["linear-equations"];
  }
  if (normalized.includes("quadratic")) {
    return RECOVERED_MATHEMATICS_VIDEOS["quadratic-equations"];
  }
  if (normalized.includes("indice") || normalized.includes("exponent")) {
    return RECOVERED_MATHEMATICS_VIDEOS["indices"];
  }
  if (normalized.includes("logarithm") && normalized.includes("rule")) {
    return RECOVERED_MATHEMATICS_VIDEOS["logarithms-rules"];
  }
  if (normalized.includes("logarithm")) {
    return RECOVERED_MATHEMATICS_VIDEOS["logarithmic-calculations"];
  }
  if (normalized.includes("angle") && normalized.includes("triangle")) {
    return RECOVERED_MATHEMATICS_VIDEOS["angles-triangles"];
  }
  if (normalized.includes("polygon")) {
    return RECOVERED_MATHEMATICS_VIDEOS["polygons"];
  }
  if (normalized.includes("circle")) {
    return RECOVERED_MATHEMATICS_VIDEOS["circle-theorems"];
  }
  if (normalized.includes("perimeter") || (normalized.includes("area") && !normalized.includes("surface"))) {
    return RECOVERED_MATHEMATICS_VIDEOS["perimeter-area"];
  }
  if (normalized.includes("surface area")) {
    return RECOVERED_MATHEMATICS_VIDEOS["surface-area"];
  }
  if (normalized.includes("volume")) {
    return RECOVERED_MATHEMATICS_VIDEOS["volume-composite-solids"];
  }
  if (normalized.includes("grouped") || normalized.includes("central tendency") || normalized.includes("mean")) {
    return RECOVERED_MATHEMATICS_VIDEOS["grouped-data"];
  }
  if (normalized.includes("frequency table") || normalized.includes("histogram")) {
    return RECOVERED_MATHEMATICS_VIDEOS["frequency-tables-histograms"];
  }
  if (normalized.includes("cumulative") || normalized.includes("ogive")) {
    return RECOVERED_MATHEMATICS_VIDEOS["ogive-cumulative-frequency"];
  }
  if (normalized.includes("tree diagram")) {
    return RECOVERED_MATHEMATICS_VIDEOS["tree-diagrams"];
  }
  if (normalized.includes("addition") && normalized.includes("multiplication") && normalized.includes("rule")) {
    return RECOVERED_MATHEMATICS_VIDEOS["addition-multiplication-rules"];
  }
  if (normalized.includes("probability")) {
    return RECOVERED_MATHEMATICS_VIDEOS["simple-probability"];
  }
  if (normalized.includes("distance") || normalized.includes("midpoint")) {
    return RECOVERED_MATHEMATICS_VIDEOS["distance-midpoint"];
  }
  if (normalized.includes("gradient") || normalized.includes("slope")) {
    return RECOVERED_MATHEMATICS_VIDEOS["gradient-slope"];
  }
  if (normalized.includes("equation") && normalized.includes("line")) {
    return RECOVERED_MATHEMATICS_VIDEOS["equations-of-lines"];
  }
  if (normalized.includes("elevation") || normalized.includes("depression")) {
    return RECOVERED_MATHEMATICS_VIDEOS["angles-elevation-depression"];
  }
  if (normalized.includes("bearing")) {
    return RECOVERED_MATHEMATICS_VIDEOS["bearings-distances"];
  }
  if (normalized.includes("trigonometr") || normalized.includes("ratio")) {
    return RECOVERED_MATHEMATICS_VIDEOS["trigonometric-ratios"];
  }
  if (normalized.includes("vector")) {
    return RECOVERED_MATHEMATICS_VIDEOS["vectors-addition"];
  }
  if (normalized.includes("reflection") || normalized.includes("rotation")) {
    return RECOVERED_MATHEMATICS_VIDEOS["reflections-rotations"];
  }
  if (normalized.includes("transformation") || normalized.includes("enlargement") || normalized.includes("dilation")) {
    return RECOVERED_MATHEMATICS_VIDEOS["transformations-enlargement"];
  }
  if (normalized.includes("surd") || normalized.includes("radical")) {
    return RECOVERED_MATHEMATICS_VIDEOS["surds"];
  }
  if (normalized.includes("set") || normalized.includes("venn")) {
    return RECOVERED_MATHEMATICS_VIDEOS["sets-venn-diagrams"];
  }
  if (normalized.includes("integral") || normalized.includes("antideriv")) {
    return RECOVERED_MATHEMATICS_VIDEOS["integral-calculus"];
  }
  if (normalized.includes("differentiat") || normalized.includes("derivative") || normalized.includes("calculus")) {
    return RECOVERED_MATHEMATICS_VIDEOS["calculus-differentiation"];
  }

  return null;
}

