import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"/>

      <div className="header__search">
        <input className="header__searchInput" type="text" /> 
      </div>

      <div className="header__nav">

        <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineOne">Sign in</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineOne">& Orders</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineOne">Prime</span>
        </div>

      </div>
    </div>
  )
}

export default Header
