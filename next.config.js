/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export -> ./out, deployable to Cloudflare Pages (or any static host).
  output: "export",
  // next/image's optimizer needs a server; serve the files as-is in a static export.
  images: { unoptimized: true },
};

module.exports = nextConfig;
