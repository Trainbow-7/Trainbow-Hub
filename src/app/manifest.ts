import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trainbow HUB — Learn • Connect • Grow",
    short_name: "Trainbow HUB",
    description:
      "Mobile-first online learning hub for Nigeria. Expert 1-on-1 tutoring, Socratic AI Mathematics Assistant, and curriculum-aligned courses for WAEC, JAMB, and Cambridge IGCSE.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1B3A",
    theme_color: "#0B1B3A",
    orientation: "portrait",
    categories: ["education", "learning", "productivity"],
    lang: "en-NG",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "School Portal",
        short_name: "School",
        description: "Institutional school administration, cohorts, and student roster",
        url: "/school",
      },
      {
        name: "Subjects Explorer",
        short_name: "Subjects",
        description: "Explore secondary and junior subjects",
        url: "/subjects",
      },
      {
        name: "Music Academy",
        short_name: "Music",
        description: "Music theory, instrument tuition and repertoire",
        url: "/music",
      },
      {
        name: "Student Dashboard",
        short_name: "Dashboard",
        description: "View lessons, bookings, and practice progress",
        url: "/dashboard",
      },
    ],
  };
}
