/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,
  distDir: 'out',
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '',
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig;
