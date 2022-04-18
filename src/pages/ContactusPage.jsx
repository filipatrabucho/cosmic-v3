import React from "react";
import "../component/style/contact.css";
import Banner from "../component/banner/banner";

function ContactusPage() {
  return (
    <>
      <Banner />
      <div className="contact">
        <h2 className="contact__title">Contact Us</h2>
        <div className="graphics__line"></div>
        <p className="contact__description">
          We really care about what you have to say, if you wish to reach out to
          us feel free to do so below!
        </p>
        <p className="contact__responsive">
        At Cosmic Exodus, accessible from cosmicexodus.finance, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Cosmic Exodus and how we use it.
        </p>
        <div className="contact__line-responsive"></div>
        <form action="" method="post">
          <input className="contact__input" type="text" placeholder="Name" />
          <input className="contact__input" type="email" placeholder="Email" />
          <textarea
            className="contact__message"
            type="text"
            placeholder="Message"
          />
          <div className="contact__flex">
          <p className="contact__info">
            By clicking “submit”. You agree to be subscribed to Cosmic Exodus
            newsletter according to our{" "}
            <a href="/privacypage">privacy policy</a>.
          </p>
          <button className="contact__submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactusPage;
