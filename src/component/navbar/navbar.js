import React from 'react';
import logo from '../../assets/COSMIC-EXODUS-FINAL 2.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import './navbar.css';

function NavBar(){

    return (
        <div className="navbar">
            <div className="navbar__container">
                <img src={logo} alt="logo" className="navbar__logo" />

                <div className="navbar__menu">
                    <GiHamburgerMenu className="navbar__icon" onClick={()=>console.log("click")}/>
                </div>
            </div>
        </div>
        
    );
};
export default NavBar;


