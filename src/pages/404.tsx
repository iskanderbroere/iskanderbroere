import React from "react"
import { InternalLink } from "../components/Link"

function ErrorPage() {
  return (
    <div>
      <p>Page not found</p>
      <InternalLink href="/">Go back home</InternalLink>
    </div>
  )
}

export default ErrorPage
