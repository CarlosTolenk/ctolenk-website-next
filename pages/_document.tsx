import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head/>
                <body className="dark">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
