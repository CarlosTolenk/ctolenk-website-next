/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['www.wgu.edu', 'plustatic.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
