import React from 'react'

import { IServices } from '../../../intefaces'
import Icon from 'src/components/molecules/Icon/Icon'

interface IPropListServices {
  list: IServices[]
}

const ListServices = ({ list }: IPropListServices) => {
  return (
    <>
      {list?.length > 0 &&
        list.map(({ title, description, icon }: IServices) => {
          return (
            <div key={title} className="services-list">
              <div className="service-block">
                <div className="service-icon">
                  <i className="lnr lnr-code">
                    <Icon size={'1x'} sourceIcon={icon} />
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
