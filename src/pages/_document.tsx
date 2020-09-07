import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head />
        <body className="font-sans text-gray-900 bg-gray-50 lg:text-xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
