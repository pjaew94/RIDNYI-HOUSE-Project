import React, { useState } from 'react'
import './Toolbar.scss'
import Hamburger from './Hamburger'
import NavigationMenu from './NavigationMenu'


function Toolbar(props) {

  const [burgerClick, setBurgerClick] = useState(true)

  return (
    <div className='navbar'>
      <h3>SMA</h3>
      <Hamburger burgerStatus={burgerClick} setBurgerStatus={setBurgerClick} />
      {burgerClick ? null: <NavigationMenu />}
    </div>
  )
}

export default Toolbar