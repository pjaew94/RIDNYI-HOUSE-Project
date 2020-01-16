import React, { useState } from 'react'
import Toolbar from './Toolbar'
import NavigationMenu from './NavigationMenu'

function NavigationCover(props) {
  const [burgerClick, setBurgerClick] = useState(true)

  return (
    <div className='nav-cover-container'>
      <Toolbar burgerStatus={burgerClick} setBurgerStatus={setBurgerClick} />
      {burgerClick ? null: <NavigationMenu />}
    </div>
  )
}


export default NavigationCover