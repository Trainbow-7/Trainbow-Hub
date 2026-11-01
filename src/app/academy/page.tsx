import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { SEED_SUBJECTS } from "@/lib/data/seed-data";
import { CourseCatalogueCard } from "@/components/academy/CourseCatalogueCard";
import { PRIMARY_INSTRUCTOR } from "@/data/instructor";
import { CATALOGUE_SUBJECTS } from "@/data/courses";
import { ChevronRight, Sparkles, GraduationCap } from "lucide-react";

export const metadata = {
  title: `Course Catalogue — Taught by ${PRIMARY_INSTRUCTOR.name} — Trainbow HUB`,
  description:
    "Curriculum-aligned courses and step-by-step exam syllabi for WAEC, JAMB, and Cambridge IGCSE, directed by Mr Oyedeji S.T.",
};

export default function AcademyPage() {
  const activeSubjects = SEED_SUBJECTS.filter((s) => s.status === "active");

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header Hero */}
        <div className="rounded-2xl bg-brand-navy-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-soft">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="brand" className="bg-brand-blue-600/30 text-brand-blue-200 border-brand-blue-500/40">
                Trainbow HUB Academy
              </Badge>
              <span className="text-xs text-neutral-slate-300 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-brand-blue-400" />
                WAEC • JAMB • Cambridge IGCSE • BECE • NCEE
              </span>
            </div>

            <h1 className="text-display font-extrabold font-heading text-white tracking-tight">
              Curriculum-Aligned Courses &amp; Revision Mastery
            </h1>

            <p className="text-body-lg text-neutral-slate-200 leading-relaxed max-w-2xl">
              Structured modules designed and directed by veteran WAEC Chief Examiner Consultant{" "}
              <strong className="text-white font-semibold">{PRIMARY_INSTRUCTOR.name}</strong>. Master key exam
              concepts with verified curriculum coverage, step-by-step marking rubrics, and dynamic bundle tuition.
            </p>
          </div>
        </div>

        {/* Subjects Browser Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
              Browse by Subject Area
            </h2>
            <span className="text-caption text-neutral-slate-500">{activeSubjects.length} Active Areas</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {activeSubjects.map((sub) => (
              <Link
                key={sub.id}
                href={`/academy/${sub.slug}`}
                className="group p-4 rounded-xl border border-neutral-slate-200 bg-white hover:border-brand-blue-600 hover:shadow-soft transition-all duration-150 flex flex-col justify-between gap-3 min-h-[140px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                      {sub.category}
                    </span>
                    {sub.aiEnabled && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-service-ai-600 bg-purple-50 px-1.5 py-0.5 rounded">
                        <Sparkles className="h-2.5 w-2.5" />
                        AI On
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
                  <ChevronRight className="h-3.5 w-3.5 text-neutral-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Consolidated Course Catalogue Card */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-h2 font-bold font-heading text-neutral-slate-900">
                Course Catalogue — Taught by {PRIMARY_INSTRUCTOR.name}
              </h2>
              <p className="text-caption text-neutral-slate-600">
                {CATALOGUE_SUBJECTS.length} verified subjects across Core, Science, Commercial, and Arts departments aligned to WAEC, JAMB, BECE, NCEE, and Cambridge IGCSE standards.
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
