import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './SecondFloor.scss'

import bathroom1 from '../images/second-images/bathroom1.png'
import bathroom2 from '../images/second-images/bathroom2.png'
import bathroom3 from '../images/second-images/bathroom3.png'
import bedroom1 from '../images/second-images/bedroom1.png'
import bedroom2 from '../images/second-images/bedroom2.png'
import bathroom4 from '../images/second-images/bathroom4.png'
import bedroom3 from '../images/second-images/bedroom3.png'
import bedroom4 from '../images/second-images/bedroom4.png'
import bedroom5 from '../images/second-images/bedroom5.png'
import bedroom6 from '../images/second-images/bedroom6.png'

function SecondFloor(props) {

  let secondLeft = useRef(null)
  let secondRight = useRef(null)

  const [titleText, inViewText1] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewText1) {
      const textTitle = secondLeft.firstChild.firstChild
      gsap.to(textTitle, { x: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText1])

  const [p1Text, inViewText2] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewText2) {
      const textP1 = secondLeft.firstChild.children[2]
      gsap.to(textP1, { x: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
      console.log(inViewText2)
      console.log(textP1)
    }
  }, [inViewText2])

  const [imgMask, inViewText3] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewText3) {
      const carMask = secondRight.firstChild.children[1]
      gsap.to(carMask, { x: "-100%", duration: 2.5, ease: "power2" })
      console.log(inViewText3)
      console.log(carMask)
    }
  }, [inViewText3])



  return (
    <div name='Second Floor' className='second-floor-wrapper'>
      <div className="second-floor-left-container" ref={el => secondLeft = el}>
        <div className="left-text-container" >
          <div className="second-floor-title" ref={titleText}>
            <h1>SECOND FLOOR</h1>
          </div>
          <div className="left-text-container-line"></div>
          <div className="second-floor-text" ref={p1Text}>
            <p>Here they will sleep and wake up.</p>
            <p>The second floor consists of three blocks: for parents, children, and guests. A parent's bedroom is a snow-white lady with several shades of color. The bathroom is far from being modest — it keeps everything you need behind the glass only. Nearby there is a study and a wardrobe. The guest block includes two rooms with a shared bathroom and paintings by Serhii Makhno.</p>
          </div>
        </div>
      </div>
      <div className="second-floor-right-container" ref={el => secondRight = el}>
        <div className="right-slider-container">
          {inViewText3 ? <Carousel
            showStatus={false}
            infiniteLoop={true}
            interval={8000}
            transitionTime={1300}
            showThumbs={false}
            autoPlay
          >
            <img src={bathroom1} alt=''></img>
            <img src={bathroom2} alt=''></img>
            <img src={bedroom1} alt=''></img>
            <img src={bedroom2} alt=''></img>
            <img src={bathroom3} alt=''></img>
            <img src={bathroom4} alt=''></img>
            <img src={bedroom3} alt=''></img>
            <img src={bedroom4} alt=''></img>
            <img src={bedroom5} alt=''></img>
            <img src={bedroom6} alt=''></img>
          </Carousel> : null}
          <div className="slider-mask" ref={imgMask}></div>
        </div>
      </div>
    </div>
  )
}

export default SecondFloor