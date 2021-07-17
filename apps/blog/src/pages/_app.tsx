import type { AppProps } from 'next/app';
import { ThemeProvider, GlobalStyles } from '@bereghici/design-system.core';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
