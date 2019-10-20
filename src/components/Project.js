import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
  const { title, type, role, description, techStack, url, code, image } = props.project;

  return (
    <div className='project'>
      <div className='project-title'>
        <h4>{title}</h4>
        <div className='project-tag'>
          <p>{type.toUpperCase()}</p>
          {role && <p>{role.toUpperCase()}</p>}
        </div>
      </div>
      <img src={image} alt={title}/>
      <div className='project-text'>
        <p>{description}</p>
        <p>Tech stack: {techStack}</p>
      </div>
      <div className='project-btn'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <button>
            <FontAwesomeIcon icon={faDesktop} size='sm'/>
            <span>Live</span>
          </button>
        </a>
        <a href={code} target='_blank' rel='noopener noreferrer'>
          <button>
            <FontAwesomeIcon icon={faCode} size='sm'/>
            <span>Code</span>
          </button>
        </a>
          
      </div>
    </div>
  )
}

export default Project;