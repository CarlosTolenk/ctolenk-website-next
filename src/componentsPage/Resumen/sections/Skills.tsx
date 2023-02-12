import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import TitleSection from '../../../components/molecules/TitleSection/TitleSection'

const Skills = () => {
  return (
    <div className="row list-skills">
      <div className="col-md-7">
        <div className="special-block-bg">
          <TitleSection title={'My Professional'} subtitle={'Work Skills'} />
          <div className="skills-items skills-progressbar">
            <div className="skill-item">
              <h4>PHP</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: '95%' }} />
              </div>
              <span>95%</span>
            </div>
            <div className="skill-item">
              <h4>Java</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: '75%' }} />
              </div>
              <span>85%</span>
            </div>
            <div className="skill-item">
              <h4>C#</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }} />
              </div>
              <span>85%</span>
            </div>
            <div className="skill-item">
              <h4>C++</h4>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }} />
              </div>
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <div className="special-block-bg">
          <TitleSection
            title={'My Professional'}
            subtitle={'Language Skills'}
          />
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
  )
}

export default Skills
