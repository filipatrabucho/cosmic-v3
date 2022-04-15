import React from "react";
import contentImg from "../../assets/256 256 1.svg";
import { FiSquare } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

import "./content.css";
import "@splidejs/splide/dist/css/splide.min.css";

function Content({ title }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="content">
      <hr className="graphics__line" />
      <h3 className="content__subtitle">{title}</h3>
      <div className="content__container container">
        <div className="content__wrapper grid__container">
          <Splide
            options={{
              perPage: 4,
              arrows: true,
              pagination: false,
            }}
          >
            <SplideSlide className="item1">
              <img src={contentImg} alt="house-img" className="content__img" />
              <ImCross
                className={`content__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="content__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item2">
              <img src={contentImg} alt="house-img" className="content__img" />
              <ImCross
                className={`content__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="content__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item3">
              <img src={contentImg} alt="house-img" className="content__img" />
              <ImCross
                className={`content__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="content__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item4">
              <img src={contentImg} alt="house-img" className="content__img" />
              <ImCross
                className={`content__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="content__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide>
              <img src={contentImg} alt="house-img" className="content__img" />
              <ImCross
                className={`content__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="content__square" onClick={toggleClass} />
            </SplideSlide>
          </Splide>
        </div>
        <button className="content__btn">Download</button>
      </div>
    </div>
  );
}

export default Content;
