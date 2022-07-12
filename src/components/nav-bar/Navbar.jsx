import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brand from "../Brand";
import NavbarItem from "../NavbarItem";
import { loggedInUserContext } from "../App";
import "./nav-bar.css";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const history = useHistory();

  const logOutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    history.push("/home");
  };

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
    <div
      style={{ alignItems: !loggedInUser ? "center" : "baseline" }}
      className='navbar partial-width '>
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
          {!loggedInUser && <NavbarItem link='/login' title='Connexion' />}
          {loggedInUser && (
            <NavbarItem
              className='navbar-item-icon'
              link='/profile'
              dropdownItems={[
                { value: "Profile", link: "profile" },
                { value: "Commandes", link: "orders" },
                { value: "Se déconnecter", action: logOutUser },
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
