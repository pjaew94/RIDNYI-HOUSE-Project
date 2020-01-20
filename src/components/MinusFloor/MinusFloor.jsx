import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './MinusFloor.scss'

import img1png from '../images/minus-images/img1.png'
import leftTop1 from '../images/minus-images/left-top1.png'
import leftTop2 from '../images/minus-images/left-top2.png'
import rightBottom1 from '../images/minus-images/right-bottom1.png'
import rightBottom2 from '../images/minus-images/right-bottom2.png'
import rightTop from '../images/minus-images/right-top.png'
import leftBottom from '../images/minus-images/left-bottom.png'

function MinusFloor(props) {

  let minusFirstSection = useRef(null)
  let minusSecondSection = useRef(null)



  const [img1, inViewImg1] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewImg1) {
      const imgOne = minusFirstSection.firstChild.firstChild.lastChild
      gsap.to(imgOne, { x: "100%", duration: 2.5, ease: "power2" })
    }
  }, [inViewImg1])


  const [titleText, inViewText1] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewText1) {
      const textTitle = minusFirstSection.children[1].firstChild.firstChild
      gsap.to(textTitle, { x: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText1])


  const [pText, inViewText2] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewText2) {
      const pText = minusFirstSection.children[1].firstChild.children[1]
      gsap.to(pText, { x: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText2])

  //

  const [img2, inViewImg2] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewImg2) {
      const imgOne = minusSecondSection.firstChild.firstChild.children[1]
      gsap.to(imgOne, { x: "-100%", duration: 2.5, ease: "power2" })
    }
  }, [inViewImg2])

  const [img3, inViewImg3] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewImg3) {
      const imgOne = minusSecondSection.firstChild.children[1].lastChild
      gsap.to(imgOne, { x: "-100%", duration: 2.5, ease: "power2" })
    }
  }, [inViewImg3])

  const [img4, inViewImg4] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewImg4) {
      const imgOne = minusSecondSection.children[1].firstChild.lastChild
      gsap.to(imgOne, { x: "100%", duration: 2.5, ease: "power2" })
    }
  }, [inViewImg4])

  const [img5, inViewImg5] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewImg5) {
      const imgOne = minusSecondSection.children[1].children[1].lastChild
      gsap.to(imgOne, { x: "100%", duration: 2.5, ease: "power2" })
    }
  }, [inViewImg5])


  return (
    <div name='Minus First Floor' className='minus-wrapper'>
      <div className="minus-first-section" ref={el => minusFirstSection = el}>
        <div className="minus-left-container">
          <div className="img1-container" ref={img1}>
            <img className='img1' src={img1png} alt=''></img>
            <div className="img-mask-1"></div>
          </div>
        </div>
        <div className="minus-right-container">
          <div className="right-text-wrapper">
            <div className="minus-floor-title" ref={titleText}>
              <h1>MINUS FIRST FLOOR</h1>
            </div>
            <div className="minus-floor-text" ref={pText}>
              <p>The windows are facing the river. Beyond the river, there's a field. Beyond the field, tired sunsets are hidden.</p>
              <p>The entire floor serves as a place to relax. There is a pool, sauna, jacuzzi, and spa with an outdoor stone lounge. A soft area with fireplace and billiard room are wrapped in concrete and weathering steel. Above the oak flaps, there's a Milanese beauty — a ceramic Lava lamp by Serhii Makhno, who came to the house right after the international iSaloni design exhibition.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="minus-second-section" ref={el => minusSecondSection = el}>
        <div className="minus-second-left">
          <div className="minus-second-left-img1">
            <Carousel
              className='top-left-carousel'
              showStatus={false}
              infiniteLoop={true}
              interval={5000}
              transitionTime={1300}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              autoPlay
            >
              <img src={leftTop1} alt=''></img>
              <img src={leftTop2} alt=''></img>
            </Carousel>
            <div className="left-img1-mask" ref={img2}></div>
          </div>
          <div className="minus-second-left-img2">
            <img src={leftBottom} alt=''></img>
            <div className="left-img2-mask" ref={img3}></div>
          </div>
        </div>
        <div className="minus-second-right">
          <div className="minus-second-right-img1">
            <img src={rightTop} alt=''></img>
            <div className="right-img1-mask" ref={img4}></div>
          </div>
          <div className="minus-second-right-img2">
            <Carousel
              className='bottom-right-carousel'
              showStatus={false}
              infiniteLoop={true}
              interval={5000}
              transitionTime={1300}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              autoPlay
            >
              <img src={rightBottom1} alt=''></img>
              <img src={rightBottom2} alt=''></img>

            </Carousel>
            <div className="right-img2-mask" ref={img5}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinusFloor