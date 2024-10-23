const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    turbo: {},  // Enable Turbopack
  },
  swcMinify: true,  // Use SWC for minification
  reactStrictMode: true,  // Enable React strict mode
  compress: true,  // Enable gzip compression
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   domains: ['your-domain.com'],  // Replace with your image domains
  // },
  webpack(config) {
    return config;
  }
};

module.exports = withBundleAnalyzer(nextConfig);
