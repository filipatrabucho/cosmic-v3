import React from "react";
import contentImg from "../../assets/256 256 1.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import "./content.css";
import "@splidejs/splide/dist/css/splide.min.css";

const data = [
  {
    id: "1",
    img: `${contentImg}`,
  },
  {
    id: "2",
    img: `${contentImg}`,
  },
  {
    id: "1",
    img: `${contentImg}`,
  },
  {
    id: "1",
    img: `${contentImg}`,
  },
  {
    id: "1",
    img: `${contentImg}`,
  },
];

function Content({ title }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="content">
      <hr className="graphics__line" />
      <h3 className="content__subtitle">{title}</h3>
      <div className="content__container container">
        <div className="content__wrapper">
          <Splide
            options={{
              perPage: 4,
              arrows: true,
              pagination: false,
              breakpoints: {
                950: {
                  perPage: 2,
                  perMove: 2,
                  padding: { left: 10, right: 10 },
                  gap: 0,
                },
              },
            }}
          >
            <SplideSlide className="item1">
              <img
                src={contentImg}
                alt="house-img"
                className={`content__img ${
                  isSelected ? "selected" : "content__img"
                }`}
                onClick={toggleSelected}
              />
            </SplideSlide>

            <SplideSlide className="item2">
              <img src={contentImg} alt="house-img" className="content__img" />
            </SplideSlide>

            <SplideSlide className="item3">
              <img src={contentImg} alt="house-img" className="content__img" />
            </SplideSlide>

            <SplideSlide className="item4">
              <img src={contentImg} alt="house-img" className="content__img" />
            </SplideSlide>

            <SplideSlide>
              <img src={contentImg} alt="house-img" className="content__img" />
            </SplideSlide>
          </Splide>
        </div>
        <button className="content__btn">Download</button>
      </div>
    </div>
  );
}

export default Content;
