import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const VideoHireMe = () => {
  return (
    <div className="video-section">
      <div className="overlay pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div className="sub-title">
                <h6>Why You Hire Me?</h6>
                <h2>I Am The Best Front End Expert in the marketplace</h2>
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
                  <div className="circle circle-outer" />
                  <div className="circle circle-inner" />
                  <div className="pulse pulse-1" />
                  <div className="pulse pulse-2" />
                  <div className="pulse pulse-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHireMe
