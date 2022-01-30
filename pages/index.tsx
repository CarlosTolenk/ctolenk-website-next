import React, {EventHandler, MouseEventHandler} from "react";
import {useRouter} from "next/router";

import MainLayout from "../src/components/templates/MainLayout";
import BgDynamic from "../src/components/molecules/BgDynamic/BgDynamic";
import Button from "../src/components/atoms/Button/Button";


import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import TypingMessage from "../src/components/molecules/TypingMessage/TypingMessage";

interface IPropsHome {
    title: string;
    description: string;
    messageTyping: string[];
}

export default function Home({title, description, messageTyping}: IPropsHome) {
    const router = useRouter()

    const onHandleClick = (event: React.MouseEvent<any>) => {
        event.preventDefault()
        router.push('/contact')
    }

    return (
        <>
            <MainLayout title={title} description={description}>
                <section className="sub-page start-page">
                    <div className="sub-page-inner">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <BgDynamic/>
                                <div className="title-block">
                                    <h2>Hello, I am Carlos Tolentino</h2>
                                    <TypingMessage message={messageTyping} className="type-wrap"/>
                                    <div className="home-buttons">
                                        <Button text='Contact Me' iconSource={faEnvelope}
                                                onHandlerClick={onHandleClick}/>
                                        <Button text='Hire Me' iconSource={faBriefcase} onHandlerClick={onHandleClick}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            title: 'CTolenk - Software Engineer',
            description: 'Que tenemos',
            messageTyping: ['Front-end Developer', 'Back-end Developer', 'Mobile Developer', 'Full Stack Developer']
        }
    }
}
