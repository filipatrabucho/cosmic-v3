import React from 'react';
import logo from '../../assets/LogoCosmic-Exodus 1.svg';
import everywhere from '../../assets/Logo-_Everywhere_ 1.png';
import {AiOutlineClose} from 'react-icons/ai';
import cosmic from '../../assets/Cosmis Exodus® _ 2022.png';
import linktree from '../../assets/linktree-1 1.png';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__line"></div>
        <div className="footer__brands">
            <img src={logo} alt="logo" className="footer__logo" />
            <div className="footer__icon">
                <AiOutlineClose className="footer__iconx" onClick={()=>console.log("click")}/>
            </div>
            <img src={everywhere} alt="brand" className="footer__brand" />
        </div>
        
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="/" >Contact Us</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">Faq</a>
            </li>
            <li className="footer__item">
              <a className="footer__link-active" href="/">Cosmic Graphics Pack</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">Recruting</a>
            </li>
            <li className="footer__item">
              <a className="footer__link-others" href="/">Audit</a>
            </li>
            <li className="footer__item">
              <a className="footer__link-others" href="/">How To Start</a>
            </li>
            <li className="footer__item">
              <a className="footer__link-others" href="/">Dao</a>
            </li>
          </ul>

          <div className="footer__cosmicexodus">
            <img src={cosmic} alt="logo" className="footer__cosmicsesodus2022" />
            <img src={linktree} alt="logo" className="footer__linktree" />
          </div>
        </div>
  
  );
};

export default Footer;