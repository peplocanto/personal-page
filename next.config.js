const { i18n } = require('./next-i18next.config');

module.exports = {
  future: {
    webpack5: false,
  },
  i18n,
  target: 'experimental-serverless-trace',
};
