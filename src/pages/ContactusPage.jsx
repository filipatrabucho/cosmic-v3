import React from "react";
import "../component/style/contact.css";
import Banner from "../component/banner/banner";

function ContactusPage() {
  return (
    <>
      <Banner />
      <div className="contact">
        <h2 className="contact__title">Contact Us</h2>

        <div className="contact__line"></div>

        <p>
          We really care about what you have to say, if you wish to reach out to
          us feel free to do so below!
        </p>

        <form action="" method="post">
          <input className="contact__input" type="text" placeholder="Name" />
          <input className="contact__input" type="email" placeholder="Email" />
          <textarea
            className="contact__message"
            type="text"
            placeholder="Message"
          />
          <p className="contact__info">
            By clicking “submit”. You agree to be subscribed to Cosmic Exodus
            newsletter according to our{" "}
            <a href="/privacypage">privacy policy</a>.
          </p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactusPage;
