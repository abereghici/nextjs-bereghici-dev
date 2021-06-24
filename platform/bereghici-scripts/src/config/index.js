module.exports = {
  babel: require('./babelrc'),
  eslint: require('./eslintrc'),
  jest: require('./jest.config'),
  lintStaged: require('./lintstagedrc'),
  getRollupConfig: () => require('./rollup.config'),
};
