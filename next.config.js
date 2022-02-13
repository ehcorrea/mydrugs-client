// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

const pwa = {
  dest: 'public',
  disable: !isProd,
};

module.exports = withPwa({ reactStrictMode: true, pwa });
