import React from 'react'
import Rating from '@mui/material/Rating';

export default function Path(props) {
 
  return (
    
    <div className='path'>
        <h3>{props.type}</h3>
        <div className='path-details'>{props.from} --> {props.to}</div>
        <span className='path-details'> Evaluation</span>  <Rating name="read-only" value={props.rating} readOnly />
        <div className='path-price'>Cout approximative : {props.price} DH</div>
    </div>
  )
}
