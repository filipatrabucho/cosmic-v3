import React from "react";
import banner from '../../assets/banner 3 with gradient 1.png';


function Banner() {
    return (
      <div className="banner__container">
          <img src={banner} alt="banner" className="banner__image" />
      </div>
    )
  }
  
  export default Banner;
  