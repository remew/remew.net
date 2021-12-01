const withTm = require('next-transpile-modules')(['react-syntax-highlighter']);

module.exports = withTm({
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'storage.googleapis.com', process.env.IMAGE_CDN_DOMAIN],
  },
});
