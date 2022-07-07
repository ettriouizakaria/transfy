import React from "react";
import Brand from "./Brand";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className='navbar partial-width '>
      <Brand />
      <div className='navbar-items'>
        <NavbarItem link='/home' title='Acceuil' />
        <NavbarItem link='/reservation' title='Reservation' />
        <NavbarItem link='/login' title='Connexion' />
        <NavbarItem link='/contact' title='Contact' />
      </div>
    </div>
  );
}

export default Navbar;
