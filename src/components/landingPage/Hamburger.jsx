import React, { useRef, useEffect, useState } from 'react'
import './Hamburger.scss'
import { gsap } from 'gsap'

function Hamburger(props) {

  const [burgerClick, setBurgerClick] = useState(false)

  function clickBurger(props) {
    setBurgerClick(prev => {
      return !burgerClick
    })  
    if (burgerClick === false) {
      gsap.to(burgerLine1, { opacity:0, width: 0, right: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine3, {opacity:0, width: 0, left: 22.5 ,duration: 1, ease: "power2"})
    } else {
      gsap.to(burgerLine1, {opacity:1, width: "50%", right: 22.5 ,duration: 1, ease: "power2"})
      gsap.to(burgerLine3, {opacity:1, width: "50%", left: 22.5 ,duration: 1, ease: "power2"})
    }
  }

  let burgerLine1 = useRef(null) 
  let burgerLine3 = useRef(null)





  return (
    <div className="hamburger" onClick={clickBurger}>
        <div className="line1" ref={el => burgerLine1 = el}></div>
        <div className="line2"></div>
        <div className="line3">
          <div className="blankLeft"></div>
          <div className="line3-right" ref={el => burgerLine3 = el}></div>
        </div>
    </div>
  )
}

export default Hamburger