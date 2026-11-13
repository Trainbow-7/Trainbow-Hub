"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ENGLISH_WEAK_AREAS, WeakAreaRecord, EnglishSkillArea } from "@/lib/data/english-deficiency-map";
import { PHYSICS_WEAK_AREAS } from "@/lib/data/physics-deficiency-map";
import { CHEMISTRY_WEAK_AREAS } from "@/lib/data/chemistry-deficiency-map";
import { MATHEMATICS_WEAK_AREAS } from "@/lib/data/mathematics-deficiency-map";
import { ALL_COURSES } from "@/lib/data/seed-data";
import { DownloadIcon, SearchIcon, AlertIcon } from "@/components/ui/icons";

export default function LearnerNeedsDashboardPage() {
  const [subjectFilter, setSubjectFilter] = React.useState<string>("all");
  const [skillFilter, setSkillFilter] = React.useState<string>("all");
  const [levelFilter, setLevelFilter] = React.useState<string>("all");
  const [priorityOnly, setPriorityOnly] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // Combine all deficiency registries
  const allWeakAreas = React.useMemo(() => {
    return [
      ...CHEMISTRY_WEAK_AREAS.map((wa) => ({ ...wa, subject: "Chemistry" as const })),
      ...PHYSICS_WEAK_AREAS.map((wa) => ({ ...wa, subject: "Physics" as const })),
      ...ENGLISH_WEAK_AREAS.map((wa) => ({ ...wa, subject: "English Language" as const })),
      ...MATHEMATICS_WEAK_AREAS.map((wa) => ({ ...wa, subject: "Mathematics" as const })),
    ];
  }, []);

  // Simulated cohort analytics with strict NDPA 2023 privacy rule (< 10 -> "Not enough data yet")
  // In production, this aggregates from db.listQuizAttempts & diagnostic submissions
  const cohortData = React.useMemo(() => {
    // Map weak area codes to cohort aggregate metrics
    const stats: Record<string, { sampleSize: number; errorRate: number; dropOffRate: number; reportCount: number }> = {
      // English cohort samples
      "WA-ENG-GRM-01": { sampleSize: 28, errorRate: 64, dropOffRate: 14, reportCount: 1 },
      "WA-ENG-GRM-02": { sampleSize: 22, errorRate: 58, dropOffRate: 9, reportCount: 0 },
      "WA-ENG-GRM-03": { sampleSize: 19, errorRate: 52, dropOffRate: 11, reportCount: 2 },
      "WA-ENG-GRM-04": { sampleSize: 15, errorRate: 46, dropOffRate: 8, reportCount: 0 },
      "WA-ENG-LEX-01": { sampleSize: 25, errorRate: 61, dropOffRate: 12, reportCount: 1 },
      "WA-ENG-LEX-02": { sampleSize: 18, errorRate: 49, dropOffRate: 7, reportCount: 0 },
      "WA-ENG-CMP-01": { sampleSize: 21, errorRate: 71, dropOffRate: 18, reportCount: 3 },
      "WA-ENG-CMP-02": { sampleSize: 16, errorRate: 68, dropOffRate: 15, reportCount: 2 },
      "WA-ENG-CMP-03": { sampleSize: 24, errorRate: 55, dropOffRate: 10, reportCount: 1 },
      "WA-ENG-ORL-01": { sampleSize: 17, errorRate: 62, dropOffRate: 13, reportCount: 0 },
      "WA-ENG-ORL-02": { sampleSize: 14, errorRate: 59, dropOffRate: 12, reportCount: 1 },
      "WA-ENG-ESY-01": { sampleSize: 19, errorRate: 54, dropOffRate: 16, reportCount: 2 },
      "WA-ENG-LIT-01": { sampleSize: 12, errorRate: 48, dropOffRate: 9, reportCount: 0 },
      // Small English cohort samples (< 10)
      "WA-ENG-GRM-07": { sampleSize: 6, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-ENG-LEX-04": { sampleSize: 4, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-ENG-ORL-04": { sampleSize: 7, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-ENG-LIT-03": { sampleSize: 5, errorRate: 0, dropOffRate: 0, reportCount: 0 },

      // Physics cohort samples
      "WA-PHY-MCH-01": { sampleSize: 34, errorRate: 68, dropOffRate: 15, reportCount: 2 },
      "WA-PHY-MCH-02": { sampleSize: 26, errorRate: 62, dropOffRate: 12, reportCount: 1 },
      "WA-PHY-MCH-03": { sampleSize: 29, errorRate: 59, dropOffRate: 10, reportCount: 1 },
      "WA-PHY-MCH-04": { sampleSize: 23, errorRate: 72, dropOffRate: 18, reportCount: 3 },
      "WA-PHY-MCH-05": { sampleSize: 21, errorRate: 56, dropOffRate: 9, reportCount: 0 },
      "WA-PHY-MCH-07": { sampleSize: 18, errorRate: 48, dropOffRate: 7, reportCount: 0 },
      "WA-PHY-MCH-08": { sampleSize: 24, errorRate: 65, dropOffRate: 14, reportCount: 2 },
      "WA-PHY-THM-01": { sampleSize: 22, errorRate: 54, dropOffRate: 8, reportCount: 1 },
      "WA-PHY-THM-02": { sampleSize: 19, errorRate: 51, dropOffRate: 11, reportCount: 0 },
      "WA-PHY-THM-03": { sampleSize: 27, errorRate: 69, dropOffRate: 16, reportCount: 2 },
      "WA-PHY-WAV-01": { sampleSize: 25, errorRate: 53, dropOffRate: 9, reportCount: 0 },
      "WA-PHY-WAV-02": { sampleSize: 28, errorRate: 64, dropOffRate: 13, reportCount: 2 },
      "WA-PHY-ELE-01": { sampleSize: 31, errorRate: 60, dropOffRate: 12, reportCount: 1 },
      "WA-PHY-ELE-03": { sampleSize: 20, errorRate: 58, dropOffRate: 10, reportCount: 1 },
      "WA-PHY-ATM-01": { sampleSize: 23, errorRate: 66, dropOffRate: 14, reportCount: 1 },
      "WA-PHY-ATM-02": { sampleSize: 24, errorRate: 57, dropOffRate: 11, reportCount: 0 },
      // Small Physics cohort samples (< 10)
      "WA-PHY-MCH-11": { sampleSize: 6, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-PHY-THM-05": { sampleSize: 4, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-PHY-ELE-08": { sampleSize: 5, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-PHY-ATM-04": { sampleSize: 7, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-PHY-PRC-01": { sampleSize: 8, errorRate: 0, dropOffRate: 0, reportCount: 0 },

      // Chemistry cohort samples
      "WA-CHM-STO-01": { sampleSize: 31, errorRate: 66, dropOffRate: 15, reportCount: 2 },
      "WA-CHM-STO-03": { sampleSize: 28, errorRate: 61, dropOffRate: 12, reportCount: 1 },
      "WA-CHM-ATM-01": { sampleSize: 25, errorRate: 55, dropOffRate: 9, reportCount: 1 },
      "WA-CHM-ATM-02": { sampleSize: 22, errorRate: 58, dropOffRate: 10, reportCount: 0 },
      "WA-CHM-ATM-03": { sampleSize: 26, errorRate: 62, dropOffRate: 11, reportCount: 1 },
      "WA-CHM-ATM-04": { sampleSize: 20, errorRate: 53, dropOffRate: 8, reportCount: 0 },
      "WA-CHM-INO-01": { sampleSize: 29, errorRate: 64, dropOffRate: 14, reportCount: 2 },
      "WA-CHM-INO-02": { sampleSize: 24, errorRate: 59, dropOffRate: 10, reportCount: 1 },
      "WA-CHM-ORG-01": { sampleSize: 27, errorRate: 70, dropOffRate: 18, reportCount: 3 },
      "WA-CHM-ORG-02": { sampleSize: 23, errorRate: 65, dropOffRate: 13, reportCount: 1 },
      "WA-CHM-ELC-01": { sampleSize: 33, errorRate: 68, dropOffRate: 16, reportCount: 2 },
      "WA-CHM-ELC-02": { sampleSize: 29, errorRate: 63, dropOffRate: 14, reportCount: 2 },
      "WA-CHM-PRC-01": { sampleSize: 24, errorRate: 59, dropOffRate: 11, reportCount: 1 },
      "WA-CHM-PRC-02": { sampleSize: 21, errorRate: 54, dropOffRate: 9, reportCount: 0 },
      // Small Chemistry cohort samples (< 10) strictly tested under NDPA 2023 threshold
      "WA-CHM-ORG-04": { sampleSize: 5, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-CHM-PRC-04": { sampleSize: 6, errorRate: 0, dropOffRate: 0, reportCount: 0 },
      "WA-CHM-INO-05": { sampleSize: 7, errorRate: 0, dropOffRate: 0, reportCount: 0 },

      // Mathematics cohort samples
      "WA-MTH-CBT-01": { sampleSize: 32, errorRate: 67, dropOffRate: 16, reportCount: 2 },
      "WA-MTH-CBT-02": { sampleSize: 26, errorRate: 58, dropOffRate: 10, reportCount: 1 },
      "WA-MTH-ALG-01": { sampleSize: 30, errorRate: 63, dropOffRate: 14, reportCount: 2 },
      "WA-MTH-ALG-02": { sampleSize: 28, errorRate: 70, dropOffRate: 17, reportCount: 3 },
      "WA-MTH-GEO-01": { sampleSize: 22, errorRate: 65, dropOffRate: 13, reportCount: 1 },
      "WA-MTH-CAL-01": { sampleSize: 25, errorRate: 61, dropOffRate: 12, reportCount: 1 },
    };

    return stats;
  }, []);

  // Filtered weak areas
  const filteredWeakAreas = React.useMemo(() => {
    return allWeakAreas.filter((wa) => {
      if (subjectFilter !== "all" && wa.subject.toLowerCase() !== subjectFilter.toLowerCase()) return false;
      if (skillFilter !== "all" && wa.skillArea !== skillFilter) return false;
      if (levelFilter !== "all" && !wa.levels.some((l) => l.toLowerCase().includes(levelFilter.toLowerCase()))) return false;
      if (priorityOnly && !wa.priority) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = wa.title.toLowerCase().includes(q);
        const matchCode = wa.code.toLowerCase().includes(q);
        const matchDesc = wa.description.toLowerCase().includes(q);
        if (!matchTitle && !matchCode && !matchDesc) return false;
      }
      return true;
    });
  }, [allWeakAreas, subjectFilter, skillFilter, levelFilter, priorityOnly, searchQuery]);

  // CSV Export handler
  const handleExportCSV = () => {
    const headers = [
      "Subject",
      "Code",
      "Title",
      "SkillArea",
      "Levels",
      "Priority",
      "EvidenceSource",
      "EvidenceDate",
      "SampleSize",
      "ErrorRate",
      "DropOffRate",
      "ProblemReports",
      "PrivacyStatus",
    ];

    const rows = filteredWeakAreas.map((wa) => {
      const cohort = cohortData[wa.code] || { sampleSize: 0, errorRate: 0, dropOffRate: 0, reportCount: 0 };
      const isProtected = cohort.sampleSize < 10;

      return [
        `"${wa.subject}"`,
        `"${wa.code}"`,
        `"${wa.title.replace(/"/g, '""')}"`,
        `"${wa.skillArea}"`,
        `"${wa.levels.join("; ")}"`,
        wa.priority ? "High Priority" : "Standard",
        `"${wa.evidenceSource.replace(/"/g, '""')}"`,
        `"${wa.evidenceDate}"`,
        cohort.sampleSize,
        isProtected ? '"Not enough data yet"' : `"${cohort.errorRate}%"`,
        isProtected ? '"Not enough data yet"' : `"${cohort.dropOffRate}%"`,
        cohort.reportCount,
        isProtected ? "PRIVACY_PROTECTED" : "PUBLISHED",
      ].join(",");
    });

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `trainbow-learner-needs-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const priorityCount = allWeakAreas.filter((w) => w.priority).length;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900">Home</Link>
          <span>/</span>
          <Link href="/admin" className="hover:text-neutral-slate-900">Admin Operations</Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900">Learner Needs & Deficiencies</span>
        </nav>

        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="brand">Curriculum Intelligence</Badge>
              <Badge variant="neutral">NDPA 2023 Compliant</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-neutral-slate-900 mt-2">
              Learner Needs & Deficiency Analytics
            </h1>
            <p className="text-sm text-neutral-slate-600 max-w-3xl mt-1">
              Monitors learner errors, diagnostic checkpoints, drop-offs, and curriculum gaps across Nigerian examination boards (WAEC, NECO, JAMB, BECE).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button variant="outline" size="sm" onClick={handleExportCSV} className="gap-2">
              <DownloadIcon size="sm" />
              <span>Export CSV</span>
            </Button>
            <Link href="/admin/content/videos">
              <Button variant="secondary" size="sm">
                Video Library
              </Button>
            </Link>
          </div>
        </div>

        {/* Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-xs font-semibold text-neutral-slate-500 uppercase tracking-wider">
              Tracked Weak Areas
            </span>
            <div className="text-2xl font-bold font-heading text-neutral-slate-900">
              {allWeakAreas.length}
            </div>
            <p className="text-[11px] text-neutral-slate-500">
              Chemistry ({CHEMISTRY_WEAK_AREAS.length}), Physics (37), English (24), Mathematics (18)
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-xs font-semibold text-neutral-slate-500 uppercase tracking-wider">
              High Exam Weight Gaps
            </span>
            <div className="text-2xl font-bold font-heading text-amber-700">
              {priorityCount}
            </div>
            <p className="text-[11px] text-neutral-slate-500">
              Chief Examiners&apos; high-frequency mark-loss topics
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-xs font-semibold text-neutral-slate-500 uppercase tracking-wider">
              Monitored Courses
            </span>
            <div className="text-2xl font-bold font-heading text-neutral-slate-900">
              {ALL_COURSES.length}
            </div>
            <p className="text-[11px] text-neutral-slate-500">
              12 Chemistry + 12 Physics + 11 English + 6 Mathematics courses
            </p>
          </div>

          <div className="rounded-xl border border-neutral-slate-200 bg-white p-5 space-y-1 shadow-2xs">
            <span className="text-xs font-semibold text-neutral-slate-500 uppercase tracking-wider">
              Privacy Threshold
            </span>
            <div className="text-2xl font-bold font-heading text-brand-blue-700">
              &ge; 10
            </div>
            <p className="text-[11px] text-neutral-slate-500">
              Minimum group size to report individual error rates
            </p>
          </div>
        </div>

        {/* Privacy Advisory Notice */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white p-4 text-xs text-neutral-slate-600 flex items-start gap-3">
          <AlertIcon className="h-5 w-5 text-brand-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-neutral-slate-900 block">
              NDPA 2023 Section 31 Privacy Protection Policy
            </span>
            <p>
              To protect student anonymity, especially for minors under 18, error rates and drop-off metrics are only displayed for cohorts with at least 10 unique learner submissions. Cohorts smaller than 10 are strictly labeled as &ldquo;Not enough data yet&rdquo;.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search Input */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-neutral-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search weak areas or codes..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
              />
            </div>

            {/* Subject Filter */}
            <div>
              <select
                value={subjectFilter}
                onChange={(e) => {
                  setSubjectFilter(e.target.value);
                  setSkillFilter("all");
                }}
                className="w-full py-2 px-3 text-xs border border-neutral-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-600 bg-white font-medium"
              >
                <option value="all">All Subjects ({allWeakAreas.length})</option>
                <option value="chemistry">Chemistry ({CHEMISTRY_WEAK_AREAS.length})</option>
                <option value="physics">Physics ({PHYSICS_WEAK_AREAS.length})</option>
                <option value="english language">English Language ({ENGLISH_WEAK_AREAS.length})</option>
                <option value="mathematics">Mathematics ({MATHEMATICS_WEAK_AREAS.length})</option>
              </select>
            </div>

            {/* Skill Area Filter */}
            <div>
              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-600 bg-white"
              >
                <option value="all">All Skill Areas</option>
                {/* Chemistry skills */}
                {subjectFilter === "all" || subjectFilter === "chemistry" ? (
                  <optgroup label="Chemistry">
                    <option value="STOICHIOMETRY_EQUATIONS">Stoichiometry & Equations</option>
                    <option value="ATOMIC_PERIODICITY">Atomic Structure & Periodicity</option>
                    <option value="PHYSICAL_CHEMISTRY">Physical Chemistry</option>
                    <option value="INORGANIC_CHEMISTRY">Inorganic Chemistry</option>
                    <option value="ORGANIC_CHEMISTRY">Organic Chemistry</option>
                    <option value="ELECTROCHEMISTRY_REDOX">Electrochemistry & Redox</option>
                    <option value="ANALYTICAL_PRACTICAL">Analytical & Practical Chemistry</option>
                  </optgroup>
                ) : null}
                {/* Physics skills */}
                {subjectFilter === "all" || subjectFilter === "physics" ? (
                  <optgroup label="Physics">
                    <option value="MECHANICS">Mechanics</option>
                    <option value="THERMAL_PHYSICS">Thermal Physics</option>
                    <option value="WAVES_OPTICS">Waves & Optics</option>
                    <option value="ELECTRICITY_MAGNETISM">Electricity & Magnetism</option>
                    <option value="ATOMIC_NUCLEAR">Atomic & Nuclear</option>
                    <option value="PRACTICAL_MEASUREMENT">Practical Measurement</option>
                  </optgroup>
                ) : null}
                {/* English skills */}
                {subjectFilter === "all" || subjectFilter === "english language" ? (
                  <optgroup label="English Language">
                    <option value="GRAMMAR">Grammar</option>
                    <option value="LEXIS_STRUCTURE">Lexis & Structure</option>
                    <option value="COMPREHENSION_SUMMARY">Comprehension & Summary</option>
                    <option value="ORAL_ENGLISH">Oral English</option>
                    <option value="ESSAY_COMPOSITION">Essay Composition</option>
                    <option value="LITERARY_ANALYSIS">Literary Analysis</option>
                  </optgroup>
                ) : null}
                {/* Math skills */}
                {subjectFilter === "all" || subjectFilter === "mathematics" ? (
                  <optgroup label="Mathematics">
                    <option value="NUMERATION_ARITHMETIC">Numeration & Arithmetic</option>
                    <option value="ALGEBRAIC_PROCESSES">Algebraic Processes</option>
                    <option value="GEOMETRY_TRIGONOMETRY">Geometry & Trigonometry</option>
                    <option value="CALCULUS_FUNCTIONS">Calculus & Functions</option>
                    <option value="STATISTICS_PROBABILITY">Statistics & Probability</option>
                    <option value="EXAM_TECHNIQUE_SPEED">Exam Technique & Speed</option>
                  </optgroup>
                ) : null}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue-600 bg-white"
              >
                <option value="all">All Levels</option>
                <option value="primary">Primary 1-6</option>
                <option value="jss">JSS 1-3 (BECE)</option>
                <option value="ss">SS 1-3</option>
                <option value="waec">WAEC Prep</option>
                <option value="jamb">JAMB UTME</option>
              </select>
            </div>

            {/* Priority Toggle */}
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-xs font-medium text-neutral-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={priorityOnly}
                  onChange={(e) => setPriorityOnly(e.target.checked)}
                  className="rounded border-neutral-slate-300 text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                />
                <span>High Priority Only ({priorityCount})</span>
              </label>
            </div>
          </div>
        </div>

        {/* Deficiency Table */}
        <div className="rounded-xl border border-neutral-slate-200 bg-white overflow-hidden shadow-2xs">
          <div className="overflow-x-auto touch-pan-x overscroll-x-contain">
            <table className="w-full text-left text-xs divide-y divide-neutral-slate-200">
              <thead className="bg-neutral-slate-50 text-neutral-slate-600 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Subject & Code</th>
                  <th className="py-3 px-4">Deficiency Area</th>
                  <th className="py-3 px-4">Levels</th>
                  <th className="py-3 px-4">Exam Weight</th>
                  <th className="py-3 px-4">Sample Size</th>
                  <th className="py-3 px-4">Observed Error Rate</th>
                  <th className="py-3 px-4">Drop-off</th>
                  <th className="py-3 px-4">Reports</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-slate-100">
                {filteredWeakAreas.length > 0 ? (
                  filteredWeakAreas.map((wa) => {
                    const cohort = cohortData[wa.code] || {
                      sampleSize: 0,
                      errorRate: 0,
                      dropOffRate: 0,
                      reportCount: 0,
                    };
                    const isProtected = cohort.sampleSize < 10;

                    return (
                      <tr key={wa.code} className="hover:bg-neutral-slate-50/80 transition-colors">
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase ${
                                wa.subject === "Chemistry"
                                  ? "bg-teal-100 text-teal-800"
                                  : wa.subject === "Physics"
                                  ? "bg-purple-100 text-purple-800"
                                  : wa.subject === "Mathematics"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {wa.subject}
                            </span>
                          </div>
                          <span className="font-mono font-semibold text-neutral-slate-900 block">
                            {wa.code}
                          </span>
                          <span className="text-[10px] text-neutral-slate-500 uppercase">
                            {String(wa.skillArea).replace(/_/g, " ")}
                          </span>
                        </td>
                        <td className="py-3 px-4 max-w-xs">
                          <div className="font-semibold text-neutral-slate-900">
                            {wa.title}
                          </div>
                          <div className="text-[11px] text-neutral-slate-500 line-clamp-2 mt-0.5">
                            {wa.description}
                          </div>
                          <div className="text-[10px] text-neutral-slate-400 mt-1">
                            Src: {wa.evidenceSource} ({wa.evidenceDate})
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1 max-w-[140px]">
                            {wa.levels.slice(0, 2).map((lvl) => (
                              <span
                                key={lvl}
                                className="px-1.5 py-0.5 rounded bg-neutral-slate-100 text-[10px] text-neutral-slate-600"
                              >
                                {lvl}
                              </span>
                            ))}
                            {wa.levels.length > 2 && (
                              <span className="text-[10px] text-neutral-slate-400 self-center">
                                +{wa.levels.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {wa.priority ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                              High Exam Priority
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-slate-100 text-neutral-slate-600">
                              Standard
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap font-medium text-neutral-slate-700">
                          {cohort.sampleSize} learners
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {isProtected ? (
                            <span className="text-neutral-slate-400 italic font-normal text-[11px]">
                              Not enough data yet
                            </span>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-bold ${
                                  cohort.errorRate >= 60
                                    ? "text-status-red-700"
                                    : cohort.errorRate >= 45
                                    ? "text-amber-700"
                                    : "text-status-green-700"
                                }`}
                              >
                                {cohort.errorRate}%
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {isProtected ? (
                            <span className="text-neutral-slate-400 italic font-normal text-[11px]">
                              Not enough data yet
                            </span>
                          ) : (
                            <span className="text-neutral-slate-700">
                              {cohort.dropOffRate}%
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {cohort.reportCount > 0 ? (
                            <span className="text-amber-700 font-bold">
                              {cohort.reportCount}
                            </span>
                          ) : (
                            <span className="text-neutral-slate-400">0</span>
                          )}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-right">
                          <Link href="/admin/content/videos">
                            <Button variant="outline" size="sm" className="text-[11px] py-1 px-2.5">
                              Review Lesson
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-xs text-neutral-slate-500">
                      No weak area records match the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Teacher Review Gate Footer Notice */}
        <div className="rounded-xl border border-neutral-slate-200 bg-neutral-slate-100/60 p-4 text-xs text-neutral-slate-600">
          <span className="font-semibold text-neutral-slate-900 block mb-1">
            Teacher Review Gate (Review Status: needs_teacher_review)
          </span>
          All deficiency classifications, practice questions, and remediation mappings start in pending review status. A subject specialist must verify curriculum alignments before lessons are promoted to published status.
        </div>
      </main>

      <Footer />
    </div>
  );
}

