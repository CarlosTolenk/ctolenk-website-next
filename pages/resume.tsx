import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsResume {
    title: string;
    description: string
}

export default function Resume({title, description}: IPropsResume) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    Resume
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
