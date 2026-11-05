/**
 * Trainbow HUB: English Language Weak Area Deficiency Registry
 * Mapped to NERDC, WAEC, NECO, and JAMB UTME Curriculum Specifications
 *
 * All records strictly adhere to the Teacher Review Gate (needsReview: true).
 */

export type EnglishSkillArea =
  | "GRAMMAR"
  | "LEXIS_STRUCTURE"
  | "COMPREHENSION_SUMMARY"
  | "ORAL_ENGLISH"
  | "ESSAY_COMPOSITION"
  | "LITERARY_ANALYSIS";

export type EvidenceConfidence = "high" | "moderate" | "needs teacher input";

export interface WeakAreaRecord {
  code: string;
  title: string;
  skillArea: EnglishSkillArea;
  levels: string[];
  description: string;
  evidenceSource: string;
  evidenceDate: string;
  confidence: EvidenceConfidence;
  priority: boolean;
  needsReview: boolean;
}

export const ENGLISH_WEAK_AREAS: WeakAreaRecord[] = [
  // 1. GRAMMAR
  {
    code: "WA-ENG-GRM-01",
    title: "Subject-Verb Concord: Proximity & Compound Subjects",
    skillArea: "GRAMMAR",
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Candidates mistakenly match verbs to intervening prepositional phrases or parenthetical nouns rather than the true subject (e.g. 'The leader of the rebel troops have surrendered'). Compound subjects with 'as well as', 'together with', or 'along with' erroneously assigned plural verbs.",
    evidenceSource:
      "WAEC Chief Examiners' Report (English Paper 1 & 2); WAEC WASSCE English Regulations & Syllabus",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-02",
    title: "Indefinite Pronoun Concord & Distributive Quantifiers",
    skillArea: "GRAMMAR",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Treating grammatically singular indefinite pronouns ('each', 'everyone', 'either', 'neither', 'somebody') as plural verbs in complex sentence configurations (e.g. 'Each of the candidates were given...').",
    evidenceSource: "JAMB UTME IBASS Syllabus; WAEC Paper 1 Grammatical Structures",
    evidenceDate: "2024-2026",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-03",
    title: "Tense Consistency & Aspectual Timeline Shifts",
    skillArea: "GRAMMAR",
    levels: ["Primary 4-6", "JSS 1-3", "SS 1-3", "WAEC Prep"],
    description:
      "Unjustified mixing of simple past and present continuous tenses within the same narrative paragraph in continuous writing and essay composition.",
    evidenceSource: "WAEC Paper 2 Continuous Writing Marking Keys; BECE English Studies Specification",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-04",
    title: "Prepositional Complementation & Fixed Phrasal Collocations",
    skillArea: "GRAMMAR",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Mother-tongue interference causing erroneous preposition pairings, such as 'congratulate for' (instead of 'on'), 'prefer X than Y' (instead of 'to'), and 'comprise of' (instead of 'comprise').",
    evidenceSource: "WAEC Paper 1 Lexis & Structure Item Analysis; JAMB Use of English Diagnostics",
    evidenceDate: "2023-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-05",
    title: "Comma Splices, Run-on Sentences & Syntactic Fragments",
    skillArea: "GRAMMAR",
    levels: ["JSS 2-3", "SS 1-3", "WAEC Prep"],
    description:
      "Fusing independent clauses with solely a comma, or presenting dependent subordinate clauses without an attached matrix clause, incurring heavy mechanical accuracy deductions under WAEC rubrics.",
    evidenceSource: "WAEC Continuous Writing Marking Scheme (Mechanical Accuracy Rubric)",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-06",
    title: "Dangling & Misplaced Participial Modifiers",
    skillArea: "GRAMMAR",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Participial introductory phrases whose implied agent fails to correspond with the grammatical subject of the adjacent clause (e.g. 'Walking down the road, the building collapsed').",
    evidenceSource: "WAEC English Paper 1 & 2 Review Commentary",
    evidenceDate: "2022",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-07",
    title: "Relative Pronoun Case Discrimination (Who, Whom, Whose)",
    skillArea: "GRAMMAR",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to distinguish subjective case ('who') from objective case ('whom') in restrictive relative clauses, particularly with embedded parenthetical clauses.",
    evidenceSource: "JAMB UTME Use of English Syllabus Section A",
    evidenceDate: "2024",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-GRM-08",
    title: "Conditional Clause Sequences & Hypothetical Subjunctive Mood",
    skillArea: "GRAMMAR",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Incorrect pairing of conditional protasis and apodosis (e.g. 'If I had known, I will come'); refusal to use the counterfactual subjunctive 'were' (e.g. 'If I was you').",
    evidenceSource: "WAEC Paper 1 Grammar Section; Cambridge IGCSE 0500 Grammar Specification",
    evidenceDate: "2023-2025",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },

  // 2. LEXIS AND STRUCTURE
  {
    code: "WA-ENG-LEX-01",
    title: "Idiomatic Precision vs Colloquial Pidgin Inventions",
    skillArea: "LEXIS_STRUCTURE",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Deploying corrupted local colloquialisms rather than standard idiomatic English (e.g. 'crack your brain' for 'rack your brain', 'take excuse' for 'ask for permission', 'rub minds' for 'exchange views').",
    evidenceSource: "WAEC Paper 1 Lexis & Structure Item Analysis; JAMB UTME Lexis Diagnostic",
    evidenceDate: "2023-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-LEX-02",
    title: "Contextual Antonyms, Synonyms & Register Nuance",
    skillArea: "LEXIS_STRUCTURE",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Selecting dictionary synonyms that clash with the grammatical register or tone of the sentence context (e.g. confusing 'frugal' with 'stingy' or 'notorious' with 'famous').",
    evidenceSource: "JAMB UTME Use of English Section 1; WAEC Paper 1 Section 1 & 2",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-LEX-03",
    title: "Frequently Confused & Misspelt Homophones",
    skillArea: "LEXIS_STRUCTURE",
    levels: ["Primary 4-6", "JSS 1-3", "SS 1-3", "WAEC Prep"],
    description:
      "Confusing orthographically and phonetically similar words: principal/principle, stationary/stationery, affect/effect, lose/loose, council/counsel, practice/practise.",
    evidenceSource: "WAEC Spelling Deductions Guideline; National Common Entrance Examination (NCEE) English",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-LEX-04",
    title: "Phrasal Verbs & Particle Separability",
    skillArea: "LEXIS_STRUCTURE",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Misidentifying the non-literal meanings of particle verbs: put up with (tolerate), call off (cancel), look into (investigate), make out (discern).",
    evidenceSource: "JAMB Cloze Test & Sentence Completion Analysis",
    evidenceDate: "2023-2024",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },

  // 3. COMPREHENSION AND SUMMARY
  {
    code: "WA-ENG-CMP-01",
    title: "Summary Writing: Verbatim Lifting vs Independent Paraphrase",
    skillArea: "COMPREHENSION_SUMMARY",
    levels: ["SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Copying word-for-word sentences directly from the source passage. WAEC marking schemes explicitly award zero (0) marks for lifted sentences, regardless of content relevance.",
    evidenceSource: "WAEC Chief Examiners' Report (English Paper 2 Section B Summary, 2020-2023)",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-CMP-02",
    title: "Summary Writing: Elimination of Extraneous Examples & Figures",
    skillArea: "COMPREHENSION_SUMMARY",
    levels: ["SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Incorporating rhetorical questions, parenthetical illustrations, metaphors, or supporting statistics into summary sentences, incurring automatic penalty deductions.",
    evidenceSource: "WAEC Marking Guide for Summary Writing (Rule on Extraneous Details)",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-CMP-03",
    title: "Inference, Deductive Reasoning & Implied Meaning",
    skillArea: "COMPREHENSION_SUMMARY",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to deduce authorial intention, situational irony, or underlying thematic implications not explicitly stated verbatim in the text.",
    evidenceSource: "JAMB UTME Reading Comprehension Specification; Cambridge IGCSE English 0500",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-CMP-04",
    title: "Authorial Tone, Mood & Attitude Discrimination",
    skillArea: "COMPREHENSION_SUMMARY",
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to characterize the author's prevailing emotional posture (sarcastic, solemn, laudatory, detached, indignant, melancholy) from textual stylistic markers.",
    evidenceSource: "JAMB UTME Use of English Comprehension Questions Breakdown",
    evidenceDate: "2023",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-CMP-05",
    title: "Grammatical Name & Function in Passage Context",
    skillArea: "COMPREHENSION_SUMMARY",
    levels: ["SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Failure to isolate the exact clausal or phrasal category (noun clause, relative clause, adverbial clause of reason/time) and formulate the exact syntactic relationship (e.g. 'Subject of the verb...').",
    evidenceSource: "WAEC English Paper 2 Section A Standard Clause Function Sub-Question",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 4. ORAL ENGLISH
  {
    code: "WA-ENG-ORL-01",
    title: "Monophthong Vowel Contrasts (Long vs Short Vowels)",
    skillArea: "ORAL_ENGLISH",
    levels: ["Primary 4-6", "JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Absence of quantitative vowel length in native Nigerian tonal languages leads candidates to confuse /iː/ (seat) with /ɪ/ (sit), /uː/ (pool) with /ʊ/ (pull), and /ɔː/ (port) with /ɒ/ (pot).",
    evidenceSource: "WAEC Paper 3 Test of Orals Examiner Reports; British Council Nigeria Phonology Study",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ORL-02",
    title: "Consonant Contrasts: Dental Fricative Substitution (/θ/ & /ð/)",
    skillArea: "ORAL_ENGLISH",
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Substituting alveolar stops /t/ and /d/ for dental fricatives /θ/ (thin) and /ð/ (then), confusing word pairs in oral rhyme and sound identification tests.",
    evidenceSource: "WAEC Paper 3 Section 2 Consonants; JAMB UTME Oral Phonetics Review",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ORL-03",
    title: "Silent Letters & Phonemic Discrepancy",
    skillArea: "ORAL_ENGLISH",
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Pronouncing silent orthographic consonants: the 'b' in debt/doubt/plumber, the 'k' in knife/knight, the 'p' in receipt/psychology, the 'w' in sword/answer.",
    evidenceSource: "WAEC Paper 3 Test of Orals Section 1; BECE Speech Work Guidelines",
    evidenceDate: "2022",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ORL-04",
    title: "Syllabic Stress Placement: Noun-Verb Alternation",
    skillArea: "ORAL_ENGLISH",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failure to shift lexical stress from the initial syllable in disyllabic nouns to the final syllable in verbs (e.g. 'CON-duct' [n] vs 'con-DUCT' [v]; 'RE-cord' [n] vs 're-CORD' [v]).",
    evidenceSource: "JAMB UTME Oral English Syllabus; WAEC Paper 3 Section 3",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ORL-05",
    title: "Emphatic & Contrastive Sentence Stress Interpretation",
    skillArea: "ORAL_ENGLISH",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Misidentifying the logical presupposition of capitalized emphatic words in dialogues (e.g. 'Musa borrowed a BLUE bicycle' presupposes someone else had a different color, not a different vehicle).",
    evidenceSource: "JAMB UTME 5-Item Emphatic Stress Component (2020-2024)",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ORL-06",
    title: "Rhyme Scheme & Phonemic Ending Alignment",
    skillArea: "ORAL_ENGLISH",
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep"],
    description:
      "Relying erroneously on visual spelling patterns rather than phonemic sound terminations to ascertain true rhyming pairs (e.g. falsely matching 'cough' with 'dough').",
    evidenceSource: "WAEC Paper 3 Section 5 Rhymes; NERDC JSS Oral English",
    evidenceDate: "2023",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },

  // 5. ESSAY COMPOSITION
  {
    code: "WA-ENG-ESS-01",
    title: "Formal vs Informal Letter Format & Salutation Alignment",
    skillArea: "ESSAY_COMPOSITION",
    levels: ["JSS 2-3", "SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Mismatching letter formats: appending double addresses to informal letters, or writing 'Yours sincerely' after 'Dear Sir' in formal applications. Incurs heavy organization mark deductions.",
    evidenceSource: "WAEC Continuous Writing Marking Scheme (Organization 10 Marks)",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ESS-02",
    title: "Paragraphing: Topic Sentences & Transitional Cohesion",
    skillArea: "ESSAY_COMPOSITION",
    levels: ["JSS 1-3", "SS 1-3", "WAEC Prep"],
    description:
      "Writing continuous prose blocks without paragraph divisions, or constructing single-sentence paragraphs devoid of internal supporting sentences and connective signposts.",
    evidenceSource: "WAEC Paper 2 Continuous Writing Rubric; BECE English Marking Guide",
    evidenceDate: "2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-ESS-03",
    title: "Argumentative Essay Architecture & Counter-Argument Rebuttal",
    skillArea: "ESSAY_COMPOSITION",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Presenting one-sided subjective rants without stating verifiable grounds, conceding valid counterpoints, and logically demolishing opposing claims.",
    evidenceSource: "WAEC Continuous Writing Section A (Argumentative Topics)",
    evidenceDate: "2022-2024",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-ESS-04",
    title: "Tone & Register Appropriateness in Official Petitions & Articles",
    skillArea: "ESSAY_COMPOSITION",
    levels: ["SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Using informal SMS abbreviations, slang, or overly familiar phrasing in formal letters and public articles, losing essential Expression marks.",
    evidenceSource: "WAEC Paper 2 Marking Guidelines (Expression & Register Penalties)",
    evidenceDate: "2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 6. LITERARY ANALYSIS
  {
    code: "WA-ENG-LIT-01",
    title: "Identification & Interpretation of Figures of Speech",
    skillArea: "LITERARY_ANALYSIS",
    levels: ["JSS 3", "SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing metaphor with simile, synecdoche with metonymy, or hyperbole with euphemism in poetry excerpts and literary comprehension questions.",
    evidenceSource: "WAEC Literature-in-English & English Paper 2 Context Questions",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-ENG-LIT-02",
    title: "Poetic Devices & Structural Mechanics (Alliteration, Enjambment)",
    skillArea: "LITERARY_ANALYSIS",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to identify enjambment (run-on lines) versus end-stopped lines, or analyzing how alliteration and onomatopoeia reinforce thematic tension.",
    evidenceSource: "JAMB UTME Literature-in-English Specification; Cambridge IGCSE 0475",
    evidenceDate: "2023",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-LIT-03",
    title: "Dramatic Conventions: Irony, Soliloquy & Aside",
    skillArea: "LITERARY_ANALYSIS",
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to distinguish dramatic irony from situational irony, or articulating the psychological purpose of a soliloquy compared to an aside in drama.",
    evidenceSource: "WAEC General Knowledge of Literature Sub-Questions",
    evidenceDate: "2022-2024",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-ENG-LIT-04",
    title: "Thematic Deduction vs Narrative Plot Recount",
    skillArea: "LITERARY_ANALYSIS",
    levels: ["SS 1-3", "WAEC Prep", "NECO SSCE"],
    description:
      "Recounting the sequence of events ('what happened') instead of critically evaluating the underlying sociological, moral, or philosophical themes.",
    evidenceSource: "WAEC Literature Paper 2 Essay Marking Rubric",
    evidenceDate: "2022-2024",
    confidence: "moderate",
    priority: false,
    needsReview: true,
  },
];

export function getWeakAreaByCode(code: string): WeakAreaRecord | undefined {
  return ENGLISH_WEAK_AREAS.find((w) => w.code === code);
}

export function listWeakAreasBySkill(skill: EnglishSkillArea): WeakAreaRecord[] {
  return ENGLISH_WEAK_AREAS.filter((w) => w.skillArea === skill);
}

export function listPriorityWeakAreas(): WeakAreaRecord[] {
  return ENGLISH_WEAK_AREAS.filter((w) => w.priority);
}

