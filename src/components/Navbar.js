import React, { useState } from 'react';
import logo from '../images/gap-icon.png';
import './styles/Navbar.css';


const Navbar = () => {

  const handleClick = i => {

  }









  return (
    <>
    <div className="grid">
      <div className="gap-div">
        <img className="gap-img" src={logo} alt='gap-icon'/>
      </div>
      <div className="gap-div">
        <span className="gap-title-game">TIC TAC TOE</span>
      </div>
    </div>
      <hr className="line-navbar"/>
    </>
  )
}

export default Navbar;