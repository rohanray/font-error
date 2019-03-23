import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          html {
            font-size: 16px;
          }
          body {
            font-family: Pangram;
            margin: 0;
            background-color: white;
          }
          @media only screen and (min-width: 64.063em) {
            html {
              font-size: 18px;
            }
          }
        `}</style>
      </Html>
    );
  }
}
