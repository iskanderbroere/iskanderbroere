import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { AppProps } from "next/app"
import { Layout } from "../components"
import "../styles/global.css"
import "../styles/fonts.css"
import "@reach/skip-nav/styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Iskander Broere</title>
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
          content="I write modern web applications @ Software Bastards, am eager to learn, always seeking to improve, perfectionistic yet practical"
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
