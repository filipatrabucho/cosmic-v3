import React from "react";


import "./graphicspage.css";


function GraphicsPage({ title, text, img, button }) {
  return (
    <div className="graphics">
      <div className="graphics__container">
        <hr class="graphics__line" />
        <div className="graphics__flex">
          <img src={img} alt="logo" className="graphics__logo" />
          <div className="graphics__wrapper">
            <h3 className="graphics__subtitle">{title}</h3>
            <p className="graphics__description">{text}</p>
          </div>
          <button className="graphics__btn">{button}</button>
        </div>
      </div>
    </div>
  );
}

export default GraphicsPage;
