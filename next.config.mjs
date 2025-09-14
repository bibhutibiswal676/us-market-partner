/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  reactStrictMode: true,
};

export default nextConfig;
