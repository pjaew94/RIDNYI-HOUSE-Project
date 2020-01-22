import React, { useRef, useEffect, useState } from 'react'
import './Footer.scss'

import { FaFacebookF,  FaYoutube } from "react-icons/fa"


function Footer(props) {
  return (
    <div name='contact' className='footer-wrapper'>
      <div className="footer-container">
        <div className="footer-top-container">
          <div className="top-left">
            <h1>MEET US</h1>
          </div>
          <div className="top-right">
            <div className="top-right-top">
              <div className="call">
                <div className="line-container">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>CALL</p>
                </div>
              </div>
              <div className="email">
                <div className="line-container">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>E-MAIL</p>
                </div>
              </div>
              <div className="visit">
                <div className="line-container">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>TEXT</p>
                </div>
              </div>
            </div>
            <div className="top-right-bottom">
              <ul>
                <li>+380 67 824 53</li>
              </ul>
              <ul>
                <li>pr@mahno.com.ua</li>
                <li>office@mahno.com.ua</li>
                <li>hr@mahno.com.ua</li>
              </ul>
              <ul>
                <li>Office #482</li>
                <li>2 Henerala Shapovala Street,</li>
                <li>03035 Kyiv, Ukraine</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="bottom-left"></div>
          <div className="bottom-right">
            <div className="facebook">
              <div className="line-container">
                <div className="line"></div>
              </div>
              <div className="text">
                <p><a href='/'>SHARE</a></p>
                <FaFacebookF />
              </div>
            </div>
            <div className="youtube">
              <div className="line-container">
                <div className="line"></div>
              </div>
              <div className="text">
                <p><a href='/'>YOUTUBE</a></p>
                <FaYoutube />
              </div>
            </div>
            <div className="copy-right">
              <p>© 2005–2016 Sergey Makhno Architects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer
