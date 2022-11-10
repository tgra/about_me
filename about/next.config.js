/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
 
  
  exportPathMap: async function() {
      return {
        "/": { page: "/" },
        
      }
    },
  
}