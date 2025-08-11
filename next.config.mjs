/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Output directory
  distDir: 'out',
  // Disable React StrictMode for static export
  reactStrictMode: false,
  // Ensure base paths are empty for root domain
  basePath: '',
  assetPrefix: '',
}

export default nextConfig;
