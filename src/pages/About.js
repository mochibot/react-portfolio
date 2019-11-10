import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import cssIcon from '../assets/tech-stack/css3-plain.svg';
import d3Icon from '../assets/tech-stack/d3js-plain.svg';
import expressIcon from '../assets/tech-stack/express-original.svg';
import firebaseIcon from '../assets/tech-stack/firebase-plain.svg';
import goIcon from '../assets/tech-stack/go-plain.svg';
import htmlIcon from '../assets/tech-stack/html5-plain.svg';
import javaIcon from '../assets/tech-stack/java-plain.svg';
import javascriptIcon from '../assets/tech-stack/javascript-plain.svg';
import jqueryIcon from '../assets/tech-stack/jquery-plain.svg';
import monogoDbIcon from '../assets/tech-stack/mongodb-plain.svg';
import nodeIcon from '../assets/tech-stack/nodejs-plain.svg';
import postgresqlIcon from '../assets/tech-stack/postgresql-plain.svg';
import pythonIcon from '../assets/tech-stack/python-plain.svg';
import reactIcon from '../assets/tech-stack/react-original.svg';
import reduxIcon from '../assets/tech-stack/redux-original.svg';
import rubyIcon from '../assets/tech-stack/ruby-plain.svg';
import sassIcon from '../assets/tech-stack/sass-original.svg';

const About = (props) => {
  return (
    <div 
      className='about'
      style={{  
        background: `url(${props.background}) no-repeat fixed left top`,
        backgroundColor: '#ECDFDC',
        backgroundBlendMode: 'color-burn'
      }}
    >
      <div className='about-text'>
        <h2>A little bit about me...</h2>
        <p>I am a full-stack developer based in San Diego, CA. After getting my PhD in Biomedical Sciences, I worked in the clinical research industry before I discovered my passion in coding. My goal is to develop functional websites or applications that can solve real-world problems</p>
      </div>
      <div className='about-tech'>
        <h4>What I use the most</h4>
        <div className='icon-row'>
          <img src={htmlIcon} alt='HTML' title='HTML'/>
          <img src={cssIcon} alt='CSS' title='CSS'/>
          <img src={sassIcon} alt='SASS' title='SASS'/>
          <img src={javascriptIcon} alt='JavaScript' title='JavaScript'/>
          <img src={reactIcon} alt='React' title='React'/>
          <img src={reduxIcon} alt='Redux' title='Redux'/>
          <img src={nodeIcon} alt='Node' title='Node'/>
          <img src={expressIcon} alt='Express' title='Express'/>
          <img src={postgresqlIcon} alt='PostgreSQL' title='PostgreSQL'/>
        </div>
        <h4>What I have played with</h4>
          <div className='icon-row'>
            <img src={d3Icon} alt='D3' title='D3'/>
            <img src={jqueryIcon} alt='jQuery' title='jQuery'/>
            <img src={monogoDbIcon} alt='MongoDB' title='MongoDB'/>
            <img id='firebase' src={firebaseIcon} alt='Firebase' title='Firebase'/>
            <img src={pythonIcon} alt='Python' title='Python'/>
          </div>
        <h4>What I plan to learn</h4>
          <div className='icon-row'>
            <img src={javaIcon} alt='Java' title='Java'/>
            <img src={goIcon} alt='Golang' title='Golang'/>
            <img src={rubyIcon} alt='Ruby' title='Ruby'/>
            <p>plus many more....</p>
          </div>
      </div>
      <Link to='/portfolio'>
        <button>
          <FontAwesomeIcon icon={faFolder} size='lg'/>
          <span>Check out my portfolio</span>
        </button>
      </Link>
    </div>
  )
}

export default About;