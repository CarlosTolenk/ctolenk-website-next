import React, {useState} from "react";
import Image from "next/image";

import Nav from "../../molecules/Nav";
import TypingMessage from "../../molecules/TypingMessage/TypingMessage";

import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './Header.module.css';


// eslint-disable-next-line react/display-name
const Header = React.memo(() => {
    const [classNameToggleMenu, setClassNameToggleMenu] = useState('')
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const messages = ['Front-end Developer', 'Back-end Developer', 'Mobile Developer', 'Full Stack Developer'];
    const name = 'Carlos Tolentino';
    const currentYear = new Date().getFullYear();
    const copy = `${currentYear} All rights reserved.`

    const onHandleClick = () => {
        const currentClassName = isActiveMenu ? styles.headerInactiveMobile : styles.headerActiveMobile;
        setClassNameToggleMenu(currentClassName);
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <>
            <header className={'header ' + classNameToggleMenu}>
                <div className="header-content">
                    <div className="profile-picture-block">
                        <div className="my-photo">
                            <Image className="img-fluid" src={'/images/me-circle.jpeg'} alt={'carlos-tolentino'}
                                   layout={'fill'}/>
                        </div>
                    </div>
                    <div className="site-title-block">
                        <div className="site-title">{name}</div>
                        <TypingMessage message={messages} className="type-wrap"/>
                    </div>

                    <div className="site-nav">
                        <Nav/>
                        <div className="copyrights">© {copy}</div>
                    </div>

                </div>
            </header>
            <div className="responsive-header">
                <div className="responsive-header-name">
                    <Image className="responsive-logo" src={'/images/ctolenk-color.png'} alt={'ctolenk-c'}
                           width={90} height={30}/>
                </div>
                <span onClick={onHandleClick} className="responsive-icon">
                    <FontAwesomeIcon size={"xs"} icon={faBars}/>
                </span>
            </div>
        </>
    )
});


export default Header;
