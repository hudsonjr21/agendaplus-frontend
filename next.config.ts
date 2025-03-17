/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_AGENDAPLUS_URL: process.env.NEXT_PUBLIC_AGENDAPLUS_URL,
  },
};

module.exports = nextConfig;