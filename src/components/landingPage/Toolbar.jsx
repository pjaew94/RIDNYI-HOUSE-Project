import React, {useRef, useEffect} from 'react'
import './Toolbar.scss'
import {TimelineLite, TweenMax, Power4, Expo} from 'gsap'

function Toolbar (props) {

  let tool = useRef(null)

  

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