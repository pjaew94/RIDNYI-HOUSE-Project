import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import './App.scss';

import LandingPage from './landingPage/LandingPage'
import FirstFloor from './FirstFloor/FirstFloor'
import SecondFloor from './SecondFloor/SecondFloor'
import MinusFloor from './MinusFloor/MinusFloor'
import Footer from './Footer/Footer'


function StartingPage() {
  return(
    <div>
      <LandingPage />
      <FirstFloor />
      <SecondFloor />
      <MinusFloor />
      <Footer />
    </div>
  )
}

export default StartingPage