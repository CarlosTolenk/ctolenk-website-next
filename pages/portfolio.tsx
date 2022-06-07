import React from 'react'
import MainLayout from '../src/components/templates/MainLayout'
import { IPropPageBase } from '../src/intefaces'
import Title from '../src/components/molecules/Title'

interface IPropsPortfolio extends IPropPageBase {}

export default function Portfolio({ metadata, page }: IPropsPortfolio) {
  const { title, slogan } = page
  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <section className="sub-page start-page animate__animated animate__fadeIn">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />
          <div className="section-content">Projects</div>
        </div>
      </section>
    </MainLayout>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      metadata: {
        title: 'CTolenk - Software Engineer',
        description: 'Que tenemos',
      },
      page: {
        title: 'Portfolio',
        slogan: "if you do what you enjoy, it's not a job",
      },
    },
  }
}
