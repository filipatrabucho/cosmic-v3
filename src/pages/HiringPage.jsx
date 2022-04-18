import React from "react";
/*import Hiring from "../component/hiring/hiring";*/
import Navimg from "../assets/hiring_banner.png";
import "../component/hiring/hiring.css";

function HiringPage() {
  return <img src={Navimg} alt="Banner Hiring" className="hiring__banner" />;
}

export default HiringPage;
