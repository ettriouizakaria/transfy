import React from "react";
import DropdownItem from "./dropdown-item/DropdownItem";
import "./dropdown.css";

export default function Dropdown(props) {
  return (
    <div className='dropdown'>
      {props.dropdownItems.map((dropdownItem, index) => 
        <DropdownItem key={index} value={dropdownItem.value} link={dropdownItem.link}/>
      )}
    </div>
  );
}
