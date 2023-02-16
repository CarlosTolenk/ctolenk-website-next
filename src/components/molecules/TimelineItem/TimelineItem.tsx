import Image from 'next/image'
import React from 'react'
import { ITimeline } from '../../../intefaces/ITimelines'

const ItemUl = ({ subDescription }: { subDescription: string[] }) => {
  return (
    <ul>
      {subDescription.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const TimelineItem = ({
  imageURL = '',
  imageAtl = '',
  title = '',
  description = '',
  timeElapsed = '',
  company = '',
  subDescription = [],
}: ITimeline) => {
  return (
    <div className="timeline">
      <div className="timeline-icon">
        <Image src={imageURL} alt={imageAtl} height={80} width={80} />
      </div>
      <div className="timeline-content">
        <span className="date">
          {timeElapsed} - {company}
        </span>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        {subDescription?.length > 0 && (
          <ItemUl subDescription={subDescription} />
        )}
      </div>
    </div>
  )
}

export default TimelineItem
