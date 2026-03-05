import React from 'react'
import { GetStaticPropsContext } from 'next'
import MainLayout from '../src/components/templates/MainLayout'
import Link from 'next/link'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

interface IPropsNotFound404 {
  title: string
  description: string
  heading: string
  copy: string
  goHome: string
}

export default function NotFound404({
  title,
  description,
  heading,
  copy,
  goHome,
}: IPropsNotFound404) {
  return (
    <MainLayout
      title={title}
      description={description}
      canonicalPath="/404"
      noIndex={true}
    >
      <div className="error animate__animated animate__bounce">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="error-content">
                <div className="error-message">
                  <h2>404</h2>
                  <h3>
                    <span>Ooooopss!</span> {heading}
                  </h3>
                </div>
                <div className="description">
                  <span>
                    {copy}
                    <Link href={'/'} passHref>
                      <a> {goHome} </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps = ({ locale }: GetStaticPropsContext) => {
  const selectedLocale = normalizeLocale(locale)
  const t = uiTranslations[selectedLocale]

  return {
    props: {
      title: t.notFound.title,
      description: t.notFound.description,
      heading: t.notFound.heading,
      copy: t.notFound.copy,
      goHome: t.notFound.goHome,
    },
  }
}
