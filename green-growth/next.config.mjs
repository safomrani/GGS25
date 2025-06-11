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
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'framer-motion'],
  },
  
  // Font optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Development-specific settings
  ...(process.env.NODE_ENV === 'development' && {
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),
  
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
