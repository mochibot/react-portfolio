import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faFolder, faAt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <img src={logo} alt='portfolio-logo'/>
      <div 
        className='navbar-links' 
        style={{ background: `${isOpen ? '#AC938E' : 'transparent'}`}}>
        {isOpen ? (
          <>
            <FontAwesomeIcon onClick={() => setIsOpen(false)} icon={faTimes} size='3x'/>
            <Link to='/'>HOME<FontAwesomeIcon icon={faHome} size='lg'/></Link>
            <Link to='/about'>ABOUT<FontAwesomeIcon icon={faUser} size='lg'/></Link>
            <Link to='/portfolio'>PORTFOLIO<FontAwesomeIcon icon={faFolder} size='lg'/></Link>
            <Link to='/contact'>CONTACT<FontAwesomeIcon icon={faAt} size='lg'/></Link>
          </>
        ) : (
          <FontAwesomeIcon onClick={() => setIsOpen(true)} icon={faBars} size='3x'/>
        )}
      </div>
    </div>
  )
}

export default NavBar;