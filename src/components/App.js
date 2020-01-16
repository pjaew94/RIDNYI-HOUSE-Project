import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import './App.scss';

import StartingPage from './StartingPage'
import Team from './team/Team'

const routes = [
  { path: '/', name: 'Home', Component: StartingPage },
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
