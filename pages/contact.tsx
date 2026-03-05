import React from 'react'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '../src/components/templates/MainLayout'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faMapMarkerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { IPropPageBase } from '../src/intefaces'
import Title from '../src/components/molecules/Title'
import { normalizeLocale } from '../src/i18n'
import { uiTranslations } from '../src/i18n/translations'

interface FormElements extends HTMLFormControlsCollection {
  nameInput: HTMLInputElement
  emailInput: HTMLInputElement
  messageInput: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface IPayload {
  name: string
  email: string
  message: string
}

interface IPropsContact extends IPropPageBase {}

export default function Contact({ metadata, page }: IPropsContact) {
  const { locale } = useRouter()
  const t = uiTranslations[normalizeLocale(locale)]
  const { title, slogan } = page

  const sendMessage = async (payload: IPayload) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }

  const generatePayload = (event: React.FormEvent<UsernameFormElement>) => {
    const { elements } = event.currentTarget
    const mapped = new Map()
    mapped.set(elements.nameInput.name, elements.nameInput.value)
    mapped.set(elements.emailInput.name, elements.emailInput.value)
    mapped.set(elements.messageInput.name, elements.messageInput.value)
    return Object.fromEntries(mapped)
  }

  const onSubmit = (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault()
    const payload = generatePayload(event)
    sendMessage(payload)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <MainLayout
      title={metadata.title}
      description={metadata.description}
      canonicalPath={metadata.canonicalPath}
      keywords={metadata.keywords}
      ogImage={metadata.ogImage}
    >
      <section className="sub-page start-page animate__animated animate__slideInLeft">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />
          <div className="row contact-form pb-30">
            <div className="col-sm-12 col-md-5 col-lg-5 left-background">
              <Image
                src={
                  'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2019/june/changing-roles-of-software-developers.jpg'
                }
                alt={'client'}
                height={500}
                width={600}
                objectFit={'cover'}
              />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="form-contact-me">
                <div id="show_contact_msg" />
                <form onSubmit={onSubmit} id="contact-form">
                  <input
                    name="name"
                    id="nameInput"
                    type="text"
                    placeholder={t.contact.name}
                    required
                    autoComplete="off"
                  />
                  <input
                    name="email"
                    id="emailInput"
                    type="email"
                    placeholder={t.contact.email}
                    required
                    autoComplete="off"
                  />
                  <textarea
                    name="message"
                    id="messageInput"
                    placeholder={t.contact.message}
                    required
                    rows={6}
                  />
                  <input
                    className="bt-submit"
                    type="submit"
                    value={t.contact.sendMessage}
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="pt-50 pb-30">
            <div className="section-head">
              <h4>
                <span>{t.contact.infoEyebrow}</span>
                {t.contact.infoTitle}
              </h4>
            </div>

            <div className="sidebar-textbox row pb-50">
              <div className="contact-info d-flex col-md-4">
                <div className="w-25">
                  <div className="contact-icon">
                    <FontAwesomeIcon size={'sm'} icon={faUsers} />
                  </div>
                </div>
                <div className="contact-text w-75">
                  <h2>Google Meet</h2>
                  <p>carlos.tolentinoe@gmail.com</p>
                </div>
              </div>
              <div className="contact-info d-flex col-md-4">
                <div className="w-25">
                  <div className="contact-icon">
                    <FontAwesomeIcon size={'sm'} icon={faEnvelope} />
                  </div>
                </div>
                <div className="contact-text w-75">
                  <h2>Email</h2>
                  <p>carlos.tolentinoe@ctolenk.com</p>
                </div>
              </div>
              <div className="contact-info d-flex col-md-4">
                <div className="w-25">
                  <div className="contact-icon">
                    <FontAwesomeIcon size={'sm'} icon={faMapMarkerAlt} />
                  </div>
                </div>
                <div className="contact-text w-75">
                  <h2>{t.contact.country}</h2>
                  <p>
                    Dominican Republic, <small> La Romana </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-50">
              <div className="social-media-block">
                <h4>{t.contact.followMe} </h4>
                <ul className="social-media-links">
                  <li>
                    <a
                      href="https://twitter.com/CarlosTolenk"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter">
                        <FontAwesomeIcon size={'sm'} icon={faTwitter} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ctolenk/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in">
                        <FontAwesomeIcon size={'sm'} icon={faLinkedinIn} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@CarlosTolenk23"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube">
                        <FontAwesomeIcon size={'sm'} icon={faYoutube} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ctolenk/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram">
                        <FontAwesomeIcon size={'sm'} icon={faInstagram} />
                      </i>
                    </a>
                  </li>
                </ul>
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
        title: t.contact.metaTitle,
        description: t.contact.metaDescription,
        canonicalPath: '/contact',
        ogImage: '/images/me-circle.jpeg',
        keywords: t.contact.metaKeywords,
      },
      page: {
        title: t.contact.pageTitle,
        slogan: t.contact.pageSlogan,
      },
    },
  }
}
