import React from "react";

import banner from '../../assets/banner 3 with gradient 1.png';
<<<<<<< HEAD
=======
import banner_mobile from '../../assets/section 1.png';
>>>>>>> 364167a58d36a35c6f8a70cd7e8571b62d172a7a
import './banner.css';

function Banner() {
    return (
      <div className="banner__container">
        <img src={banner} alt="banner" className="banner__image" />
        <img src={banner_mobile} alt="Mobile Banner" className="banner__image-mobile" />
      </div>
    )
  }
  
  export default Banner;
  
  