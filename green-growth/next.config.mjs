/** @type {import('next').NextConfig} */
const nextConfig = {
  // No basePath so URLs are direct
  images: {
    unoptimized: true,
  },
  // Use appropriate setting for route generation
  output: 'standalone',
  // Remove excludeFiles as it might be causing issues
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'framer-motion'],
  },
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
