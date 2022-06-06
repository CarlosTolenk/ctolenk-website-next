/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: 'https://cv-online.ctolenk.com',
    },
}

module.exports = nextConfig;
