import React from 'react'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '../src/components/templates/MainLayout'
import { IPropPageBase } from '../src/intefaces'
import Title from '../src/components/molecules/Title'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

interface IPropsPortfolio extends IPropPageBase {}

export default function Portfolio({ metadata, page }: IPropsPortfolio) {
  const { locale } = useRouter()
  const t = uiTranslations[normalizeLocale(locale)]
  const { title, slogan } = page
  return (
    <MainLayout
      title={metadata.title}
      description={metadata.description}
      canonicalPath={metadata.canonicalPath}
      keywords={metadata.keywords}
      ogImage={metadata.ogImage}
    >
      <section className="sub-page start-page animate__animated animate__fadeIn">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />
          <div className="section-content">{t.portfolio.projects}</div>
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
        title: t.portfolio.metaTitle,
        description: t.portfolio.metaDescription,
        canonicalPath: '/portfolio',
        ogImage: '/images/ctolenk-c.png',
        keywords: t.portfolio.metaKeywords,
      },
      page: {
        title: t.portfolio.pageTitle,
        slogan: t.portfolio.pageSlogan,
      },
    },
  }
}
