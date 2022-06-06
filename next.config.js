/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig;
