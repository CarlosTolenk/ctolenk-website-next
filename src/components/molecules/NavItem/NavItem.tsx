import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

import styles from './NavItem.module.css'

interface IPropsNavItem {
  href: string
  iconSource: IconDefinition
  text: string
  onNavigate?: () => void
}

const NavItem = ({ href, iconSource, text, onNavigate }: IPropsNavItem) => {
  const { pathname } = useRouter()

  return (
    <li className={styles.listNav}>
      <Link href={href} passHref>
        <a className={pathname === href ? 'active' : ''} onClick={onNavigate}>
          <div className={styles.containerNavItem}>
            <div className={styles.containerNavItemIcon}>
              <FontAwesomeIcon size={'1x'} icon={iconSource} />
            </div>
            <p className={styles.NavItemText}>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default NavItem
