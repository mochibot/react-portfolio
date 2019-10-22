import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div 
      className='home' 
      style={{  
        background: `url(${props.background}) no-repeat fixed left bottom`,
        backgroundColor: '#ECDFDC',
        backgroundBlendMode: 'color-burn'
      }}>
      <div className='home-title'>
        <h1>Penny Lee</h1>
        <p>| Full-stack developer | Clinical Research Associate | Immunologist |</p>
      </div>
      <Link to='/about'>
        <button>
          <FontAwesomeIcon icon={faUser} size='lg'/>
          <span>Get to know me</span>
        </button>
      </Link>
    </div>
  )
}

export default Home;