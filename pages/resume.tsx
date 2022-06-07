import React from 'react'
import MainLayout from '../src/components/templates/MainLayout'
import Image from 'next/image'

import {
  faCloudDownloadAlt,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IPropPageBase } from '../src/intefaces'
import Title from '../src/components/molecules/Title'

interface IPropsResume extends IPropPageBase {}

export default function Resume({ metadata, page }: IPropsResume) {
  const { title, slogan } = page
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

                  <div className="main-timeline">
                    <div className="timeline">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/80x80'}
                          alt={''}
                          height={80}
                          width={80}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">Apr 2015 - Till Now</span>
                        <h5 className="title">Software Engineer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
                    </div>

                    <div className="timeline">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/80x80'}
                          alt={'Gary Johnson'}
                          height={80}
                          width={80}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">Apr 2016 - Mar 2017</span>
                        <h5 className="title">Web Developer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
                    </div>

                    <div className="timeline">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/80x80'}
                          alt={'Gary Johnson'}
                          height={80}
                          width={80}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">May 2017 - Mar 2018</span>
                        <h5 className="title">Frontend Developer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-30 pt-30">
                  <div className="row list-skills">
                    <div className="col-md-7">
                      <div className="special-block-bg">
                        <div className="section-head">
                          <h4>
                            <span>My Professional </span>
                            Work Skills
                          </h4>
                        </div>
                        <div className="skills-items skills-progressbar">
                          <div className="skill-item">
                            <h4>PHP</h4>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: '95%' }}
                              />
                            </div>
                            <span>95%</span>
                          </div>
                          <div className="skill-item">
                            <h4>Java</h4>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: '75%' }}
                              />
                            </div>
                            <span>85%</span>
                          </div>
                          <div className="skill-item">
                            <h4>C#</h4>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: '85%' }}
                              />
                            </div>
                            <span>85%</span>
                          </div>
                          <div className="skill-item">
                            <h4>C++</h4>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: '70%' }}
                              />
                            </div>
                            <span>70%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="special-block-bg">
                        <div className="section-head">
                          <h4>
                            <span>My Professional</span>
                            Language Skills
                          </h4>
                        </div>
                        <div className="skills-items">
                          <div className="language-skill row">
                            <h4 className="col-md-6 text-left">
                              English <span>Fluent</span>
                            </h4>
                            <ul className="col-md-6 text-right rating">
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                            </ul>
                          </div>
                          <div className="language-skill row">
                            <h4 className="col-md-6 text-left">
                              Spanish <span>Native</span>
                            </h4>
                            <ul className="col-md-6 text-right rating">
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                              <li>
                                <i className="fa fa-star-half-alt">
                                  <FontAwesomeIcon
                                    className="mr-1"
                                    size={'1x'}
                                    icon={faStar}
                                  />
                                </i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-30">
                  <div className="section-head">
                    <h4>
                      <span>My Education</span>
                      Background History
                    </h4>
                  </div>
                  <div className="main-timeline">
                    <div className="timeline currecnt">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/100x100'}
                          alt={'Gary Johnson'}
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">Apr 2015 - Till Now</span>
                        <h5 className="title">Software Engineer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
                    </div>

                    <div className="timeline">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/100x100'}
                          alt={'Gary Johnson'}
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">Apr 2016 - Mar 2017</span>
                        <h5 className="title">Web Developer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
                    </div>

                    <div className="timeline">
                      <div className="timeline-icon">
                        <Image
                          src={'https://via.placeholder.com/100x100'}
                          alt={'Gary Johnson'}
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="timeline-content">
                        <span className="date">May 2017 - Mar 2018</span>
                        <h5 className="title">Frontend Developer</h5>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim. Aenean hendrerit
                          justo sed.
                        </p>
                      </div>
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
        title: 'RESUME',
        slogan: 'Always inspired by knowledge',
      },
    },
  }
}
