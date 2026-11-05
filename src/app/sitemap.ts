import { MetadataRoute } from "next";
import { SEED_SUBJECTS, ALL_COURSES } from "@/lib/data/seed-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://trainbowhub.ng";
  const lastModified = new Date("2026-10-15");

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/academy`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/request-tutor`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/music`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/become-a-tutor`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/login`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/register`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/legal/safeguarding`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/refunds`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Subject routes
  const subjectRoutes: MetadataRoute.Sitemap = SEED_SUBJECTS.map((s) => ({
    url: `${baseUrl}/academy/${s.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Course routes
  const courseRoutes: MetadataRoute.Sitemap = ALL_COURSES.map((c) => ({
    url: `${baseUrl}/courses/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Preview lesson routes (SEO discoverability for free preview lessons)
  const previewLessonRoutes: MetadataRoute.Sitemap = ALL_COURSES.flatMap((c) =>
    c.syllabus.flatMap((m) =>
      m.lessons
        .filter((l) => l.isFreePreview)
        .map((l) => ({
          url: `${baseUrl}/courses/${c.slug}/lessons/${(l as any).slug || l.id}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.75,
        }))
    )
  );

  return [...staticRoutes, ...subjectRoutes, ...courseRoutes, ...previewLessonRoutes];
}
