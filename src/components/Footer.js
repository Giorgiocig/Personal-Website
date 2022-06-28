import React from "react"

import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs"

import "../style/components/Footer.scss"

export default function Footer() {
  return (
    <footer className="margin-top col justify-content--sb">
      <div className="container row justify-content--sb align-items--center padding-footer-container ">
        <div className="col container-footer-text ">
          <p className="text-font24-BOLD font-secondary color-secondary padding-bottom">
            GIORGIO CIGNITTI
          </p>
          <p className="text-font15 font-secondary color-secondary line-height-smallText text-space-smallText">
            Frontend developer based in Montpellier (France). Do you want to
            know more? Follow me on the social media or see my GitHub
          </p>
        </div>
        <div className="col icon-social-container">
          <div className="row align-items--center flex-gap1 ">
            <a
              href="https://github.com/Giorgiocig"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="text-font40 color-secondary footer-icon" />
            </a>
            <p className="text-font15 color-secondary font-secondary line-height-smallText">
              GitHub
            </p>
          </div>
          <div className="row align-items--center flex-gap1">
            <a
              href="https://www.linkedin.com/in/giorgio-cignitti-phd-8a3a321a9/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="text-font40 color-secondary footer-icon" />
            </a>
            <p className="text-font15 color-secondary font-secondary line-height-smallText">
              LinkedIn
            </p>
          </div>
          <div className="row align-items--center flex-gap1">
            <a
              href="https://www.facebook.com/profile.php?id=100009627136978"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="text-font40  color-secondary footer-icon" />
            </a>
            <p className="text-font15 color-secondary font-secondary line-height-smallText">
              Facebook
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-font15 font-secondary color-teriary line-height-smallText text-space-smallText text-center">
          Giorgio Cignitti. © Copyright 2021-2022. All right reserved.
        </p>
      </div>
    </footer>
  )
}
