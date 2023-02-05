import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCode,
  faDesktop,
  faHandshake,
  faLayerGroup,
  faMapMarkerAlt,
  faMobile,
  faPeopleArrows,
} from '@fortawesome/free-solid-svg-icons'

import { SizeIcon, SourceIcon } from '../../../types'

const availableIcons = {
  faBriefcase: faBriefcase,
  faLayerGroup: faLayerGroup,
  faHandshake: faHandshake,
  faMapMarkerAlt: faMapMarkerAlt,
  faCode: faCode,
  faDesktop: faDesktop,
  faMobile: faMobile,
  faPeopleArrows: faPeopleArrows,
}

interface IPropIcon {
  sourceIcon: SourceIcon
  size: SizeIcon
  className?: string
  color?: string
}

const Icon = ({ sourceIcon, size, className = '', color = '' }: IPropIcon) => {
  const source = availableIcons[sourceIcon]

  return (
    <FontAwesomeIcon
      className={className}
      color={color}
      size={size}
      icon={source}
    />
  )
}

export default Icon
