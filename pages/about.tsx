import React from 'react'
import MainLayout from '../src/components/templates/MainLayout'
import Image from 'next/image'

import {
  faBriefcase,
  faMapMarkerAlt,
  faHandshake,
  faLayerGroup,
  faCode,
  faMicrophoneAlt,
  faDesktop,
  faCamera,
  faSmileBeam,
  faAward,
  faLightbulb,
  faPlay,
  faStarHalf,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Title from '../src/components/molecules/Title'
import { IPropPageBase } from '../src/intefaces'

interface IPropsAbout extends IPropPageBase {}

export default function AboutMe({ metadata, page }: IPropsAbout) {
  const { title, slogan } = page
  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <section className="sub-page start-page animate__animated animate__fadeIn">
        <div className="sub-page-inner">
          <Title title={title} slogan={slogan} />
          <div className="section-content">
            <div className="row pb-30">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h3>Carlos Tolentino</h3>
                <span className="about-location">
                  <FontAwesomeIcon
                    className="mr-1"
                    color={'#d32e2e'}
                    size={'lg'}
                    icon={faMapMarkerAlt}
                  />
                  Dominican Republic, La Romana
                </span>
                <p className="about-content">
                  Praesent ut tortor consectetur, semper sapien non, lacinia
                  augue. Aenean arcu libero, facilisis et nisi non, tempus
                  faucibus tortor. Mauris vel nulla aliquam, pellentesque enim
                  ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id,
                  dignissim euismod augue
                </p>
                <p className="about-content">
                  Praesent ut tortor consectetur, semper sapien non, lacinia
                  augue. Aenean arcu libero, facilisis et nisi non, tempus
                  faucibus tortor. Mauris vel nulla aliquam, pellentesque enim
                  ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id,
                  dignissim euismod augue
                </p>
                <ul className="bout-list-summry row">
                  <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="icon-info">
                      <i className="lnr lnr-layers">
                        <FontAwesomeIcon size={'sm'} icon={faBriefcase} />
                      </i>
                    </div>
                    <div className="details-info">
                      <h6>5 Years+ Job</h6>
                      <p>Experience</p>
                    </div>
                  </li>
                  <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="icon-info">
                      <i className="lnr lnr-layers">
                        <FontAwesomeIcon size={'sm'} icon={faLayerGroup} />
                      </i>
                    </div>
                    <div className="details-info">
                      <h6>300+ Projects</h6>
                      <p>Completed</p>
                    </div>
                  </li>
                  <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="icon-info">
                      <i className="lnr lnr-coffee-cup">
                        <FontAwesomeIcon size={'sm'} icon={faHandshake} />
                      </i>
                    </div>
                    <div className="details-info">
                      <h6>150+ Meetings</h6>
                      <p>Successful</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                <div className="box-img">
                  <Image
                    className="img-fluid"
                    src={'https://via.placeholder.com/700x524'}
                    alt={'client'}
                    height={524}
                    width={700}
                  />
                </div>
              </div>
            </div>

            <div className="special-block-bg">
              <div className="section-head">
                <h4>
                  <span>What Actually I Do</span>
                  My Services
                </h4>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="services-list">
                    <div className="service-block">
                      <div className="service-icon">
                        <i className="lnr lnr-code">
                          <FontAwesomeIcon size={'1x'} icon={faCode} />
                        </i>
                      </div>
                      <div className="service-text">
                        <h4>Web Development</h4>
                        <p>
                          Pellentesque pellentesque, ipsum sit amet auctor
                          accumsan, odio tortor bibendum massa, sit amet
                          ultricies ex lectus scelerisque nibh. Ut non sodales
                          odio.
                        </p>
                      </div>
                    </div>

                    <div className="service-block">
                      <div className="service-icon">
                        <i className="lnr lnr-laptop-phone">
                          <FontAwesomeIcon size={'sm'} icon={faDesktop} />
                        </i>
                      </div>
                      <div className="service-text">
                        <h4>Web Design</h4>
                        <p>
                          Pellentesque pellentesque, ipsum sit amet auctor
                          accumsan, odio tortor bibendum massa, sit amet
                          ultricies ex lectus scelerisque nibh. Ut non sodales
                          odio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="services-list">
                    <div className="service-block">
                      <div className="service-icon">
                        <i className="lnr lnr-mic">
                          <FontAwesomeIcon size={'sm'} icon={faMicrophoneAlt} />
                        </i>
                      </div>
                      <div className="service-text">
                        <h4>Voice Recorder</h4>
                        <p>
                          Pellentesque pellentesque, ipsum sit amet auctor
                          accumsan, odio tortor bibendum massa, sit amet
                          ultricies ex lectus scelerisque nibh. Ut non sodales
                          odio.
                        </p>
                      </div>
                    </div>

                    <div className="service-block">
                      <div className="service-icon">
                        <i className="lnr lnr-camera">
                          <FontAwesomeIcon size={'sm'} icon={faCamera} />
                        </i>
                      </div>
                      <div className="service-text">
                        <h4>Photography</h4>
                        <p>
                          Pellentesque pellentesque, ipsum sit amet auctor
                          accumsan, odio tortor bibendum massa, sit amet
                          ultricies ex lectus scelerisque nibh. Ut non sodales
                          odio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="video-section">
              <div className="overlay pb-40 pt-40">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                      <div className="sub-title">
                        <h6>Why You Hire Me?</h6>
                        <h2>
                          I Am The Best Front End Expert in the marketplace
                        </h2>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                      <div className="pulse-icon">
                        <div className="icon-wrap">
                          <a href="https//www.youtube.com/">
                            <i className="fa fa-play">
                              <FontAwesomeIcon size={'sm'} icon={faPlay} />
                            </i>
                          </a>
                        </div>
                        <div className="elements">
                          <div className="circle circle-outer"></div>
                          <div className="circle circle-inner"></div>
                          <div className="pulse pulse-1"></div>
                          <div className="pulse pulse-2"></div>
                          <div className="pulse pulse-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pb-30 pt-30">
              <div className="section-head col-sm-12">
                <h4>
                  <span>Fun</span>
                  Facts
                </h4>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="pb-30">
                  <div className="counter-block">
                    <i className="pe-7s-smile">
                      <FontAwesomeIcon size={'xs'} icon={faSmileBeam} />
                    </i>
                    <h4>Happy Clients</h4>
                    <span className="counter-block-value" data-count="1000">
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="pb-30">
                  <div className="counter-block">
                    <i className="pe-7s-light">
                      <FontAwesomeIcon size={'xs'} icon={faLightbulb} />
                    </i>
                    <h4>Experiences Years</h4>
                    <span className="counter-block-value" data-count="7">
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="pb-30">
                  <div className="counter-block">
                    <i className="pe-7s-cup">
                      <FontAwesomeIcon size={'xs'} icon={faAward} />
                    </i>
                    <h4>Awards Won</h4>
                    <span className="counter-block-value" data-count="15">
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="pb-30">
                  <div className="counter-block">
                    <i className="pe-7s-coffee">
                      <FontAwesomeIcon size={'xs'} icon={faHandshake} />
                    </i>
                    <h4>Meetings</h4>
                    <span className="counter-block-value" data-count="500">
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="special-block-bg">
              <div className="section-head">
                <h4>
                  <span>What My Freedom</span>
                  Client Say
                </h4>
              </div>

              <div className="testimonials">
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-review">
                      <p>
                        Wow what great experience, I love it! Its exactly what
                        Ive been looking for. Annas group was the best
                        investment I ever made. I dont know if I would have ever
                        made it without her guidance and support!
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      <Image
                        src={'https://via.placeholder.com/80x80'}
                        alt={'Gary Johnson'}
                        height={80}
                        width={90}
                      />
                    </div>
                    <div className="testimonial-owner-content">
                      <p className="testimonial-owner">Johny Melion</p>
                      <p className="testimonial-position">General Manager</p>
                      <ul className="testimonial-rating">
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStarHalf} />
                          </i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-review">
                      <p>
                        Wow what great experience, I love it! Its exactly what
                        Ive been looking for. Annas group was the best
                        investment I ever made. I dont know if I would have ever
                        made it without her guidance and support!
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      <Image
                        src={'https://via.placeholder.com/80x80'}
                        alt={'Gary Johnson'}
                        height={80}
                        width={90}
                      />
                    </div>
                    <div className="testimonial-owner-content">
                      <p className="testimonial-owner">Johny Melion</p>
                      <p className="testimonial-position">General Manager</p>
                      <ul className="testimonial-rating">
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStar} />
                          </i>
                        </li>
                        <li>
                          <i className="fa fa-star">
                            <FontAwesomeIcon size={'xs'} icon={faStarHalf} />
                          </i>
                        </li>
                      </ul>
                    </div>
                  </div>
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
        title: 'CTolenk - Software Engineer',
        description: 'Que tenemos',
      },
      page: {
        title: 'About Me',
        slogan: 'Always inspired by knowledge',
      },
    },
  }
}
