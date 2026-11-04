"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from "@/components/ui/icons";
import { getMotionPreference } from "@/lib/motion";

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  ariaLabel: string;
  slidesPerView?: number | { default: number; sm?: number; md?: number; lg?: number };
  gap?: string;
  showControls?: boolean;
  showProgress?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  ariaLabel,
  slidesPerView = { default: 1, sm: 2, lg: 3 },
  gap = "gap-4",
  showControls = true,
  showProgress = true,
  autoplay = false,
  autoplayInterval = 7000,
  loop = false,
  className = "",
  slideClassName = "",
}: CarouselProps<T>) {
  const [mounted, setMounted] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(autoplay);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(items.length > 1);

  // Determine slide width class based on slidesPerView
  const getSlideBasisClass = () => {
    if (typeof slidesPerView === "number") {
      if (slidesPerView === 1) return "w-full";
      if (slidesPerView === 2) return "w-full sm:w-1/2";
      if (slidesPerView === 3) return "w-full sm:w-1/2 lg:w-1/3";
      if (slidesPerView === 4) return "w-full sm:w-1/2 md:w-1/3 lg:w-1/4";
      return "w-full";
    }

    const classes: string[] = [];
    if (slidesPerView.default === 1) classes.push("w-[88%] sm:w-full");
    else classes.push(`w-full`);

    if (slidesPerView.sm) {
      if (slidesPerView.sm === 1) classes.push("sm:w-full");
      else if (slidesPerView.sm === 2) classes.push("sm:w-1/2");
    }
    if (slidesPerView.md) {
      if (slidesPerView.md === 2) classes.push("md:w-1/2");
      else if (slidesPerView.md === 3) classes.push("md:w-1/3");
    }
    if (slidesPerView.lg) {
      if (slidesPerView.lg === 2) classes.push("lg:w-1/2");
      else if (slidesPerView.lg === 3) classes.push("lg:w-1/3");
      else if (slidesPerView.lg === 4) classes.push("lg:w-1/4");
    }
    return classes.join(" ");
  };

  const motionPolicy = typeof window !== "undefined" ? getMotionPreference() : "full";
  const shouldAutoplay = autoplay && motionPolicy === "full";

  const autoplayPlugin = React.useMemo(() => {
    if (!shouldAutoplay) return null;
    return Autoplay({
      delay: autoplayInterval,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    });
  }, [shouldAutoplay, autoplayInterval]);

  const plugins = autoplayPlugin ? [autoplayPlugin] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: "start",
      containScroll: "trimSnaps",
      skipSnaps: false,
      dragFree: false,
    },
    plugins
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    setMounted(true);
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleAutoplay = React.useCallback(() => {
    if (!autoplayPlugin) return;
    if (isPlaying) {
      autoplayPlugin.stop();
      setIsPlaying(false);
    } else {
      autoplayPlugin.play();
      setIsPlaying(true);
    }
  }, [autoplayPlugin, isPlaying]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const basisClass = getSlideBasisClass();

  // SSR / No-JS fallback: Render clean horizontal snap row
  if (!mounted) {
    return (
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className={`w-full ${className}`}
      >
        <div className={`snap-carousel ${gap} py-2`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${items.length}`}
              className={`snap-slide shrink-0 ${basisClass} ${slideClassName}`}
            >
              {renderItem(item, idx, idx === 0)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`relative w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-xl ${className}`}
    >
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-full touch-pan-y"
      >
        <div
          role="group"
          aria-live={isPlaying ? "off" : "polite"}
          className={`flex ${gap}`}
        >
          {items.map((item, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div
                key={idx}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${items.length}`}
                className={`shrink-0 transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-85"
                } ${basisClass} ${slideClassName}`}
              >
                {renderItem(item, idx, isActive)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Controls Bar */}
      {(showControls || showProgress) && items.length > 1 && (
        <div className="flex items-center justify-between pt-4 gap-3">
          {/* Progress Indicator */}
          {showProgress && (
            <div className="text-xs font-semibold text-neutral-slate-600 select-none">
              <span aria-hidden="true">{selectedIndex + 1} of {items.length}</span>
              <span className="sr-only">Slide {selectedIndex + 1} of {items.length}</span>
            </div>
          )}

          {/* Buttons: Prev, Next, Autoplay Pause/Play */}
          {showControls && (
            <div className="flex items-center gap-2 ml-auto">
              {shouldAutoplay && (
                <button
                  type="button"
                  onClick={toggleAutoplay}
                  aria-label={isPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-700 hover:bg-neutral-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon size="sm" fallbackText="Pause" />
                  ) : (
                    <PlayIcon size="sm" fallbackText="Play" />
                  )}
                </button>
              )}

              <button
                type="button"
                onClick={scrollPrev}
                disabled={!loop && !canScrollPrev}
                aria-label="Previous slide"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-700 hover:bg-neutral-slate-50 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 transition-colors"
              >
                <ChevronLeftIcon size="md" fallbackText="Previous" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!loop && !canScrollNext}
                aria-label="Next slide"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-700 hover:bg-neutral-slate-50 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 transition-colors"
              >
                <ChevronRightIcon size="md" fallbackText="Next" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

