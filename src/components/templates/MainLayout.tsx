import { memo, PropsWithChildren} from "react";
import Head from "next/head";
import Header from "../organisms/Header/Header";
import LoaderPage from "../molecules/LoaderPage";

interface IPropsMainLayout {
    title: string;
    description: string;
    children: PropsWithChildren<any>;
}

const MainLayout = ({title, description, children}: IPropsMainLayout) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>

            <div className="wrapper-page ">
                <Header/>
            </div>

            <main className="content-pages">
                {children}
            </main>
        </>
    )
}


export default memo(MainLayout);
