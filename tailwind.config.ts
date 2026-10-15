import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: "#0B1B3A",
            950: "#070F24",
          },
          blue: {
            50: "#EFF4FF",
            100: "#DBEAFE",
            500: "#3B82F6",
            600: "#2563EB",
            700: "#1D4ED8",
          },
        },
        service: {
          ai: {
            500: "#8B5CF6",
            600: "#7C3AED",
            700: "#6D28D9",
          },
          tutor: {
            500: "#14B8A6",
            600: "#0D9488",
            700: "#0F766E",
          },
          music: {
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
          },
        },
        neutral: {
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
        status: {
          green: {
            500: "#22C55E",
            600: "#16A34A",
            700: "#15803D",
            800: "#166534",
          },
          orange: {
            500: "#F97316",
            600: "#D97706",
            700: "#C2410C",
          },
          red: {
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
          },
        },
        surface: {
          dark: "#111A2E",
          card: "var(--card-bg)",
        },
        textOnDark: {
          DEFAULT: "#FFFFFF",
          muted: "#F1F5F9",
        },
        textOnLight: {
          DEFAULT: "#0F172A",
          muted: "#475569",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        h1: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }],
        body: ["1rem", { lineHeight: "1.5", letterSpacing: "0" }],
        small: ["0.875rem", { lineHeight: "1.45", letterSpacing: "0" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        DEFAULT: "8px",
        control: "8px",
        card: "12px",
        panel: "16px",
        full: "9999px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        // 3 elevation levels only:
        // 1. border-only (handled via border or elevation-flat)
        flat: "0 0 0 1px var(--card-border)",
        // 2. soft shadow (cards, calm hover lift)
        soft: "0 2px 8px -2px rgba(11, 27, 58, 0.05), 0 4px 16px -4px rgba(11, 27, 58, 0.08)",
        // 3. floating (modals, popovers, dropdowns)
        floating: "0 12px 32px -4px rgba(11, 27, 58, 0.12), 0 4px 12px -2px rgba(11, 27, 58, 0.08)",
        // legacy compatibility mappings
        card: "0 2px 8px -2px rgba(11, 27, 58, 0.05), 0 4px 16px -4px rgba(11, 27, 58, 0.08)",
        hover: "0 8px 24px -4px rgba(11, 27, 58, 0.12), 0 2px 6px -2px rgba(11, 27, 58, 0.04)",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        micro: "150ms",
        standard: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
