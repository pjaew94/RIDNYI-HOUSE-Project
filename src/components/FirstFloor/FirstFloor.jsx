import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useInView, InView } from 'react-intersection-observer'
import './FirstFloor.scss'

import diningImg from '../images/first-images/diningroom.png'
import livingImg from '../images/first-images/livingroom1.png'
import kitchenImg from '../images/first-images/kitchen.png'


function FirstFloor() {

  let firstFloor = useRef(null)
  let secondSection = useRef(null)
  let thirdSection =useRef(null)

  const [text1, inViewText1] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    const textOne = firstFloor.firstChild.firstChild.firstChild
    if (inViewText1) {
      gsap.to(textOne, { x: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText1])

  const [text2, inViewText2] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(() => {
    const textTwo = firstFloor.firstChild.children[1]
    if (inViewText2) {
      gsap.to(textTwo, { y: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText2])

  const [img1, inViewImg1] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(() => {
    const imgOne = secondSection.firstChild.firstChild.children[1]
    if (inViewImg1) {
      gsap.to(imgOne, { x: '100%', duration: 3, ease: "power2" })
    }
  }, [inViewImg1])


  const [img2, inViewImg2] = useInView({
    threshold: 0.15,
    triggerOnce: true
  })
  useEffect(() => {
    const imgTwo = secondSection.children[1].firstChild.children[1]
    if (inViewImg2) {
      gsap.to(imgTwo, { x: '100%', duration: 3, ease: "power2" })
    }
  }, [inViewImg2])



  const [text3, inViewText3] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(() => {
    const textThree = secondSection.firstChild.children[1]
    if (inViewText3) {
      gsap.to(textThree, { y: 0, autoAlpha: 1, duration: 2.5, ease: "power2" })
    }
  }, [inViewText3])

  const [img3, inViewImg3] = useInView({
    threshold: 0.15,
    triggerOnce: true
  })
  useEffect(() => {
    const imgThree = firstFloor.children[2].children[1]
    if (inViewImg3) {
      gsap.to(imgThree, { x: '100%', duration: 3, ease: "power2" })
    }
  }, [inViewImg3])








  return (
    <div className='first-floor-wrap'>
      <div className='first-floor' >

        <div className="first-floor-container" ref={el => firstFloor = el}>

          <div className="first-section">
            <div className="first-top" ref={text1}>
              <h1>FIRST FLOOR</h1>
            </div>

            <div className="first-bottom" ref={text2}>
              <div className="first-bottom-left">
                <p> The first floor consists of a large living room, dining room, kitchen, and professional barbecue area. The living room with a fireplace is spacious and soft in its color scheme. The designer ceramic vases with ikebanas fill the space with senses and flowers. Two floors have merged in the dining room, creating plenty of room for white loose clouds by Serhii Makhno.</p>
              </div>
              <div className="first-bottom-right">
                <p>Two floors have merged in the dining room, creating plenty of room for white loose clouds by Serhii Makhno. A large wooden bench and an Elephant armchair wait for dinner to be served.</p>
              </div>
            </div>
          </div>



          <div className="second-section" ref={el => secondSection = el}>
            <div className="second-left">
              <div className="second-left-img" ref={img1}>
                {inViewImg1 ? <img src={diningImg} className="dining-room-img" alt=''></img> : null}
                <div className="dining-room-img-mask"></div>
              </div>
              <div className="second-left-text" ref={text3}>
                <p>And dinner is being cooked in the kitchen — there are light and oak slabs instead of the countertop. The barbecue area can easily become a terrace — the windows can be adjusted. The dark part of the area holds a table and equipment for meat processing with jungles above it. The light part is illuminated by Makhno's designer Umbrellas. Underneath, there's a wooden table with stumps instead of legs.</p>
              </div>
            </div>
            <div className="second-right">
              <div className="second-right-img" ref={img2}>
                {inViewImg2 ? <img src={livingImg} className="living-room-img" alt=''></img> : null}
                <div className="living-room-img-mask"></div>
              </div>
            </div>
          </div>

          <div className="third-section" ref={img3}>
            {inViewImg3 ? <img src={kitchenImg} className='kitchen-img' alt=''></img> : null}
            <div className="kitchen-img-mask"></div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default FirstFloor