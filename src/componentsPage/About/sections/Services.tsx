import React from 'react'

import { Services } from '../../../intefaces'

import ListServices from '../components/ListServices'

interface IPropListServices {
  list: Services[]
}

const Services = ({ list }: IPropListServices) => {
  const list1: Services[] = list?.splice(0, 2)
  const list2: Services[] = list?.splice(2, 4)

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
          <ListServices list={list1} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <ListServices list={list2} />
        </div>
      </div>
    </div>
  )
}

export default Services
