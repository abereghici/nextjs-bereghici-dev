const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  target: 'serverless',
  /**
   * Environment variables can be used to inject dynamic configuration
   * into the Next.js app at built time. Learn more at
   * https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    SITE_NAME: 'bereghici.dev',
    SITE_LOCALE: 'en',
    SITE_BASEURL: 'https://bereghici.dev',
  },
});
