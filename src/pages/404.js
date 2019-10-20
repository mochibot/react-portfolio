import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div 
      className='not-found' 
      style={{  
        background: `url(${props.background}) no-repeat fixed center`,
        backgroundColor: '#ECDFDC',
        backgroundBlendMode: 'color-burn'
      }}>
      <FontAwesomeIcon icon={faDizzy} size='8x'/>
      <h4>Oops...the page you are trying to reach does not exist</h4>
      <Link to='/'>
        <button>
          <FontAwesomeIcon icon={faHome} size='lg'/>
          <span>Return to Home</span>
        </button>
      </Link>
    </div>
  )
}

export default NotFound;