import React, { useState } from "react";
import logo from "../../assets/LogoCosmic-Exodus 1.svg";
import NavMenu from "../utils/navlinks";
import classNames from "classnames";
import "./navbar.css";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const active = classNames("mobile-menu", {
    open: openMenu,
  });

  const handleOpen = () => {
    setopenMenu(!openMenu);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          <span className="navbar__left">
            <a className="navbar__link" href="/">
              <img src={logo} alt="logo" className="navbar__logo" />
            </a>
          </span>
          <span className="navbar__links">
            <button
              aria-label="Toggle Mobile Menu Button"
              className={active}
              onClick={handleOpen}
            >
              <div className="bar-one" />
              <div className="bar-two" />
              <div className="bar-three" />
            </button>
          </span>
        </div>
      </header>
      <NavMenu open={openMenu} toggleOpen={handleOpen} />
    </>
  );
};

export default Navbar;
