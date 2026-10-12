"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Music,
  CheckCircle2,
  Sparkles,
  Bot,
  Users,
  GraduationCap,
  ArrowRight,
  Filter,
  ShieldCheck,
  Search,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Subject {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  levels: string[];
  deliveryFormats: string[];
  status: "DRAFT" | "ACTIVE" | "RETIRED";
  icon: string;
  color: string;
  pricingTierMinorUnits: number;
  commissionRatePercent: number;
  aiEnabled: boolean;
  aiEvaluationStatus: "NOT_STARTED" | "IN_EVALUATION" | "PASSED" | "FAILED";
  aiEvaluationScore?: number;
}

const ICON_MAP: Record<string, any> = {
  Calculator,
  BookOpen,
  Atom,
  FlaskConical,
  Dna,
  Music,
};

export default function SubjectsCatalogPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSubjects() {
      try {
        const res = await fetch("/api/subjects");
        const data = await res.json();
        if (data.subjects) {
          setSubjects(data.subjects);
        }
      } catch (err) {
        console.error("Failed to load subjects:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSubjects();
  }, []);

  const categories = ["ALL", "STEM", "Languages", "Sciences", "Arts"];

  const filteredSubjects = subjects.filter((s) => {
    const matchesCategory =
      selectedCategory === "ALL" || s.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-slate-50 text-neutral-slate-900 pb-16">
      {/* Hero Section */}
      <section className="bg-neutral-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-900/60 border border-brand-purple-500/40 text-brand-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phase I: Multi-Subject Academic Registry</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Explore All Subjects &amp; Curricula
          </h1>
          <p className="text-neutral-slate-300 text-base sm:text-lg max-w-2xl">
            From foundational Mathematics to English, Physics, and Chemistry. Every subject is
            aligned to WAEC, JAMB, and Cambridge standards with verified human tutors and rigorously evaluated AI guidance.
          </p>

          {/* Search & Filter Controls */}
          <div className="pt-4 flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="w-4 h-4 text-neutral-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject by name or topic..."
                aria-label="Search subjects"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-slate-800 border border-neutral-slate-700 text-white text-sm placeholder:text-neutral-slate-400 focus:outline-hidden focus:border-brand-purple-400"
              />
            </div>

            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter subjects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    selectedCategory === cat
                      ? "bg-brand-purple-600 text-white"
                      : "bg-neutral-slate-800 text-neutral-slate-300 hover:bg-neutral-slate-700 hover:text-white"
                  }`}
                >
                  {cat === "ALL" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Subjects Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-slate-200">
          <div>
            <h2 className="text-xl font-black text-neutral-slate-900">
              Active Academic Subjects ({filteredSubjects.length})
            </h2>
            <p className="text-xs text-neutral-slate-600 mt-0.5">
              Approved curricula ready for immediate self-paced study or 1-on-1 virtual tutor booking.
            </p>
          </div>
          <Link href="/tutors" className="text-xs font-bold text-brand-purple-700 hover:underline flex items-center gap-1">
            Browse All Verified Tutors <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="py-20 text-center text-neutral-slate-500 text-sm">
            Loading subjects catalogue...
          </div>
        ) : filteredSubjects.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white rounded-2xl border border-neutral-slate-200 mt-6 p-8">
            <p className="text-neutral-slate-700 font-semibold text-sm">No subjects found matching your search.</p>
            <Button variant="outline" size="sm" onClick={() => { setSelectedCategory("ALL"); setSearchQuery(""); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" data-testid="subjects-catalog-grid">
            {filteredSubjects.map((sub) => {
              const IconComp = ICON_MAP[sub.icon] || BookOpen;
              const formattedPrice = `₦${(sub.pricingTierMinorUnits / 100).toLocaleString()}/hr`;

              return (
                <div
                  key={sub.slug}
                  data-testid={`subject-card-${sub.slug}`}
                  className="bg-white rounded-2xl border border-neutral-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  {/* Category Pill & AI Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-slate-100 text-neutral-slate-700 border border-neutral-slate-200">
                      {sub.category}
                    </span>

                    {sub.aiEnabled ? (
                      <span
                        data-testid={`ai-badge-active-${sub.slug}`}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200"
                      >
                        <Bot className="w-3 h-3 text-purple-600" />
                        AI Socratic Active
                      </span>
                    ) : (
                      <span
                        data-testid={`ai-badge-eval-${sub.slug}`}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-slate-100 text-neutral-slate-600 border border-neutral-slate-200"
                      >
                        <ShieldCheck className="w-3 h-3 text-neutral-slate-500" />
                        AI in Quality Evaluation
                      </span>
                    )}
                  </div>

                  {/* Icon & Subject Title */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-neutral-slate-900 group-hover:text-purple-700 transition-colors">
                        <Link href={`/subjects/${sub.slug}`} className="hover:underline">
                          {sub.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-neutral-slate-600 mt-1 line-clamp-3 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>

                    {/* Levels Badge List */}
                    <div className="pt-1">
                      <p className="text-[10px] font-bold text-neutral-slate-500 uppercase tracking-wider mb-1">
                        Curriculum Tracks:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {sub.levels.slice(0, 3).map((lvl) => (
                          <span
                            key={lvl}
                            className="text-[10px] bg-neutral-slate-50 text-neutral-slate-700 px-2 py-0.5 rounded-md border border-neutral-slate-200 font-medium"
                          >
                            {lvl}
                          </span>
                        ))}
                        {sub.levels.length > 3 && (
                          <span className="text-[10px] bg-neutral-slate-50 text-neutral-slate-600 px-1.5 py-0.5 rounded-md border border-neutral-slate-200 font-medium">
                            +{sub.levels.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Meta & Action Links */}
                  <div className="pt-5 mt-5 border-t border-neutral-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-slate-500 block">Lessons From</span>
                      <span className="text-xs font-black text-neutral-slate-900">{formattedPrice}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/subjects/${sub.slug}`}
                        data-testid={`view-subject-btn-${sub.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-slate-900 text-white text-xs font-bold hover:bg-neutral-slate-800 transition-colors"
                      >
                        Explore <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quality Standard Callout */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-slate-200 p-8 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Trainbow Rigorous Subject Launch Gate (SB-06)</span>
            </div>
            <h2 className="text-xl font-black text-neutral-slate-900">
              Why aren't all subjects AI-enabled immediately?
            </h2>
            <p className="text-xs text-neutral-slate-600 leading-relaxed">
              Under our pedagogical governance framework (ADR-010), an AI assistant is never released to Nigerian students
              as a generic, unverified model. Each subject must first pass a formal curriculum grounding evaluation,
              symbolic or rubric accuracy tests exceeding 80%, and minor child safety filters before being toggled live.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
