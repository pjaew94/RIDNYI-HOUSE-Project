import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useInView, InView } from 'react-intersection-observer'
import './FirstFloor.scss'


function FirstFloor() {

  let dude = useRef(null)

  const [yas, inView] = useInView({
    threshold: 0.2,
  })


   useEffect(()=>{
    if(inView) {
      gsap.to(dude, {x: 200, duration: 4, ease: "power2"})
    }else{
      gsap.to(dude, {x:0, duration: 4, ease: "power2"})
    }
   }, [inView])
  




  return (
    <div className='first-floor' >
    
      <div className="first-floor-container" ref={yas}>
      
        <div className="first-section" ref={el => dude = el}>
          <h2>{inView.toString()}</h2>
          <div className="first-left">
          </div>
          <div className="first-right">
          </div>
        </div>
    

      
        <InView as='div' onChange={(inView, entry) => console.log('Inview:', inView)} className="second-section">
          <div className="second-left">
            <div className="dining-room-img"></div>
            <div className="second-left-text"></div>
          </div>
          <div className="second-right">
            <div className="living-room-img"></div>
          </div>
        </InView>

        <div className="third-section">
        </div>

      </div>
    </div>
  )
}

export default FirstFloor