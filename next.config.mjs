/** @type {import('next').NextConfig} */

// TODO ADING IGORE BUILDS SOME ERRORS

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
