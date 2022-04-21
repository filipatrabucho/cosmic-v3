import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "../../component/navbar/navbar.css";

const NavLinks = ({ open }) => {
  const [active, setActive] = useState(false);
  const displayMobileNavLinks = classNames("mobile-nav-wrapper", {
    open: open,
  });

  return (
    <nav arai-label="mobile navigation" className={displayMobileNavLinks}>
      <NavLink
        className={`mobile-link ${active ? "active" : ""}`}
        to="/cosmicpack"
      >
        Cosmic Pack
      </NavLink>
      <NavLink className={`mobile-link ${active ? "active" : ""}`} to="/">
        Cosmic Dao
      </NavLink>
      <NavLink
        className={`mobile-link ${active ? "active" : ""}`}
        to="/NavLinkbout"
      >
        About Us
      </NavLink>
      <NavLink
        className={`mobile-link ${active ? "active" : ""}`}
        to="/privacypage"
      >
        Privacy Policy
      </NavLink>
      <NavLink className={`mobile-link ${active ? "active" : ""}`} to="/svmfer">
        Disclaimer
      </NavLink>
    </nav>
  );
};

export default NavLinks;
