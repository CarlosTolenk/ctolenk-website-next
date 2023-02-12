import React from 'react'

// Interfaces
import { ISkillStart } from '../../../intefaces/ISkillStart'

// Molecules
import TitleSection from '../../molecules/TitleSection/TitleSection'
import SkillStartItem from '../../molecules/SkillStarItem/SkillStartItem'

interface IProps {
  isLasted: boolean
  items: ISkillStart[]

  title: string
  subtitle: string
}

const SkillStart = ({
  items = [],
  isLasted,
  title = '',
  subtitle = '',
}: IProps) => {
  const classNameMain = isLasted ? 'special-block-bg' : 'special-block-bg mb-3'
  return (
    <div className={classNameMain}>
      <TitleSection title={title} subtitle={subtitle} />
      <div className="skills-items">
        {items.length > 0 &&
          items.map(({ name, description, ranking }) => (
            <SkillStartItem
              key={name}
              name={name}
              description={description}
              ranking={ranking}
            />
          ))}
      </div>
    </div>
  )
}

export default SkillStart
