import React from "react"

import "../style/components/Navbar.scss"
import NavbarLink from "./NavbarLink"

import { links } from "../scripts/data"

export default function Navbar({ toggle, setToggle }) {
  return (
    <nav className={toggle ? "is-open" : undefined}>
      <ul className="row flex-gap">
        {links.map((el, idx) => {
          return (
            <NavbarLink
              key={idx}
              text={el.text}
              href={el.url}
              toggle={toggle}
              setToggle={setToggle}
            />
          )
        })}
      </ul>
    </nav>
  )
}
