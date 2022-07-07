import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoWhite from "../../../images/logo-white.png";
import ColumnItem from "./column-item/ColumnItem";
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='transfy-column column'>
        <div className='transfy-logo'>
          <img src={logoWhite} alt='Transfy Logo' />
        </div>
        <div className='social-medias-icons'>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </div>
      </div>
      <div className='pages-column column'>
        <div className='column-header'>Pages</div>
        <div className='column-items'>
          <ColumnItem value='Acceuil' link='/home'></ColumnItem>
          <ColumnItem value='Reservation' link='/reservation'></ColumnItem>
          <ColumnItem value='A propos' link='/about'></ColumnItem>
        </div>
      </div>
      <div className='contact-column column'>
        <div className='column-header'>Contact</div>
        <div className='column-items'>
          <ColumnItem value='Contactez-nous' link='/contact'></ColumnItem>
        </div>
      </div>
      <div className='social-medias-column column'>
        <div className='column-header'>Réseaux sociaux</div>
        <div className='column-items'>
          <ColumnItem value='LinkedIn' link='/'></ColumnItem>
          <ColumnItem value='Facebook' link='/'></ColumnItem>
          <ColumnItem value='Twitter' link='/'></ColumnItem>
        </div>
      </div>
    </div>
  );
}
