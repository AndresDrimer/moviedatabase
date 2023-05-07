/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
 
    images: {
      domains: ['image.tmdb.org'],
     
    },
    env:{
      API_KEY: process.env.API_KEY,
      GOOGLE_ID: process.env.GOOGLE_ID,
      GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    }
  }
  

module.exports = nextConfig
