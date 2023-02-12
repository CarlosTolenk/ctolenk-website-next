import React from 'react'

interface IProps {
  title: string
  subtitle: string
}

const TitleSection = ({ title, subtitle }: IProps) => {
  return (
    <div className="section-head">
      <h4>
        <span>{title} </span>
        {subtitle}
      </h4>
    </div>
  )
}

export default TitleSection
