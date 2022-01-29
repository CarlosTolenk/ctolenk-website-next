import React from "react";
import Image from "next/image";

import Nav from "../molecules/Nav";
import TypingMessage from "../molecules/TypingMessage/TypingMessage";


const Header = () => {
    const messages = ['Front-end Developer', 'Back-end Developer', 'Mobile Developer', 'Full Stack Developer']

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="profile-picture-block">
                        <div className="my-photo">
                            <Image className="img-fluid" src={'http://via.placeholder.com/80x80'} alt={'image'}
                                   layout={'fill'}/>
                        </div>
                    </div>
                    <div className="site-title-block">
                        <div className="site-title">Carlos Tolentino</div>
                        <TypingMessage message={messages} className="type-wrap"/>
                    </div>


                    <div className="site-nav">

                        <Nav/>

                        <div className="copyrights">©{new Date().getFullYear()} All rights reserved.</div>

                    </div>

                </div>
            </header>
            <div className="responsive-header">
                <div className="responsive-header-name">
                    <img className="responsive-logo" src="http://via.placeholder.com/30x30" alt=""/>
                    Mulan Rafiki
                </div>
                <span className="responsive-icon">
                    <a className="lnr lnr-menu">fdf</a>
                </span>
            </div>
        </>
    )
}


export default Header;
