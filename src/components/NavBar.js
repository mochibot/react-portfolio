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
            <Link to='/'><FontAwesomeIcon icon={faHome} size='lg'/>HOME</Link>
            <Link to='/about'><FontAwesomeIcon icon={faUser} size='lg'/>ABOUT</Link>
            <Link to='/portfolio'><FontAwesomeIcon icon={faFolder} size='lg'/>PORTFOLIO</Link>
            <Link to='/contact'><FontAwesomeIcon icon={faAt} size='lg'/>CONTACT</Link>
          </>
        ) : (
          <FontAwesomeIcon onClick={() => setIsOpen(true)} icon={faBars} size='3x'/>
        )}
      </div>
    </div>
  )
}

export default NavBar;