/**
 * Trusted Educational Channels & Blocklist
 */

export interface ChannelEntry {
  channelId: string;
  name: string;
  notes: string;
  subjects: string[];
}

export const TRUSTED_CHANNELS_ALLOWLIST: ChannelEntry[] = [
  {
    channelId: "UCsooa4yRKGN_zEE8iknghZA",
    name: "TED-Ed",
    notes: "World-class educational animations and mathematical explanations with high academic rigor and child-safe content.",
    subjects: ["Mathematics", "Sciences", "Logic"],
  },
  {
    channelId: "UC4a-Gbdw7vOaccHmFo40b9g",
    name: "Khan Academy",
    notes: "Non-profit educational organization providing free, mastery-based curriculum videos with clear step-by-step chalkboard instruction.",
    subjects: ["Mathematics", "Algebra", "Geometry", "Calculus", "Physics", "Chemistry"],
  },
  {
    channelId: "UCiGyWN60pcTVTBRJTWLPD4A",
    name: "Professor Leonard",
    notes: "Exemplary university and secondary mathematics lectures covering intermediate algebra, trigonometry, and calculus from first principles.",
    subjects: ["Mathematics", "Algebra", "Calculus"],
  },
  {
    channelId: "UCEWpbFLzoYGPfuWUMFPSaoA",
    name: "Organic Chemistry Tutor",
    notes: "Highly structured exam practice problems for Algebra, Trigonometry, Geometry, Physics, and Chemistry. Clear pacing and zero distractions.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Trigonometry"],
  },
  {
    channelId: "UCJ0yBgCVpdMPSJECXb3yBfA",
    name: "Brian McLogan",
    notes: "High-school mathematics teacher working step-by-step through thousands of syllabus problems on whiteboards.",
    subjects: ["Mathematics", "Quadratic Equations", "Geometry", "Logarithms"],
  },
  {
    channelId: "UCFe6jenkinsbmZSWZdLhHTdg",
    name: "Corbettmaths",
    notes: "UK GCSE and IGCSE focused explanations, exam-style practice questions and clear diagram breakdowns matching WAEC curricula.",
    subjects: ["Mathematics", "Geometry", "Number Bases"],
  },
  {
    channelId: "UC7T64Vj7wQ3i6eZqjN5P2ug",
    name: "Examsolutions",
    notes: "Longstanding secondary and A-level tutorial library with clear exam worked solutions and theory derivations.",
    subjects: ["Mathematics", "Calculus", "Vectors", "Statistics"],
  },
  {
    channelId: "UCtG2Y3-q3aCgB4D4R9bHj1A",
    name: "Don't Memorise",
    notes: "Bite-sized, animated visual conceptual explanations in middle- and high-school mathematics and biology.",
    subjects: ["Mathematics", "Biology", "Geometry"],
  },
];

export const INITIAL_CHANNEL_BLOCKLIST: ChannelEntry[] = [
  {
    channelId: "UC_BLOCK_CLICKBAIT_01",
    name: "Generic Clickbait & Content Farms",
    notes: "Sensationalist titles, AI voiceover spam, or off-topic entertainment videos unsuitable for educational curricula.",
    subjects: ["All"],
  },
];
