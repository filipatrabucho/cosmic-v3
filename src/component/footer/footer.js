import React from "react";
import logo from "../../assets/LogoCosmic-Exodus 1.svg";
import everywhere from "../../assets/Logo-_Everywhere_ 1.png";
import { AiOutlineClose } from "react-icons/ai";
import cosmic from "../../assets/Cosmis Exodus® _ 2022.png";
import linktree from "../../assets/linktree-1 1.png";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__line"></div>
      <div className="footer__brands">
        <NavLink to="/" className="footer__link">
          <img src={logo} alt="logo" className="footer__logo" />
        </NavLink>
        <div className="footer__icon">
          <AiOutlineClose className="footer__iconx" />
        </div>
        <img src={everywhere} alt="brand" className="footer__brand" />
      </div>

      <ul className="footer__list">
        <li className="footer__item">
          <NavLink to="/contact" className="footer__link">
            Contact Us
          </NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/faq" className="footer__link">
            Faq
          </NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/cosmicpack" className="footer__link">
            Cosmic Pack
          </NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/hiring" className="footer__link">
            Recruting
          </NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/" className="footer__link">
            Dao
          </NavLink>
        </li>

        <li className="footer__item">
          <NavLink to="/" className="footer__link-others">
            Audit
          </NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/" className="footer__link-others">
            How To Start
          </NavLink>
        </li>
      </ul>

      <div className="footer__cosmicexodus">
        <img src={cosmic} alt="logo" className="footer__cosmicsesodus2022" />
        <a
          href="https://linktr.ee/cosmic_exodus"
          rel="noopener noreferrer"
          target="_blank"
          className="footer__linktree"
        >
          <img src={linktree} alt="logo" className="footer__linktree" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
