/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/summit25',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
