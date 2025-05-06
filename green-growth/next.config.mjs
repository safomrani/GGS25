/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/summit24',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
