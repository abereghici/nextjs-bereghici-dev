module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-value-no-unknown-custom-properties'],
  rules: {
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-unknown-animations': true,
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 3,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'csstools/value-no-unknown-custom-properties': true,
    'color-hex-case': 'lower',
    'unit-case': 'lower',
  },
};
