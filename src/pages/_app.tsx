import React from "react"
import { AppProps } from "next/app"
import { Layout } from "../components/Layout"
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
