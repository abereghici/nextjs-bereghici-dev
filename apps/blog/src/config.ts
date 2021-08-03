interface Config {
  appName: string;
  appLocale: string;
  appBaseUrl: string;
  googleAnalytics: string;
}

export const config: Config = {
  appName: process.env.NEXT_PUBLIC_SITE_NAME ?? '',
  appLocale: process.env.NEXT_PUBLIC_SITE_LOCALE ?? 'en',
  appBaseUrl: process.env.NEXT_PUBLIC_SITE_BASEURL ?? '',
  googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? '',
};
