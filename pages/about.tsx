import React from 'react'

import { IPropsAbout } from '../src/intefaces'
import { AboutMeta } from '../src/metadata/about'

import MainLayout from '../src/components/templates/MainLayout'
import Title from '../src/components/molecules/Title'

// Sections
import AboutMeDescription from '../src/componentsPage/About/sections/AboutMeDescription'
import Services from '../src/componentsPage/About/sections/Services'
import VideoHireMe from '../src/componentsPage/About/sections/VideoHireMe'
import Testimonials from '../src/componentsPage/About/sections/Testimonials'

export default function AboutMe({ metadata, page, content }: IPropsAbout) {
  const { about, features } = content
  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <section className="sub-page start-page animate__animated animate__fadeIn">
        <div className="sub-page-inner">
          <Title title={page.title} slogan={page.slogan} />
          <div className="section-content">
            <AboutMeDescription about={about} features={features} />
            <Services />
            <VideoHireMe />
            <Testimonials />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export const getStaticProps = () => {
  return {
    props: AboutMeta,
  }
}
