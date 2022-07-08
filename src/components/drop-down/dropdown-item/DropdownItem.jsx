import React from "react";
import "./dropdown-item.css";
import { Link } from "react-router-dom";

export default function DropdownItem(props) {
  return (
    <div className='dropdown-item'>
      <Link to={props.link}>{props.value}</Link>
    </div>
  );
}
