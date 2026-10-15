"use client";

import * as React from "react";
import Link from "next/link";
import { SEED_TUTORS, TutorItem } from "@/lib/data/seed-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { Select } from "@/components/ui/Select";
import { Slider } from "@/components/ui/Slider";
import { Chip } from "@/components/ui/Chip";
import { Sheet } from "@/components/ui/Sheet";
import { SkeletonCard, EmptyState } from "@/components/ui/States";
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
  SlidersHorizontal,
  Video,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SUBJECT_OPTIONS = [
  { value: "all", label: "All Subjects" },
  { value: "mathematics", label: "Mathematics" },
  { value: "english", label: "English Language" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
  { value: "music", label: "Music & Instruments" },
];

const LEVEL_OPTIONS = [
  { value: "all", label: "All Levels" },
  { value: "primary", label: "Primary (1-6)" },
  { value: "jss", label: "JSS 1-3 (BECE)" },
  { value: "ss", label: "SS 1-3" },
  { value: "waec", label: "WAEC / SSCE" },
  { value: "jamb", label: "JAMB UTME" },
  { value: "igcse", label: "Cambridge IGCSE" },
];

const FORMAT_OPTIONS = [
  { value: "all", label: "All Delivery Formats" },
  { value: "online", label: "Online Classroom" },
  { value: "in-person", label: "In-Person" },
  { value: "hybrid", label: "Hybrid" },
];

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "experience", label: "Earliest Available" },
];

const QUICK_SUBJECT_CHIPS = [
  "Mathematics",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "Music",
];

export function TutorDirectory() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState("all");
  const [selectedLevel, setSelectedLevel] = React.useState("all");
  const [selectedFormat, setSelectedFormat] = React.useState("all");
  const [maxPrice, setMaxPrice] = React.useState<number>(15000);
  const [sortBy, setSortBy] = React.useState<string>("recommended");
  const [availabilityFilter, setAvailabilityFilter] = React.useState<"all" | "today" | "this-week" | "weekend">("all");
  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Filter & Sort Logic
  const filteredTutors = React.useMemo(() => {
    let list = SEED_TUTORS.filter((tutor) => {
      // 1. Text Search
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesName = tutor.name.toLowerCase().includes(term);
        const matchesBio = tutor.bio.toLowerCase().includes(term);
        const matchesLocation = tutor.location.toLowerCase().includes(term);
        const matchesSubject = tutor.subjects.some((s) => s.toLowerCase().includes(term));
        if (!matchesName && !matchesBio && !matchesLocation && !matchesSubject) return false;
      }

      // 2. Subject Filter
      if (selectedSubject !== "all") {
        const matchesSub = tutor.subjects.some((s) =>
          s.toLowerCase().includes(selectedSubject.toLowerCase())
        );
        if (!matchesSub) return false;
      }

      // 3. Level Filter
      if (selectedLevel !== "all") {
        const matchesLvl = tutor.levels.some((l) =>
          l.toLowerCase().includes(selectedLevel.toLowerCase())
        );
        if (!matchesLvl) return false;
      }

      // 4. Delivery Format Filter
      if (selectedFormat !== "all") {
        const matchesFmt = tutor.deliveryFormats.some((f) =>
          f.toLowerCase().includes(selectedFormat.toLowerCase())
        );
        if (!matchesFmt) return false;
      }

      // 5. Price Slider Filter (Naira per hour)
      const hourlyRateNaira = tutor.hourlyRateMinorUnits / 100;
      if (hourlyRateNaira > maxPrice) {
        return false;
      }

      return true;
    });

    // Sort Results
    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.hourlyRateMinorUnits - b.hourlyRateMinorUnits);
        break;
      case "price-desc":
        list.sort((a, b) => b.hourlyRateMinorUnits - a.hourlyRateMinorUnits);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // recommended
        break;
    }

    return list;
  }, [searchTerm, selectedSubject, selectedLevel, selectedFormat, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSubject("all");
    setSelectedLevel("all");
    setSelectedFormat("all");
    setMaxPrice(15000);
    setSortBy("recommended");
    setAvailabilityFilter("all");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedSubject !== "all" ||
    selectedLevel !== "all" ||
    selectedFormat !== "all" ||
    maxPrice < 15000 ||
    sortBy !== "recommended" ||
    availabilityFilter !== "all";

  // Quick subject chip selection
  const handleChipClick = (sub: string) => {
    const val = sub.toLowerCase();
    if (selectedSubject === val) {
      setSelectedSubject("all");
    } else {
      setSelectedSubject(val);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sticky Desktop Filter Bar & Controls Container */}
      <div className="rounded-panel border border-neutral-slate-200 bg-white p-5 sm:p-6 shadow-soft space-y-5">
        {/* Top Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tutor name, subject (e.g. Mathematics), or state..."
              className="w-full pl-10 pr-4 h-11 rounded-control border border-neutral-slate-200 text-sm text-neutral-slate-900 placeholder:text-neutral-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:border-brand-blue-600 transition-all shadow-xs"
            />
          </div>

          {/* Mobile Filter Button */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex-1 justify-center gap-2 min-h-[44px]"
            >
              <SlidersHorizontal className="h-4 w-4 text-neutral-slate-600" />
              <span>Filters {hasActiveFilters && "•"}</span>
            </Button>

            {/* Desktop Sort Dropdown */}
            <div className="w-48 hidden md:block">
              <Select
                aria-label="Sort tutors"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                options={SORT_OPTIONS}
              />
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-xs text-brand-blue-600 hover:text-brand-blue-800 shrink-0"
              >
                Clear all
              </Button>
            )}
          </div>
        </div>

        {/* Quick Select Subject Chips (Desktop & Mobile) */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-neutral-slate-100">
          <span className="text-xs font-semibold text-neutral-slate-500 mr-1 select-none">
            Popular:
          </span>
          {QUICK_SUBJECT_CHIPS.map((chip) => {
            const isSelected = selectedSubject === chip.toLowerCase();
            return (
              <Chip
                key={chip}
                label={chip}
                selected={isSelected}
                onClick={() => handleChipClick(chip)}
              />
            );
          })}
        </div>

        {/* Desktop Filter Row: Subject, Level, Format, Price Slider */}
        <div className="hidden md:grid grid-cols-12 gap-5 pt-3 border-t border-neutral-slate-100 items-end">
          <div className="col-span-3">
            <Select
              label="Subject"
              id="filter-subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              options={SUBJECT_OPTIONS}
            />
          </div>

          <div className="col-span-3">
            <Select
              label="Target Level"
              id="filter-level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              options={LEVEL_OPTIONS}
            />
          </div>

          <div className="col-span-3">
            <Select
              label="Format"
              id="filter-format"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              options={FORMAT_OPTIONS}
            />
          </div>

          {/* Hourly Price Range Slider */}
          <div className="col-span-3">
            <Slider
              label="Max Rate / Hour"
              min={3000}
              max={15000}
              step={500}
              value={maxPrice}
              onValueChange={setMaxPrice}
              formatValue={(val) => `₦${val.toLocaleString("en-NG")}`}
            />
          </div>
        </div>

        {/* Active Filter Badges */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-slate-100 text-xs">
            <span className="text-neutral-slate-500 font-medium">Active Filters:</span>
            {selectedSubject !== "all" && (
              <Chip
                label={`Subject: ${selectedSubject}`}
                onRemove={() => setSelectedSubject("all")}
              />
            )}
            {selectedLevel !== "all" && (
              <Chip
                label={`Level: ${selectedLevel.toUpperCase()}`}
                onRemove={() => setSelectedLevel("all")}
              />
            )}
            {selectedFormat !== "all" && (
              <Chip
                label={`Format: ${selectedFormat}`}
                onRemove={() => setSelectedFormat("all")}
              />
            )}
            {maxPrice < 15000 && (
              <Chip
                label={`Under ₦${maxPrice.toLocaleString("en-NG")}/hr`}
                onRemove={() => setMaxPrice(15000)}
              />
            )}
            {searchTerm && (
              <Chip
                label={`Search: "${searchTerm}"`}
                onRemove={() => setSearchTerm("")}
              />
            )}
          </div>
        )}
      </div>

      {/* Directory Count Header */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-neutral-slate-600 font-medium">
          Showing <strong className="text-neutral-slate-900 font-bold">{filteredTutors.length}</strong> verified tutor{filteredTutors.length === 1 ? "" : "s"}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-service-tutor-700 font-semibold">
          <ShieldCheck className="h-4 w-4" />
          <span className="hidden sm:inline">All tutors verified under Safeguarding Code</span>
          <span className="sm:hidden">Verified tutors</span>
        </div>
      </div>

      {/* Tutor Cards Grid */}
      {filteredTutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => {
            const hasReviews = tutor.completedLessons >= 5;
            const hourlyRate = (tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG");

            return (
              <Card
                key={tutor.id}
                className="flex flex-col justify-between hover-lift h-full"
              >
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={tutor.name} size="lg" />
                      <div>
                        <h2 className="font-heading font-bold text-base text-neutral-slate-900 leading-snug">
                          <Link
                            href={`/tutors/${tutor.slug}`}
                            className="hover:text-brand-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm transition-colors"
                          >
                            {tutor.name}
                          </Link>
                        </h2>
                        <div className="flex items-center gap-1 text-xs text-neutral-slate-500 mt-0.5">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{tutor.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="tutor" className="shrink-0 gap-1 text-[10px]">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </Badge>
                  </div>

                  <p className="text-xs font-semibold text-service-tutor-700">
                    {tutor.title}
                  </p>

                  <CardDescription className="text-xs text-neutral-slate-600 line-clamp-2 leading-relaxed">
                    {tutor.bio}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pt-0 text-xs">
                  {/* Rating & Rate (Formatted Naira) */}
                  <div className="flex items-center justify-between border-t border-neutral-slate-100 pt-3">
                    <div>
                      {hasReviews ? (
                        <Rating value={tutor.rating} count={tutor.completedLessons} />
                      ) : (
                        <span className="text-[11px] font-medium text-neutral-slate-500">
                          New verified tutor
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-bold text-neutral-slate-900 text-base">
                        ₦{hourlyRate}
                      </span>
                      <span className="text-neutral-slate-500 text-[11px] ml-0.5">/hr</span>
                    </div>
                  </div>

                  {/* Subjects Badges */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded-full bg-brand-blue-50 text-[10px] font-semibold text-brand-blue-700 border border-brand-blue-100"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Delivery Formats & Languages */}
                    <div className="flex items-center justify-between text-[11px] text-neutral-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Video className="h-3 w-3 text-neutral-slate-400" />
                        {tutor.deliveryFormats.join(", ")}
                      </span>
                      <span className="truncate max-w-[130px]">
                        {tutor.languages.join(", ")}
                      </span>
                    </div>

                    {/* Next slot hint */}
                    <div className="pt-1.5 flex items-center justify-between text-[11px] text-service-tutor-700 bg-service-tutor-700/5 px-2.5 py-1 rounded-control border border-service-tutor-700/10">
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="h-3 w-3" />
                        Next slot:
                      </span>
                      <span className="font-semibold">Today, 4:00 PM</span>
                    </div>
                  </div>
                </CardContent>

                {/* Dual Action CTAs */}
                <CardFooter className="pt-2 grid grid-cols-2 gap-2 border-t border-neutral-slate-100">
                  <Link href={`/tutors/${tutor.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      size="md"
                      className="w-full min-h-[44px] text-xs font-semibold"
                    >
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/bookings/create?tutorId=${tutor.id}`} className="w-full">
                    <Button
                      variant="tutor"
                      size="md"
                      className="w-full min-h-[44px] text-xs font-semibold shadow-sm justify-center gap-1"
                    >
                      <span>Book Slot</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        /* Friendly Empty State with Reset Action & "Ask for a Tutor" option */
        <div className="rounded-panel border border-neutral-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-soft">
          <div className="h-12 w-12 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mx-auto">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h3 className="font-heading font-bold text-neutral-slate-900 text-lg">
            No Tutors Match Your Current Filters
          </h3>
          <p className="text-small text-neutral-slate-600 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find an educator with your exact filters. Try raising the price slider, broadening your subjects, or request a custom tutor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="md" onClick={resetFilters} className="min-h-[44px]">
              Clear all filters
            </Button>
            <Link href="/contact?subject=Tutor+Request">
              <Button variant="primary" size="md" className="min-h-[44px]">
                Ask for a Tutor
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Bottom Filter Sheet */}
      <Sheet
        open={mobileFilterOpen}
        onOpenChange={setMobileFilterOpen}
        title="Filter Nigerian Tutors"
      >
        <div className="flex flex-col h-full justify-between gap-6 py-2">
          <div className="space-y-5">
            <Select
              label="Subject"
              id="mobile-filter-subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              options={SUBJECT_OPTIONS}
            />

            <Select
              label="Target Level"
              id="mobile-filter-level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              options={LEVEL_OPTIONS}
            />

            <Select
              label="Delivery Format"
              id="mobile-filter-format"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              options={FORMAT_OPTIONS}
            />

            <Slider
              label="Hourly Rate (₦/hr)"
              min={3000}
              max={15000}
              step={500}
              value={maxPrice}
              onValueChange={setMaxPrice}
              formatValue={(val) => `₦${val.toLocaleString("en-NG")}`}
            />

            <Select
              label="Sort Results By"
              id="mobile-filter-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              options={SORT_OPTIONS}
            />
          </div>

          <div className="pt-4 border-t border-neutral-slate-200 space-y-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center min-h-[48px] font-semibold"
              onClick={() => setMobileFilterOpen(false)}
            >
              Show {filteredTutors.length} Tutor{filteredTutors.length === 1 ? "" : "s"}
            </Button>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="md"
                className="w-full justify-center text-xs"
                onClick={resetFilters}
              >
                Reset All Filters
              </Button>
            )}
          </div>
        </div>
      </Sheet>
    </div>
  );
}
