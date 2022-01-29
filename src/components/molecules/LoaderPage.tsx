import React, {useEffect, useState} from "react";
import {NextRouter, useRouter} from "next/router";

export function isRouterReady(router: NextRouter) {
    return router.asPath === router.route;
}

const LoaderPage = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        console.log(router)
        setTimeout(() => {
            setLoading(false);
        }, 750)
    }, [router.basePath])

    return (
        <>
            {
                loading
                    ?
                    <div id="preloader">
                        <div id="preloader-circle">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    : null
            }

        </>
    )
};


export default LoaderPage
