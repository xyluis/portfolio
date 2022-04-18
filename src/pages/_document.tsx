import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../styles/theme'

export default class MyDocument extends Document {
  render (): JSX.Element { 
    return (
      <Html lang="en-US">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <meta name="keywords" content="website, portfolio, xyluis, frontend, full-stack" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}