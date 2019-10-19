import React from 'react';
import clinialTrialFinderImage from '../assets/clinical-trial-finder.png';
import d3CountryMapImage from '../assets/d3-countymap.png';
import illServeSoupImage from '../assets/ill-serve-soup.png';
import instagramCloneImage from '../assets/instagram-clone.png';
import oversiteImage from '../assets/oversite.png';
import refugeeStoriesImage from '../assets/refugee-stories.png';
import Project from '../components/Project';

const projects = [
  {
    title: 'Refugee Stories',
    type: 'team',
    role: 'back-end',
    description: 'API and database for an app that promotes awareness of the refugee crisis by sharing stories of refugees. ',
    techStack: 'Node.js, Express.js, knex.js, Sqlite, Postgres, apidoc, jest/supertest',
    url: 'https://refugee-stories-api-082019.herokuapp.com/',
    code: 'https://github.com/build-refugee-stories/refugee_stories-be',
    image: refugeeStoriesImage
  },
  {
    title: 'Clinical Trial Finder',
    type: 'team',
    role: 'front-end',
    description: 'A simple search engine that help patients and families identify clinical trials',
    techStack: 'React.js (Hooks), Redux.js, Semantic-UI',
    url: 'https://clinical-trial-finder-app.netlify.com/',
    code: 'https://github.com/build-week-072019-clinical-trial-finder/clinical-trial-finder-FE',
    image: clinialTrialFinderImage
  },
  {
    title: 'I\'ll serve soup',
    type: 'team',
    role: 'front-end',
    description: 'An inventory management system for soup kitchens',
    techStack: 'React.js, Redux.js, CSS with SASS',
    url: 'https://ill-serve-soup-app.netlify.com/',
    code: 'https://github.com/build-week-ill-serve-soup2/Frontend',
    image: illServeSoupImage
  },
  {
    title: 'Oversite',
    type: 'team',
    role: 'UI',
    description: 'Landing page for Oversite - a management tool that showcases inmates\' skill sets',
    techStack: 'HTML, JavaScript, CSS with Less',
    url: 'https://mochibot.github.io/PrisonerSkills-UI/penny-lee/index.html',
    code: 'https://github.com/mochibot/PrisonerSkills-UI',
    image: oversiteImage
  },
  {
    title: 'Instagram clone',
    type: 'solo',
    description: 'My attempt at cloning Instagram after learning React for about 2 weeks. To log in, please use the following credentials (username: guest password: guest)',
    techStack: 'React.js, CSS with Sass',
    url: 'https://instagram-clone-penny.netlify.com/',
    code: 'https://github.com/mochibot/React-Insta-Clone',
    image: instagramCloneImage
  },
  {
    title: 'Choropleth map example',
    type: 'solo',
    description: 'Building a choropleth map app that fulfills the user stories provided by FreeCodeCamp.org as part of the data visualization projects',
    techStack: 'HTML, CSS, D3.js',
    url: 'https://codepen.io/pennyplee/full/YmPbYy',
    code: 'https://codepen.io/pennyplee/full/YmPbYy',
    image: d3CountryMapImage
  }
]


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