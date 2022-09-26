/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['cypress', 'pages', 'src'],
  },
}

module.exports = nextConfig
