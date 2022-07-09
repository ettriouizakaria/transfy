import React from "react";

export default function Service(props){
    return (
      <div className={props.style}>
        <i className="material-icons">{props.icon}</i>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>  
    );
}