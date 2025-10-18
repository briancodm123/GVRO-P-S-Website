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
    ]
  },
}

module.exports = nextConfig
