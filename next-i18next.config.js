module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    interpolation: {
      escapeValue: '.',
    },
    react: {
      defaultTransParent: 'div',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      transWrapTextNodes: 'span',
    },
  },
};
