"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import {
  TrackId,
  EXAM_TRACKS,
  SUBJECT_PRICES,
  formatNaira,
  calculateBundleTotal,
  BundleCalculationResult,
} from "@/data/pricing";
import {
  DepartmentId,
  DEPARTMENTS,
  CATALOGUE_SUBJECTS,
  SubjectCatalogueItem,
  getSubjectsByDepartment,
} from "@/data/courses";
import { ChevronRightIcon, CheckIcon } from "@/components/ui/icons";

export function CourseCatalogueCard() {
  const [selectedTrack, setSelectedTrack] = React.useState<TrackId>("waec-ssce");
  const [activeDepartment, setActiveDepartment] = React.useState<DepartmentId>("core");
  const [selectedSubjectIds, setSelectedSubjectIds] = React.useState<string[]>([
    "mathematics",
    "english-language",
  ]);

  const trackConfig = EXAM_TRACKS[selectedTrack];
  const departmentsList: DepartmentId[] = ["core", "science", "commercial", "arts"];
  const currentDeptSubjects = getSubjectsByDepartment(activeDepartment);

  // Live bundle calculation
  const bundleCalculation: BundleCalculationResult = React.useMemo(() => {
    return calculateBundleTotal(selectedSubjectIds, selectedTrack);
  }, [selectedSubjectIds, selectedTrack]);

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjectIds((prev) =>
      prev.includes(subjectId) ? prev.filter((id) => id !== subjectId) : [...prev, subjectId]
    );
  };

  const selectAllInDepartment = () => {
    const deptIds = currentDeptSubjects.map((s) => s.id);
    setSelectedSubjectIds((prev) => Array.from(new Set([...prev, ...deptIds])));
  };

  const clearSelection = () => {
    setSelectedSubjectIds([]);
  };

  return (
    <Card className="border border-neutral-slate-200 bg-white shadow-soft overflow-hidden">
      {/* CARD HEADER */}
      <CardHeader className="bg-gradient-to-r from-brand-navy-900 via-brand-navy-800 to-brand-navy-900 text-white p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Title & Department scope */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" className="bg-brand-blue-500/20 text-brand-blue-200 border-brand-blue-400/30">
                Official Consolidated Curriculum
              </Badge>
              <span className="text-xs text-neutral-slate-300 flex items-center gap-1.5">
                
                {CATALOGUE_SUBJECTS.length} Comprehensive Subjects across 4 Departments
              </span>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Course Catalogue &amp; Exam Syllabus Matrix
            </CardTitle>
            <CardDescription className="text-sm text-neutral-slate-200 max-w-2xl leading-relaxed">
              Every subject curriculum is directed, vetted, and taught by{" "}
              <strong className="text-white font-semibold">{PRIMARY_INSTRUCTOR.name}</strong>. Choose your exam
              track below to inspect verified syllabus modules and calculate live bundle tuition discounts.
            </CardDescription>
          </div>

          {/* Right: Instructor Single Source Credential Card */}
          <Link
            href={`/instructors/${PRIMARY_INSTRUCTOR.slug}`}
            className="group shrink-0 p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-150 flex items-center gap-3.5 backdrop-blur-sm"
          >
            <Avatar name={PRIMARY_INSTRUCTOR.name} src={PRIMARY_INSTRUCTOR.avatarUrl} size="lg" className="border-2 border-brand-blue-400" />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-300">
                  Course Director &amp; Lead Examiner
                </span>
                <span className="text-status-green-600 font-bold text-xs">✓</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-white group-hover:text-brand-blue-300 transition-colors">
                {PRIMARY_INSTRUCTOR.name}
              </h4>
              <p className="text-[11px] text-neutral-slate-300 max-w-[240px] truncate">
                {PRIMARY_INSTRUCTOR.title}
              </p>
            </div>
            <ChevronRightIcon className="h-4 w-4 text-neutral-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

        {/* TRACK SWITCHER */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-slate-300 uppercase tracking-wider">
              Select Exam Track / Level:
            </span>
            <span className="text-xs text-brand-blue-300 font-medium">
              Target: {trackConfig.targetExam}
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Exam Tracks"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2"
          >
            {(Object.keys(EXAM_TRACKS) as TrackId[]).map((tId) => {
              const trk = EXAM_TRACKS[tId];
              const isSelected = selectedTrack === tId;
              return (
                <button
                  key={tId}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedTrack(tId)}
                  className={`p-2.5 rounded-lg text-left text-xs transition-all duration-150 flex flex-col justify-between border ${
                    isSelected
                      ? "bg-brand-blue-600 border-brand-blue-400 text-white shadow-sm ring-2 ring-brand-blue-400/40"
                      : "bg-white/5 border-white/10 text-neutral-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span className="font-heading font-bold truncate">{trk.shortName}</span>
                  <span className={`text-[10px] mt-0.5 ${isSelected ? "text-brand-blue-100" : "text-neutral-slate-400"}`}>
                    {trk.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </CardHeader>

      {/* DEPARTMENT TABS NAVIGATION */}
      <div className="border-b border-neutral-slate-200 bg-neutral-slate-50 px-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
          <div
            role="tablist"
            aria-label="Academic Departments"
            className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0"
          >
            {departmentsList.map((deptId) => {
              const dept = DEPARTMENTS[deptId];
              const isSelected = activeDepartment === deptId;
              const count = getSubjectsByDepartment(deptId).length;
              return (
                <button
                  key={deptId}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveDepartment(deptId)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-heading font-bold flex items-center gap-2 transition-all shrink-0 ${
                    isSelected
                      ? "bg-white text-brand-blue-700 shadow-soft border border-neutral-slate-200"
                      : "text-neutral-slate-600 hover:text-neutral-slate-900 hover:bg-neutral-slate-100"
                  }`}
                >
                  
                  <span>{dept.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      isSelected ? "bg-brand-blue-100 text-brand-blue-700" : "bg-neutral-slate-200 text-neutral-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick selection actions */}
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={selectAllInDepartment}
              className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold flex items-center gap-1"
            >
              <CheckIcon size="sm" />
              <span>Select {DEPARTMENTS[activeDepartment].name}</span>
            </button>
            <span className="text-neutral-slate-300">|</span>
            <button
              onClick={clearSelection}
              disabled={selectedSubjectIds.length === 0}
              className="text-neutral-slate-500 hover:text-neutral-slate-700 disabled:opacity-40 flex items-center gap-1"
            >
              
              <span>Reset</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-neutral-slate-600 pb-3">
          {DEPARTMENTS[activeDepartment].tagline}
        </p>
      </div>

      {/* CARD CONTENT: SUBJECT ROWS */}
      <CardContent className="p-4 sm:p-6 space-y-4">
        <div className="space-y-3">
          {currentDeptSubjects.map((subject) => {
            const priceConfig = SUBJECT_PRICES[subject.id];
            const currentPrice = priceConfig?.trackPrices[selectedTrack] ?? 30000;
            const isSelected = selectedSubjectIds.includes(subject.id);
            const syllabusHref = `/instructors/${PRIMARY_INSTRUCTOR.slug}/courses/${selectedTrack}/${subject.slug}`;

            return (
              <div
                key={subject.id}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-150 flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                  isSelected
                    ? "border-brand-blue-600 bg-brand-blue-50/20 shadow-sm"
                    : "border-neutral-slate-200 bg-white hover:border-neutral-slate-300"
                }`}
              >
                {/* Left: Checkbox & Subject info */}
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => toggleSubject(subject.id)}
                    aria-label={`Select ${subject.name} for bundle discount`}
                    className={`mt-1 h-5 w-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-brand-blue-600 border-brand-blue-600 text-white"
                        : "border-neutral-slate-300 bg-white hover:border-brand-blue-500"
                    }`}
                  >
                    {isSelected && <CheckIcon size="sm" className="stroke-[3]" />}
                  </button>

                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-neutral-slate-900">
                        {subject.name}
                      </h4>
                      <Badge variant="neutral" className="text-[10px]">
                        {DEPARTMENTS[subject.department].name}
                      </Badge>
                      <span className="text-[11px] text-status-green-800 font-semibold flex items-center gap-1">
                        <span className="text-status-green-600 font-bold text-xs">✓</span>
                        Verified for {trackConfig.shortName}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-slate-600 line-clamp-2 leading-relaxed">
                      {subject.shortDescription}
                    </p>

                    {/* Progress Bar (100% Verified) */}
                    <div className="space-y-1 max-w-sm">
                      <div className="flex items-center justify-between text-[11px] text-neutral-slate-500">
                        <span>Curriculum coverage</span>
                        <span className="font-semibold text-neutral-slate-700">100% Verified</span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-blue-600 rounded-full w-full" />
                      </div>
                    </div>

                    {/* Subject Row Meta Stats & Instructor info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        
                        {subject.lessonCount} Lessons
                      </span>
                      <span className="flex items-center gap-1">
                        
                        {subject.durationHours} Hours
                      </span>
                      <Rating value={subject.rating} count={subject.reviewCount} />
                      <span className="text-neutral-slate-400">•</span>
                      <div className="flex items-center gap-1.5 text-neutral-slate-700 font-medium">
                        <Avatar name={PRIMARY_INSTRUCTOR.name} src={PRIMARY_INSTRUCTOR.avatarUrl} size="sm" />
                        <span className="text-[11px]">{PRIMARY_INSTRUCTOR.name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Price & "Explore Syllabus" Action */}
                <div className="flex sm:flex-row lg:flex-col items-end sm:items-center lg:items-end justify-between sm:justify-end gap-3.5 pt-3 lg:pt-0 border-t lg:border-t-0 border-neutral-slate-100 shrink-0">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-slate-400 block">
                      {trackConfig.shortName} Tuition
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold font-heading text-neutral-slate-900">
                      {formatNaira(currentPrice)}
                    </span>
                  </div>

                  <Link href={syllabusHref} className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="w-full sm:w-auto justify-between h-10 px-4 text-xs font-semibold gap-2"
                    >
                      <span>Explore Syllabus</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>

      {/* CARD FOOTER: LIVE BUNDLE CALCULATOR & CHECKOUT BAR */}
      <CardFooter className="bg-neutral-slate-900 text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-neutral-slate-800">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-slate-400">
              Live Tuition Calculation ({trackConfig.shortName})
            </span>
            {bundleCalculation.discountLabel && (
              <Badge variant="brand" className="bg-status-green-600 text-white border-0 text-[10px]">
                {bundleCalculation.discountLabel}
              </Badge>
            )}
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {formatNaira(bundleCalculation.finalTotal)}
            </span>

            {bundleCalculation.discountAmount > 0 && (
              <span className="text-sm text-neutral-slate-400 line-through">
                {formatNaira(bundleCalculation.subtotal)}
              </span>
            )}
          </div>

          <p className="text-xs text-neutral-slate-300">
            {bundleCalculation.selectedCount === 0 ? (
              <span>Tick subjects above to calculate bundle tuition discount.</span>
            ) : (
              <span>
                <strong>{bundleCalculation.selectedCount}</strong> subjects selected.{" "}
                {bundleCalculation.discountAmount > 0 ? (
                  <span className="text-status-green-400 font-semibold">
                    You save {formatNaira(bundleCalculation.discountAmount)} with bundle pricing!
                  </span>
                ) : (
                  <span>Select 3+ subjects to get 15% discount, or 5+ for 25% off.</span>
                )}
              </span>
            )}
          </p>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href={`/request-tutor?track=${selectedTrack}&subjects=${selectedSubjectIds.join(",")}`}
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              disabled={bundleCalculation.selectedCount === 0}
              className="w-full sm:w-auto h-12 px-6 font-bold text-sm"
            >
              <span>Enroll / Checkout ({bundleCalculation.selectedCount})</span>
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCatalogueCard;
