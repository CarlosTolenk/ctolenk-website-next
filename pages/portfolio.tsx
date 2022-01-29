import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsPortfolio {
    title: string;
    description: string
}

export default function Portfolio({title, description}: IPropsPortfolio) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    Portfolio
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
