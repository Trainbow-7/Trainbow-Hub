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
              "img-src 'self' data: blob: https://i.ytimg.com https://images.unsplash.com https://*.ytimg.com",
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
