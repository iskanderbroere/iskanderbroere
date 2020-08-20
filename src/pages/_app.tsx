import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { AppProps } from "next/app"
import { Layout } from "../components/Layout"
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Iskander Broere</title>
        {/*
         * this prevents a bad request to /favicon.ico
         * https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests
         */}
        <link href="data:;base64,iVBORw0KGgo=" rel="icon" />
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <link
          href={`https://iskanderbroere.nl${router.pathname}`}
          rel="canonical"
        />
        <meta
          content="I write modern web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical"
          name="description"
        />
      </Head>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
