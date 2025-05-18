/** @type {import('next').NextConfig} */
const nextConfig = {
  // No basePath so URLs are direct
  images: {
    unoptimized: true,
  },
  // Change from 'standalone' to 'export' for static site generation
  output: 'export',
  // Add trailingSlash true to ensure consistent URL handling
  trailingSlash: true,
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
