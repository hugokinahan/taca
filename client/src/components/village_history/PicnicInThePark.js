import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

import tree from '../images/tree1.jpeg'
import picnic1 from '../images/picnicinpark.jpeg'
import picnic2 from '../images/picnic.jpeg'

function PicnicInThePark() {


  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
          <div className="welcome-card">
            <h4>What&apos;s new?</h4>
            <img alt="tree" src={tree} />
            <p>
              We were recently honoured to plant a tree in memory of our Vice-Chairman, Bill McAvoy, who passed away last October. He was a very popular and valued member of our community. 
            </p>
            <Link to='/news' >
              <p>Read more here.</p>
            </Link>
            <h4>Dates To Note</h4>
            <h6>Next Meeting</h6>
            <p>Via Zoom - contact us for dates.</p>
          </div>
          <div className="homepage-info">
            <h1>Picnic In The Park</h1>
            <div className='info-images'>
              <img src={picnic1} />
              <img src={picnic2}/>
            </div>
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