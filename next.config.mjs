/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/swarajreddy10.github.io' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/swarajreddy10.github.io/' : '',
}

export default nextConfig;
