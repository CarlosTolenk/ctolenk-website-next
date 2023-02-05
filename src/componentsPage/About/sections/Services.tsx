import React from 'react'

import { IServices } from '../../../intefaces'

import ListServices from '../components/ListServices'

interface IPropListServices {
  list: IServices[]
}

const Services = ({ list }: IPropListServices) => {
  const listFromLeft: IServices[] = list.length > 0 ? list.slice(0, 2) : []
  const listFromRight: IServices[] = list.length >= 3 ? list.slice(2, 4) : []

  return (
    <div className="special-block-bg">
      <div className="section-head">
        <h4>
          <span>What Actually I Do</span>
          My Services
        </h4>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <ListServices list={listFromLeft} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <ListServices list={listFromRight} />
        </div>
      </div>
    </div>
  )
}

export default Services
