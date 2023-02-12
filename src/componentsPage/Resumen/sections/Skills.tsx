import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import TitleSection from '../../../components/molecules/TitleSection/TitleSection'
import SkillProgressBar from '../../../components/organisms/SkillProgressBar/SkillProgressBar'

const Skills = () => {
  return (
    <div className="row list-skills">
      <div className="col-md-7">
        <div className="special-block-bg">
          <TitleSection title={'My Professional'} subtitle={'Hard Skills'} />
          <SkillProgressBar />
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
                      icon={faStarHalfAlt}
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
