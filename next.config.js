/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: 'images/',
    },
}

module.exports = nextConfig;
