import Document, { Html, Head, Main, NextScript } from 'next/document'

import { colors } from '../styles/colors'
import { getCssText } from '../styles'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          <meta name="keywords" content="portfolio" />

          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          <meta name="msapplication-navbutton-color" content={colors['blue-base']} />
          <meta name="theme-color" content={colors['blue-base']} />
          <meta name="apple-mobile-web-app-status-bar-style" content={colors['blue-base']} />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="referrer" content="no-referrer-when-downgrade" />

          <link rel="icon" href="/favicon.ico" />
          {/*  <link rel="manifest" href="/manifest.json" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}