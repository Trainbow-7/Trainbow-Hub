/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/tutors",
        destination: "/request-tutor",
        permanent: true,
      },
      {
        source: "/tutors/:slug*",
        destination: "/request-tutor",
        permanent: true,
      },
      // 301 Permanent Redirects from legacy course URLs to Mr Oyedeji S.T syllabus routes
      {
        source: "/courses/waec-ssce-mathematics-mastery",
        destination: "/instructors/mr-oyedeji-st/courses/waec-ssce/mathematics",
        permanent: true,
      },
      {
        source: "/courses/jamb-utme-speed-mathematics",
        destination: "/instructors/mr-oyedeji-st/courses/jamb-utme/mathematics",
        permanent: true,
      },
      {
        source: "/courses/jss3-basic-mathematics-bece-prep",
        destination: "/instructors/mr-oyedeji-st/courses/jss-bece/mathematics",
        permanent: true,
      },
      {
        source: "/courses/ss2-algebra-and-trigonometry-deep-dive",
        destination: "/instructors/mr-oyedeji-st/courses/waec-ssce/mathematics",
        permanent: true,
      },
      {
        source: "/courses/primary6-quantitative-reasoning-common-entrance",
        destination: "/instructors/mr-oyedeji-st/courses/primary-ncee/mathematics",
        permanent: true,
      },
      {
        source: "/courses/cambridge-igcse-extended-mathematics",
        destination: "/instructors/mr-oyedeji-st/courses/cambridge-igcse/mathematics",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://s.ytimg.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://images.unsplash.com https://*.ytimg.com",
              "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com https://trainbow-sandbox.daily.co https://*.daily.co",
              "connect-src 'self' https://*.googleapis.com https://generativelanguage.googleapis.com https://api.paystack.co http://localhost:8000 http://localhost:3000",
            ].join("; "),
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
