/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['source.unsplash.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
}

const env = {
  APP_NAME: 'Movies Library'
}

module.exports = { nextConfig, env }