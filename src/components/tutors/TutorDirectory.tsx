"use client";

import * as React from "react";
import Link from "next/link";
import { SEED_TUTORS, TutorItem } from "@/lib/data/seed-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  ShieldCheck,
  Search,
  Filter,
  MapPin,
  Clock,
  ChevronRight,
  GraduationCap,
  X,
  Calendar,
} from "lucide-react";

export function TutorDirectory() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState("all");
  const [selectedLevel, setSelectedLevel] = React.useState("all");
  const [selectedFormat, setSelectedFormat] = React.useState("all");
  const [selectedLanguage, setSelectedLanguage] = React.useState("all");

  const filteredTutors = React.useMemo(() => {
    return SEED_TUTORS.filter((tutor) => {
      // 1. Text Search (name, bio, location)
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesName = tutor.name.toLowerCase().includes(term);
        const matchesBio = tutor.bio.toLowerCase().includes(term);
        const matchesLocation = tutor.location.toLowerCase().includes(term);
        const matchesSubject = tutor.subjects.some((s) => s.toLowerCase().includes(term));
        if (!matchesName && !matchesBio && !matchesLocation && !matchesSubject) return false;
      }

      // 2. Subject filter
      if (selectedSubject !== "all") {
        const matchesSub = tutor.subjects.some((s) =>
          s.toLowerCase().includes(selectedSubject.toLowerCase())
        );
        if (!matchesSub) return false;
      }

      // 3. Level filter
      if (selectedLevel !== "all") {
        const matchesLvl = tutor.levels.some((l) =>
          l.toLowerCase().includes(selectedLevel.toLowerCase())
        );
        if (!matchesLvl) return false;
      }

      // 4. Format filter
      if (selectedFormat !== "all") {
        const matchesFmt = tutor.deliveryFormats.some((f) =>
          f.toLowerCase().includes(selectedFormat.toLowerCase())
        );
        if (!matchesFmt) return false;
      }

      // 5. Language filter
      if (selectedLanguage !== "all") {
        const matchesLang = tutor.languages.some((lang) =>
          lang.toLowerCase() === selectedLanguage.toLowerCase()
        );
        if (!matchesLang) return false;
      }

      return true;
    });
  }, [searchTerm, selectedSubject, selectedLevel, selectedFormat, selectedLanguage]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSubject("all");
    setSelectedLevel("all");
    setSelectedFormat("all");
    setSelectedLanguage("all");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedSubject !== "all" ||
    selectedLevel !== "all" ||
    selectedFormat !== "all" ||
    selectedLanguage !== "all";

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-neutral-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tutor name, subject, or Nigerian state..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-slate-300 text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-transparent transition-colors"
            />
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="gap-1.5 text-xs shrink-0 self-end md:self-auto"
            >
              <X className="h-3.5 w-3.5" />
              Reset Filters
            </Button>
          )}
        </div>

        {/* Filter Select Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-neutral-slate-100 text-xs">
          <div>
            <label htmlFor="filter-subject" className="block text-[11px] font-semibold text-neutral-slate-600 mb-1">Subject</label>
            <select
              id="filter-subject"
              aria-label="Filter by subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full rounded-md border border-neutral-slate-300 bg-white px-2.5 py-1.5 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 focus:outline-none"
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="english">English Language</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="music">Music & Instruments</option>
            </select>
          </div>

          <div>
            <label htmlFor="filter-level" className="block text-[11px] font-semibold text-neutral-slate-600 mb-1">Target Level</label>
            <select
              id="filter-level"
              aria-label="Filter by target level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full rounded-md border border-neutral-slate-300 bg-white px-2.5 py-1.5 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="primary">Primary 1-6</option>
              <option value="jss">JSS 1-3 (BECE)</option>
              <option value="ss">SS 1-3</option>
              <option value="waec">WAEC / SSCE</option>
              <option value="jamb">JAMB UTME</option>
              <option value="igcse">Cambridge IGCSE</option>
            </select>
          </div>

          <div>
            <label htmlFor="filter-format" className="block text-[11px] font-semibold text-neutral-slate-600 mb-1">Delivery Format</label>
            <select
              id="filter-format"
              aria-label="Filter by delivery format"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full rounded-md border border-neutral-slate-300 bg-white px-2.5 py-1.5 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 focus:outline-none"
            >
              <option value="all">All Formats</option>
              <option value="online">Online Classroom</option>
              <option value="in-person">In-Person</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label htmlFor="filter-language" className="block text-[11px] font-semibold text-neutral-slate-600 mb-1">Language</label>
            <select
              id="filter-language"
              aria-label="Filter by language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full rounded-md border border-neutral-slate-300 bg-white px-2.5 py-1.5 text-xs text-neutral-slate-900 focus:ring-2 focus:ring-brand-blue-600 focus:outline-none"
            >
              <option value="all">All Languages</option>
              <option value="english">English</option>
              <option value="yoruba">Yoruba</option>
              <option value="igbo">Igbo</option>
              <option value="hausa">Hausa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Directory Count Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-slate-600">
          Showing <strong>{filteredTutors.length}</strong> verified Nigerian educator{filteredTutors.length === 1 ? "" : "s"}
        </p>
        <span className="text-[11px] text-neutral-slate-600 font-medium">
          All tutors vetted under Child Safeguarding Code
        </span>
      </div>

      {/* Tutor Cards Grid */}
      {filteredTutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <Card key={tutor.id} className="flex flex-col justify-between hover:shadow-hover transition-all">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={tutor.name} size="lg" />
                    <div>
                      <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                        <Link href={`/tutors/${tutor.slug}`} className="hover:text-brand-blue-600 transition-colors">
                          {tutor.name}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-neutral-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>{tutor.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="tutor" className="shrink-0 gap-1 text-[10px]">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </Badge>
                </div>

                <p className="text-xs font-medium text-service-tutor-700">
                  {tutor.title}
                </p>

                <CardDescription className="text-xs text-neutral-slate-600 line-clamp-2">
                  {tutor.bio}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0 text-xs">
                {/* Rating & Rate */}
                <div className="flex items-center justify-between border-t border-neutral-slate-100 pt-3">
                  <Rating value={tutor.rating} count={tutor.completedLessons} />
                  <div className="text-right">
                    <span className="font-bold text-neutral-slate-900 text-sm">
                      ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}
                    </span>
                    <span className="text-neutral-slate-500 text-[10px]">/hr</span>
                  </div>
                </div>

                {/* Subjects & Languages */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap gap-1">
                    {tutor.subjects.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-brand-blue-50 text-[10px] font-semibold text-brand-blue-700">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-slate-500">
                    <span>Languages:</span>
                    <span className="text-neutral-slate-700">{tutor.languages.join(", ")}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Link href={`/tutors/${tutor.slug}`} className="w-full">
                  <Button variant="tutor" size="sm" className="w-full justify-between">
                    <span>View Profile & Book</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-neutral-slate-200 bg-white p-12 text-center space-y-3">
          <GraduationCap className="h-10 w-10 text-neutral-slate-400 mx-auto" />
          <h3 className="font-heading font-semibold text-neutral-slate-900 text-base">
            No Tutors Match Your Filter Criteria
          </h3>
          <p className="text-xs text-neutral-slate-500 max-w-sm mx-auto">
            Try broadening your search keywords, selecting &quot;All Subjects&quot;, or resetting your filters.
          </p>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
