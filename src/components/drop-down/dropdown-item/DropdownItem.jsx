import React from "react";
import "./dropdown-item.css";
import { Link } from "react-router-dom";

export default function DropdownItem(props) {
  return (
    <div className='dropdown-item'>
      {props.link && <Link to={props.link}>{props.value}</Link>}
      {!props.link && <span onClick={() => props.action()}>{props.value}</span>}
    </div>
  );
}
