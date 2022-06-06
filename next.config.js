/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/cv-online.ctolenk.com/',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig;
