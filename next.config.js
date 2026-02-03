/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Generate a fully static export that can be served by GitHub Pages
  output: 'export',
  // Allow usage of `next/image` while exporting static HTML
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig




















