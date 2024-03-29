import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const LoaderPage = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    function waitingSecond() {
      setTimeout(() => {
        setLoading(false)
      }, 250)
    }

    return waitingSecond()
  }, [router.basePath])

  return (
    <>
      {loading ? (
        <div id="preloader">
          <div id="preloader-circle">
            <span />
            <span />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default LoaderPage
