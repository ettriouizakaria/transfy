import React from "react";
import Brand from "./Brand";
import NavbarItem from "./NavbarItem";

function Navbar() {
    return (
        <div className="navbar">
            <Brand />
            <div className="navbar-items">
                <NavbarItem link="/" title="Acceuil" />
                <NavbarItem link="/reservatio" title="Reservation" />
                <NavbarItem link="/login" title="Connexion" />
                <NavbarItem link="/signin" title="S'inscrire" />
                <NavbarItem link="/contact" title="Contact" />
            </div>
        </div>
    );
}

export default Navbar;