import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    name: 'Github',
    url: 'https://github.com/mochibot',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pennyplee/',
    icon: faLinkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/pennyplee',
    icon: faTwitter
  },
  {
    name: 'Blog',
    url: 'https://pennyplee.blogspot.com/',
    icon: faBlogger
  },
  {
    name: 'Email',
    url: 'mailto:peishan.p.lee@gmail.com',
    icon: faEnvelope
  },
];

const Contact = (props) => {
  return (
    <div
      className='contact'
      style={{  
        background: `url(${props.background}) no-repeat fixed right top`,
        backgroundColor: '#ECDFDC',
        backgroundBlendMode: 'color-burn'
      }}
    >
      <h2>Let's connect!</h2>
      <p>I can be reached via any of the following...</p>
      <div className='contact-icons'>
        {links.map(link => (
          <div className='icon'>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={link.icon} size="3x"/>
            </a>
            <p>{link.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact;