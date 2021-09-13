module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../../packages/**/*.stories.@(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-performance',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
};
