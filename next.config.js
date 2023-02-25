/** @type {import('next').NextConfig} */
/* const nextConfig = {
  reactStrictMode: true,
}; */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = withPWA({
    reactStrictMode: true,
});

/* const runtimeCaching = require('next-pwa/cache')
const withPWA = require("next-pwa")({
    dest: "public",
    runtimeCaching
}); */

module.exports = nextConfig;