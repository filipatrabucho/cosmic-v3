import React from "react";
import profileImg from "../../assets/COSMIC GRAPHICS PACK - cards.svg";
import { FiSquare } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

import "./profile.css";
import "@splidejs/splide/dist/css/splide.min.css";

function Profile({ title }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
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
            }}
          >
            <SplideSlide className="item1">
              <img src={profileImg} alt="profile-img" className="profile__img" />
              <ImCross
                className={`profile__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="profile__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item2">
              <img src={profileImg} alt="profile-img" className="profile__img" />
              <ImCross
                className={`profile_cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="profile__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item3">
              <img src={profileImg} alt="profile-img" className="profile__img" />
              <ImCross
                className={`profile__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="profile__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide className="item4">
              <img src={profileImg} alt="profile-img" className="profile__img" />
              <ImCross
                className={`profile__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="profile__square" onClick={toggleClass} />
            </SplideSlide>

            <SplideSlide>
              <img src={profileImg} alt="profile-img" className="profile__img" />
              <ImCross
                className={`profile__cross ${isActive ? "hidden" : null}`}
              />
              <FiSquare className="profile__square" onClick={toggleClass} />
            </SplideSlide>
          </Splide>
        </div>
        <button className="profile__btn">Download</button>
      </div>
    </div>
  );
}

export default Profile;
