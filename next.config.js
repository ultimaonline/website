// ultimaonline.dev

const withSass = require('@zeit/next-sass');
const dotenv = require('dotenv');

const { version } = require('./package.json');

dotenv.config();

const config = {
  distDir: 'dist',
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  generateBuildId: async () => version
};

module.exports = withSass(config);
