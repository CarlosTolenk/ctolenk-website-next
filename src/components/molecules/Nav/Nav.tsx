import React from 'react'

import NavItem from '../NavItem/NavItem'

import {
  faHome,
  faUserTie,
  faAward,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { normalizeLocale } from '../../../i18n'
import { uiTranslations } from '../../../i18n/translations'

const Nav = () => {
  const { locale } = useRouter()
  const t = uiTranslations[normalizeLocale(locale)]

  return (
    <ul className="header-main-menu" id="header-main-menu">
      <NavItem href="/" iconSource={faHome} text={t.nav.home} />
      <NavItem href="/about" iconSource={faUserTie} text={t.nav.about} />
      <NavItem href="/resume" iconSource={faAward} text={t.nav.resume} />
      <NavItem href="/contact" iconSource={faPaperPlane} text={t.nav.contact} />
    </ul>
  )
}

export default Nav
