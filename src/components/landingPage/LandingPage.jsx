import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

import './LandingPage.scss'
import Toolbar from './Toolbar'
import NavigationCover from './NavigationCover'



function LandingPage(props) {


  // EFFECTS
  let landing = useRef(null)
  let content = useRef(null)
  let leftBg = useRef(null)
  let team = useRef(null)
  let teamLine = useRef(null)
  let rightBg = useRef(null)
  let image = useRef(null)

  useEffect(() => {

    const nav = landing.firstChild
    const year = content.children[0]
    const title1 = content.children[1]
    const title2 = content.children[2]
    const description = content.children[3].firstChild
    const locationArea = content.children[3].lastChild
    const button = content.children[4]
    const imageMask = image.firstChild

    gsap.fromTo(nav, {y: -200, autoAlpha: 0}, {y:0, autoAlpha: 1, duration: 4, ease: "power3"})

    gsap.from(leftBg, { y: -2000, duration: 3, ease: "power2" })
    gsap.from(rightBg, { y: -2000, duration: 3, delay: 0.2, ease: "power2" })

    gsap.from(year, { x: -300, opacity: 0, duration: 2, delay: 3.4, ease: "power2" })
    gsap.from(title1, { x: -300, opacity: 0, duration: 2, delay: 3.6, ease: "power2" })
    gsap.from(title2, { x: -300, opacity: 0, duration: 2, delay: 3.8, ease: "power2" })
    gsap.from(description, { x: -300, opacity: 0, duration: 2, delay: 4, ease: "power2" })
    gsap.from(locationArea, { x: 300, opacity: 0, duration: 2, delay: 4, ease: "power2" })
    gsap.from(team, { x: 300, opacity: 0, duration: 2, delay: 3.2, ease: "power2" })
    gsap.from(button, { x: -300, opacity: 0, duration: 2, delay: 4.2, ease: "power2" })

    gsap.to(imageMask, { x: "-100%", duration: 3.2, delay: 3, ease: "power2" })
    gsap.to(image, { opacity: 1, duration: 3.2, delay: 3, ease: "power2" })

  })

  function mouseOver(evt) {
    gsap.to(team, { duration: 2.5, x: -30, ease: "power2" })
    gsap.to(teamLine, { duration: 2.5, x: 60, opacity: 1, ease: "power2" })
  }

  function mouseLeave(evt) {
    gsap.to(team, { duration: 2.5, x: 0, ease: "power2" })
    gsap.to(teamLine, { duration: 2.5, x: 0, opacity: 0, ease: "power2" })

  }


  // HTML

  return (
    <div className="landing-container" ref={el => landing = el}>
      <Toolbar />
      <div className="left-background" ref={el => leftBg = el}>
        <div className="left-container">
          <div className='team-container'
            onMouseEnter={mouseOver}
            onMouseLeave={mouseLeave}>
            <div className='team'>
              <p ref={el => team = el}>Meet the Team</p>
            </div>
            <div
              className='team-line' ref={el => teamLine = el}>
            </div>
            <div class='theButton'>
              <Link
                to='/the-team'
                className='button-link'
                exact style={{ textDecoration: 'none' }}>
              </Link>
            </div>
          </div>

          <div className="text-container" ref={el => content = el}>
            <div className="year"> <p>2019</p></div>
            <div className="title-1"><h1>RIDNYI</h1></div>
            <div className="title-2"> <h1>HOUSE</h1></div>
            <div className="description">
              <div className="intro">
                <p>It took 11 years to build Ridnyi House (Eng, native). Our studio has been working on it for 6 years. Without haste, prudently, considering every detail.</p>
              </div>
              <div className="description-space"></div>
              <div className="location-area">
                <p><span>Location:</span> Kozyn, Kyiv region</p>
                <p><span>Metrics:</span> 1066 square meters</p>
              </div>
            </div>
            <a href='/' className='begin-tour effect-1'>Begin Tour</a>
          </div>
        </div>
      </div>
      <div className="right-background" ref={el => rightBg = el}>
        <div className="right-container">
          <div className="background-image">
            <div className='image' ref={el => image = el}>
              <div className="imageMask">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LandingPage