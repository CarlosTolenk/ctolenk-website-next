import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

interface IPropsAppointments {
    title: string;
    description: string
}

export default function Appointments({title, description}: IPropsAppointments) {
    return (
        <>
            <MainLayout title={title} description={description}>
                <div>
                    Appointments
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
