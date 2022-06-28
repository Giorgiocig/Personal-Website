import React, { useEffect } from "react"
import { useRef } from "react"
import { RiRoadMapFill } from "react-icons/ri"
import { BsPhone, BsFillEnvelopeFill } from "react-icons/bs"

import "../style/components/ContactMe.scss"

import emailjs from "emailjs-com"

import Aos from "aos"
import "aos/dist/aos.css"

export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_6fnic09",
        "template_4a07bpe",
        form.current,
        "BK_LZINlyKIXdif6H"
      )
      .then(
        result => {
          alert(result.text)
        },
        error => {
          alert(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <section
      className="container padding-top-10rem"
      id="contactMe"
      data-aos="fade-up"
    >
      <div className="text-center">
        <h2 className="font-main text-font64-BOLD">Contact me</h2>
        <p className="font-secondary text-font24 line-height35 text-space">
          If you want to hire me, work with me or know more about me, just
          contact me by sending an email with by filling the following form
        </p>
      </div>
      <div className="row justify-content--sb container-contactMe resp-col-md flex-gap2 resp-justify-sm ">
        <div className="row align-items--center ">
          <RiRoadMapFill className="color-main icon-contactMe" />
          <div>
            <p className="font-main text-font24 border-btm margin-contact-text">
              Location:
            </p>
            <p className="font-secondary text-font24">Montpellier (FR)</p>
          </div>
        </div>
        <div className="row align-items--center">
          <BsPhone className=" color-main icon-contactMe" />

          <div>
            <p className="font-main text-font24 border-btm margin-contact-text">
              Phone:
            </p>
            <p className="font-secondary text-font24">+33 0767909776</p>
          </div>
        </div>
        <div className="row align-items--center">
          <BsFillEnvelopeFill className=" color-main icon-contactMe" />
          <div>
            <p className="font-main text-font24 border-btm margin-contact-text ">
              Email:
            </p>
            <p className="font-secondary text-font24">
              giorgiocignitti@gmail.com
            </p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <p>
          <input
            type="text"
            name="name"
            placeholder="your name"
            required
          ></input>
        </p>
        <p>
          <input type="email" name="email" placeholder="your email"></input>
        </p>
        <p className="full-m">
          <textarea
            row="5"
            placeholder="text"
            name="message"
            className="font-main"
            required
          ></textarea>
        </p>
        <p className="resp-full-m">
          <button
            className="btn-contacts font-secondary text-font24-BOLD margin-top-btn"
            type="submit"
            value="Send"
          >
            SEND ME
          </button>
        </p>
      </form>
    </section>
  )
}
