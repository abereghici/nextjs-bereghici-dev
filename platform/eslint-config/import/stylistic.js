module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/extensions': 'off',
    'import/newline-after-import': 'off',
    'import/no-named-as-default': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
