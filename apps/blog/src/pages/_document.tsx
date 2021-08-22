import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import {
  primaryFontUrl,
  monoFontUrl,
  DetectThemeScript,
} from '@bereghici/design-system.theme';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <meta name="theme-color" content="#000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link href={primaryFontUrl} rel="preload" as="style" />
          <link href={monoFontUrl} rel="preload" as="style" />
          <link rel="stylesheet" href={primaryFontUrl} />
          <link rel="stylesheet" href={monoFontUrl} />
        </Head>
        <body>
          <DetectThemeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
