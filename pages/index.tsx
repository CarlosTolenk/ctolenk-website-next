import React, { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { IPropMeta } from '../src/intefaces'

import MainLayout from '../src/components/templates/MainLayout'
import BgDynamic from '../src/components/molecules/BgDynamic/BgDynamic'
import Button from '../src/components/atoms/Button/Button'
import TypingMessage from '../src/components/molecules/TypingMessage/TypingMessage'

interface IPropsHome extends IPropMeta {
  messageTyping: string[]
}

export default function Home({ metadata, messageTyping }: IPropsHome) {
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
              jobTitle: 'Full Stack Software Engineer',
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
                <h1>Hello, I am Carlos Tolentino</h1>
                <TypingMessage message={messageTyping} className="type-wrap" />
                <div className="home-buttons">
                  <Button
                    text="About Me"
                    iconSource={faUserAlt}
                    onHandlerClick={onNavigationAboutMe}
                  />
                  <Button
                    text="Contact Me"
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

export const getStaticProps = () => {
  return {
    props: {
      metadata: {
        title: 'Carlos Tolentino | Full Stack Software Engineer',
        description:
          'Full Stack Software Engineer specializing in web, mobile, and cloud solutions. Explore my services, experience, and contact channels.',
        canonicalPath: '/',
        ogImage: '/images/ctolenk-c.png',
        keywords:
          'carlos tolentino, full stack developer, software engineer, react, nextjs, typescript, mobile developer',
      },
      messageTyping: [
        'Full Stack Developer',
        'Front-end Developer',
        'Back-end Developer',
        'Mobile Developer',
      ],
    },
  }
}
