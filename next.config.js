/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Esto permite que el build se complete incluso con errores de ESLint
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Esto ignora errores de TypeScript durante el build
      ignoreBuildErrors: true,
    },
  }
  
  module.exports = nextConfig