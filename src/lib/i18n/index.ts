export type LocaleCode = "en" | "yo" | "ha" | "ig" | "pcm";

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  nav: {
    academy: string;
    subjects: string;
    ai: string;
    tutors: string;
    music: string;
    schools: string;
    pricing: string;
    about: string;
    guardianPortal: string;
    login: string;
    register: string;
    logout: string;
  };
  common: {
    verified: string;
    active: string;
    dataSaver: string;
    offlineMode: string;
    language: string;
    search: string;
    allSubjects: string;
    bookLesson: string;
    viewProfile: string;
    save: string;
    cancel: string;
    success: string;
  };
  school: {
    title: string;
    subtitle: string;
    seatCapacity: string;
    seatsUsed: string;
    availableSeats: string;
    cohorts: string;
    students: string;
    bulkEnroll: string;
    averageScore: string;
    completionRate: string;
  };
}

export const SUPPORTED_LOCALES: { code: LocaleCode; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá" },
  { code: "ha", name: "Hausa", nativeName: "Harshen Hausa" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo" },
  { code: "pcm", name: "Nigerian Pidgin", nativeName: "Naijá Pidgin" },
];

export const TRANSLATIONS: Record<LocaleCode, TranslationDictionary> = {
  en: {
    appName: "Trainbow HUB",
    tagline: "Learn • Connect • Grow",
    nav: {
      academy: "Academy",
      subjects: "Subjects",
      ai: "AI",
      tutors: "Tutors",
      music: "Music",
      schools: "Schools",
      pricing: "Pricing",
      about: "About",
      guardianPortal: "Guardian Portal",
      login: "Sign In",
      register: "Create Account",
      logout: "Log Out",
    },
    common: {
      verified: "Verified",
      active: "Active",
      dataSaver: "Data Saver (2G)",
      offlineMode: "Offline Mode",
      language: "Language",
      search: "Search",
      allSubjects: "All Subjects",
      bookLesson: "Book Lesson",
      viewProfile: "View Profile",
      save: "Save",
      cancel: "Cancel",
      success: "Success",
    },
    school: {
      title: "School Administration Hub",
      subtitle: "Multi-tenant institutional licensing, cohort performance & bulk onboarding",
      seatCapacity: "Total License Seats",
      seatsUsed: "Allocated Student Seats",
      availableSeats: "Available Capacity",
      cohorts: "Academic Cohorts & Classes",
      students: "Enrolled Students",
      bulkEnroll: "Bulk Student Onboarding",
      averageScore: "Cohort Average Score",
      completionRate: "Lesson Completion Rate",
    },
  },
  yo: {
    appName: "Trainbow HUB",
    tagline: "Kọ́ Ẹ̀kọ́ • Sopọ̀ • Dàgbà",
    nav: {
      academy: "Ilé Ẹ̀kọ́",
      subjects: "Àwọn Kókó Ẹ̀kọ́",
      ai: "Olùrànlọ́wọ́ AI",
      tutors: "Àwọn Olùkọ́",
      music: "Orin & Ohun Èlò",
      schools: "Àwọn Ilé-Ẹ̀kọ́",
      pricing: "Iye Owó",
      about: "Nípa Wa",
      guardianPortal: "Ojúlé Olùtọ́jú",
      login: "Wọle",
      register: "Ṣẹ̀dá Àkọọ́lẹ̀",
      logout: "Jade",
    },
    common: {
      verified: "Ti Fìdí Múlẹ̀",
      active: "Lọ́wọ́ Lọ́wọ́",
      dataSaver: "Fipamọ́ Dátà (2G)",
      offlineMode: "Láìsí Íńtánẹ́ẹ̀tì",
      language: "Èdè",
      search: "Wá",
      allSubjects: "Gbogbo Ẹ̀kọ́",
      bookLesson: "Gba Àkókò Ẹ̀kọ́",
      viewProfile: "Wo Àkọsílẹ̀",
      save: "Fipamọ́",
      cancel: "Fagilé",
      success: "Àṣeyọrí",
    },
    school: {
      title: "Ilé Ìṣàkóso Àwọn Ilé-Ẹ̀kọ́",
      subtitle: "Ìṣàkóso ìwé-àṣẹ ilé-ẹ̀kọ́, ìtúpalẹ̀ àwọn kíláàsì àti ìforúkọsílẹ̀ ọmọ-ilé-ìwé",
      seatCapacity: "Àpapọ̀ Ààyè Ìwé-Àṣẹ",
      seatsUsed: "Àwọn Ààyè Tí A Pín",
      availableSeats: "Ààyè Tí Ó Kù",
      cohorts: "Àwọn Kíláàsì & Ẹ̀gbẹ́ Ẹ̀kọ́",
      students: "Àwọn Akẹ́kọ̀ọ́ Tí A Kọ Sílẹ̀",
      bulkEnroll: "Ìforúkọsílẹ̀ Akẹ́kọ̀ọ́ Púpọ̀",
      averageScore: "Àbájáde Ẹ̀kọ́ Kíláàsì",
      completionRate: "Ìpín Ẹ̀kọ́ Tí A Parí",
    },
  },
  ha: {
    appName: "Trainbow HUB",
    tagline: "Koyi • Haɗu • Ci gaba",
    nav: {
      academy: "Makarantar Koyarwa",
      subjects: "Darussa",
      ai: "Mataimakin AI",
      tutors: "Malamai",
      music: "Waƙoƙi & Kayan Kaɗe",
      schools: "Makarantu",
      pricing: "Farashi",
      about: "Game da Mu",
      guardianPortal: "Dandalin Iyaye",
      login: "Shiga",
      register: "Bude Asusu",
      logout: "Fita",
    },
    common: {
      verified: "An Tabbatar",
      active: "Mai Aiki",
      dataSaver: "Ajiye Data (2G)",
      offlineMode: "Yanayin Ba Intanet",
      language: "Harshe",
      search: "Bincika",
      allSubjects: "Duk Darussa",
      bookLesson: "Yi Rijistar Darasi",
      viewProfile: "Duba Bayani",
      save: "Ajiye",
      cancel: "Soke",
      success: "Nasarar",
    },
    school: {
      title: "Dandalin Gudanar da Makarantu",
      subtitle: "Lasisin cibiyoyi, sakamakon aji da rijistar ɗalibai gaba ɗaya",
      seatCapacity: "Jimillar Kujerun Lasisi",
      seatsUsed: "Kujerun da Aka Bada",
      availableSeats: "Kujerun da Suka Rage",
      cohorts: "Ajujuwa da Ƙungiyoyi",
      students: "Ɗaliban da Aka Yi wa Rijista",
      bulkEnroll: "Rijistar Ɗalibai da Yawa",
      averageScore: "Matsakaicin Makin Aji",
      completionRate: "Adadin Kammala Darasi",
    },
  },
  ig: {
    appName: "Trainbow HUB",
    tagline: "Mụta • Jikọọ • Tozuo",
    nav: {
      academy: "Ụlọ Akwụkwọ",
      subjects: "Mkpụrụ Isiokwu",
      ai: "Onye Enyemaka AI",
      tutors: "Ndị Ozizi",
      music: "Egwu & Ngwa Egwu",
      schools: "Ụlọ Akwụkwọ Niile",
      pricing: "Ọnụ Ahịa",
      about: "Gbasara Anyị",
      guardianPortal: "Ọnụ Ụzọ Ndị Nne na Nna",
      login: "Banye",
      register: "Mepụta Akaụntụ",
      logout: "Pụọ",
    },
    common: {
      verified: "Ekwenyere",
      active: "Na-arụ ọrụ",
      dataSaver: "Chekwa Data (2G)",
      offlineMode: "Na-enweghị Ịntanetị",
      language: "Asụsụ",
      search: "Chọọ",
      allSubjects: "Isiokwu Niile",
      bookLesson: "Debanye Aha Maka Nkuzi",
      viewProfile: "Lee Profaịlụ",
      save: "Chekwaa",
      cancel: "Kagbuo",
      success: "Ihe Ọma",
    },
    school: {
      title: "Ebe Nchịkwa Ụlọ Akwụkwọ",
      subtitle: "Ikikere ụlọ akwụkwọ, arụmọrụ klaasị na ntinye aha ụmụ akwụkwọ n'ọtụtụ",
      seatCapacity: "Ngụkọta Oche Ikikere",
      seatsUsed: "Oche Ekenyere Ndị Akwụkwọ",
      availableSeats: "Oche Fọdụrụ",
      cohorts: "Klaasị na Otu Ọmụmụ",
      students: "Ụmụ Akwụkwọ Edebanyere Aha",
      bulkEnroll: "Ntinye Aha n'Ọtụtụ",
      averageScore: "Nkezi Akara Klaasị",
      completionRate: "Ọnụego Ọmụmụ Mechiri Emechi",
    },
  },
  pcm: {
    appName: "Trainbow HUB",
    tagline: "Learn • Connect • Grow",
    nav: {
      academy: "Academy",
      subjects: "Subjects",
      ai: "AI Helper",
      tutors: "Teachers",
      music: "Music & Beats",
      schools: "Schools",
      pricing: "Price",
      about: "About Us",
      guardianPortal: "Parent Portal",
      login: "Log In",
      register: "Create Account",
      logout: "Log Out",
    },
    common: {
      verified: "Confirmed",
      active: "Dey Run",
      dataSaver: "Data Saver (2G)",
      offlineMode: "Offline Mode",
      language: "Language",
      search: "Find am",
      allSubjects: "All Subjects",
      bookLesson: "Book Teacher",
      viewProfile: "Check Profile",
      save: "Save am",
      cancel: "Cancel",
      success: "E Don Set",
    },
    school: {
      title: "School Admin Centre",
      subtitle: "Institutional license, class progress and bulk student onboarding",
      seatCapacity: "Total License Seats",
      seatsUsed: "Seats We Don Give Out",
      availableSeats: "Seats Weey Remain",
      cohorts: "Classes & Arms",
      students: "Students Weey Register",
      bulkEnroll: "Register Many Students",
      averageScore: "Class Average Score",
      completionRate: "Lessons Weey Don Finish",
    },
  },
};

export function getDictionary(locale: LocaleCode = "en"): TranslationDictionary {
  return TRANSLATIONS[locale] || TRANSLATIONS.en;
}
