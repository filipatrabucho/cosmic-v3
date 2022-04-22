import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "../../component/style/navlinks.css";

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
      <NavLink className={`mobile-link ${active ? "active" : ""}`} to="/asdfs">
        Cosmic Dao
      </NavLink>
      <NavLink className={`mobile-link ${active ? "active" : ""}`} to="/about">
        About Us
      </NavLink>
      <NavLink
        className={`mobile-link ${active ? "active" : ""}`}
        to="/privacypage"
      >
        Privacy Policy
      </NavLink>
      <NavLink
        className={`mobile-link ${active ? "active" : ""}`}
        to="/disclaimer"
      >
        Disclaimer
      </NavLink>
    </nav>
  );
};

export default NavLinks;
