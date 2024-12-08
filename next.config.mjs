/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental config since App Router is now stable
  images: {
    domains: ['your-domain.com'],
  },
};

export default nextConfig;
