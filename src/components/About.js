import React, { useEffect } from "react"

import { StaticImage } from "gatsby-plugin-image"
//style
import "../style/components/About.scss"

import Aos from "aos"
import "aos/dist/aos.css"

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className="padding-top-10rem" id="about" data-aos="fade-up">
      <div className="container row justify-content--sb container-resp-sm align-items--center">
        <div className="col50 container-about-image">
          <StaticImage
            src="../images/hero.jpg"
            alt="image about Giorgio Cignitti"
            formats={["AUTO", "WEBP", "AVIF"]}
            className="image-about "
          />
        </div>

        <div className="col75">
          <h2 className="font-main text-font64-BOLD resp-text-center">
            About Me
          </h2>
          <p className="font-secondary text-font24 line-height35 text-space resp-text-center">
            I am Dr. Giorgio Cignitti, frontend developer with a background in
            neuroscience and a passion for web development converting design
            into full-responsive web site. I hold a doctorate degree in
            neuroscience from Montpellier University and I have 3 years of
            experience as Python developer and 2 years as frontend developer.
          </p>
          <div className="grid-about">
            <div>
              <div className="row align-items--center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="font-size35 icon-user-margin"
                />
                <p className="font-main  text-font48-BOLD color-main ">Name:</p>
              </div>
              <p className="font-secondary text-font24 margin-name">
                Giorgio Cignitti
              </p>
            </div>
            <div>
              <div className="row align-items--center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="font-size35  icon-mail-margin"
                />
                <p className="font-main text-font48-BOLD color-main">Phone:</p>
              </div>
              <p className="font-secondary text-font24 margin-phone">
                +33 0767909776
              </p>
            </div>
            <div>
              <div className="row align-items--center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="font-size35 icon-phone-margin"
                />
                <p className="font-main text-font48-BOLD color-main ">Mail:</p>
              </div>
              <p className="font-secondary text-font24 margin-email">
                giorgiocignitti@gmail.com
              </p>
            </div>
            <div className="grid-self">
              <a
                className="btn-about font-secondary text-font24-BOLD margin-right"
                href="#contactMe"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
