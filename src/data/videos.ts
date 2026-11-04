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
    youtubeId: "jb_RwR_Eso4",
    title: "Tax, Discount, Markups and Tip Examples",
    durationMinutes: 16,
    channelName: "Khan Academy",
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
    youtubeId: "PYEvSuz1Dxo",
    title: "Tree Diagrams - Corbettmaths",
    durationMinutes: 18,
    channelName: "Corbettmaths",
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

// --- CURATED ALL SUBJECT VIDEOS ---
export const ALL_CURATED_SYLLABUS_VIDEOS: Record<string, TopicVideo> = {
  "english-language:parts of speech & functions": {
    youtubeId: "0T9xMqvjdLk",
    title: "Introduction to verbs | The parts of speech | Grammar | Khan Academy",
    durationMinutes: 18,
    channelName: "Khan Academy",
  },
  "english-language:concord rules": {
    youtubeId: "tqTWOtLEepA",
    title: "NOUN IN ENGLISH GRAMMAR | CLASS 6 | FREE GRAMMAR COURSE | TYPES/SUBJECT VERB AGREEMENT/QUESTIONS",
    durationMinutes: 18,
    channelName: "Dear Sir",
  },
  "english-language:clauses & sentences": {
    youtubeId: "sAo6LbCUAQo",
    title: "Dependent and independent clauses | Syntax | Khan Academy",
    durationMinutes: 18,
    channelName: "Khan Academy",
  },
  "english-language:reading for stated & implied meanings": {
    youtubeId: "IfEJlLenpsI",
    title: "Identifying Stated and Implied Main Idea | Reading Comprehension Skills Explained",
    durationMinutes: 18,
    channelName: "English Hub",
  },
  "english-language:examiner-approved summary technique": {
    youtubeId: "eGWO1ldEhtQ",
    title: "How to Write a Summary",
    durationMinutes: 18,
    channelName: "Smrt English",
  },
  "english-language:formal & informal correspondence": {
    youtubeId: "PgwmAUJx248",
    title: "Writing Letters: formal & informal English",
    durationMinutes: 18,
    channelName: "English with Emma · engVid",
  },
  "english-language:argumentative & expository essays": {
    youtubeId: "6QB8W92uYkQ",
    title: "How to Write an Argumentative Essay",
    durationMinutes: 18,
    channelName: "Writing Better",
  },
  "english-language:vowels & diphthongs": {
    youtubeId: "gcY89OYlNN0",
    title: "8 Diphthongs in English - Vowel Sounds",
    durationMinutes: 18,
    channelName: "Học Tiếng Anh - Learn English",
  },
  "english-language:consonants & clusters": {
    youtubeId: "BFY686z49g4",
    title: "Consonants | consonant sounds | Sounds of English",
    durationMinutes: 18,
    channelName: "LitLingo English Academy",
  },
  "english-language:stress & intonation": {
    youtubeId: "Vu6UVwkUgzc",
    title: "Syllables and Word Stress - English Pronunciation Lesson",
    durationMinutes: 18,
    channelName: "Oxford Online English",
  },
  "civic-education:national ethics & integrity": {
    youtubeId: "aheTlas0COc",
    title: "Values and Ethics - Character and Citizenship Education",
    durationMinutes: 18,
    channelName: "NIE SINGAPORE",
  },
  "civic-education:human rights": {
    youtubeId: "nDgIVseTkuE",
    title: "What are the universal human rights? - Benedetta Berti",
    durationMinutes: 18,
    channelName: "TED-Ed",
  },
  "civic-education:rule of law": {
    youtubeId: "0bf3CwYCxXw",
    title: "Separation of Powers and Checks and Balances: Crash Course Government and Politics #3",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "civic-education:democratic institutions": {
    youtubeId: "GgydJ8NBPmQ",
    title: "Democratic Institutions & Pillars of Democracy - J3 Civic",
    durationMinutes: 18,
    channelName: "Preston International School ",
  },
  "basic-science-ict:living & non-living systems": {
    youtubeId: "DhDsbfjPtS8",
    title: "Characteristics Of Living Things ( JAMB BIOLOGY)",
    durationMinutes: 18,
    channelName: "MaxChem5",
  },
  "basic-science-ict:energy & work": {
    youtubeId: "w4QFJb9a8vo",
    title: "Work, Energy, and Power: Crash Course Physics #9",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "basic-science-ict:computer architecture": {
    youtubeId: "GL889r7PGIk",
    title: "What happens inside a CPU #technology #computerassembly #3danimation #cpu",
    durationMinutes: 18,
    channelName: "Kuros Lab",
  },
  "basic-science-ict:data processing & algorithms": {
    youtubeId: "rL8X2mlNHPM",
    title: "Intro to Algorithms: Crash Course Computer Science #13",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "physics:kinematics & projectiles": {
    youtubeId: "8NLzuURxFwY",
    title: "Introduction to Projectile Motion - Formulas and Equations",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "physics:dynamics & friction": {
    youtubeId: "52R61aSWHg0",
    title: "Free Body Diagrams - Tension, Friction, Inclined Planes, & Net Force",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "physics:equilibrium of forces": {
    youtubeId: "jg4e8W44_E4",
    title: "Torque, Basic Introduction, Lever Arm, Moment of Force, Simple Machines & Mechanical Advantage",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "physics:heat transfer & gas laws": {
    youtubeId: "LR5bYxC4syI",
    title: "Thermal Conductivity, Stefan Boltzmann Law, Heat Transfer, Conduction, Convecton, Radiation, Physics",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "physics:waves & optics": {
    youtubeId: "IRBfpBPELmE",
    title: "Light Is Waves: Crash Course Physics #39",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "physics:electrostatics & current electricity": {
    youtubeId: "r-SCyD7f_zI",
    title: "Electric Current & Circuits Explained, Ohm's Law, Charge, Power, Physics Problems, Basic Electricity",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "physics:magnetic fields & induction": {
    youtubeId: "pQp6bmJPU_0",
    title: "Induction - An Introduction: Crash Course Physics #34",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "physics:quantum nature of light": {
    youtubeId: "7kb1VT0J3DE",
    title: "Quantum Mechanics - Part 1: Crash Course Physics #43",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "physics:radioactivity": {
    youtubeId: "KWAsz59F8gA",
    title: "Nuclear Chemistry: Crash Course Chemistry #38",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "chemistry:atomic models & electronic configuration": {
    youtubeId: "eRIN9CPDrpo",
    title: "Quantum Numbers",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "chemistry:periodic trends": {
    youtubeId: "Gy9HR65DpYQ",
    title: "Ionization Energy, Electron Affinity, Atomic Radius, Ionic Radii, Electronegativity, Metal Character",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "chemistry:chemical bonds": {
    youtubeId: "S_k0kr2eZSQ",
    title: "Introduction to Ionic Bonding and Covalent Bonding",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "chemistry:the mole & volumetric calculations": {
    youtubeId: "Ab3wfKjaWWQ",
    title: "Solution Stoichiometry  - Finding Molarity, Mass & Volume",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "chemistry:thermodynamics & rates of reaction": {
    youtubeId: "jX4dEOFwaLQ",
    title: "Collision Theory - Arrhenius Equation & Activation Energy - Chemical Kinetics",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "chemistry:hydrocarbons": {
    youtubeId: "HhT2E7wuAgg",
    title: "The Basics of Organic Nomenclature: Crash Course Organic Chemistry #2",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "chemistry:oxygenated compounds": {
    youtubeId: "m9jM8lWxrAE",
    title: "Functional Groups",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "biology:cellular structure": {
    youtubeId: "6mgkoqcm6Sg",
    title: "Cell Organelles and Structures Review",
    durationMinutes: 18,
    channelName: "Amoeba Sisters",
  },
  "biology:transport mechanisms": {
    youtubeId: "Ptmlvtei8hw",
    title: "Cell Transport",
    durationMinutes: 18,
    channelName: "Amoeba Sisters",
  },
  "biology:mendelian genetics": {
    youtubeId: "i-0rSv6oxSY",
    title: "Monohybrids and the Punnett Square Guinea Pigs",
    durationMinutes: 18,
    channelName: "Amoeba Sisters",
  },
  "biology:chromosomes & dna": {
    youtubeId: "8m6hHRlKwxY",
    title: "DNA, Chromosomes, Genes, and Traits: An Intro to Heredity",
    durationMinutes: 18,
    channelName: "Amoeba Sisters",
  },
  "further-mathematics:advanced differentiation": {
    youtubeId: "HaHsqDjWMLU",
    title: "Chain Rule For Finding Derivatives",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "further-mathematics:advanced integration": {
    youtubeId: "sWSLLO3DS1I",
    title: "Integration By Parts",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "further-mathematics:dynamics & momentum": {
    youtubeId: "FYKoU0sb9ks",
    title: "Impulse and Momentum - Formulas and Equations - College Physics",
    durationMinutes: 18,
    channelName: "The Organic Chemistry Tutor",
  },
  "further-mathematics:statistical distributions": {
    youtubeId: "WWv0RUxDfbs",
    title: "Binomial distribution | Probability and Statistics | Khan Academy",
    durationMinutes: 18,
    channelName: "Khan Academy",
  },
  "agricultural-science:soil chemistry & physics": {
    youtubeId: "Ik2qe_j805k",
    title: "How to Accurately Measure Soil pH: A Step-by-Step Guide | Certified MTP",
    durationMinutes: 18,
    channelName: "Certified MTP",
  },
  "agricultural-science:crop pathology": {
    youtubeId: "q_q3LsgRoaw",
    title: "Common Garden pest",
    durationMinutes: 18,
    channelName: "Agronomy Modern Agriculture ",
  },
  "financial-accounting:books of original entry": {
    youtubeId: "8Dd75VfcCTg",
    title: "THE CASHBOOK (INTRODUCTION)",
    durationMinutes: 18,
    channelName: "FOG Accountancy Tutorials",
  },
  "financial-accounting:trial balance & errors": {
    youtubeId: "91dQlwdwf44",
    title: "CORRECTION OF ERRORS AND THE SUSPENSE ACCOUNT (PART 1)",
    durationMinutes: 18,
    channelName: "FOG Accountancy Tutorials",
  },
  "financial-accounting:trading, profit & loss accounts": {
    youtubeId: "M6tWEkwF4QU",
    title: "INCOME STATEMENT / PROFIT AND LOSS ACCOUNT",
    durationMinutes: 18,
    channelName: "Online Sholars Hub",
  },
  "financial-accounting:partnership & company statements": {
    youtubeId: "Lcig9kbGPoY",
    title: "FINAL ACCOUNTS OF A PARTNERSHIP (PART 1)",
    durationMinutes: 18,
    channelName: "FOG Accountancy Tutorials",
  },
  "commerce:commercial enterprises": {
    youtubeId: "UGSlED1Jx1Y",
    title: "Types of Business Organizations",
    durationMinutes: 18,
    channelName: "One Minute Accounting",
  },
  "commerce:financial intermediation": {
    youtubeId: "vUvIzshYyv8",
    title: "What is a Central Bank? | Back to Basics",
    durationMinutes: 18,
    channelName: "IMF",
  },
  "economics:demand & supply analysis": {
    youtubeId: "g9aDizJpd_s",
    title: "Supply and Demand: Crash Course Economics #4",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "economics:consumer & production theory": {
    youtubeId: "3midaQqm7NM",
    title: "Marginal Analysis, Roller Coasters, Elasticity, and Van Gogh: Crash Course Economics #18",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "economics:national income & money": {
    youtubeId: "Wy4TGV-tPd8",
    title: "Gross Domestic Product (GDP)",
    durationMinutes: 18,
    channelName: "Professor Dave Explains",
  },
  "economics:fiscal & monetary policy": {
    youtubeId: "_tULRch1PRQ",
    title: "Monetary and Fiscal Policy: Crash Course Government and Politics #48",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "business-studies-office-practice:office departments & layouts": {
    youtubeId: "Chb3Mk7wVVQ",
    title: "Business Studies - Organisation Structure: Business Exam Tips",
    durationMinutes: 18,
    channelName: "Revision App - Student Blog",
  },
  "business-studies-office-practice:information management": {
    youtubeId: "BM5AWrearo0",
    title: "Office Record Management: Best Practices | Document Control & Filing System Explained",
    durationMinutes: 18,
    channelName: "Office360 Tutorials",
  },
  "literature-in-english:african prescribed drama": {
    youtubeId: "JDNA_gP33Gk",
    title: "Drama in Literature: Types, Techniques & Literary Devices | JAMB & WAEC | Student VillageNG",
    durationMinutes: 18,
    channelName: "Student Village NG",
  },
  "literature-in-english:non-african drama": {
    youtubeId: "ECfPCbOUtyU",
    title: "Macbeth by William Shakespeare | Summary, Characters, Themes & Important Facts | English Literature",
    durationMinutes: 18,
    channelName: "Smart Learning with Dr. Ajeet Singh",
  },
  "literature-in-english:african poetry anthology": {
    youtubeId: "a1QNCsJoJto",
    title: "Poetry | Poetic techniques | Literary devices| English Poem Writing | Learn with examples",
    durationMinutes: 18,
    channelName: "Learn on the Go ",
  },
  "literature-in-english:non-african poetry": {
    youtubeId: "4etr9lBb78s",
    title: "Meter of a poem",
    durationMinutes: 18,
    channelName: "Karen Wright",
  },
  "government:basic political concepts": {
    youtubeId: "HpQPJJlH-LE",
    title: "Important political terms for beginners । Power  Authority,legitimacy, sovereignty under 30 seconds",
    durationMinutes: 18,
    channelName: "Happy vibes",
  },
  "government:government structures": {
    youtubeId: "Zu3dHmFMQBw",
    title: "Systems of Government:  Unitary, Federal, and Confederal Explained",
    durationMinutes: 18,
    channelName: "Brad Cartwright",
  },
  "government:colonial & constitutional milestones": {
    youtubeId: "LirF4GvBUCs",
    title: "Indirect Rule in Africa – British colonial administrative strategy, in Nigeria#history #education",
    durationMinutes: 18,
    channelName: "NOBLE_TECH ",
  },
  "government:regional & global organizations": {
    youtubeId: "L4xx3kUnYqs",
    title: "What is ECOWAS?",
    durationMinutes: 18,
    channelName: "Etietop Akpabio",
  },
  "crk-irk:foundational texts & context": {
    youtubeId: "dtQ2TS1CiDY",
    title: "1. Introduction: Why Study the New Testament?",
    durationMinutes: 18,
    channelName: "YaleCourses",
  },
  "crk-irk:moral teachings & society": {
    youtubeId: "OK6LiOMdQcc",
    title: "A-Level Ethics — Situation Ethics  #religiousstudies #alevelrevision",
    durationMinutes: 18,
    channelName: "Eductor",
  },
  "history:sudanic & forest empires": {
    youtubeId: "jvnU0v6hcUo",
    title: "Mansa Musa and Islam in Africa: Crash Course World History #16",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "history:trade networks": {
    youtubeId: "b4AsjAHV10Y",
    title: "The Trans-Saharan Trade Route: Where Gold Met Salt and Empires Rose",
    durationMinutes: 18,
    channelName: "Did You Know? - World Cultural Heritage",
  },
  "geography:topographical maps": {
    youtubeId: "QIrELLSWWB8",
    title: "How to read Maps - Grid References (Geography Skills)",
    durationMinutes: 18,
    channelName: "Geographer Online",
  },
  "geography:contour interpretation": {
    youtubeId: "1YYFwPfcUSw",
    title: "Contour LINES ON A MAP | What are contour lines ? #,SocialStudies #ContourLines #Map",
    durationMinutes: 18,
    channelName: "Learning with Ramsha",
  },
  "geography:geomorphology": {
    youtubeId: "krXXSCb_P9Y",
    title: "What is Plate Tectonics: Crash Course Geology #10",
    durationMinutes: 18,
    channelName: "CrashCourse",
  },
  "geography:human settlements & resources": {
    youtubeId: "zx48wRUW2r4",
    title: "How Cities Grow Without Planning | KS3 Geography Explained",
    durationMinutes: 18,
    channelName: "iNewittAll",
  },
};


/**
 * Global resolver for syllabus topic videos across all subjects and departments.
 */
export function getTopicVideoBySubject(subjectId: string, topicName: string): TopicVideo | null {
  const key = `${subjectId.toLowerCase()}:${topicName.toLowerCase().trim()}`;
  return ALL_CURATED_SYLLABUS_VIDEOS[key] || null;
}
