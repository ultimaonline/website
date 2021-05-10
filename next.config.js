// ultimaonline.dev

const dotenv = require('dotenv');

const { version } = require('./package.json');

dotenv.config();

const config = {
  future: {
    webpack5: true
  },
  distDir: 'dist',
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  generateBuildId: async () => version
};

module.exports = config;
