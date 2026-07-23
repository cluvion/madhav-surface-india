/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'alt.tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'www.madhavmarbles.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'madhavmarbles.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Add fallback for WordPress images
    unoptimized: false,
    // Increase timeout for external images
    minimumCacheTTL: 60,
  },
  // Increase timeout for static page generation (default 60s)
  // Prevents build failures when WordPress GraphQL is slow
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
