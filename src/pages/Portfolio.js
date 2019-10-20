import React from 'react';
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
    </div>
  )
}

export default Portfolio;