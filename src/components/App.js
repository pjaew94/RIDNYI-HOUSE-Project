import React from 'react';
import ReactDOM from 'react-dom'
import './App.scss';

import Toolbar from './landingPage/Toolbar'
import LandingPage from './landingPage/LandingPage'


function App() {
  return (
    <div className="App">
      <Toolbar />
      <LandingPage />
    </div>
  );
}

export default App;
