import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import './App.scss';

import LandingPage from './landingPage/LandingPage'
import FirstFloor from './FirstFloor/FirstFloor'
import SecondFloor from './SecondFloor/SecondFloor'
import MinusFloor from './MinusFloor/MinusFloor'


function StartingPage() {
  return(
    <div>
      <LandingPage />
      <FirstFloor />
      <SecondFloor />
      <MinusFloor />
    </div>
  )
}

export default StartingPage