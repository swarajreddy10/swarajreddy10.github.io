/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",output: "export",
    images: {
        unoptimized: true,
    },
    // Optional: Add base path if your site is not served from the root
    // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
}

export default nextConfig;
