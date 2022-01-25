import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface IPropsHome {
    title: string;
    description: string
}

export default function Home({title, description}: IPropsHome) {
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
                        <div className="type-wrap">
                            <br/>
                            <div className="typed-strings">
                                <span>Mobile Developer</span>
                                <span>Fullstack Web Developer</span>
                            </div>
                            <span className="typed"></span>
                        </div>
                    </div>


                    <div className="site-nav">

                        <ul className="header-main-menu" id="header-main-menu">
                            <li><a className="active" href="#home"><i className="fas fa-home"></i> Home</a></li>
                            <li><a href="#about-me"><i className="fas fa-user-tie"></i> About Me</a></li>
                            <li><a href="#resume"><i className="fas fa-award"></i> Resume</a></li>
                            <li><a href="#portfolio"><i className="fas fa-business-time"></i> Portfolio</a></li>
                            <li><a href="#blog"><i className="fas fa-book-reader"></i> Blog</a></li>
                            <li><a href="#contact"><i className="fas fa-paper-plane"></i> Contact</a></li>
                            <li><a href="#appointments"><i className="fas fa-calendar-check"></i> Appointments</a></li>
                        </ul>

                        <div className="copyrights">©{new Date().getFullYear()} All rights reserved.</div>

                    </div>

                </div>
            </header>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            title: 'CTolenk',
            description: 'Que tenemos'
        }
    }
}
