import React from 'react'
import Icon from '../../../components/molecules/Icon/Icon'
import { Features } from '../../../intefaces'

const ItemFeature = ({ title, description, icon }: Features) => {
  return (
    <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="icon-info">
        <i className="lnr lnr-layers">
          <Icon size={'sm'} sourceIcon={icon} />
        </i>
      </div>
      <div className="details-info">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </li>
  )
}

interface IPropList {
  list: Features[]
}

const ListFeatures = ({ list }: IPropList) => {
  return (
    <ul className="bout-list-summry row">
      {list &&
        list.map(({ title, description, icon }) => (
          <ItemFeature
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
    </ul>
  )
}

export default ListFeatures
