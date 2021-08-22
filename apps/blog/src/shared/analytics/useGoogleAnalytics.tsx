import React from 'react';
import { config } from 'config';
import { importScript } from 'shared/utils/import-script';

export const useGoogleAnalytics = () => {
  React.useEffect(() => {
    function gtag(...args: Array<unknown>) {
      if (!window.dataLayer) {
        window.dataLayer = [];
      }

      window.dataLayer.push(...args);
    }

    gtag('js', new Date());

    gtag('config', `${config.googleAnalytics}`, {
      page_path: window.location.pathname,
    });

    void importScript(
      `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`
    );
  }, []);
};
