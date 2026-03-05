import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale || 'es'

    return (
      <Html lang={locale}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="author" content="CTolenk - Carlos Tolentino" />
          <meta name="theme-color" content="#3c1742" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
