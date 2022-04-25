import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "../../component/style/navlinks.css";

const NavMenu = ({ open, toggleOpen }) => {
  const [active, setActive] = useState(false);
  const displayMobileNavLinks = classNames("mobile-nav-wrapper", {
    open: open,
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const navmenu = [
    {
      name: "Cosmic Pack",
      href: "/cosmicpack",
    },
    {
      name: "Cosmic Dao",
      href: "/dao",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Privacy Policy",
      href: "/privacypage",
    },
    {
      name: "Disclaimer",
      href: "/disclaimer",
    },
  ];

  return (
    <nav arai-label="mobile navigation" className={displayMobileNavLinks}>
      {navmenu.map((info) => {
        return (
          <NavLink
            className="mobile-link"
            key={Math.random()}
            to={info.href}
            activeClassName="active"
            onClick={() => {
              toggleOpen();
            }}
          >
            {info.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavMenu;
