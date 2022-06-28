import React, { useEffect } from "react"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNode,
} from "react-icons/fa"
import { DiMongodb, DiFirebase } from "react-icons/di"
import { GrGatsbyjs } from "react-icons/gr"
import { SiExpress } from "react-icons/si"
import "../style/components/Myskills.scss"

import Aos from "aos"
import "aos/dist/aos.css"

export default function MySkills() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section
      className="container padding-top-10rem"
      id="mySkills"
      data-aos="fade-up"
    >
      <div className="text-center">
        <h2 className="font-main text-font64-BOLD">My Skills</h2>
        <p className="font-secondary text-font24 line-height35 text-space">
          I have all the necessary skills to manage a web development project. I
          am a specialist in frontend but I also master back-end oriented
          technologies.
        </p>
      </div>
      <div className="grid-myskills">
        <div className="col box-shadow ">
          <div className="container-mySkills-icon row justify-content--center">
            <FaHtml5 className="icon-wrapper color-HTML" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text">HTML 5</p>
            <p className="font-secondary line-height35 text-space padding-bottom text-font15">
              To make your website SEO-friendly and accessible
            </p>
          </div>
        </div>

        <div className="col box-shadow">
          <div className="container-mySkills-icon row justify-content--center">
            <FaCss3Alt className="icon-wrapper color-CSS" />
            <FaBootstrap className="icon-wrapper color-Boot" />
            <FaSass className="icon-wrapper color-SASS" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text">
              CSS3, Bootstrap, Sass
            </p>
            <p className="font-secondary line-height35 text-space padding-bottom text-font15">
              To make beautiful and responsive website
            </p>
          </div>
        </div>

        <div className="col box-shadow">
          <div className="container-mySkills-icon row justify-content--center">
            <FaJs className="icon-wrapper  color-JS" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text">Javascript</p>
            <p className="font-secondary line-height35 text-space padding-bottom text-font15">
              To give a life to a website
            </p>
          </div>
        </div>
        <div className="col box-shadow card-height">
          <div className="container-mySkills-icon row justify-content--center">
            <FaReact className="icon-wrapper   color-React" />
            <GrGatsbyjs className="icon-wrapper  color-Gatsby" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text">
              React JS, Gatsby JS
            </p>
            <p className="font-secondary line-height35 text-space text-space padding-bottom text-font15">
              To build-up scalable and mantanable web applications or static
              website
            </p>
          </div>
        </div>
        <div className="col box-shadow">
          <div className="container-mySkills-icon row justify-content--center">
            <DiMongodb className="icon-wrapper  color-Mongo" />
            <SiExpress className="icon-wrapper  color-Express" />
            <FaReact className="icon-wrapper  color-React" />
            <FaNode className="icon-wrapper  color-Node" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text">MERN Stack</p>
            <p className="font-secondary line-height35 text-space padding-bottom text-font15">
              To build-up a full-stack application capable of CRUD operations
            </p>
          </div>
        </div>
        <div className="col box-shadow">
          <div className="container-mySkills-icon row justify-content--center">
            <DiMongodb className="icon-wrapper  color-Mongo" />
            <DiFirebase className="icon-wrapper color-Firebase" />
          </div>
          <div className="text-center">
            <p className="font-main text-font24 padding-text text-space">
              MongoDB, Firebase
            </p>
            <p className="font-secondary line-height35 text-space text-font15">
              To manage data
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
