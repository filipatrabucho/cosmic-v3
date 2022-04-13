
import React from 'react'
import Banner from '../banner/banner';
import Routemap from '../routemap/routemap';
import logo from '../COSMIC-EXODUS-FINAL 2.png';

import './graphicspage.css';

function GraphicsPage() {
  return (
    <div className="graphics">
        <Banner />
        <Routemap />

        <h2 className="graphics__title">Cosmic Graphics Pack</h2>
        <div className="graphics__container">
            <hr class="graphics__line" />

            <img src={logo} alt="logo" className="graphics__logo" />

        </div>
    </div>
  )
}

export default GraphicsPage;
