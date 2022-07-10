import App from "next/app"

import { GlobalStyle } from '../styles/globals'

export default class MyApp extends App {
  render(): JSX.Element {
    GlobalStyle()

    const { Component, pageProps } = this.props

    return (
      /* <Ui> */
      <Component {...pageProps} />
      /* </Ui> */
    )
  }
}
