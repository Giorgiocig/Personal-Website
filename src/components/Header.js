import React from "react"
import Navbar from "./Navbar"
import { useToggle } from "../hooks/useToggle"
import "../style/components/Header.scss"

export default function Header() {
  const [toggle, setToggle] = useToggle(false)

  return (
    <header className="container-header">
      <div className="container row align-items--center justify-content--sb">
        <a
          href="#hero"
          className={"font-secondary text-font24-BOLD color-tertiary"}
        >
          Giorgio Cignitti
        </a>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <div
          aria-hidden="true"
          className={toggle ? "nav-toggle is-open" : "nav-toggle"}
          onClick={() => setToggle(!toggle)}
        >
          <div className={toggle ? "hamburger is-open" : "hamburger "}></div>
        </div>
      </div>
    </header>
  )
}
