/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    //  proxy
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:4000/:path*',
            },
        ];
    },
};

export default nextConfig;
