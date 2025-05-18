/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Disable static generation for the problematic routes using useSearchParams
  experimental: {
    optimizePackageImports: ['@headlessui/react', 'framer-motion'],
  },
  // Ensure these routes are generated on-demand at runtime
  unstable_excludeFiles: ['**/summit/registration/page.tsx', '**/summit/speaker-registration/page.tsx', '**/summit25/registration/page.tsx', '**/summit25/speaker-registration/page.tsx'],
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
