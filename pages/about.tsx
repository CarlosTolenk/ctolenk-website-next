import React from 'react'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

import { IPropsAbout } from '../src/intefaces'
import { getAboutMeta } from '../src/metadata/about'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

import MainLayout from '../src/components/templates/MainLayout'
import Title from '../src/components/molecules/Title'

// Sections
import AboutMeDescription from '../src/componentsPage/About/sections/AboutMeDescription'
import Services from '../src/componentsPage/About/sections/Services'

export default function AboutMe({ metadata, page, content }: IPropsAbout) {
  const { locale } = useRouter()
  const { about, features, services } = content
  const t = uiTranslations[normalizeLocale(locale)]
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
          <Title title={page.title} slogan={page.slogan} />
          <div className="section-content">
            <AboutMeDescription about={about} features={features} />
            <Services
              list={services}
              eyebrow={t.about.servicesEyebrow}
              title={t.about.servicesTitle}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export const getStaticProps = ({ locale }: GetStaticPropsContext) => {
  const selectedLocale = normalizeLocale(locale)

  return {
    props: getAboutMeta(selectedLocale),
  }
}
