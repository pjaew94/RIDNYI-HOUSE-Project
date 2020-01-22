import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import './LandingPage.scss'
import Toolbar from './Toolbar'



function LandingPage(props) {


  // EFFECTS
  let landing = useRef(null)
  let content = useRef(null)
  let leftBg = useRef(null)
  let team = useRef(null)
  let teamLine = useRef(null)
  let rightBg = useRef(null)
  let image = useRef(null)
  let tourLeft = useRef(null)
  let tourRight = useRef(null)
  let tourBottom = useRef(null)
  let tourTop = useRef(null)

  useEffect(() => {

    const nav = landing.firstChild
    const year = content.children[0]
    const title1 = content.children[1]
    const title2 = content.children[2]
    const description = content.children[3].firstChild
    const locationArea = content.children[3].lastChild
    const button = content.children[4]
    const imageMask = image.firstChild

    gsap.fromTo(nav, { y: -200, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 4, ease: "power3" })

    gsap.from(year, { x: -300, opacity: 0, duration: 2, delay: 0.4, ease: "power2" })
    gsap.from(title1, { x: -300, opacity: 0, duration: 2, delay: 0.6, ease: "power2" })
    gsap.from(title2, { x: -300, opacity: 0, duration: 2, delay: 0.8, ease: "power2" })
    gsap.from(description, { x: -300, opacity: 0, duration: 2, delay: 1, ease: "power2" })
    gsap.from(locationArea, { x: 300, opacity: 0, duration: 2, delay: 1, ease: "power2" })
    gsap.from(team, { x: 300, opacity: 0, duration: 2, delay: 0.2, ease: "power2" })
    gsap.from(button, { x: -300, opacity: 0, duration: 2, delay: 1.2, ease: "power2" })

    gsap.to(imageMask, { x: "-100%", duration: 3.6, delay: 0.4, ease: "power2" })
    gsap.to(image, { opacity: 1, duration: 3.6, delay: 0.4, ease: "power2" })

  })

  function mouseOver(evt) {
    gsap.to(team, { duration: 2.5, x: -30, ease: "power2" })
    gsap.to(teamLine, { duration: 2.5, x: 60, opacity: 1, ease: "power2" })
  }

  function mouseLeave(evt) {
    gsap.to(team, { duration: 2.5, x: 0, ease: "power2" })
    gsap.to(teamLine, { duration: 2.5, x: 0, opacity: 0, ease: "power2" })
  }

  function mouseOverTour(evt) {
    gsap.to(tourLeft, {duration: 2, y: -20, ease: "power2"})
    gsap.to(tourRight, {duration: 2, y: 20, ease: "power2"})
    gsap.to(tourTop, {duration: 2, autoAlpha: 0, ease: "power2"})
    gsap.to(tourBottom, {duration: 2, autoAlpha: 0, ease: "power2"})
  }

  function mouseLeaveTour(evt) {
    gsap.to(tourLeft, {duration: 2, y: 0, ease: "power2"})
    gsap.to(tourRight, {duration: 2, y: 0, ease: "power2"})
    gsap.to(tourTop, {duration: 2, autoAlpha: 1, ease: "power2"})
    gsap.to(tourBottom, {duration: 2, autoAlpha: 1, ease: "power2"})
  }

  // HTML

  return (
    <div name='Home' className="landing-container" ref={el => landing = el}>
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
              <LinkRouter
                to='/the-team'
                className='button-link'
                exact style={{ textDecoration: 'none' }}>
              </LinkRouter>
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
            <LinkScroll
              onMouseEnter={mouseOverTour}
              onMouseLeave={mouseLeaveTour}
              activeClass="active"
              to="First Floor"
              spy={true}
              smooth={true}
              duration={1200} className='begin-tour'
            >
              Begin Tour
              <div className="tour-left" ref={el => tourLeft = el}></div>
              <div className="tour-right" ref={el => tourRight = el}></div>
              <div className="tour-bottom" ref={el => tourBottom = el}></div>
              <div className="tour-top" ref={el => tourTop = el}></div>
          </LinkScroll>
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