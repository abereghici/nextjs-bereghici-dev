module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@babel/preset-react')],
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
};
