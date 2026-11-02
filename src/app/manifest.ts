import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — ${BRAND.tagline}`,
    short_name: BRAND.name,
    description: BRAND.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1B3A",
    theme_color: "#0B1B3A",
    orientation: "portrait",
    categories: ["education", "learning", "productivity"],
    lang: "en-NG",
    icons: [
      {
        src: "/trainbow-logo.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
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
        description: "Music theory, piano, and vocal coaching",
        url: "/music",
      },
    ],
  };
}
