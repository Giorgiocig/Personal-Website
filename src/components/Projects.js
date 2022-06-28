import React from "react"
//gatsby image
import { StaticImage } from "gatsby-plugin-image"

//style
import "../style/components/Projects.scss"

import Aos from "aos"
import "aos/dist/aos.css"
//icons
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact } from "react-icons/fa"
import { BsCodeSlash } from "react-icons/bs"
import { GrGatsbyjs } from "react-icons/gr"

import { DiFirebase } from "react-icons/di"
import { useEffect } from "react"
//image

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className="container padding-top-10rem back" id="projects">
      <div className="text-center">
        <h2 className="font-main text-font64-BOLD">Projects</h2>
        <p className="font-secondary text-font24 line-height35 text-space ">
          I developed tons of projects using my frontend and backend skills.
          Here my favourite ones. P.S. you can find all of them on my GitHub
          profile (https://github.com/Giorgiocig)
        </p>
      </div>
      <div className="project-grid">
        <div
          data-aos="fade-right"
          className="row justify-content--sb box-shadow resp-col-sm position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/climbingRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text padding-resp-noneLeftRight">
            <p className="font-main text-space-smallText padding-title">
              Climbing Routes Database
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. React application linked with a database showing
              climbing routes for two differents locations. It allows to show
              real-time data.
            </p>
            <div className="iconContainer resp-row-sm">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaCss3Alt className="icon-wrapper color-CSS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
              <FaReact className="icon-wrapper color-React margin-right-icon" />
              <DiFirebase className="icon-wrapper color-Firebase" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/Climbing-App"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-left"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/anaRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>

          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              French Teacher Website
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. Full responsive website. for a french teacher
              showing details such as prices,competences and contacts.
            </p>
            <div className="iconContainer ">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaCss3Alt className="icon-wrapper color-CSS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/Ana"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-right"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/edilpaintRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              Enterprise of painting Website
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. Full responsive website for an enterprise of
              painting showing details such as prices, services and contacts.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaSass className="icon-wrapper color-SASS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/EdilPaint-webSite"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-left"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/breakingRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              Breaking Bad
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. It is a react application making request to an
              API. It shows all the characters, seasons and episodes. It allows
              to get quotes from the characters and searching from a specific
              one.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaSass className="icon-wrapper color-SASS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
              <FaReact className="icon-wrapper color-React margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/breaking-Bad-React"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-right"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/bikeRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              Bike Repair webpage
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. Webpage built in HTML5 and CSS for a bike-repair
              enterprise a spa enterprise.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaCss3Alt className="icon-wrapper color-CSS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/Bike-repair-/tree/main/BikeRepair"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-left"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/digigameRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              Digigame
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              personal project. Game developped in Javascript where players can
              choose monsters through an API call and make them fight. The
              winner is decided based on the stats of each monsters.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaCss3Alt className="icon-wrapper color-CSS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/digigame"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-right"
          className="row justify-content--sb box-shadow resp-col-sm  position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/reduxToolkitRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              Films App
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. React App incorporating React-Redux Toolkit. By
              making calls to an API it allows to show details for films.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaSass className="icon-wrapper color-SASS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
              <FaReact className="icon-wrapper color-React margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/Films-app"
            rel="noreferrer"
            target="_blank"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-left"
          className="row justify-content--sb box-shadow resp-col-sm position-rel "
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/SpaRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text">
            <p className="font-main text-space-smallText padding-title">
              SPA website
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal project. Full-responsive website built with Gatsby JS for
              a spa enterprise.
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaSass className="icon-wrapper color-SASS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
              <GrGatsbyjs className="icon-wrapper color-Gatsby margin-right-icon" />
            </div>
          </div>
          <a
            className="poistion-abs"
            href="https://github.com/Giorgiocig/SPA-website"
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash className="link scaling-animation" />
          </a>
        </div>

        <div
          data-aos="fade-right"
          className="row justify-content--sb box-shadow resp-col-sm position-rel"
        >
          <div className="container-image-proj">
            <StaticImage
              src="../images/weatherAppRes.jpg"
              alt="climbing database project. CRUD"
              formats={["AUTO", "WEBP", "AVIF"]}
              className="image-proj"
            />
          </div>
          <div className="container-grid-text ">
            <p className="font-main text-space-smallText padding-title">
              Weather App
            </p>
            <p className="text-font15 font-secondary text-space-smallText line-height-smallText">
              Personal Project. React application allowing to search a location
              to display weather. It supports a dark-mode{" "}
            </p>
            <div className="iconContainer">
              <FaHtml5 className="icon-wrapper color-HTML margin-right-icon" />
              <FaSass className="icon-wrapper color-SASS margin-right-icon" />
              <FaJs className="icon-wrapper color-JS margin-right-icon" />
              <FaReact className="icon-wrapper color-React margin-right-icon" />
            </div>
            <a
              className="poistion-abs"
              href="https://github.com/Giorgiocig/Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              <BsCodeSlash className="link scaling-animation" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
