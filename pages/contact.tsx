import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsContact {
    title: string;
    description: string
}

export default function Contact({title, description}: IPropsContact) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    Contact
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
