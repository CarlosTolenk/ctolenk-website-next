/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.wgu.edu', 'plustatic.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
