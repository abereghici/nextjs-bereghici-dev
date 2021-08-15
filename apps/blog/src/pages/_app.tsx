import * as React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@bereghici/design-system.global-styles';
import { ThemeProvider } from '@bereghici/design-system.theme';
import { GoogleAnalyticsScript } from 'shared/analytics/ga';

import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleAnalyticsScript />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
