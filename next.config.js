/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig;
