import React from "react";
import "./dropdown-item.css";
import { Link } from "react-router-dom";

export default function DropdownItem(props) {
  return (
    <div className='dropdown-item'>
<<<<<<< HEAD
      {console.log(props.action)}
=======
>>>>>>> 1cec3f4097864f150833b045d00b96b0c06982f6
      {props.link && <Link to={props.link}>{props.value}</Link>}
      {!props.link && <span onClick={() => props.action()}>{props.value}</span>}
    </div>
  );
}
