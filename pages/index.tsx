import React, {MouseEvent, MouseEventHandler} from "react";
import {useRouter} from "next/router";

import {faEnvelope, faBriefcase} from "@fortawesome/free-solid-svg-icons";

import {IPropMeta} from "../src/intefaces";

import MainLayout from "../src/components/templates/MainLayout";
import BgDynamic from "../src/components/molecules/BgDynamic/BgDynamic";
import Button from "../src/components/atoms/Button/Button";
import TypingMessage from "../src/components/molecules/TypingMessage/TypingMessage";

interface IPropsHome extends IPropMeta {
    messageTyping: string[];
}

export default function Home({metadata, messageTyping}: IPropsHome) {
    const router = useRouter()

    const onHandleClick = (event: MouseEvent<any>) => {
        event.preventDefault()
        router.push('/contact')
    }

    return (
        <MainLayout title={metadata.title} description={metadata.description}>
            <section className="sub-page start-page animate__animated animate__fadeIn">
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
    )
}

export const getStaticProps = () => {
    return {
        props: {
            metadata: {
                title: 'CTolenk - Software Engineer',
                description: 'Que tenemos',
            },
            messageTyping: ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile Developer']
        }
    }
}
