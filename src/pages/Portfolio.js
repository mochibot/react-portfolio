import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects';
import Project from '../components/Project';


const Portfolio = (props) => {
  return (
    <div 
      className='portfolio'
      style={{  
        background: `url(${props.background}) no-repeat fixed right bottom`,
        backgroundColor: '#ECDFDC',
        backgroundBlendMode: 'color-burn'
      }}
    >
      <h3>Here are some of the projects that I have worked on</h3>
      <div className='projects'>
        {projects.map((project, index) => <Project key={index} project={project}/>)}
      </div>
      <Link to='/contact'>
        <button>
          <FontAwesomeIcon icon={faAt} size='lg'/>
          <span>Connect with me</span>
        </button>
      </Link>
    </div>
  )
}

export default Portfolio;