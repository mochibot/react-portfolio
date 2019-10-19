import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='portfolio-logo'/>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/portfolio'>PORTFOLIO</Link>
      <Link to='/connect'>CONNECT</Link>
    </div>
  )
}

export default NavBar;