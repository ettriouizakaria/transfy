import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./card-view.css"

export default function CardView(props) {
  return (
    <div className='card-container'>
        <div className="icon-container">
            <FontAwesomeIcon className='icon' icon={props.icon}></FontAwesomeIcon>
        </div>
        <div className="card-title" >
            {props.title}
        </div>
        <div className="card-description">
            {props.description}
        </div>
    </div>
  )
}
