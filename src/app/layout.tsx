import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { MotionProvider } from "@/components/motion";
import { BRAND } from "@/lib/brand";
import "./globals.css";
import "katex/dist/katex.min.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1B3A" },
    { media: "(prefers-color-scheme: dark)", color: "#070F24" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "Trainbow HUB",
    "online tutoring Nigeria",
    "WAEC mathematics",
    "JAMB UTME prep",
    "Cambridge IGCSE",
    "AI maths helper",
    "tutors Nigeria",
  ],
  authors: [{ name: `${BRAND.name} Team` }],
  icons: {
    icon: "/trainbow-logo.png",
    shortcut: "/trainbow-logo.png",
    apple: "/trainbow-logo.png",
  },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    url: BRAND.url,
    siteName: BRAND.name,
    locale: BRAND.locale,
    type: "website",
    images: [
      {
        url: "/trainbow-logo.png",
        width: 1024,
        height: 1024,
        alt: `${BRAND.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    images: ["/trainbow-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/trainbow-logo.png`,
    slogan: BRAND.tagline,
    description: BRAND.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abeokuta",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.supportPhone,
      contactType: "customer service",
      email: BRAND.supportEmail,
      areaServed: "NG",
    },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-neutral-slate-50 text-neutral-slate-900 selection:bg-brand-blue-50 selection:text-brand-blue-600">
        <AuthProvider>
          <MotionProvider>{children}</MotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
