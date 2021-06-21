const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
  webpack5: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  target: 'experimental-serverless-trace',
};
