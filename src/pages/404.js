import React from "react"
import { Link } from "gatsby"

import "../style/index.scss"

export default function notFound() {
  return (
    <div className="container">
      <h1>Page not Found</h1>
      <Link to="/" className="link-404">
        Click To Home
      </Link>
    </div>
  )
}
