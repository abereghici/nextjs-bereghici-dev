import Script from 'next/script';
import { config } from 'config';

export const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', '${config.googleAnalytics}', {
        page_path: window.location.pathname,
      });
      `,
        }}
      />
    </>
  );
};
