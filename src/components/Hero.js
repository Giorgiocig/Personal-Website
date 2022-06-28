import React from "react"
import Scrolldown from "./Scrolldown"
import { useTypedSuperpower } from "../hooks/useTypedSuperPower"

//gatsby backfround image
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

import "../style/components/Hero.scss"
import "../style/pageComponents/animated.scss"

//typewriter
const superpowers = [
  "Frontend Developer",
  "Web Designer",
  "React Developer",
  "Web Scientist",
]
export default function Hero() {
  //typewriter
  const { typedSuperpower } = useTypedSuperpower(superpowers)

  //backgroundImage
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(webpOptions: { quality: 70 })
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)

  return (
    <section id="hero">
      <BgImage
        image={pluginImage}
        className="image position-rel"
        alt="image of a pc"
      >
        <div className="position-abs container-hero">
          <p className="margin-btm-30 font-secondary text-font40 color-tertiary">
            Hello,
          </p>
          <h1 className="margin-btm-30 font-main text-font64-BOLD color-tertiary">
            I am Giorgio Cignitti
          </h1>
          <h2 className=" font-secondary text-font40 color-tertiary">
            <span className="blinking-cursor">{typedSuperpower}</span>
          </h2>
          <p className="margin-btm-30 font-secondary text-font24-BOLD color-tertiary line-height35 text-space-resp text-space-smallText">
            I can convert your design in maintanable, clean and scalable code,
            building-up full-responsive websites
          </p>
        </div>
        <Scrolldown />
      </BgImage>
    </section>
  )
}
