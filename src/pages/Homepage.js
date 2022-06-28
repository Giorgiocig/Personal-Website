import React from "react"

import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import MySkills from "../components/MySkills"
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import SEO from "../components/seo"

export default function Homepage() {
  return (
    <>
      <SEO title="Giorgio Cignitti personal webpage" />
      <Header />
      <Hero />
      <About />
      <MySkills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}
