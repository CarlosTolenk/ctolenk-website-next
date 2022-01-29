import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/favicon.png"/>
                    <meta name="theme-color" content="#3c1742"/>
                </Head>
                <body className="dark">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
