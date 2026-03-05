import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from '../organisms/Header/Header'

interface IPropsMainLayout {
  title: string
  description: string
  canonicalPath?: string
  ogImage?: string
  keywords?: string
  noIndex?: boolean
  children: PropsWithChildren<any>
}

const MainLayout = ({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/images/ctolenk-color.png',
  keywords,
  noIndex = false,
  children,
}: IPropsMainLayout) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  const canonicalUrl = siteUrl ? `${siteUrl}${canonicalPath}` : ''
  const ogImageUrl = siteUrl ? `${siteUrl}${ogImage}` : ''

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta
          name="robots"
          content={noIndex ? 'noindex, nofollow' : 'index, follow'}
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      </Head>

      <div className="wrapper-page ">
        <Header />
      </div>

      <main className="content-pages">{children}</main>
    </>
  )
}

export default MainLayout
