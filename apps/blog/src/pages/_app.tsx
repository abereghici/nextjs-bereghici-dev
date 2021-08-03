import * as React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@bereghici/design-system.global-styles';
import { ThemeProvider } from '@bereghici/design-system.theme';
import { GAScript } from 'components/ga-script';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GAScript />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
