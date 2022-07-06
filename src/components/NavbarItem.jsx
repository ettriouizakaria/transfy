import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem(props){
    return  (
        <div className="navbar-item">
            <NavLink to={props.link} activeClassName="active"> {props.title} </NavLink>
        </div>
    );
}

export default NavbarItem;