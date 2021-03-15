import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import bigLunch from '../images/taca-big-lunch.jpg'
import toiletBlock from '../images/toilet-block.jpeg'
import toiletPlaque from '../images/toilet-plaque.jpeg'

function ToiletBlock() {


  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
          <div className="welcome-card">
            <h4>What&apos;s new?</h4>
            <img alt="big-lunch" src={bigLunch} />
            <p>
          Templepatrick&apos;s Village Celebration sponsored by Antrim and
          Newtownabbey Borough Council and the Enkalon Fund!
            </p>
            <h4>Dates To Note</h4>
            <h6>Next Meeting</h6>
            <p>Via Zoom - contact us for dates.</p>
          </div>
          <div className="homepage-info">
            <h1>Wallace Park Toilet Block</h1>
            <div className='info-images'>
              <img src={toiletBlock} />
              <img src={toiletPlaque}/>
            </div>
            <p>
            Back in 2018 TACA applied to the GROW South Antrim fund for funding towards a new toilet block in Wallace Park.  The Council is matched the funding and carried out the contract management.  Needless to say it has been much needed and welcome addition to the park!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ToiletBlock