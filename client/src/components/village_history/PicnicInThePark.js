import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import bigLunch from '../images/taca-big-lunch.jpg'

function PicnicInThePark() {


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
            <h1>Picnic In The Park</h1>
            <p>
            Wallace Park hosted its very own Picnic in the Park in June of 2019.  There was fun for all - games, music, bouncy castles, facepainting, crafts - and hot food and drink stalls. </p>
            <p>
            The afternoon will also see the official unveiling of The Friendship Circle, a community public arts project, created by Eleanor Wheeler with Templepatrick Primary School and TACA – as part of the ‘Love Living Here’ Arts initiative funded by Antrim and Newtownabbey Borough Council  and the Arts Council of Northern Ireland.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PicnicInThePark