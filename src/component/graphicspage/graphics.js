
import React from 'react'
import Banner from '../banner/banner';
import Routemap from '../routemap/routemap';


import './graphicspage.css';

function GraphicsPage() {
  return (
    <div className="graphics">
        <Banner />
        <Routemap />

        <h2 className="graphics__title">Cosmic Graphics Pack</h2>
        <div className="graphics__container">
            <hr class="graphics__line" />


        </div>
    </div>
  )
}

export default GraphicsPage;
