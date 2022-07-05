import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavbarItem(props){
    return  (
        <div className="navbar-item">
            <Link to={props.link}> {props.title} </Link>
        </div>
    );
}

export default NavbarItem;