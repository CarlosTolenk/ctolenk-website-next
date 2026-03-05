import React, { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import { faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { IPropMeta } from '../src/intefaces'

import MainLayout from '../src/components/templates/MainLayout'
import BgDynamic from '../src/components/molecules/BgDynamic/BgDynamic'
import Button from '../src/components/atoms/Button/Button'
import TypingMessage from '../src/components/molecules/TypingMessage/TypingMessage'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

interface IPropsHome extends IPropMeta {
  messageTyping: string[]
  texts: {
    greeting: string
    aboutCta: string
    contactCta: string
    jobTitle: string
  }
}

export default function Home({ metadata, messageTyping, texts }: IPropsHome) {
  const router = useRouter()

  const onNavigationContactMe = (event: MouseEvent<any>) => {
    event.preventDefault()
    router.push('/contact')
  }

  const onNavigationAboutMe = (event: MouseEvent<any>) => {
    event.preventDefault()
    router.push('/about')
  }

  return (
    <MainLayout
      title={metadata.title}
      description={metadata.description}
      canonicalPath={metadata.canonicalPath}
      keywords={metadata.keywords}
      ogImage={metadata.ogImage}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Carlos Tolentino',
              jobTitle: texts.jobTitle,
              url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
              sameAs: [
                'https://www.linkedin.com/in/ctolenk/',
                'https://twitter.com/CarlosTolenk',
                'https://www.instagram.com/ctolenk/',
                'https://www.youtube.com/@CarlosTolenk23',
              ],
            }),
          }}
        />
      </Head>
      <section className="sub-page start-page animate__animated animate__fadeIn">
        <div className="sub-page-inner">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <BgDynamic />
              <div className="title-block">
                <h1>{texts.greeting}</h1>
                <TypingMessage message={messageTyping} className="type-wrap" />
                <div className="home-buttons">
                  <Button
                    text={texts.aboutCta}
                    iconSource={faUserAlt}
                    onHandlerClick={onNavigationAboutMe}
                  />
                  <Button
                    text={texts.contactCta}
                    iconSource={faEnvelope}
                    onHandlerClick={onNavigationContactMe}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export const getStaticProps = ({ locale }: GetStaticPropsContext) => {
  const selectedLocale = normalizeLocale(locale)
  const t = uiTranslations[selectedLocale]

  return {
    props: {
      metadata: {
        title: t.home.metaTitle,
        description: t.home.metaDescription,
        canonicalPath: '/',
        ogImage: '/images/ctolenk-c.png',
        keywords: t.home.metaKeywords,
      },
      messageTyping: t.home.roles,
      texts: {
        greeting: t.home.greeting,
        aboutCta: t.home.aboutCta,
        contactCta: t.home.contactCta,
        jobTitle: t.home.jobTitle,
      },
    },
  }
}
