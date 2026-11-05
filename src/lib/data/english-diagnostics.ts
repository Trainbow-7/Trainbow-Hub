/**
 * Trainbow HUB: English Academy Diagnostic Test Question Banks
 *
 * Each course has a targeted diagnostic test (12 to 15 original questions)
 * tagged with specific WeakArea codes to construct personal remediation paths.
 */

import { WeakAreaRecord, getWeakAreaByCode } from "./english-deficiency-map";

export interface DiagnosticQuestion {
  id: string;
  courseSlug: string;
  prompt: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  weakAreaCode: string;
  recommendedLessonSlug: string;
}

export interface CourseDiagnostic {
  courseSlug: string;
  title: string;
  description: string;
  passPercentage: number;
  questions: DiagnosticQuestion[];
}

export const ENGLISH_DIAGNOSTICS: Record<string, CourseDiagnostic> = {
  // --------------------------------------------------------------------------
  // DIAGNOSTIC 1: Primary English Foundations 1-3
  // --------------------------------------------------------------------------
  "primary-english-foundations-1-3": {
    courseSlug: "primary-english-foundations-1-3",
    title: "Primary 1-3 English Foundations Diagnostic",
    description: "Check your pupil's early reading sounds, sight words, naming words, and sentence punctuation.",
    passPercentage: 60,
    questions: [
      {
        id: "diag_pri13_1",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which word has the short /æ/ vowel sound like in 'cat'?",
        options: [
          { id: "A", text: "bat" },
          { id: "B", text: "bet" },
          { id: "C", text: "bit" },
          { id: "D", text: "but" },
        ],
        correctOptionId: "A",
        explanation: "'Bat' and 'cat' share the short vowel sound /æ/.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "short-vowel-sounds-phonics",
      },
      {
        id: "diag_pri13_2",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Choose the word with the /st/ blend at the beginning:",
        options: [
          { id: "A", text: "stop" },
          { id: "B", text: "shop" },
          { id: "C", text: "chop" },
          { id: "D", text: "drop" },
        ],
        correctOptionId: "A",
        explanation: "'Stop' begins with the consonant blend /st/.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "blending-consonants-phonics",
      },
      {
        id: "diag_pri13_3",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which sight word completes the sentence: 'The children ___ playing outside.'?",
        options: [
          { id: "A", text: "were" },
          { id: "B", text: "was" },
          { id: "C", text: "is" },
          { id: "D", text: "be" },
        ],
        correctOptionId: "A",
        explanation: "Plural subject 'children' takes the past sight word 'were'.",
        weakAreaCode: "WA-ENG-LEX-03",
        recommendedLessonSlug: "high-frequency-sight-words",
      },
      {
        id: "diag_pri13_4",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which of the following is a noun naming a person?",
        options: [
          { id: "A", text: "farmer" },
          { id: "B", text: "farm" },
          { id: "C", text: "plant" },
          { id: "D", text: "green" },
        ],
        correctOptionId: "A",
        explanation: "'Farmer' names a person, so it is a personal noun.",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "naming-words-nouns-primary",
      },
      {
        id: "diag_pri13_5",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which sentence starts with a capital letter and ends with a full stop?",
        options: [
          { id: "A", text: "My mother baked a cake." },
          { id: "B", text: "my mother baked a cake." },
          { id: "C", text: "My mother baked a cake" },
          { id: "D", text: "my mother baked a cake" },
        ],
        correctOptionId: "A",
        explanation: "Sentence A has both the uppercase opening and the full stop closing.",
        weakAreaCode: "WA-ENG-GRM-05",
        recommendedLessonSlug: "capital-letters-and-full-stops",
      },
      {
        id: "diag_pri13_6",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "In a story, what does 'who' ask about?",
        options: [
          { id: "A", text: "The person or animal character" },
          { id: "B", text: "The place where it happened" },
          { id: "C", text: "The time of day" },
          { id: "D", text: "The reason why" },
        ],
        correctOptionId: "A",
        explanation: "'Who' asks about characters in a passage.",
        weakAreaCode: "WA-ENG-CMP-03",
        recommendedLessonSlug: "reading-short-stories-details",
      },
      {
        id: "diag_pri13_7",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which word has the short /e/ sound like in 'bed'?",
        options: [
          { id: "A", text: "pen" },
          { id: "B", text: "pan" },
          { id: "C", text: "pin" },
          { id: "D", text: "pun" },
        ],
        correctOptionId: "A",
        explanation: "'Pen' contains the short /e/ vowel sound.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "short-vowel-sounds-phonics",
      },
      {
        id: "diag_pri13_8",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Choose the correct spelling for the opposite of 'here':",
        options: [
          { id: "A", text: "there" },
          { id: "B", text: "their" },
          { id: "C", text: "they're" },
          { id: "D", text: "ther" },
        ],
        correctOptionId: "A",
        explanation: "'There' points to a location, opposite of 'here'.",
        weakAreaCode: "WA-ENG-LEX-03",
        recommendedLessonSlug: "high-frequency-sight-words",
      },
      {
        id: "diag_pri13_9",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "What is the plural of 'pencil'?",
        options: [
          { id: "A", text: "pencils" },
          { id: "B", text: "penciles" },
          { id: "C", text: "pencilen" },
          { id: "D", text: "pencilis" },
        ],
        correctOptionId: "A",
        explanation: "Add 's' to make regular nouns plural: pencil -> pencils.",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "naming-words-nouns-primary",
      },
      {
        id: "diag_pri13_10",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "How should the pronoun 'I' be written in: 'My sister and ___ like mangoes.'?",
        options: [
          { id: "A", text: "I (capital letter)" },
          { id: "B", text: "i (small letter)" },
          { id: "C", text: "me" },
          { id: "D", text: "myself" },
        ],
        correctOptionId: "A",
        explanation: "The personal pronoun 'I' is always written as a capital letter.",
        weakAreaCode: "WA-ENG-GRM-05",
        recommendedLessonSlug: "capital-letters-and-full-stops",
      },
      {
        id: "diag_pri13_11",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "Which sentence avoids repeating 'and' too many times?",
        options: [
          { id: "A", text: "I like reading. I also enjoy drawing pictures." },
          { id: "B", text: "I like reading and I like drawing and I like painting and I like school." },
          { id: "C", text: "Reading and drawing and painting is good and fine." },
          { id: "D", text: "I reading and drawing." },
        ],
        correctOptionId: "A",
        explanation: "Option A uses clean separate sentences instead of run-on 'and' chains.",
        weakAreaCode: "WA-ENG-ESS-02",
        recommendedLessonSlug: "writing-short-sentences-myself",
      },
      {
        id: "diag_pri13_12",
        courseSlug: "primary-english-foundations-1-3",
        prompt: "What punctuation mark belongs at the end of: 'Is this your red ball'?",
        options: [
          { id: "A", text: "Question mark (?)" },
          { id: "B", text: "Full stop (.)" },
          { id: "C", text: "Comma (,)" },
          { id: "D", text: "Exclamation mark (!)" },
        ],
        correctOptionId: "A",
        explanation: "Asking sentences must terminate with a question mark (?).",
        weakAreaCode: "WA-ENG-GRM-05",
        recommendedLessonSlug: "capital-letters-and-full-stops",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // DIAGNOSTIC 2: Primary English Foundations 4-6 (Common Entrance)
  // --------------------------------------------------------------------------
  "primary-english-foundations-4-6": {
    courseSlug: "primary-english-foundations-4-6",
    title: "Common Entrance English Diagnostic (Primary 4-6)",
    description: "Assess parts of speech, past tense verbs, homophones, reading inference, and letter writing.",
    passPercentage: 60,
    questions: [
      {
        id: "diag_pri46_1",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "In 'The quick brown fox jumped over the fence', what part of speech is 'quick'?",
        options: [
          { id: "A", text: "Adjective" },
          { id: "B", text: "Adverb" },
          { id: "C", text: "Verb" },
          { id: "D", text: "Noun" },
        ],
        correctOptionId: "A",
        explanation: "'Quick' describes the noun 'fox', making it an adjective.",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "identifying-parts-of-speech-in-context",
      },
      {
        id: "diag_pri46_2",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "What is the past tense of the irregular verb 'bring'?",
        options: [
          { id: "A", text: "brought" },
          { id: "B", text: "bringed" },
          { id: "C", text: "brang" },
          { id: "D", text: "broughted" },
        ],
        correctOptionId: "A",
        explanation: "'Bring' changes irregularly to 'brought' in the simple past.",
        weakAreaCode: "WA-ENG-GRM-03",
        recommendedLessonSlug: "irregular-past-tense-verbs-primary",
      },
      {
        id: "diag_pri46_3",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Which homophone means 'belonging to them'?",
        options: [
          { id: "A", text: "their" },
          { id: "B", text: "there" },
          { id: "C", text: "they're" },
          { id: "D", text: "there's" },
        ],
        correctOptionId: "A",
        explanation: "'Their' is possessive, showing ownership.",
        weakAreaCode: "WA-ENG-LEX-03",
        recommendedLessonSlug: "confused-homophones-primary",
      },
      {
        id: "diag_pri46_4",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Where should the writer's address appear in an informal letter?",
        options: [
          { id: "A", text: "Top right-hand corner" },
          { id: "B", text: "Top left-hand corner" },
          { id: "C", text: "Bottom left margin" },
          { id: "D", text: "Middle of the page" },
        ],
        correctOptionId: "A",
        explanation: "Informal letters place the single sender address at the top right.",
        weakAreaCode: "WA-ENG-ESS-01",
        recommendedLessonSlug: "informal-letter-writing-primary",
      },
      {
        id: "diag_pri46_5",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Which pair of words share the exact same long vowel /iː/?",
        options: [
          { id: "A", text: "meat and meet" },
          { id: "B", text: "seat and sit" },
          { id: "C", text: "bean and bin" },
          { id: "D", text: "feet and fit" },
        ],
        correctOptionId: "A",
        explanation: "'Meat' and 'meet' are homophones both pronounced with long /iː/.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "contrasting-vowel-sounds-primary",
      },
      {
        id: "diag_pri46_6",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "She did not ___ her homework yesterday evening.",
        options: [
          { id: "A", text: "do" },
          { id: "B", text: "did" },
          { id: "C", text: "done" },
          { id: "D", text: "does" },
        ],
        correctOptionId: "A",
        explanation: "After auxiliary 'did not', the base verb 'do' is required.",
        weakAreaCode: "WA-ENG-GRM-03",
        recommendedLessonSlug: "irregular-past-tense-verbs-primary",
      },
      {
        id: "diag_pri46_7",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "The soup was ___ hot for the baby to eat.",
        options: [
          { id: "A", text: "too" },
          { id: "B", text: "to" },
          { id: "C", text: "two" },
          { id: "D", text: "toe" },
        ],
        correctOptionId: "A",
        explanation: "'Too' means excessively or more than acceptable.",
        weakAreaCode: "WA-ENG-LEX-03",
        recommendedLessonSlug: "confused-homophones-primary",
      },
      {
        id: "diag_pri46_8",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Which word in 'The dancer moved *gracefully*' is an adverb?",
        options: [
          { id: "A", text: "gracefully" },
          { id: "B", text: "dancer" },
          { id: "C", text: "moved" },
          { id: "D", text: "The" },
        ],
        correctOptionId: "A",
        explanation: "'Gracefully' tells how the dancer moved (manner adverb).",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "identifying-parts-of-speech-in-context",
      },
      {
        id: "diag_pri46_9",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "How many syllables are in the word 'education'?",
        options: [
          { id: "A", text: "4" },
          { id: "B", text: "3" },
          { id: "C", text: "5" },
          { id: "D", text: "2" },
        ],
        correctOptionId: "A",
        explanation: "Ed-u-ca-tion has 4 rhythmic beats.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "contrasting-vowel-sounds-primary",
      },
      {
        id: "diag_pri46_10",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Which closing is NEVER acceptable in an informal letter to your mother?",
        options: [
          { id: "A", text: "Yours faithfully," },
          { id: "B", text: "Your loving son," },
          { id: "C", text: "Yours affectionately," },
          { id: "D", text: "Your daughter," },
        ],
        correctOptionId: "A",
        explanation: "'Yours faithfully' is formal only.",
        weakAreaCode: "WA-ENG-ESS-01",
        recommendedLessonSlug: "informal-letter-writing-primary",
      },
      {
        id: "diag_pri46_11",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "In reading comprehension, what is an 'inference'?",
        options: [
          { id: "A", text: "A logical conclusion deduced from clues in the text" },
          { id: "B", text: "Copying the first line of the passage" },
          { id: "C", text: "Looking up words in a dictionary" },
          { id: "D", text: "Counting how many words are in the story" },
        ],
        correctOptionId: "A",
        explanation: "Inference means reading between the lines using clues.",
        weakAreaCode: "WA-ENG-CMP-03",
        recommendedLessonSlug: "finding-facts-and-inferences-primary",
      },
      {
        id: "diag_pri46_12",
        courseSlug: "primary-english-foundations-4-6",
        prompt: "Yesterday, the bird ___ over our rooftop.",
        options: [
          { id: "A", text: "flew" },
          { id: "B", text: "flown" },
          { id: "C", text: "flyed" },
          { id: "D", text: "flying" },
        ],
        correctOptionId: "A",
        explanation: "Past tense of 'fly' is 'flew'.",
        weakAreaCode: "WA-ENG-GRM-03",
        recommendedLessonSlug: "irregular-past-tense-verbs-primary",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // DIAGNOSTIC 5: WAEC & NECO SSCE English Language Mastery
  // --------------------------------------------------------------------------
  "waec-neco-ssce-english-mastery": {
    courseSlug: "waec-neco-ssce-english-mastery",
    title: "WAEC & NECO SSCE English Diagnostic",
    description: "Benchmark your readiness across Lexis, Summary Writing rules, Continuous Writing format, and Oral Phonetics.",
    passPercentage: 60,
    questions: [
      {
        id: "diag_waec_1",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "The new academic curriculum comprises ___ twelve foundational subjects.",
        options: [
          { id: "A", text: "no preposition (comprises twelve subjects)" },
          { id: "B", text: "of" },
          { id: "C", text: "with" },
          { id: "D", text: "in" },
        ],
        correctOptionId: "A",
        explanation: "'Comprise' takes no preposition in active voice.",
        weakAreaCode: "WA-ENG-GRM-04",
        recommendedLessonSlug: "waec-paper-1-lexis-and-collocations",
      },
      {
        id: "diag_waec_2",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "What mark does a WAEC candidate receive for a summary sentence copied word-for-word from the text?",
        options: [
          { id: "A", text: "Zero (0) marks" },
          { id: "B", text: "Half marks" },
          { id: "C", text: "Full marks" },
          { id: "D", text: "Minus 5 marks" },
        ],
        correctOptionId: "A",
        explanation: "WAEC marking schemes strictly award zero for verbatim lifting in summary writing.",
        weakAreaCode: "WA-ENG-CMP-01",
        recommendedLessonSlug: "waec-summary-writing-zero-lifting",
      },
      {
        id: "diag_waec_3",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "In which of the following words is the letter 'b' silent?",
        options: [
          { id: "A", text: "subtle" },
          { id: "B", text: "table" },
          { id: "C", text: "marble" },
          { id: "D", text: "bless" },
        ],
        correctOptionId: "A",
        explanation: "'Subtle' is pronounced /sʌtl/; the 'b' is silent.",
        weakAreaCode: "WA-ENG-ORL-03",
        recommendedLessonSlug: "waec-paper-3-test-of-orals-mastery",
      },
      {
        id: "diag_waec_4",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "Neither the players nor the coach ___ satisfied with the tournament venue.",
        options: [
          { id: "A", text: "was" },
          { id: "B", text: "were" },
          { id: "C", text: "are" },
          { id: "D", text: "have been" },
        ],
        correctOptionId: "A",
        explanation: "By proximity rule, 'coach' is singular and nearest the verb, taking 'was'.",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "advanced-concord-proximity-notional",
      },
      {
        id: "diag_waec_5",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "What is the recommended minimum word count for a WAEC Paper 2 Section A essay?",
        options: [
          { id: "A", text: "450 words" },
          { id: "B", text: "250 words" },
          { id: "C", text: "750 words" },
          { id: "D", text: "300 words" },
        ],
        correctOptionId: "A",
        explanation: "WAEC essay rubrics stipulate not less than 450 words.",
        weakAreaCode: "WA-ENG-ESS-01",
        recommendedLessonSlug: "waec-continuous-writing-marking-scheme",
      },
      {
        id: "diag_waec_6",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "Most Nigerian candidates prefer sciences ___ commercial arts.",
        options: [
          { id: "A", text: "to" },
          { id: "B", text: "than" },
          { id: "C", text: "more than" },
          { id: "D", text: "instead of" },
        ],
        correctOptionId: "A",
        explanation: "'Prefer' takes the preposition 'to' (prefer X to Y).",
        weakAreaCode: "WA-ENG-GRM-04",
        recommendedLessonSlug: "waec-paper-1-lexis-and-collocations",
      },
      {
        id: "diag_waec_7",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "What should you do with metaphors and illustrative examples in WAEC summary writing?",
        options: [
          { id: "A", text: "Eliminate them completely" },
          { id: "B", text: "Quote them in full" },
          { id: "C", text: "Underline them" },
          { id: "D", text: "Count them" },
        ],
        correctOptionId: "A",
        explanation: "Extraneous examples and figures of speech must be excluded from summary answers.",
        weakAreaCode: "WA-ENG-CMP-02",
        recommendedLessonSlug: "waec-summary-writing-zero-lifting",
      },
      {
        id: "diag_waec_8",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "Which disyllabic word has primary stress on the SECOND syllable?",
        options: [
          { id: "A", text: "pro-JECT [verb]" },
          { id: "B", text: "PRO-ject [noun]" },
          { id: "C", text: "TA-ble" },
          { id: "D", text: "TEACH-er" },
        ],
        correctOptionId: "A",
        explanation: "Two-syllable verbs take primary stress on syllable 2: pro-JECT.",
        weakAreaCode: "WA-ENG-ORL-04",
        recommendedLessonSlug: "waec-paper-3-test-of-orals-mastery",
      },
      {
        id: "diag_waec_9",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "What complimentary close must accompany a formal letter starting with 'Dear Sir,'?",
        options: [
          { id: "A", text: "Yours faithfully," },
          { id: "B", text: "Yours sincerely," },
          { id: "C", text: "Your obedient servant," },
          { id: "D", text: "Warm regards," },
        ],
        correctOptionId: "A",
        explanation: "'Dear Sir' strictly aligns with 'Yours faithfully,'.",
        weakAreaCode: "WA-ENG-ESS-01",
        recommendedLessonSlug: "waec-continuous-writing-marking-scheme",
      },
      {
        id: "diag_waec_10",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "The principal congratulated the students ___ their outstanding examination performance.",
        options: [
          { id: "A", text: "on" },
          { id: "B", text: "for" },
          { id: "C", text: "about" },
          { id: "D", text: "with" },
        ],
        correctOptionId: "A",
        explanation: "'Congratulate' collocates strictly with 'on'.",
        weakAreaCode: "WA-ENG-GRM-04",
        recommendedLessonSlug: "waec-paper-1-lexis-and-collocations",
      },
      {
        id: "diag_waec_11",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "In '*What she said at the tribunal* shocked the public', what is the function of the noun clause?",
        options: [
          { id: "A", text: "Subject of the verb 'shocked'" },
          { id: "B", text: "Object of the verb 'said'" },
          { id: "C", text: "Complement of 'tribunal'" },
          { id: "D", text: "Adverbial modifier" },
        ],
        correctOptionId: "A",
        explanation: "The entire noun clause stands in the subject position of 'shocked'.",
        weakAreaCode: "WA-ENG-CMP-05",
        recommendedLessonSlug: "clauses-and-grammatical-functions-waec",
      },
      {
        id: "diag_waec_12",
        courseSlug: "waec-neco-ssce-english-mastery",
        prompt: "Which word rhymes with 'sword' (/sɔːd/)?",
        options: [
          { id: "A", text: "board" },
          { id: "B", text: "word" },
          { id: "C", text: "weird" },
          { id: "D", text: "hard" },
        ],
        correctOptionId: "A",
        explanation: "'Sword' (/sɔːd/) rhymes with 'board' (/bɔːd/).",
        weakAreaCode: "WA-ENG-ORL-06",
        recommendedLessonSlug: "waec-paper-3-test-of-orals-mastery",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // DIAGNOSTIC 6: JAMB UTME Use of English Complete
  // --------------------------------------------------------------------------
  "jamb-utme-use-of-english-complete": {
    courseSlug: "jamb-utme-use-of-english-complete",
    title: "JAMB UTME Use of English Diagnostic",
    description: "Evaluate your CBT speed, cloze passage logic, emphatic stress mastery, and contextual vocabulary.",
    passPercentage: 60,
    questions: [
      {
        id: "diag_jamb_1",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Statement: 'The governor donated TEN new buses to the university.' Which question does this statement answer?",
        options: [
          { id: "A", text: "Did the governor donate five new buses to the university?" },
          { id: "B", text: "Did the senator donate ten new buses to the university?" },
          { id: "C", text: "Did the governor sell ten new buses to the university?" },
          { id: "D", text: "Did the governor donate ten new buses to the hospital?" },
        ],
        correctOptionId: "A",
        explanation: "The capitalized word is 'TEN'. The question must challenge ONLY the quantity.",
        weakAreaCode: "WA-ENG-ORL-05",
        recommendedLessonSlug: "jamb-emphatic-stress-mastery",
      },
      {
        id: "diag_jamb_2",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "If I ___ in your position, I would report the incident immediately.",
        options: [
          { id: "A", text: "were" },
          { id: "B", text: "was" },
          { id: "C", text: "am" },
          { id: "D", text: "have been" },
        ],
        correctOptionId: "A",
        explanation: "Hypothetical conditional (Type 2) requires the past subjunctive 'were'.",
        weakAreaCode: "WA-ENG-GRM-08",
        recommendedLessonSlug: "conditional-clauses-and-subjunctive-mood",
      },
      {
        id: "diag_jamb_3",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Choose the word OPPOSITE in meaning to the underlined word: 'The company entered a *nascent* market.'",
        options: [
          { id: "A", text: "mature" },
          { id: "B", text: "youthful" },
          { id: "C", text: "developing" },
          { id: "D", text: "novel" },
        ],
        correctOptionId: "A",
        explanation: "'Nascent' means newly born/developing; its true antonym is 'mature'.",
        weakAreaCode: "WA-ENG-LEX-02",
        recommendedLessonSlug: "jamb-comprehension-speed-and-inference",
      },
      {
        id: "diag_jamb_4",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Statement: 'Amina bought a RED bicycle yesterday.' Which question is contradicted by this statement?",
        options: [
          { id: "A", text: "Did Amina buy a blue bicycle yesterday?" },
          { id: "B", text: "Did Zainab buy a red bicycle yesterday?" },
          { id: "C", text: "Did Amina sell a red bicycle yesterday?" },
          { id: "D", text: "Did Amina buy a red bicycle last week?" },
        ],
        correctOptionId: "A",
        explanation: "Stressed 'RED' corrects the alternative color 'blue'.",
        weakAreaCode: "WA-ENG-ORL-05",
        recommendedLessonSlug: "jamb-emphatic-stress-mastery",
      },
      {
        id: "diag_jamb_5",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "The principal, as well as the teachers, ___ attending the zonal conference.",
        options: [
          { id: "A", text: "is" },
          { id: "B", text: "are" },
          { id: "C", text: "were" },
          { id: "D", text: "have been" },
        ],
        correctOptionId: "A",
        explanation: "The true grammatical subject is 'The principal' (singular), taking 'is'.",
        weakAreaCode: "WA-ENG-GRM-01",
        recommendedLessonSlug: "advanced-concord-proximity-notional",
      },
      {
        id: "diag_jamb_6",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "In which of the following words is the vowel sound /iː/ (long vowel) found?",
        options: [
          { id: "A", text: "receive" },
          { id: "B", text: "hymn" },
          { id: "C", text: "busy" },
          { id: "D", text: "guilt" },
        ],
        correctOptionId: "A",
        explanation: "'Receive' is pronounced /rɪˈsiːv/ with the long vowel /iː/.",
        weakAreaCode: "WA-ENG-ORL-01",
        recommendedLessonSlug: "monophthongs-long-vs-short-vowels",
      },
      {
        id: "diag_jamb_7",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Choose the standard English idiom to replace 'rub minds':",
        options: [
          { id: "A", text: "exchange views / brainstorm" },
          { id: "B", text: "touch heads" },
          { id: "C", text: "crack brains" },
          { id: "D", text: "rub thoughts" },
        ],
        correctOptionId: "A",
        explanation: "'Rub minds' is a Nigerian Pidgin calque; standard English uses 'exchange views' or 'brainstorm'.",
        weakAreaCode: "WA-ENG-LEX-01",
        recommendedLessonSlug: "waec-paper-1-lexis-and-collocations",
      },
      {
        id: "diag_jamb_8",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "It is high time you ___ serious with your academic studies.",
        options: [
          { id: "A", text: "became" },
          { id: "B", text: "become" },
          { id: "C", text: "should become" },
          { id: "D", text: "have become" },
        ],
        correctOptionId: "A",
        explanation: "'It is high time' strictly takes the past subjunctive form 'became'.",
        weakAreaCode: "WA-ENG-GRM-08",
        recommendedLessonSlug: "conditional-clauses-and-subjunctive-mood",
      },
      {
        id: "diag_jamb_9",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Which sentence fixes the dangling modifier in: 'Walking into the house, the light went off.'?",
        options: [
          { id: "A", text: "Walking into the house, I noticed the light go off." },
          { id: "B", text: "Walking into the house, the power was cut." },
          { id: "C", text: "Walking into the house, dark was everywhere." },
          { id: "D", text: "Walking into the house, off went the light." },
        ],
        correctOptionId: "A",
        explanation: "The human subject 'I' must immediately follow the introductory participle.",
        weakAreaCode: "WA-ENG-GRM-06",
        recommendedLessonSlug: "dangling-modifiers-and-sentence-mechanics",
      },
      {
        id: "diag_jamb_10",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "Statement: 'The committee awarded the prize to the YOUNGEST candidate.'",
        options: [
          { id: "A", text: "Did the committee award the prize to the oldest candidate?" },
          { id: "B", text: "Did the jury award the prize to the youngest candidate?" },
          { id: "C", text: "Did the committee refuse the prize to the youngest candidate?" },
          { id: "D", text: "Did the committee award the trophy to the youngest candidate?" },
        ],
        correctOptionId: "A",
        explanation: "Capitalized 'YOUNGEST' challenges the opposing age superlative 'oldest'.",
        weakAreaCode: "WA-ENG-ORL-05",
        recommendedLessonSlug: "jamb-emphatic-stress-mastery",
      },
      {
        id: "diag_jamb_11",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "The suspect was accused ___ conspiracy and armed robbery.",
        options: [
          { id: "A", text: "of" },
          { id: "B", text: "for" },
          { id: "C", text: "with" },
          { id: "D", text: "about" },
        ],
        correctOptionId: "A",
        explanation: "Collocation: 'accused of a crime' (unlike 'charged with').",
        weakAreaCode: "WA-ENG-GRM-04",
        recommendedLessonSlug: "waec-paper-1-lexis-and-collocations",
      },
      {
        id: "diag_jamb_12",
        courseSlug: "jamb-utme-use-of-english-complete",
        prompt: "In JAMB Use of English, how many questions are allocated to comprehension passages?",
        options: [
          { id: "A", text: "10 questions" },
          { id: "B", text: "25 questions" },
          { id: "C", text: "5 questions" },
          { id: "D", text: "30 questions" },
        ],
        correctOptionId: "A",
        explanation: "JAMB sets 1 to 2 comprehension passages totaling 10 questions.",
        weakAreaCode: "WA-ENG-CMP-03",
        recommendedLessonSlug: "jamb-comprehension-speed-and-inference",
      },
    ],
  },
};

export function getCourseDiagnostic(courseSlug: string): CourseDiagnostic | undefined {
  if (ENGLISH_DIAGNOSTICS[courseSlug]) {
    return ENGLISH_DIAGNOSTICS[courseSlug];
  }

  // Fallback diagnostic mapped from the closest level diagnostic
  if (courseSlug.includes("pri")) {
    return ENGLISH_DIAGNOSTICS["primary-english-foundations-4-6"];
  }
  if (courseSlug.includes("jss")) {
    return ENGLISH_DIAGNOSTICS["primary-english-foundations-4-6"];
  }
  if (courseSlug.includes("jamb")) {
    return ENGLISH_DIAGNOSTICS["jamb-utme-use-of-english-complete"];
  }
  return ENGLISH_DIAGNOSTICS["waec-neco-ssce-english-mastery"];
}

