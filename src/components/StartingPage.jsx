import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import './App.scss';

import LandingPage from './landingPage/LandingPage'
import FirstFloor from './FirstFloor/FirstFloor'


function StartingPage() {
  return(
    <div>
      <LandingPage />
      <FirstFloor />
    </div>
  )
}

export default StartingPage