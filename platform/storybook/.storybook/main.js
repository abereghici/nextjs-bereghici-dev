module.exports = {
  stories: [
    '../../../packages/**/*.stories.mdx',
    '../../../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      rule => rule.test.toString() === '/\\.css$/'
    );

    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map(item => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName:
            configType === 'PRODUCTION'
              ? '[local]--[hash:base64:5]'
              : '[name]__[local]--[hash:base64:5]',
        };
      }
      return item;
    });

    // Return the altered config
    return config;
  },
};
