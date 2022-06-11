import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAward,
  faHandshake,
  faLightbulb,
  faSmileBeam,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Facts = () => {
  return (
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
  )
}

export default Facts
