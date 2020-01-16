import React, { useRef, useEffect, useState } from 'react'
import './NavigationMenu.scss'
import { gsap } from 'gsap'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import Hamburger from './Hamburger'

function NavigationMenu() {

  let navContainer = useRef(null)

  let homeText = useRef(null)
  let teamText = useRef(null)
  let firstFloorText = useRef(null)
  let secondFloorText = useRef(null)
  let minusFirstFloorText = useRef(null)
  let contactText = useRef(null)

  let homeLine = useRef(null)
  let teamLine = useRef(null)
  let firstLine = useRef(null)
  let secondLine = useRef(null)
  let minusFirstLine = useRef(null)
  let contactLine = useRef(null)

  useEffect(()=> {

    const topHoriLine = navContainer.firstChild.children[0]
    const topVertLine = navContainer.firstChild.children[1]
    const bottomHoriLine = navContainer.firstChild.children[8]
    const bottomVertLine = navContainer.firstChild.children[9]

    gsap.from(topHoriLine, { width: 0, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(topHoriLine, { left: 300, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(topVertLine, { height: 0, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(topVertLine, { top: 150, duration: 2.5, delay: 1, ease: "power2" })

    gsap.from(bottomHoriLine, { width: 0, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(bottomHoriLine, { right: 300, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(bottomVertLine, { height: 0, duration: 2.5, delay: 1, ease: "power2" })
    gsap.from(bottomVertLine, { bottom: 150, duration: 2.5, delay: 1, ease: "power2" })

    gsap.from(navContainer, {width: 0, x: "50vw", duration: 0.5, ease: "power2"})
    gsap.from(navContainer, {height: 1, y: "50vh", duration: 0.5, delay: 0.5, ease: "power2"})

    gsap.from([homeText, teamText, firstFloorText, secondFloorText, minusFirstFloorText, contactText], {opacity: 0, duration: 2.5, delay: 1, ease: "power2"})
  })

  function homeHover() {
    gsap.to(homeText, {x: -40, duration: 2.5, ease: "power2"})
    gsap.to(homeLine, {x: 40, autoAlpha: 1, duration: 2.5, ease: "power2"})
  
  }

  function homeUnhover() {
    gsap.to(homeText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(homeLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})

  }

  function teamHover() {
    gsap.to(teamText, {x: -40, duration: 2.5, ease: "power2"})
    gsap.to(teamLine, {x: 40, autoAlpha: 1, duration: 2.5, ease: "power2"})
  
  }

  function teamUnhover() {
    gsap.to(teamText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(teamLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})
  }

  function firstHover() {
    gsap.to(firstFloorText, {x: -60, duration: 2.5, ease: "power2"})
    gsap.to(firstLine, {x: 60, autoAlpha: 1, duration: 2.5, ease: "power2"})
  }

  function firstUnhover() {
    gsap.to(firstFloorText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(firstLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})
  }

  function secondHover() {
    gsap.to(secondFloorText, {x: -60, duration: 2.5, ease: "power2"})
    gsap.to(secondLine, {x: 90, autoAlpha: 1, duration: 2.5, ease: "power2"})
  }

  function secondUnhover() {
    gsap.to(secondFloorText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(secondLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})
  }

  function minusHover() {
    gsap.to(minusFirstFloorText, {x: -50, duration: 2.5, ease: "power2"})
    gsap.to(minusFirstLine, {x: 150, autoAlpha: 1, duration: 2.5, ease: "power2"})
  }

  function minusUnhover() {
    gsap.to(minusFirstFloorText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(minusFirstLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})
  }
  function contactHover() {
    gsap.to(contactText, {x: -50, duration: 2.5, ease: "power2"})
    gsap.to(contactLine, {x: 50, autoAlpha: 1, duration: 2.5, ease: "power2"})
  }

  function contactUnhover() {
    gsap.to(contactText, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(contactLine, {x: 0, autoAlpha: 0, duration: 2.5, ease: "power2"})
  }


  return (
    <div className="navigation-menu" ref={el => navContainer = el}>
      <div className="navigation-links">
        <div className="top-horizontal-line"></div>
        <div className="top-vertical-line"></div>


        <LinkScroll
          onMouseEnter={homeHover} 
          onMouseLeave={homeUnhover}
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          duration={1200}
          className='nav-links'
        >
          <p ref={el => homeText = el}>Home</p>
          <div className='line' ref={el => homeLine = el}></div>
        </LinkScroll>


        <LinkRouter
          onMouseEnter={teamHover} 
          onMouseLeave={teamUnhover}
          to='/the-team'
          className='nav-links'
          exact style={{ textDecoration: 'none' }}>
          <p ref={el => teamText = el}>Team</p>
          <div className='line' ref={el => teamLine = el}></div>
        </LinkRouter>


        <LinkScroll
          onMouseEnter={firstHover} 
          onMouseLeave={firstUnhover}
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          duration={1200}
          className='nav-links'
        >
          <p ref={el => firstFloorText = el}>First Floor</p>
          <div className='line' ref={el => firstLine = el}></div>
        </LinkScroll>

        <LinkScroll
          onMouseEnter={secondHover} 
          onMouseLeave={secondUnhover}
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          duration={1200}
          className='nav-links'
        >
          <p ref={el => secondFloorText = el}>Second Floor</p>
          <div className='line' ref={el => secondLine = el}></div>
        </LinkScroll>

        <LinkScroll
          onMouseEnter={minusHover} 
          onMouseLeave={minusUnhover}
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          duration={1200}
          className='nav-links'
        >
          <p ref={el => minusFirstFloorText = el}>Minus First Floor</p>
          <div className='line' ref={el => minusFirstLine = el}></div>
        </LinkScroll>

        <LinkRouter
          onMouseEnter={contactHover} 
          onMouseLeave={contactUnhover}
          to='/'
          className='nav-links'
          exact style={{ textDecoration: 'none' }}>
          <p ref={el => contactText = el}>Contact</p>
          <div className='line' ref={el => contactLine = el}></div>
        </LinkRouter>

        <div className="bottom-horizontal-line"></div>
        <div className="bottom-vertical-line"></div>
      </div>
    </div>
  )
}

export default NavigationMenu