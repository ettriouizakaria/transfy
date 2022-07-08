import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./drop-down/Dropdown";

function NavbarItem(props) {
  return (
    <div className={`navbar-item ${props.className?props.className:""}`}>
      <NavLink to={props.link} activeClassName='active'>
        {props.title}
      </NavLink>
      {props.dropdownItems && (
        <Dropdown dropdownItems={props.dropdownItems}></Dropdown>
      )}
    </div>
  );
}

export default NavbarItem;
