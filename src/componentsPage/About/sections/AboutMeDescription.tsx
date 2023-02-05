import React from 'react'
import Image from 'next/image'

import { IFeatures, IParagraph } from '../../../intefaces'

import ListFeatures from '../components/ListFeatures'
import Icon from '../../../components/molecules/Icon/Icon'

interface IPropsAboutMe {
  about: IParagraph[]
  features: IFeatures[]
}

const AboutMeDescription = ({ about, features }: IPropsAboutMe) => {
  return (
    <div className="row pb-30">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <h3>Carlos Tolentino</h3>
        <span className="about-location">
          <Icon
            className="mr-1"
            color={'#d32e2e'}
            size={'lg'}
            sourceIcon={'faMapMarkerAlt'}
          />
          Dominican Republic, La Romana
        </span>
        {about &&
          about.map(({ key, paragraph }) => (
            <p key={key} className="about-content">
              {paragraph}
            </p>
          ))}
        <ListFeatures list={features} />
      </div>

      <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
        <div className="box-img">
          <Image
            className="img-fluid"
            src={
              'https://plustatic.com/6133/conversions/diferencias-software-hardware-default.jpg'
            }
            alt={'client'}
            height={524}
            width={700}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMeDescription
