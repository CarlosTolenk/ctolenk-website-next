import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/lightcase.min.css'
import 'animate.css'
import '../styles/style.css'
import '../styles/dark-mode.css'
import '../styles/root.css'

import type { AppProps } from 'next/app'
import LoaderPage from '../src/components/molecules/LoaderPage'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <LoaderPage />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
