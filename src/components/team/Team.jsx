import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import './Team.scss'

// Images import
import team1 from '../images/team-1.png'
import team2 from '../images/team-2.png'
import team3 from '../images/team-3.png'
import team4 from '../images/team-4.png'
import team5 from '../images/team-5.png'
import team1hover from '../images/team1hover.png'
import team2hover from '../images/team2hover.png'
import team3hover from '../images/team3hover.png'
import team4hover from '../images/team4hover.png'
import team5hover from '../images/team5hover.png'


function Team(props) {

  let teamCon = useRef(null)
  let teamImg = useRef(null)
  let imgDefault1 = useRef(null)
  let imgDefault2 = useRef(null)
  let imgDefault3 = useRef(null)
  let imgDefault4 = useRef(null)
  let imgDefault5 = useRef(null)

  let home = useRef(null)
  let homeLine = useRef(null)

  useEffect(() => {
    const text = teamCon.children[1]
    const back = teamCon.firstChild

    const teamImg1 = teamImg.children[2].firstChild
    const teamImg2 = teamImg.children[3].firstChild
    const teamImg3 = teamImg.children[4].firstChild
    const teamImg4 = teamImg.children[5].firstChild
    const teamImg5 = teamImg.children[6].firstChild
    const teamName1 = teamImg.children[2].lastChild
    const teamName2 = teamImg.children[3].lastChild
    const teamName3 = teamImg.children[4].lastChild
    const teamName4 = teamImg.children[5].lastChild
    const teamName5 = teamImg.children[6].lastChild

    const topHoriLine = teamImg.children[0]
    const topVertLine = teamImg.children[1]
    const bottomHoriLine = teamImg.children[7]
    const bottomVertLine = teamImg.children[8]

    gsap.from([text, back], {x: -800, opacity: 0, duration: 3.5, ease: "power2" })

    gsap.from(teamImg1, { y: 50, opacity: 0, duration: 3.5, delay: 0.7, ease: "power2" })
    gsap.from(teamImg2, { y: 50, opacity: 0, duration: 3.5, delay: 0.3, ease: "power2" })
    gsap.from(teamImg3, { y: 50, opacity: 0, duration: 3.5, delay: 0, ease: "power2" })
    gsap.from(teamImg4, { y: 50, opacity: 0, duration: 3.5, delay: 0.3, ease: "power2" })
    gsap.from(teamImg5, { y: 50, opacity: 0, duration: 3.5, delay: 0.7, ease: "power2" })

    gsap.from(teamName1, { y: -20, opacity: 0, duration: 3.5, delay: 0.7, ease: "power2" })
    gsap.from(teamName2, { y: -20, opacity: 0, duration: 3.5, delay: 0.3, ease: "power2" })
    gsap.from(teamName3, { y: -20, opacity: 0, duration: 3.5, delay: 0, ease: "power2" })
    gsap.from(teamName4, { y: -20, opacity: 0, duration: 3.5, delay: 0.3, ease: "power2" })
    gsap.from(teamName5, { y: -20, opacity: 0, duration: 3.5, delay: 0.7, ease: "power2" })

    gsap.from(topHoriLine, { width: 0, duration: 3.5, ease: "power2" })
    gsap.from(topHoriLine, { left: 300, duration: 3.5, ease: "power2" })
    gsap.from(topVertLine, { height: 0, duration: 3.5, ease: "power2" })
    gsap.from(topVertLine, { top: 150, duration: 3.5, ease: "power2" })

    gsap.from(bottomHoriLine, { width: 0, duration: 3.5, ease: "power2" })
    gsap.from(bottomHoriLine, { right: 300, duration: 3.5, ease: "power2" })
    gsap.from(bottomVertLine, { height: 0, duration: 3.5, ease: "power2" })
    gsap.from(bottomVertLine, { bottom: 150, duration: 3.5, ease: "power2" })

  })

  function hover() {
    gsap.to(imgDefault1, { opacity: 0, duration: 1, ease: "power2" })
  }
  function unhover() {
    gsap.to(imgDefault1, { opacity: 1, duration: 1, ease: "power2" })
  }

  function hover2() {
    gsap.to(imgDefault2, { opacity: 0, duration: 1, ease: "power2" })
  }
  function unhover2() {
    gsap.to(imgDefault2, { opacity: 1, duration: 1, ease: "power2" })
  }

  function hover3() {
    gsap.to(imgDefault3, { opacity: 0, duration: 1, ease: "power2" })
  }
  function unhover3() {
    gsap.to(imgDefault3, { opacity: 1, duration: 1, ease: "power2" })
  }

  function hover4() {
    gsap.to(imgDefault4, { opacity: 0, duration: 1, ease: "power2" })
  }
  function unhover4() {
    gsap.to(imgDefault4, { opacity: 1, duration: 1, ease: "power2" })
  }

  function hover5() {
    gsap.to(imgDefault5, { opacity: 0, duration: 1, ease: "linear" })
  }
  function unhover5() {
    gsap.to(imgDefault5, { opacity: 1, duration: 1, ease: "linear" })
  }

  function buttonHover() {
    gsap.to(home, {x: 20, duration: 2.5, ease: "power2"})
    gsap.to(homeLine, {x: -30, opacity: 1, duration: 2.5, ease: "power2"})
  }
  function buttonUnhover() {
    gsap.to(home, {x: 0, duration: 2.5, ease: "power2"})
    gsap.to(homeLine, {x: 0, opacity: 0, duration: 2.5, ease: "power2"})
  }



  return (
    <div class="teamContainer" ref={el => teamCon = el}>
        <Link
          onMouseEnter={buttonHover} 
          onMouseLeave={buttonUnhover}
          to='/'
          className='team-button-link'
          exact style={{ textDecoration: 'none' }}>
          <p ref={el => home = el}>Back</p>
          <div className='team-line' ref={el => homeLine = el}></div>
        </Link>

      <div className="team-text">
        <h1>TEAM</h1>
      </div>
      <div className="team-display" ref={el => teamImg = el}>
        <div className="top-horizontal-line"></div>
        <div className="top-vertical-line"></div>
        <div className="team-member">
          <div className='team-hover'>
            <img
              class='default-image'
              src={team1}
              alt=''
              ref={el => imgDefault1 = el}
              onMouseEnter={hover}
              onMouseLeave={unhover}
            ></img>
            <img class='hover-image' src={team1hover} alt=''></img>
          </div>
          <div className="team-name">
            <h2>OLEKSANDR</h2>
            <h2>MAKHNO</h2>
          </div>
        </div>
        <div className="team-member">
          <div className='team-hover'>
            <img
              class='default-image'
              src={team2}
              alt=''
              ref={el => imgDefault2 = el}
              onMouseEnter={hover2}
              onMouseLeave={unhover2}
            ></img>
            <img class='hover-image' src={team2hover} alt=''></img>
          </div>
          <div className="team-name">
            <h2>SERHII</h2>
            <h2>FILONCHUK</h2>
          </div>
        </div>
        <div className="team-member">
          <div className='team-hover'>
            <img
              class='default-image'
              src={team3}
              alt=''
              ref={el => imgDefault3 = el}
              onMouseEnter={hover3}
              onMouseLeave={unhover3}
            ></img>
            <img class='hover-image' src={team3hover} alt=''></img>
          </div>
          <div className="team-name">
            <h2>SERGEY</h2>
            <h2>MAKHNO</h2>
          </div>
        </div>
        <div className="team-member">
          <div className='team-hover'>
            <img
              class='default-image'
              src={team4}
              alt=''
              ref={el => imgDefault4 = el}
              onMouseEnter={hover4}
              onMouseLeave={unhover4}
            ></img>
            <img class='hover-image' src={team4hover} alt=''></img>
          </div>
          <div className="team-name">
            <h2>IHOR</h2>
            <h2>TYKHYI</h2>
          </div>
        </div>
        <div className="team-member">
          <div className='team-hover'>
            <img
              class='default-image'
              src={team5}
              alt=''
              ref={el => imgDefault5 = el}
              onMouseEnter={hover5}
              onMouseLeave={unhover5}
            ></img>
            <img class='hover-image' src={team5hover} alt=''></img>
          </div>
          <div className="team-name">
            <h2>OLHA</h2>
            <h2>SOBCHYSHYNA</h2>
          </div>
        </div>
        <div className="bottom-horizontal-line"></div>
        <div className="bottom-vertical-line"></div>
      </div>
    </div>
  )
}


export default Team