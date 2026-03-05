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
  eyebrow: string
  hardSkills: string
  languageSkills: string
  softSkills: string
}

const Skills = ({
  skillSoft = [],
  skillLanguages = [],
  eyebrow,
  hardSkills,
  languageSkills,
  softSkills,
}: IProps) => {
  return (
    <div className="row list-skills">
      <div className="col-md-7">
        <div className="special-block-bg">
          <TitleSection title={eyebrow} subtitle={hardSkills} />
          <SkillProgressBar />
        </div>
      </div>

      <div className="col-md-5">
        <SkillStart
          title={eyebrow}
          subtitle={languageSkills}
          items={skillLanguages}
          isLasted={false}
        />
        <SkillStart
          title={eyebrow}
          subtitle={softSkills}
          items={skillSoft}
          isLasted={true}
        />
      </div>
    </div>
  )
}

export default Skills
