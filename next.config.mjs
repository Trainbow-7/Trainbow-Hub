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
};

export default nextConfig;
