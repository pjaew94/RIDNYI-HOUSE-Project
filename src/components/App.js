import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { gsap } from 'gsap'
import './App.scss';

import LandingPage from './landingPage/LandingPage'
import Team from './team/Team'
import Toolbar from './landingPage/Toolbar'

const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  { path: '/the-team', name: 'Team', Component: Team }
]


function App() {
  return (
    <div className="App">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
