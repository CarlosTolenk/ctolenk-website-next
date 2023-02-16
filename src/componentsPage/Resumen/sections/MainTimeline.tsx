import React from 'react'

// Interfaces
import { ITimeline } from '../../../intefaces/ITimelines'

// Components
import TimelineItem from '../../../components/molecules/TimelineItem/TimelineItem'

interface IProsMainTimeline {
  timelines: ITimeline[]
}

const MainTimeline = ({ timelines }: IProsMainTimeline) => {
  return (
    <div className="main-timeline">
      {timelines.length > 0 &&
        timelines.map(
          ({
            imageAtl,
            imageURL,
            title,
            timeElapsed,
            description,
            company,
            subDescription,
          }) => (
            <TimelineItem
              key={timeElapsed}
              imageAtl={imageAtl}
              imageURL={imageURL}
              title={title}
              timeElapsed={timeElapsed}
              description={description}
              company={company}
              subDescription={subDescription}
            />
          ),
        )}
    </div>
  )
}

export default MainTimeline
