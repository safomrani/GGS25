/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Experimental features for optimization
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'framer-motion'],
    serverActions: true,
  },
  // Redirect root to summit
  async redirects() {
    return [
      {
        source: '/',
        destination: '/summit',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
