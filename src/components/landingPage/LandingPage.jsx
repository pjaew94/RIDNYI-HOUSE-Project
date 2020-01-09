import React, {useEffect, useRef} from 'react'
import {TimelineLite, TweenMax, Power4, Expo} from 'gsap'
import './LandingPage.scss'

import landingImage from '../images/landing-image.png'

function LandingPage (props) {
  let landing = useRef(null)
  let content = useRef(null)
  let image = useRef(null)
  let tl = new TimelineLite()

  useEffect(()=> {

    const year = content.children[0]
    const title1 = content.children[1]
    const title2 = content.children[2]
    const description = content.children[3]
    const button = content.children[4]

    TweenMax.to(landing, 0, {css: {visibility: 'visible'}})

    tl.fromTo(year, 2, {x: "-60%", opacity: 0}, {x: "0", opacity: 1, ease: Power4.easeInOut}, 0.2)
      .fromTo(title1, 2, {x: "-80%", opacity: 0}, {x: "0", opacity: 1, ease: Power4.easeInOut}, 0.4)
      .fromTo(title2, 2, {x: "-80%", opacity: 0}, {x: "0", opacity: 1, ease: Power4.easeInOut}, 0.6)
      .fromTo(description, 2, {x: "-150%", opacity: 0}, {x: "0", opacity: 1, ease: Power4.easeInOut}, 0.8)
      tl.fromTo(button, 2, {x: "-500px", opacity: 0}, {x: "0", opacity: 1, ease: Power4.easeInOut}, 1)


      tl.fromTo(image, 4, {width: "0", opacity:0}, {width: "750px", opacity:1, ease: Power4.easeInOut}, 0.2)
  })


  return (
    <div class="landing-container" ref={el => landing = el}>
      <div className="left-container">
        <div className="text-container" ref={el => content = el}>
          <div className="year"> <p>2019</p></div>
          <div className="title-1"><h1>RIDNYI</h1></div>
          <div className="title-2"> <h1>HOUSE</h1></div>
          <div className="description">
            <div className="intro">
              <p>It took 11 years to build Ridnyi House (Eng, native). Our studio has been working on it for 6 years. Without haste, prudently, considering every detail.</p>
            </div>
            <div className="description-space"></div>
            <div className="location-area">
              <p><span>Location:</span> Kozyn, Kyiv region</p>
              <p><span>Area:</span> 1066 square meters</p>
            </div>
          </div> 
           <a href='/' className='begin-tour effect-1'>Begin Tour</a>
          </div>
      </div>
      <div className="right-container">
      <div className="background-image" ref={el => image = el}>
        <img src={landingImage} alt='' className='image'></img>
      </div>
      </div>
    </div>
  )
}


export default LandingPage