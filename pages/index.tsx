import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsHome {
    title: string;
    description: string
}

export default function Home({title, description}: IPropsHome) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    Home
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
