import React from 'react'

interface IProps {
  name: string
  percent: number
}

const SkillProgressBarItem = ({ name = '', percent = 0 }: IProps) => {
  return (
    <div className="skill-item">
      <h4>{name}</h4>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
      <span>{percent}%</span>
    </div>
  )
}

export default SkillProgressBarItem
