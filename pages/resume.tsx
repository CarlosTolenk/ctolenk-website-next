import React from 'react'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '../src/components/templates/MainLayout'

import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { IPropsResume } from '../src/intefaces/pages/IPropsResume'

import Title from '../src/components/molecules/Title'

// Sections
import MainTimeline from '../src/componentsPage/Resumen/sections/MainTimeline'
import Skills from '../src/componentsPage/Resumen/sections/Skills'
import { getResumeMeta } from '../src/metadata/resume'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

export default function Resume({ metadata, page, content }: IPropsResume) {
  const { locale } = useRouter()
  const t = uiTranslations[normalizeLocale(locale)]
  const { title, slogan } = page
  const { workHistory, educationHistory, skillSoft, skillLanguages } = content
  return (
    <MainLayout
      title={metadata.title}
      description={metadata.description}
      canonicalPath={metadata.canonicalPath}
      keywords={metadata.keywords}
      ogImage={metadata.ogImage}
    >
      <section className="sub-page start-page  animate__animated animate__slideInUp">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />

          <div className="section-content">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="pb-300">
                  <div className="section-head col-sm-12">
                    <h4>
                      <span>{t.resume.workEyebrow}</span>
                      {t.resume.workTitle}
                    </h4>
                    <a className="bt-submit" href="/docs/CV-Carlos-Tolentino.pdf" download>
                      <i className="fas fa-cloud-download-alt">
                        <FontAwesomeIcon
                          className="mr-1"
                          size={'lg'}
                          icon={faCloudDownloadAlt}
                        />
                      </i>
                      {t.resume.download}
                    </a>
                  </div>

                  <MainTimeline timelines={workHistory} />
                </div>

                <div className="pb-30 pt-30">
                  <Skills
                    skillSoft={skillSoft}
                    skillLanguages={skillLanguages}
                    eyebrow={t.resume.skillsEyebrow}
                    hardSkills={t.resume.hardSkills}
                    languageSkills={t.resume.languageSkills}
                    softSkills={t.resume.softSkills}
                  />
                </div>

                <div className="pt-30">
                  <div className="section-head">
                    <h4>
                      <span>{t.resume.educationEyebrow}</span>
                      {t.resume.educationTitle}
                    </h4>
                  </div>
                  <MainTimeline timelines={educationHistory} />
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

  return {
    props: getResumeMeta(selectedLocale),
  }
}
