/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Empty strings for root GitHub Pages URL
  basePath: '',
  assetPrefix: '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Output directory
  distDir: 'out',
}

export default nextConfig;
