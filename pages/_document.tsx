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
                    <meta name="keywords"
                          content="JavaScript,Angular,Ionic,Reactjs,React Native,WordPress,Nodejs,C#, .Net Core,Web Developer,Mobile Developer CRM,CMS,ERP,UI/UX"/>
                    <meta name="author" content="CTolenk- Carlos Tolentino"/>
                    <meta name="theme-color" content="#3c1742"/>

                    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700&display=optional"
                          rel="stylesheet"/>

                    <link rel="stylesheet" type="text/css" charSet="UTF-8"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css&display=optional"/>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css&display=optional"/>
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
