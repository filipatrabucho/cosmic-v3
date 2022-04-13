import React from 'react';
import logo from '../COSMIC-EXODUS-FINAL 2.png';
import everywhere from '../Logo-_Everywhere_ 1.png';
import {AiOutlineClose} from 'react-icons/ai';


function Footer() {
  return (
    <div className="footer">
        <div className="footer__container">
            <img src={logo} alt="logo" className="footer__logo" />
            <div className="navbar__menu">
                <AiOutlineClose className="navbar__icon" onClick={()=>console.log("click")}/>
            </div>
            <img src={everywhere} alt="brand" className="footer__brand" />
        </div>
        

    </div>
  );
};

export default Footer;