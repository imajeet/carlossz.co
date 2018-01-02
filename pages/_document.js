import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class Portafolio extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, chunks, errorHtml } = renderPage()
    const styles = flush()
    return { html, head, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <link rel="shortcut icon" href="/static/head.png"/>
          <link rel="icon" href="/static/head.png" type="image/png"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Montserrat:200,400,700|Raleway:300" />
          <title>Carlos Sz</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
