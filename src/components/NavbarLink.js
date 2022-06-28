import React from "react"

import "../style/components/NavbarLink.scss"

export default function NavbarLink({ text, href, setToggle, toggle }) {
  return (
    <li>
      <a
        href={href}
        className={
          "color-secondary font-secondary text-font15-BOLD navbar-link"
        }
        onClick={() => setToggle(!toggle)}
      >
        {text}
      </a>
    </li>
  )
}
