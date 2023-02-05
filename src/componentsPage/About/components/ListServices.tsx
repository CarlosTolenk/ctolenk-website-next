import React from 'react'

import { Services } from '../../../intefaces'
import Icon from 'src/components/molecules/Icon/Icon'

interface IPropListServices {
  list: Services[]
}

const ListServices = ({ list }: IPropListServices) => {
  return (
    <>
      {list &&
        list.map(({ title, description }: Services) => {
          return (
            <div key={title} className="services-list">
              <div className="service-block">
                <div className="service-icon">
                  <i className="lnr lnr-code">
                    <Icon size={'1x'} sourceIcon={'faCode'} />
                  </i>
                </div>
                <div className="service-text">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ListServices
