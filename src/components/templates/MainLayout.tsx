import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  const localePrefix =
    router.locale && router.defaultLocale && router.locale !== router.defaultLocale
      ? `/${router.locale}`
      : ''
  const localizedCanonicalPath = `${localePrefix}${canonicalPath}`
  const canonicalUrl = siteUrl ? `${siteUrl}${localizedCanonicalPath}` : ''
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
        {siteUrl && (
          <>
            <link rel="alternate" hrefLang="es" href={`${siteUrl}${canonicalPath}`} />
            <link
              rel="alternate"
              hrefLang="en"
              href={`${siteUrl}/en${canonicalPath}`}
            />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${canonicalPath}`} />
          </>
        )}
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
