import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brand from "../Brand";
import NavbarItem from "../NavbarItem";
import { loggedInUserContext } from "../App";
import "./nav-bar.css";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  console.log(loggedInUser);
  return (
    <div className='navbar partial-width '>
      <Brand />
      <div className='navbar-items'>
        <NavbarItem link='/home' title='Acceuil' />
        <NavbarItem link='/reservation' title='Reservation' />
        <NavbarItem link='/contact' title='Contact' />
        {loggedInUser && <NavbarItem link='/login' title='Connexion' />}
        {!loggedInUser && (
          <NavbarItem
            className="navbar-item-icon"
            link='/profile'
            dropdownItems={[{value:"Profile", link:"profile"}, {value:"Commandes", link:"orders"}, {value:"Se déconnecter", link:"signout"}]}
            title={<FontAwesomeIcon className='icon' icon='user' />}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
