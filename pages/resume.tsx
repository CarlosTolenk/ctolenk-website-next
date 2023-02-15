import React from 'react'
import MainLayout from '../src/components/templates/MainLayout'
import Image from 'next/image'

import { faCloudDownloadAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { IPropsResume } from '../src/intefaces/pages/IPropsResume'

import Title from '../src/components/molecules/Title'

// Sections
import MainTimeline from '../src/componentsPage/Resumen/sections/MainTimeline'
import Skills from '../src/componentsPage/Resumen/sections/Skills'
import { ResumeMeta } from '../src/metadata/resume'

export default function Resume({ metadata, page, content }: IPropsResume) {
  const { title, slogan } = page
  const { workHistory, educationHistory, skillSoft, skillLanguages } = content
  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <section className="sub-page start-page  animate__animated animate__slideInUp">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />

          <div className="section-content">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="pb-300">
                  <div className="section-head col-sm-12">
                    <h4>
                      <span>My Professional</span>
                      Work History
                    </h4>
                    <a className="bt-submit">
                      <i className="fas fa-cloud-download-alt">
                        <FontAwesomeIcon
                          className="mr-1"
                          size={'lg'}
                          icon={faCloudDownloadAlt}
                        />
                      </i>{' '}
                      Download Resume
                    </a>
                  </div>

                  <MainTimeline timelines={workHistory} />
                </div>

                <div className="pb-30 pt-30">
                  <Skills
                    skillSoft={skillSoft}
                    skillLanguages={skillLanguages}
                  />
                </div>

                <div className="pt-30">
                  <div className="section-head">
                    <h4>
                      <span>My Education</span>
                      Background History
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

export const getStaticProps = () => {
  return {
    props: ResumeMeta,
  }
}
