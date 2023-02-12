import React from 'react'

// Interfaces
import { ISkillStart } from '../../../intefaces/ISkillStart'

// Molecules
import TitleSection from '../../../components/molecules/TitleSection/TitleSection'

// Organisms
import SkillProgressBar from '../../../components/organisms/SkillProgressBar/SkillProgressBar'
import SkillStart from '../../../components/organisms/SkillStar/SkillStart'

interface IProps {
  skillSoft: ISkillStart[]
  skillLanguages: ISkillStart[]
}

const Skills = ({ skillSoft = [], skillLanguages = [] }: IProps) => {
  return (
    <div className="row list-skills">
      <div className="col-md-7">
        <div className="special-block-bg">
          <TitleSection title={'My Professional'} subtitle={'Hard Skills'} />
          <SkillProgressBar />
        </div>
      </div>

      <div className="col-md-5">
        <SkillStart
          title={'My Professional'}
          subtitle={'Language Skills'}
          items={skillLanguages}
          isLasted={false}
        />
        <SkillStart
          title={'My Professional'}
          subtitle={'Soft Skills'}
          items={skillSoft}
          isLasted={true}
        />
      </div>
    </div>
  )
}

export default Skills
