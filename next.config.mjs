/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // যদি proxy ব্যবহার করতে চাও:
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
