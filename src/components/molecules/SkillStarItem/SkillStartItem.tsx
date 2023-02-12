import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// Interfaces
import { ISkillStart } from '../../../intefaces/ISkillStart'

const SkillStartItem = ({
  name = 'title',
  description = 'subtitle',
  ranking = 0,
}: ISkillStart) => {
  const rankingInArray = new Array(ranking)
  rankingInArray.fill(1, 0, rankingInArray.length)

  return (
    <div className="language-skill row">
      <h4 className="col-md-6 text-left">
        {name} <span>{description}</span>
      </h4>
      <ul className="col-md-6 text-right rating">
        {rankingInArray.length > 0 &&
          rankingInArray.map((item) => (
            <li key={item}>
              <i className="fa fa-star">
                <FontAwesomeIcon className="mr-1" size={'1x'} icon={faStar} />
              </i>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SkillStartItem
