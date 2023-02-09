import React from 'react'

import NavItem from '../NavItem/NavItem'

import {
  faHome,
  faUserTie,
  faAward,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <ul className="header-main-menu" id="header-main-menu">
      <NavItem href="/" iconSource={faHome} text="Home" />
      <NavItem href="/about" iconSource={faUserTie} text="About Me" />
      <NavItem href="/resume" iconSource={faAward} text="Resume" />
      <NavItem href="/contact" iconSource={faPaperPlane} text="Contact" />
    </ul>
  )
}

export default Nav
