import React, { useMemo, useState } from 'react'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '../src/components/templates/MainLayout'

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
  websiteInput: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface IPayload {
  name: string
  email: string
  message: string
  website: string
}

interface IPropsContact extends IPropPageBase {}

export default function Contact({ metadata, page }: IPropsContact) {
  const { locale } = useRouter()
  const selectedLocale = normalizeLocale(locale)
  const t = uiTranslations[selectedLocale]
  const { title, slogan } = page
  const [isSending, setIsSending] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedbackType, setFeedbackType] = useState<'success' | 'error'>('success')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const copy = useMemo(
    () =>
      selectedLocale === 'es'
        ? {
            sending: 'Enviando...',
            sent: 'Tu mensaje fue enviado correctamente. Te respondere pronto.',
            failed:
              'No fue posible enviar tu mensaje en este momento. Intenta nuevamente o escribe a carlos.tolentinoe@gmail.com.',
            close: 'Cerrar',
            successTitle: 'Mensaje enviado',
            errorTitle: 'No se pudo enviar',
          }
        : {
            sending: 'Sending...',
            sent: 'Your message was sent successfully. I will get back to you soon.',
            failed:
              'Your message could not be sent right now. Please try again or email me at carlos.tolentinoe@gmail.com.',
            close: 'Close',
            successTitle: 'Message sent',
            errorTitle: 'Unable to send',
          },
    [selectedLocale],
  )

  const sendMessage = async (payload: IPayload) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const rawBody = await response.text()
    let data: { status?: string } = {}

    try {
      data = rawBody ? JSON.parse(rawBody) : {}
    } catch (parseError) {
      const shortHtmlPreview = rawBody
        .replace(/\s+/g, ' ')
        .slice(0, 120)
      throw new Error(
        `Non-JSON response from /api/contact. HTTP ${response.status}. Body starts with: ${shortHtmlPreview}`,
      )
    }

    if (!response.ok) {
      throw new Error(data?.status || 'Request failed')
    }
    return data
  }

  const generatePayload = (event: React.FormEvent<UsernameFormElement>) => {
    const { elements } = event.currentTarget
    const mapped = new Map()
    mapped.set(elements.nameInput.name, elements.nameInput.value)
    mapped.set(elements.emailInput.name, elements.emailInput.value)
    mapped.set(elements.messageInput.name, elements.messageInput.value)
    mapped.set(elements.websiteInput.name, elements.websiteInput.value)
    return Object.fromEntries(mapped)
  }

  const onSubmit = async (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault()
    const formElement = event.currentTarget
    const payload = generatePayload(event)

    setIsSending(true)
    try {
      await sendMessage(payload)
      formElement.reset()
      setFeedbackType('success')
      setFeedbackMessage(copy.sent)
      setFeedbackOpen(true)
    } catch (error) {
      const errorMessage =
        error instanceof Error && error.message ? error.message : copy.failed
      setFeedbackType('error')
      setFeedbackMessage(
        selectedLocale === 'es'
          ? `${copy.failed}\n\nDetalle tecnico: ${errorMessage}`
          : `${copy.failed}\n\nTechnical detail: ${errorMessage}`,
      )
      setFeedbackOpen(true)
    } finally {
      setIsSending(false)
    }
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
              <img
                src={
                  'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2019/june/changing-roles-of-software-developers.jpg'
                }
                alt={'client'}
                height={500}
                width={600}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="form-contact-me">
                <div id="show_contact_msg" />
                <form onSubmit={onSubmit} id="contact-form">
                  <input
                    name="website"
                    id="websiteInput"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      opacity: 0,
                      pointerEvents: 'none',
                    }}
                  />
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
                    value={isSending ? copy.sending : t.contact.sendMessage}
                    disabled={isSending}
                    aria-busy={isSending}
                    style={{
                      opacity: isSending ? 0.75 : 1,
                      cursor: isSending ? 'not-allowed' : 'pointer',
                    }}
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
      {feedbackOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-live="polite"
          onClick={() => setFeedbackOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 9999,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              background: '#fff',
              borderRadius: '14px',
              padding: '24px',
              borderTop: `4px solid ${feedbackType === 'success' ? '#16a34a' : '#dc2626'}`,
              boxShadow: '0 20px 45px rgba(2, 6, 23, 0.32)',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#0f172a' }}>
              {feedbackType === 'success' ? copy.successTitle : copy.errorTitle}
            </h3>
            <p
              style={{
                marginBottom: '20px',
                color: '#0f172a',
                whiteSpace: 'pre-line',
              }}
            >
              {feedbackMessage}
            </p>
            <button
              type="button"
              className="bt-submit"
              onClick={() => setFeedbackOpen(false)}
              style={{ color: '#ffffff' }}
            >
              {copy.close}
            </button>
          </div>
        </div>
      )}
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
