/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ipfs.infura.io'],
  }
}

module.exports = nextConfig
