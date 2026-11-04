"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { TrackId, EXAM_TRACKS, SUBJECT_PRICES, formatNaira } from "@/data/pricing";
import { DEPARTMENTS, SubjectCatalogueItem } from "@/data/courses";
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon, AlertIcon, ChevronDownIcon, PlayIcon, CloseIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { InlineMathText } from "@/components/ui/InlineMathText";

interface SubjectSyllabusViewProps {
  subject: SubjectCatalogueItem;
  trackId: TrackId;
}

export function SubjectSyllabusView({ subject, trackId }: SubjectSyllabusViewProps) {
  const track = EXAM_TRACKS[trackId] ?? EXAM_TRACKS["waec-ssce"];
  const department = DEPARTMENTS[subject.department];
  const priceConfig = SUBJECT_PRICES[subject.id];
  const price = priceConfig?.trackPrices[trackId] ?? 35000;

  // Accordion state
  const [openModuleIds, setOpenModuleIds] = React.useState<Record<string, boolean>>({
    [subject.syllabus[0]?.id || "m1"]: true,
    [subject.syllabus[1]?.id || "m2"]: true,
  });

  // Active embedded video state: { topicKey, youtubeId, title }
  const [activeVideoKey, setActiveVideoKey] = React.useState<string | null>(null);

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Close active video on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoKey(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-slate-500 overflow-x-auto pb-1" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-slate-900 shrink-0">Home</Link>
          <span>/</span>
          <Link href="/academy" className="hover:text-neutral-slate-900 shrink-0">Academy</Link>
          <span>/</span>
          <Link href={`/instructors/${PRIMARY_INSTRUCTOR.slug}`} className="hover:text-neutral-slate-900 shrink-0">
            {PRIMARY_INSTRUCTOR.name}
          </Link>
          <span>/</span>
          <span className="font-semibold text-neutral-slate-900 truncate">
            {subject.name} ({track.shortName})
          </span>
        </nav>

        {/* INSTRUCTOR BANNER */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-800 to-brand-navy-900 text-white shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-brand-navy-700">
          <div className="flex items-start sm:items-center gap-4">
            <Avatar
              name={PRIMARY_INSTRUCTOR.name}
              src={PRIMARY_INSTRUCTOR.avatarUrl}
              size="lg"
              className="border-2 border-brand-blue-400 shrink-0"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-300">
                  Lead Instructor &amp; Course Director
                </span>
                <Badge variant="brand" className="bg-brand-blue-500/20 text-brand-blue-200 border-brand-blue-400/30 text-[10px]">
                  WAEC Chief Examiner Consultant
                </Badge>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {PRIMARY_INSTRUCTOR.name}
              </h2>
              <p className="text-xs text-neutral-slate-300 max-w-2xl leading-relaxed">
                {PRIMARY_INSTRUCTOR.title}. {PRIMARY_INSTRUCTOR.shortBio}
              </p>
            </div>
          </div>

          <Link href={`/instructors/${PRIMARY_INSTRUCTOR.slug}`} className="shrink-0">
            <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs">
              View Examiner Profile
            </Button>
          </Link>
        </div>

        {/* MAIN SYLLABUS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: SYLLABUS CONTENT (8 COLS) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Subject Overview Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand">{track.name}</Badge>
                <Badge variant="neutral">{department.name}</Badge>
                <span className="text-xs text-status-green-800 font-bold flex items-center gap-1">
                  <span className="text-status-green-600 font-bold text-xs">✓</span>
                  100% Curriculum Verified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-slate-900 tracking-tight">
                {subject.name} Official Exam Syllabus
              </h1>

              <p className="text-sm sm:text-base text-neutral-slate-700 leading-relaxed">
                {subject.fullOverview}
              </p>

              {/* Quick Exam Boards Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-neutral-slate-500">Official Exam Boards:</span>
                {subject.officialBoards.map((board) => (
                  <span
                    key={board}
                    className="px-2.5 py-0.5 rounded-full bg-neutral-slate-100 text-neutral-slate-700 text-xs font-medium border border-neutral-slate-200"
                  >
                    {board}
                  </span>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-neutral-slate-200 text-xs text-neutral-slate-600">
                <Rating value={subject.rating} count={subject.reviewCount} />
                <div className="flex items-center gap-1.5">
                  
                  <span>{subject.lessonCount} Structured Lessons</span>
                </div>
                <div className="flex items-center gap-1.5">
                  
                  <span>{subject.durationHours} Hours Video &amp; Notes</span>
                </div>
              </div>
            </div>

            {/* HIGH-FREQUENCY EXAM TOPICS CARD */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                
                <h3 className="font-heading font-bold text-base">
                  High-Frequency Exam Topics ({track.shortName})
                </h3>
              </div>
              <p className="text-xs text-amber-900/80">
                Topics prioritized by Chief Examiners carrying the highest weightage in Section A &amp; B theory papers and objective distributions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {subject.highFrequencyExamTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                    <span className="text-status-green-600 font-bold text-xs">✓</span>
                    <span className="font-medium">
                      <InlineMathText text={topic} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMON MISTAKES & EXAMINER TRAPS */}
            <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-900">
                <AlertIcon className="h-5 w-5 text-rose-600" />
                <h3 className="font-heading font-bold text-base">
                  Common Mistakes &amp; Examiner Pitfalls to Avoid
                </h3>
              </div>
              <p className="text-xs text-rose-900/80">
                Frequent student errors reported in WAEC/JAMB Chief Examiner annual reports:
              </p>
              <ul className="space-y-2 pt-1 text-xs text-rose-950">
                {subject.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                    <span className="flex-1">
                      <InlineMathText text={mistake} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPLETE SYLLABUS MODULES & TOPICS ACCORDION WITH EMBEDDED VIDEOS */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="font-heading font-bold text-lg text-neutral-slate-900">
                    Complete Course Syllabus ({subject.syllabus.length} Modules)
                  </h2>
                  <p className="text-xs text-neutral-slate-500 mt-0.5">
                    Step-by-step breakdown aligned with official {track.name} standards
                  </p>
                </div>
                <div className="text-xs text-neutral-slate-500 font-medium flex items-center gap-1.5">
                  
                  <span>Interactive YouTube Video Masterclasses</span>
                </div>
              </div>

              <div className="space-y-3">
                {subject.syllabus.map((mod, mIdx) => {
                  const isOpen = !!openModuleIds[mod.id];
                  const videosCount = mod.topics.filter((t) => !!t.video).length;

                  return (
                    <div
                      key={mod.id}
                      className="rounded-lg border border-neutral-slate-200 overflow-hidden transition-all"
                    >
                      {/* Module Header Accordion Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className="w-full bg-neutral-slate-50 px-4 py-3.5 flex items-center justify-between text-left hover:bg-neutral-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                            {mIdx + 1}
                          </span>
                          <div>
                            <span className="font-heading font-semibold text-sm text-neutral-slate-900 block">
                              <InlineMathText text={mod.title} />
                            </span>
                            <div className="flex flex-wrap items-center gap-2 mt-0.5">
                              <span className="text-[11px] text-neutral-slate-500">
                                {mod.topics.length} Key Topics • {mod.durationMinutes} mins
                              </span>
                              {videosCount > 0 ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded-full border border-brand-blue-200">
                                  
                                  {videosCount} of {mod.topics.length} topics have videos
                                </span>
                              ) : (
                                <span className="text-[10px] text-neutral-slate-400">
                                  Videos coming soon
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <ChevronDownIcon
                          className={`h-4 w-4 text-neutral-slate-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white divide-y divide-neutral-slate-100 space-y-4">
                          {mod.topics.map((topic, tIdx) => {
                            const topicKey = `${mod.id}-${tIdx}`;
                            const isPlaying = activeVideoKey === topicKey;
                            const hasVideo = !!topic.video;

                            return (
                              <div key={tIdx} className="pt-4 first:pt-0 space-y-3">
                                {/* Topic Title Row & Video Trigger */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <h5 className="font-heading font-bold text-xs sm:text-sm text-neutral-slate-900 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-brand-blue-600 shrink-0" />
                                    <span>
                                      <InlineMathText text={topic.name} />
                                    </span>
                                  </h5>

                                  {/* Video Action Button or Status Badge */}
                                  <div className="flex items-center gap-2 shrink-0">
                                    {hasVideo ? (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setActiveVideoKey(isPlaying ? null : topicKey)
                                        }
                                        aria-label={`Play video: ${topic.name}`}
                                        className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs ${
                                          isPlaying
                                            ? "bg-brand-navy-900 text-white hover:bg-neutral-800"
                                            : "bg-brand-blue-600 text-white hover:bg-brand-blue-700 hover:shadow-xs"
                                        }`}
                                      >
                                        <PlayIcon size="sm" className="fill-white" />
                                        <span>{isPlaying ? "Close Video" : "Watch Video"}</span>
                                        {topic.video?.durationMinutes && (
                                          <span className="text-[10px] opacity-80">
                                            ({topic.video.durationMinutes}m)
                                          </span>
                                        )}
                                      </button>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-slate-100 text-neutral-slate-500 border border-neutral-slate-200">
                                        Video coming soon
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* EMBEDDED LAZY YOUTUBE PLAYER PANEL (Click-to-Play, youtube-nocookie) */}
                                {hasVideo && isPlaying && topic.video && (
                                  <div
                                    className="rounded-xl bg-neutral-950 text-white overflow-hidden shadow-lg border border-neutral-800 p-3 sm:p-4 space-y-3 transition-all"
                                    data-testid={`video-panel-${topic.video.youtubeId}`}
                                  >
                                    {/* Player Header */}
                                    <div className="flex items-center justify-between gap-3 text-xs border-b border-neutral-800 pb-2.5">
                                      <div className="truncate">
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue-400 block">
                                          Curriculum Video Masterclass
                                        </span>
                                        <span className="font-semibold text-neutral-200 truncate">
                                          {topic.video.title || topic.name}
                                        </span>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => setActiveVideoKey(null)}
                                        aria-label="Close player"
                                        className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                                      >
                                        <CloseIcon size="sm" />
                                      </button>
                                    </div>

                                    {/* 16:9 Privacy-Enhanced YouTube Embed */}
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-inner">
                                      <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${topic.video.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                                        title={`Video lesson for ${topic.name}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full border-0"
                                      />
                                    </div>

                                    {/* Player Footer & Fallback Link */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-[11px] text-neutral-400">
                                      <span>
                                        Channel:{" "}
                                        <strong className="text-neutral-200">
                                          {topic.video.channelName || "Verified Educational Partner"}
                                        </strong>{" "}
                                        • Privacy-Enhanced Player
                                      </span>

                                      <a
                                        href={`https://www.youtube.com/watch?v=${topic.video.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-blue-400 hover:text-brand-blue-300 font-semibold inline-flex items-center gap-1 hover:underline"
                                      >
                                        <span>Watch on YouTube</span>
                                        <ExternalLinkIcon size="sm" />
                                      </a>
                                    </div>
                                  </div>
                                )}

                                {/* Subtopics Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3.5">
                                  {topic.subtopics.map((sub, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="text-[11px] text-neutral-slate-600 flex items-start gap-1.5 leading-normal"
                                    >
                                      <span className="text-neutral-slate-300 shrink-0 select-none mt-0.5">›</span>
                                      <span className="flex-1">
                                        <InlineMathText text={sub} />
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* JAMB CBT DRILLS & PAST QUESTIONS HIGHLIGHT */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-neutral-slate-900 flex items-center gap-2">
                
                <span>Exam Practice &amp; CBT Testing Bank</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200">
                  <span className="text-2xl font-extrabold font-heading text-neutral-slate-900 block">
                    {subject.pastQuestionsCount.toLocaleString()}+
                  </span>
                  <span className="text-xs text-neutral-slate-600 font-medium">
                    Verified WAEC/NECO/JAMB Solved Past Questions with marking rubrics
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200">
                  <span className="text-2xl font-extrabold font-heading text-brand-blue-600 block">
                    {subject.cbtDrillsCount.toLocaleString()}+
                  </span>
                  <span className="text-xs text-neutral-slate-600 font-medium">
                    Timed CBT Mock Drills with instantaneous score and step-by-step corrections
                  </span>
                </div>
              </div>
            </div>

            {/* LEARNING OUTCOMES */}
            <div className="rounded-xl border border-neutral-slate-200 bg-white p-6 space-y-4">
              <h2 className="font-heading font-bold text-base text-neutral-slate-900">
                Candidate Learning Outcomes
              </h2>
              <div className="space-y-2.5 text-xs text-neutral-slate-700">
                {subject.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-status-green-600 font-bold text-xs">✓</span>
                    <span className="flex-1">
                      <InlineMathText text={outcome} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY TUITION & ENROLLMENT SIDEBAR (4 COLS) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-soft space-y-6">
              <div>
                <span className="text-xs font-semibold text-neutral-slate-500 block mb-1">
                  Tuition Fee ({track.shortName})
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold font-heading text-neutral-slate-900">
                    {formatNaira(price)}
                  </span>
                  <span className="text-xs text-neutral-slate-500">/ one-time complete course</span>
                </div>
              </div>

              {/* Track Change Notice */}
              <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 text-xs text-neutral-slate-600 space-y-1">
                <span className="font-semibold text-neutral-slate-900 block">
                  Enrolled Track: {track.name}
                </span>
                <p className="text-[11px]">
                  Includes full syllabus video lectures, revision notes, quiz sets, and past question solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={`/request-tutor?track=${trackId}&subject=${subject.slug}`}
                  className="w-full block"
                >
                  <Button variant="primary" className="w-full h-11 text-sm font-bold">
                    Enroll in {subject.name}
                  </Button>
                </Link>

                <Link href="/academy" className="w-full block">
                  <Button variant="outline" className="w-full h-11 text-xs font-semibold">
                    Explore Bundle Options (Save up to 25%)
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-neutral-slate-100 space-y-2.5 text-xs text-neutral-slate-600">
                <div className="flex items-center gap-2">
                  
                  <span>Curriculum verified by Chief Examiner</span>
                </div>
                <div className="flex items-center gap-2">
                  
                  <span>Lifetime access to course updates</span>
                </div>
                <div className="flex items-center gap-2">
                  
                  <span>Includes {subject.pastQuestionsCount}+ past question solutions</span>
                </div>
              </div>
            </div>

            {/* Back to Catalogue Link */}
            <div className="text-center">
              <Link
                href="/academy"
                className="text-xs text-brand-blue-600 hover:text-brand-blue-700 font-semibold inline-flex items-center gap-1"
              >
                <span>← Back to Complete Course Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SubjectSyllabusView;
