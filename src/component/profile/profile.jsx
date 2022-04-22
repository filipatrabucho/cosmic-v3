import React from "react";
import profileImg from "../../assets/COSMIC GRAPHICS PACK - cards.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

import "./profile.css";
import "@splidejs/splide/dist/css/splide.min.css";

function Profile({ title }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="profile">
      <hr className="graphics__line" />
      <h3 className="profile__subtitle">{title}</h3>
      <div className="profile__container container">
        <div className="profile__wrapper grid__container">
          <Splide
            options={{
              perPage: 4,
              arrows: true,
              pagination: false,
              breakpoints: {
                950: {
                  perPage: 2,
                  perMove: 2,
                  gap: 0,
                },
              },
            }}
          >
            <SplideSlide className="item1">
              <img
                src={profileImg}
                alt="profile-img"
                className={`profile__img ${
                  isSelected ? "selected" : "profile__img"
                }`}
                onClick={toggleSelected}
              />
            </SplideSlide>

            <SplideSlide className="item2">
              <img
                src={profileImg}
                alt="profile-img"
                className="profile__img"
              />
            </SplideSlide>

            <SplideSlide className="item3">
              <img
                src={profileImg}
                alt="profile-img"
                className="profile__img"
              />
            </SplideSlide>

            <SplideSlide className="item4">
              <img
                src={profileImg}
                alt="profile-img"
                className="profile__img"
              />
            </SplideSlide>

            <SplideSlide>
              <img
                src={profileImg}
                alt="profile-img"
                className="profile__img"
              />
            </SplideSlide>
          </Splide>
        </div>
        <button className="profile__btn">Download</button>
      </div>
    </div>
  );
}

export default Profile;
