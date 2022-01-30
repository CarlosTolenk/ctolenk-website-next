import React, {MouseEvent} from "react";
import MainLayout from "../src/components/templates/MainLayout";
import Link from "next/link";

interface IPropsNotFound404 {
    title: string;
    description: string
}

export default function NotFound404({title, description}: IPropsNotFound404) {

    return (
        <>
            <MainLayout title={title} description={description}>
                <div className="error animate__animated animate__bounce">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="error-content">
                                    <div className="error-message">
                                        <h2>404</h2>
                                        <h3><span>Ooooops!</span> Something Went Wrong...</h3>
                                    </div>
                                    <div className="description">
                                        <span>Or Goto
                                             <Link href={'/'} passHref><a> Homepage</a></Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
