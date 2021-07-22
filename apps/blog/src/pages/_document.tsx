import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { primaryFontUrl, monoFontUrl } from '@bereghici/design-system.core';
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
          <link rel="icon" href="/favicon.ico" />
          <link href={primaryFontUrl} rel="preload" as="style" />
          <link href={monoFontUrl} rel="preload" as="style" />
          <link rel="stylesheet" href={primaryFontUrl} />
          <link rel="stylesheet" href={monoFontUrl} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
