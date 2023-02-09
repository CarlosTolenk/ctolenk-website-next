import React from 'react'
import MainLayout from '../src/components/templates/MainLayout'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faMapMarkerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { IPropPageBase } from '../src/intefaces'
import Title from '../src/components/molecules/Title'

interface IPropsContact extends IPropPageBase {}

export default function Contact({ metadata, page }: IPropsContact) {
  const { title, slogan } = page
  return (
    <MainLayout title={metadata.title} description={metadata.description}>
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
                <form method="post" id="contact-form">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name:"
                    required
                    autoComplete="off"
                  />
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email:"
                    required
                    autoComplete="off"
                  />
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Message:"
                    required
                    rows={6}
                  />
                  <input
                    className="bt-submit"
                    type="submit"
                    value="Send Message"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="pt-50 pb-30">
            <div className="section-head">
              <h4>
                <span>Contact Information</span>
                Find me here
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
                  <h2>Country</h2>
                  <p>
                    Dominican Republic, <small> La Romana </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-50">
              <div className="social-media-block">
                <h4>Follow Me: </h4>
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

export const getStaticProps = () => {
  return {
    props: {
      metadata: {
        title: 'CTolenk - Software Engineer',
        description: 'Que tenemos',
      },
      page: {
        title: 'Contact',
        slogan: 'Need some help?',
      },
    },
  }
}
