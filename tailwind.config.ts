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
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(11, 27, 58, 0.06), 0 1px 2px -1px rgba(11, 27, 58, 0.06)",
        hover: "0 10px 15px -3px rgba(11, 27, 58, 0.08), 0 4px 6px -4px rgba(11, 27, 58, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
