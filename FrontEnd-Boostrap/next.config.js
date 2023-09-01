/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/client/home',
            },
            {
                source: '/home',
                destination: '/client/home',
            },
            {
                source: '/literary',
                destination: '/client/literary',
            },
            {
                source: '/search',
                destination: '/client/search',
            },
            {
                source: '/change-password-case-forgot',
                destination: '/client/change-password-case-forgot',
            },
            {
                source: '/post/:path*',
                destination: '/client/post/:path*',
            },
            {
                source: '/literary/:path*',
                destination: '/client/literary/:path*',
            },
            {
                source: '/profile/:path*',
                destination: '/admin/users/:path*',
            },
        ]
    },
}

module.exports = nextConfig
