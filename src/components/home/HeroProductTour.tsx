"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/motion";

interface TourSlide {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  href: string;
}

const TOUR_SLIDES: TourSlide[] = [
  {
    id: "ai-workspace",
    title: "AI Study Helper",
    caption: "Step-by-step problem solver with verification checks.",
    image: "/screenshots/tour/tour-ai-workspace.png",
    alt: "Trainbow HUB AI study helper interface",
    href: "/ai",
  },
  {
    id: "course-syllabus",
    title: "Curriculum Courses",
    caption: "WAEC and Cambridge syllabus modules directed by expert faculty.",
    image: "/screenshots/tour/tour-course-page.png",
    alt: "Structured curriculum course view",
    href: "/academy",
  },
  {
    id: "lesson-player",
    title: "Interactive Lessons",
    caption: "Curriculum-aligned video instruction and checkpoint practice sets.",
    image: "/screenshots/tour/tour-lesson-page.png",
    alt: "Lesson video player and notes interface",
    href: "/academy",
  },
  {
    id: "tutor-matching",
    title: "Director Tutor Match",
    caption: "Hand-matched private tutors verified for Nigerian curricula.",
    image: "/screenshots/tour/tour-request-tutor.png",
    alt: "Tutor match coordination interface",
    href: "/request-tutor",
  },
];

export function HeroProductTour({ className = "" }: { className?: string }) {
  return (
    <div
      data-testid="hero-product-tour"
      className={`w-full max-w-lg rounded-xl border border-white/15 bg-white/[0.04] p-4 sm:p-5 text-left space-y-3 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
            Product tour
          </span>
          <h2 className="text-sm sm:text-base font-bold font-heading text-white mt-0.5">
            Platform walkthrough
          </h2>
        </div>
        <span className="text-[11px] font-medium text-sky-400">
          Live preview
        </span>
      </div>

      <Carousel
        items={TOUR_SLIDES}
        ariaLabel="Trainbow HUB platform walkthrough tour"
        slidesPerView={1}
        autoplay={true}
        autoplayInterval={7000}
        loop={true}
        showControls={true}
        showProgress={true}
        renderItem={(slide) => (
          <Link
            href={slide.href}
            className="group block rounded-lg border border-white/10 bg-slate-900/60 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-colors"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                priority={slide.id === "ai-workspace"}
              />
            </div>
            <div className="p-3 sm:p-3.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-sky-300 transition-colors">
                  {slide.title}
                </span>
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {slide.caption}
              </p>
            </div>
          </Link>
        )}
      />
    </div>
  );
}

