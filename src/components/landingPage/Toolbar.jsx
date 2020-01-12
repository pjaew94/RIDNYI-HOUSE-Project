import React, { useRef, useEffect, useState } from 'react'
import './Toolbar.scss'
import { gsap } from 'gsap'
import Hamburger from './Hamburger'


function Toolbar(props) {

  let tool = useRef(null)

  useEffect(() => {
    const logo = tool.children[0]
    const burger = tool.children[1]


    gsap.from(logo, {y: -200, opacity: 0, duration: 4, ease: "power3"})
    gsap.from(burger, {y: -200, opacity: 0, duration: 4, ease: "power3"})

  })

  

  return (
    <div className='navbar' ref={el => tool = el}>
      <h3>SMA</h3>
      <Hamburger />
    </div>
  )
}

export default Toolbar