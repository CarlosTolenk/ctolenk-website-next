import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsAbout {
    title: string;
    description: string
}

export default function AboutMe({title, description}: IPropsAbout) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    AboutMe
                </div>
            </MainLayout>
        </>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            title: 'CTolenk - Software Engineer',
            description: 'Que tenemos'
        }
    }
}
