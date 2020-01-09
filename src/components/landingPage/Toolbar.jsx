import React, {useRef, useEffect} from 'react'
import './Toolbar.scss'
import {TimelineLite, TweenMax, Power3, Power4, Expo} from 'gsap'

function Toolbar (props) {

  let tool = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    const logo = tool.children[0]
    const team = tool.children[1]
    const burger = tool.children[2]

    
    tl.fromTo(logo, 2, { y: "-40%", opacity: 0 }, { y: "0", opacity: 1, ease: Power3.easeInOut }, 0.2)
      .fromTo(team, 2, { y: "-40%", opacity: 0 }, { y: "0", opacity: 1, ease: Power3.easeInOut }, 0.4)
      .fromTo(burger, 2, { y: "-40%", opacity: 0 }, { y: "0", opacity: 1, ease: Power3.easeInOut }, 0.6)
  })

  return (
    <nav className='navbar' ref={el => tool = el}>
      <h3>SMA</h3>
      <a href='/'><p>Meet the Team</p></a>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}

export default Toolbar