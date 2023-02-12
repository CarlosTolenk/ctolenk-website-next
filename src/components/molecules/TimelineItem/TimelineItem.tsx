import Image from 'next/image'
import React from 'react'
import { ITimeline } from '../../../intefaces/ITimelines'

const TimelineItem = ({
  imageURL = '',
  imageAtl = '',
  title = '',
  description = '',
  timeElapsed = '',
  company = '',
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
      </div>
    </div>
  )
}

export default TimelineItem
