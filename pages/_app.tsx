import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import '../styles/lightcase.min.css';
import '../styles/style.css';
import '../styles/dark-mode.css';

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
