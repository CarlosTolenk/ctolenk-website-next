import React, { useState, memo } from 'react'

import Nav from '../../molecules/Nav/Nav'
import TypingMessage from '../../molecules/TypingMessage/TypingMessage'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Header.module.css'
import { useRouter } from 'next/router'
import { normalizeLocale } from '../../../i18n'
import { uiTranslations } from '../../../i18n/translations'

const Header = () => {
  const [classNameToggleMenu, setClassNameToggleMenu] = useState('')
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const name = 'Carlos Tolentino'
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const locale = normalizeLocale(router.locale)
  const t = uiTranslations[locale]
  const messages = t.header.roles
  const copy = `${currentYear} ${t.header.rightsReserved}`

  const onHandleClick = () => {
    const currentClassName = isActiveMenu
      ? styles.headerInactiveMobile
      : styles.headerActiveMobile
    setClassNameToggleMenu(currentClassName)
    setIsActiveMenu(!isActiveMenu)
  }

  const onHandlerClickNavigation = () => {
    router.push('/')
  }

  const onChangeLocale = (nextLocale: 'es' | 'en') => {
    router.push(router.asPath, router.asPath, { locale: nextLocale })
  }

  return (
    <>
      <header className={'header ' + classNameToggleMenu}>
        <div className="header-content">
          <div className="profile-picture-block">
            <div className="my-photo">
              <img
                className="img-fluid"
                src="/images/me-circle.jpeg"
                alt="carlos-tolentino"
                loading="eager"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="site-title-block">
            <div className="site-title">{name}</div>
            <TypingMessage message={messages} className="type-wrap" />
          </div>

          <div className="site-nav">
            <Nav />
            <div className={styles.languageSwitcher}>
              <button
                className={locale === 'es' ? styles.languageActive : ''}
                type="button"
                onClick={() => onChangeLocale('es')}
              >
                {t.locale.es}
              </button>
              <button
                className={locale === 'en' ? styles.languageActive : ''}
                type="button"
                onClick={() => onChangeLocale('en')}
              >
                {t.locale.en}
              </button>
            </div>
            <div className="copyrights">© {copy}</div>
          </div>
        </div>
      </header>
      <header className="responsive-header">
        <div className="responsive-header-name">
          <img
            onClick={onHandlerClickNavigation}
            className="responsive-logo"
            src="/images/ctolenk-color.png"
            alt="ctolenk-c"
            width={100}
            height={30}
          />
        </div>
        <span onClick={onHandleClick} className="responsive-icon">
          <FontAwesomeIcon size={'xs'} icon={faBars} />
        </span>
        <div className={styles.languageSwitcherResponsive}>
          <button
            className={locale === 'es' ? styles.languageActive : ''}
            type="button"
            onClick={() => onChangeLocale('es')}
          >
            {t.locale.es}
          </button>
          <button
            className={locale === 'en' ? styles.languageActive : ''}
            type="button"
            onClick={() => onChangeLocale('en')}
          >
            {t.locale.en}
          </button>
        </div>
      </header>
    </>
  )
}

export default memo(Header)
