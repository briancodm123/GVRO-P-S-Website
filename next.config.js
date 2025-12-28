/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/Xgw7JDQ2HY', // Replace with your actual Discord invite link
        permanent: false, // Set to true for permanent redirect (301), false for temporary (302)
      },
      {
        source: '/applications',
        destination: 'https://discord.com/channels/883542529956515850/1454601021363064852/1454828308133838862',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
