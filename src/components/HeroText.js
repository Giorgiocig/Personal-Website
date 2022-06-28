import React from "react"

export default function HeroText() {
  const arrayButton = ["Learn More", "Contact"]
  return (
    <div>
      <div className="position-abs container-hero">
        <p className="margin-btm-30 font-secondary text-font40 color-tertiary">
          Hello
        </p>
        <h1 className="margin-btm-30 font-main text-font64-BOLD color-tertiary">
          I am Giorgio Cignitti
        </h1>
        <h2 className="margin-btm-30 font-secondary text-font40 color-tertiary">
          I am a web developer
        </h2>
        <p className="margin-btm-30 font-secondary text-font24 color-tertiary line-height35">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          porttitor nec magna a ornare. Class
        </p>
        <div>
          {arrayButton.map((el, idx) => {
            return <Button key={idx} text={el} />
          })}
        </div>
      </div>
    </div>
  )
}
