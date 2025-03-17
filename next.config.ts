/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_AGENDAPLUS_URL: process.env.NEXT_PUBLIC_AGENDAPLUS_URL,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};