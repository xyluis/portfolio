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

          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="manifest" href="/manifest.json" /> */}

          {/* Apple Touch Icons */}

          <link rel="apple-touch-icon" sizes="48x48" href="/assets/icons/icon-48x48.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/assets/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/assets/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/assets/icons/icon-512x512.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}