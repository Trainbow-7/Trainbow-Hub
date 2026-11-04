import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { SEED_SUBJECTS, SEED_COURSES } from "@/lib/data/seed-data";
import { CourseCatalogueCard } from "@/components/academy/CourseCatalogueCard";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { ChevronRightIcon } from "@/components/ui/icons";
import { Reveal, Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { FeaturedCoursesCarousel } from "@/components/academy/FeaturedCoursesCarousel";

export const metadata = {
  title: `Course Catalogue — Taught by ${PRIMARY_INSTRUCTOR.name} — Trainbow HUB`,
  description:
    "Curriculum-guided courses and step-by-step exam syllabi for WAEC, JAMB, and Cambridge IGCSE, directed by Mr Oyedeji S.T.",
};

export default function AcademyPage() {
  const activeSubjects = SEED_SUBJECTS.filter((s) => s.status === "active");
  const featuredCourses = SEED_COURSES.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header Hero */}
        <Reveal>
          <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 lg:p-14 relative border border-brand-navy-800 shadow-md text-center">
            <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40">
                  Trainbow HUB Academy
                </Badge>
                <span className="text-xs text-neutral-slate-300">
                  WAEC • JAMB • Cambridge IGCSE • BECE • NCEE
                </span>
              </div>

              <h1 className="text-display font-extrabold font-heading text-white tracking-tight text-center">
                Curriculum courses &amp; exam preparation
              </h1>

              <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl mx-auto text-center">
                Structured modules designed and directed by veteran WAEC Chief Examiner Consultant{" "}
                <strong className="text-white font-semibold">{PRIMARY_INSTRUCTOR.name}</strong>. Learn key exam
                concepts with curriculum coverage, marking guidance, and bundle tuition.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Featured Courses Carousel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
                Featured curriculum courses
              </h2>
              <p className="text-xs text-neutral-slate-500 mt-0.5">
                Hand-picked syllabus tracks directed by verified examiners
              </p>
            </div>
            <Link
              href="#tracks"
              className="text-xs font-bold text-brand-blue-600 hover:text-brand-blue-700 hidden sm:inline-flex items-center gap-1"
            >
              <span>View all tracks</span>
              <ChevronRightIcon className="h-3 w-3" />
            </Link>
          </div>

          <FeaturedCoursesCarousel courses={featuredCourses} />
        </div>

        {/* Subjects Browser Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
              Browse by subject area
            </h2>
            <span className="text-caption text-neutral-slate-500">{activeSubjects.length} Active Areas</span>
          </div>

          <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activeSubjects.map((sub, idx) => (
              <StaggerItem key={sub.id} index={idx}>
                <HoverLift className="h-full">
                  <Link
                    href={`/academy/${sub.slug}`}
                    className="group p-4 rounded-lg border border-neutral-slate-200 bg-white hover:border-brand-blue-600 transition-all duration-150 flex flex-col justify-between gap-3 min-h-[140px] h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                          {sub.category}
                        </span>
                        {sub.aiEnabled && (
                          <span className="text-[10px] font-semibold text-service-ai-600 bg-purple-50 px-1.5 py-0.5 rounded">
                            Study helper
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-sm text-neutral-slate-900 group-hover:text-brand-blue-600 transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-neutral-slate-500 line-clamp-2 mt-1">
                        {sub.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-slate-100 text-[11px] text-neutral-slate-600">
                      <span className="font-medium">{sub.courseCount} Courses</span>
                      <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Consolidated Course Catalogue Card */}
        <div id="tracks" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
                Official Examination Tracks
              </h2>
              <p className="text-body text-neutral-slate-600 mt-1">
                Select your target examination board and build your subject bundle.
              </p>
            </div>
          </div>

          <CourseCatalogueCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
