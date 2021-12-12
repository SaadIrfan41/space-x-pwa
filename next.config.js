/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV !== 'production',
  },
  images: {
    domains: [
      'farm9.staticflickr.com',
      'farm8.staticflickr.com',
      'farm2.staticflickr.com',
      'farm1.staticflickr.com',
      'farm3.staticflickr.com',
      'farm4.staticflickr.com',
      'farm5.staticflickr.com',
      'farm6.staticflickr.com',
      'farm7.staticflickr.com',
      'farm10.staticflickr.com',
      'images.unsplash.com',
      'i.imgur.com',
      'photos.marinetraffic.com',
    ],
  },
})
