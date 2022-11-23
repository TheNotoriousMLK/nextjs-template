/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
        },
      },
    ],
  },
  eslint: {
    dirs: ['app', 'cypress', 'pages', 'src'],
  },
}

module.exports = nextConfig
