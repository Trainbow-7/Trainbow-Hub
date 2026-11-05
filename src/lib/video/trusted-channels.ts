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
  {
    channelId: "UCHaHD477h-FeBbVh9Sh7syA",
    name: "BBC Learning English",
    notes: "World standard English grammar, pronunciation, vocabulary, and listening comprehension lessons.",
    subjects: ["English Language", "Grammar", "Pronunciation", "Comprehension"],
  },
  {
    channelId: "UCEKXieT208wU4eq4GXUslnQ",
    name: "Learn English with Emma [engVid]",
    notes: "Structured academic writing, essay composition, grammar rules, and IELTS/SSCE preparation strategies.",
    subjects: ["English Language", "Essay Composition", "Grammar"],
  },
  {
    channelId: "UCNbeSPp8RYKmHUliYBUDizg",
    name: "Oxford Online English",
    notes: "In-depth tutorials on formal letter writing, phonetics, intonation, and common grammatical mistakes.",
    subjects: ["English Language", "Oral English", "Phonetics", "Writing"],
  },
  {
    channelId: "UCH3qEaG74kLwKkmElAkyOyg",
    name: "English with Lucy",
    notes: "Clear articulation of British English vowel/consonant contrasts, diphthongs, and advanced vocabulary.",
    subjects: ["English Language", "Oral English", "Vocabulary"],
  },
  {
    channelId: "UCX6b17PVsYBQ0ip5gyeme-Q",
    name: "CrashCourse",
    notes: "High quality curriculum videos on Literature analysis, rhetorical devices, and critical reading.",
    subjects: ["English Literature", "Literary Analysis", "Reading"],
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
