/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
            {
                source: '/profile/:path*',
                destination: '/admin/users/:path*',
            },
        ]
    },
}

module.exports = nextConfig
