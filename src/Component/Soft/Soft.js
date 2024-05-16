import React from 'react';
import './soft.css';

const Soft = (props) => {
  return (
    <div className='soft'>
    <a><div className='min' style={props.style}>
        <h5>{props.com}</h5>
        </div></a>
    </div>
  )
}

export default Soft
