import React from 'react';
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
      <h1>Penny Lee</h1>
      <p>| Full-stack developer | Clinical Research Associate | Immunologist |</p>
      <button><Link to='/about'>Get to know me</Link></button>
    </div>
  )
}

export default Home;