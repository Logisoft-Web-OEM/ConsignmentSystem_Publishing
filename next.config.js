const UnoCSS = require("@unocss/webpack").default;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(UnoCSS());
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
};

module.exports = nextConfig;
