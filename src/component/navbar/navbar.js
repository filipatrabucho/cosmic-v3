import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/LogoCosmic-Exodus 1.svg";
import NavLinks from "../utils/navlinks";
import "./navbar.css";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);

  const active = classNames("mobile-menu", {
    open: openMenu,
  });

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
              onClick={() => {
                setopenMenu((openMenu) => !openMenu);
              }}
            >
              <div className="bar-one" />
              <div className="bar-two" />
              <div className="bar-three" />
            </button>
          </span>
        </div>
      </header>
      <NavLinks open={openMenu} />
    </>
  );
};

export default App;
