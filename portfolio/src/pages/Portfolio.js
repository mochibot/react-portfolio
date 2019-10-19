import React from 'react';

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

    </div>
  )
}

export default Portfolio;