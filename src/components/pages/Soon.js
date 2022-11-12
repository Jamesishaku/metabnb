import React from 'react';
import construction from '../../assets/coming-soon.svg';
import './soon.css';

function Soon() {
  return (
      <div className='soon'>
          <img src={ construction } alt="construction ongoing" /> 
          <h1>Coming <span>soon</span>!</h1>
      </div>
  )
}

export default Soon