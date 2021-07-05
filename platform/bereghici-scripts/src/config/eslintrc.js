const { ifAnyDep } = require('../utils');

const config = {
  extends: [
    '@bereghici/eslint-config',
    '@bereghici/eslint-config/jest',
    ifAnyDep('react', '@bereghici/eslint-config/jsx-a11y'),
    ifAnyDep('react', '@bereghici/eslint-config/react'),
  ].filter(Boolean),
  rules: {},
};

module.exports = config;
