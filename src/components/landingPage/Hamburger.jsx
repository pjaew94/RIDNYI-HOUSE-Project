import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './Hamburger.scss'



function Hamburger(props) {

  function clickBurger() {
    if (props.burgerStatus === true) {
      gsap.to(burgerLine1, { opacity:0, width: 0, right: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine3, {opacity:0, width: 0, left: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine2, {backgroundColor: "#FFFFFF" ,duration: 1, ease: "power2"})
      props.setBurgerStatus(false)
    } else {
      gsap.to(burgerLine1, {opacity:1, width: "50%", right: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine3, {opacity:1, width: "50%", left: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine2, {backgroundColor: "#938778" ,duration: 1, ease: "power2"})
      props.setBurgerStatus(true)
    }
  }

  let burgerLine1 = useRef(null) 
  let burgerLine2 = useRef(null)
  let burgerLine3 = useRef(null)

  return (
    <div className="hamburger" onClick={clickBurger} >
        <div className="line1" ref={el => burgerLine1 = el}></div>
        <div className="line2" ref={el => burgerLine2 = el}></div>
        <div className="line3">
          <div className="blankLeft"></div>
          <div className="line3-right" ref={el => burgerLine3 = el}></div>
        </div>
    </div>
 
  )
}


export default Hamburger
