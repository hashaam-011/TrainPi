const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  webpack: (config, { isServer }) => {
    const rootPath = path.resolve(process.cwd())
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': rootPath,
    }
    config.resolve.modules = [rootPath, 'node_modules']
    return config
  },
}

module.exports = nextConfig

