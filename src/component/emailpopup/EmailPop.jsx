import React from "react";
import { ImCross } from "react-icons/im";
import "./EmailPopup.css";
import { useState } from "react";
import PopupPage from "../../pages/PopupPage";

function EmailPopup() {
  const [closePopup, setClosePopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container ${closePopup ? "hide" : ""}`}>
      <div className="popup">
        <div className="popup__container">
          <div className="popup__title">
            Subscribe to <br /> our newsletter
          </div>
          <ImCross
            className="popup__close"
            onClick={() => setClosePopup(true)}
          />
          <form className="popup__form" onSubmit={handleSubmit}>
            <input className="popup__input" type="email" placeholder="Email" />
            <button className="popup__submit" type="submit">
              Submit
            </button>
            <p className="popup__disclaimer">
              By clicking “subscribe”. you agree to be subscribed to Cosmic
              Exodus newsletter according to our
              <span className="popup__span"> privacy policy</span>.
            </p>
          </form>
        </div>
      </div>
      {closePopup && <PopupPage />}
    </div>
  );
}

export default EmailPopup;
