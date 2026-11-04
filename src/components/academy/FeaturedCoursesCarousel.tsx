"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Carousel, HoverLift } from "@/components/motion";

interface CourseItem {
  id: string;
  slug: string;
  title: string;
  level: string;
  priceMinorUnits: number;
  shortDescription: string;
  lessonCount?: number;
  durationHours?: number;
  instructor?: { name: string };
  modules?: any[];
}

export interface FeaturedCoursesCarouselProps {
  courses: CourseItem[];
}

export function FeaturedCoursesCarousel({ courses }: FeaturedCoursesCarouselProps) {
  return (
    <Carousel
      items={courses}
      ariaLabel="Featured curriculum courses carousel"
      slidesPerView={{ default: 1, sm: 2, lg: 3 }}
      loop={false}
      showControls={true}
      showProgress={true}
      renderItem={(course) => (
        <HoverLift className="h-full">
          <Link
            href={`/courses/${course.slug}`}
            className="group block p-5 rounded-xl border border-neutral-slate-200 bg-white hover:border-brand-blue-600 transition-colors h-full flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <Badge variant="brand">{course.level}</Badge>
                <span className="text-xs font-bold text-neutral-slate-900">
                  ₦{(course.priceMinorUnits / 100).toLocaleString("en-NG")}
                </span>
              </div>

              <h3 className="font-heading font-bold text-base text-neutral-slate-900 group-hover:text-brand-blue-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-xs text-neutral-slate-600 line-clamp-2 leading-relaxed">
                {course.shortDescription}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-slate-100 text-[11px] text-neutral-slate-500">
              <span>{course.lessonCount} Lessons • {course.durationHours}h</span>
              <span className="font-semibold text-brand-blue-600 group-hover:underline">
                Explore course →
              </span>
            </div>
          </Link>
        </HoverLift>
      )}
    />
  );
}
