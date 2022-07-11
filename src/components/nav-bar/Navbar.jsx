import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brand from "../Brand";
import NavbarItem from "../NavbarItem";
import { loggedInUserContext } from "../App";
import "./nav-bar.css";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNavbarAction = () => {
    setToggleNavbar(!toggleNavbar);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className='navbar partial-width '>
      <div className='items'>
        <Brand />
        <FontAwesomeIcon
          id='navbar-toggler'
          icon='bars'
          onClick={toggleNavbarAction}
        />
      </div>
      {(toggleNavbar || screenWidth > 1000) && (
        <div className='navbar-items'>
          <NavbarItem link='/home' title='Acceuil' />
          <NavbarItem link='/reservation' title='Reservation' />
          <NavbarItem link='/contact' title='Contact' />
          {loggedInUser && <NavbarItem link='/login' title='Connexion' />}
          {!loggedInUser && (
            <NavbarItem
              className='navbar-item-icon'
              link='/profile'
              dropdownItems={[
                { value: "Profile", link: "profile" },
                { value: "Commandes", link: "orders" },
                { value: "Se déconnecter", link: "signout" },
              ]}
              title={<FontAwesomeIcon className='icon' icon='user' />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
