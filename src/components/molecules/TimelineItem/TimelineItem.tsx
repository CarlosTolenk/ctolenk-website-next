import React from 'react'
import { ITimeline } from '../../../intefaces/ITimelines'

const ItemUl = ({ subDescription }: { subDescription: string[] }) => {
  return (
    <ul>
      {subDescription.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}

const TimelineItem = ({
  imageURL = '',
  imageAtl = '',
  title = '',
  description = '',
  subDescriptionTitle = '',
  timeElapsed = '',
  company = '',
  subDescription = [],
}: ITimeline) => {
  return (
    <div className="timeline">
      <div className="timeline-icon">
        <img src={imageURL} alt={imageAtl} height={80} width={80} loading="lazy" />
      </div>
      <div className="timeline-content">
        <span className="date">
          {timeElapsed} - {company}
        </span>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        {subDescription?.length > 0 && (
          <>
            <p className="description">
              <strong>{subDescriptionTitle || 'Key Topics'}</strong>
            </p>
            <ItemUl subDescription={subDescription} />
          </>
        )}
      </div>
    </div>
  )
}

export default TimelineItem
