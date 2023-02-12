import React from 'react'
import SkillProgressBarItem from '../../molecules/SkillProgressBarItem/SkillProgressBarItem'

const SkillProgressBar = () => {
  return (
    <div className="skills-items skills-progressbar">
      <SkillProgressBarItem name={'HTML'} percent={95} />
      <SkillProgressBarItem name={'CSS'} percent={90} />
      <SkillProgressBarItem name={'JavaScript'} percent={95} />
      <SkillProgressBarItem name={'TypeScript'} percent={90} />
      <SkillProgressBarItem name={'PHP'} percent={85} />
      <SkillProgressBarItem name={'Java'} percent={80} />
      <SkillProgressBarItem name={'C#'} percent={75} />
      <SkillProgressBarItem name={'Go'} percent={60} />
    </div>
  )
}

export default SkillProgressBar
