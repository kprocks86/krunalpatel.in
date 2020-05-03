import { Link } from "gatsby"
import React from "react"

export default function Header() {
  return (
    <div className="header-root">
      <div className="logo">KRUANLPATEL.IN</div>
      <div className="links">
        <div className="link-item">
          <Link to={`/blog`} >Blog</Link>
        </div>
        <div className="link-item">Contact</div>
      </div>
    </div>
  )
}
