import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCamera,
  faCode,
  faDesktop,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Services = () => {
  return (
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
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales odio.
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
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales odio.
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
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales odio.
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
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
