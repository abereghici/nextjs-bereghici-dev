module.exports = {
  plugins: ['@emotion'],
  rules: {
    '@emotion/syntax-preference': [2, 'object'],
    '@emotion/jsx-import': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/pkg-renaming': 'error',
  },
};
