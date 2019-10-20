import React, { useState } from 'react';

const Project = (props) => {
  const [open, setOpen] = useState(false);
  const { title, type, role, description, techStack, url, code, image } = props.project;

  const toggle = () => {
    setOpen(!open);
  }
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
      <button onClick={toggle}>more</button>
      {open && (
        <>
          <p>{description}</p>
          <p>Tech stack: {techStack}</p>
          <div className='project-btn'>
            <button><a href={url}>Live</a></button>
            <button><a href={code}>Code</a></button>
          </div>
        </>
      )}
    </div>
  )
}

export default Project;