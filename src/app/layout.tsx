import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import "./globals.css";
import "katex/dist/katex.min.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Trainbow HUB — Learn • Build • Grow",
  description:
    "Mobile-first online learning hub for Nigeria. Expert 1-on-1 tutoring, Socratic AI Mathematics Assistant, and curriculum-aligned courses for WAEC, JAMB, and Cambridge IGCSE.",
  keywords: [
    "Trainbow HUB",
    "online tutoring Nigeria",
    "WAEC mathematics",
    "JAMB UTME prep",
    "AI learning assistant",
    "vetted Nigerian tutors",
  ],
  authors: [{ name: "Trainbow HUB Team" }],
  icons: {
    icon: "/trainbow-logo.png",
    shortcut: "/trainbow-logo.png",
    apple: "/trainbow-logo.png",
  },
  openGraph: {
    title: "Trainbow HUB — Learn • Build • Grow",
    description: "Mobile-first online learning hub connecting Nigerian students, parents, and verified tutors.",
    url: "https://trainbowhub.ng",
    siteName: "Trainbow HUB",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/trainbow-logo.png",
        width: 1024,
        height: 1024,
        alt: "Trainbow Hub Official Logo",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-neutral-slate-50 text-neutral-slate-900 selection:bg-brand-blue-50 selection:text-brand-blue-600">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
