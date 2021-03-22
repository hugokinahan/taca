import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

import tree from '../images/tree1.jpeg'
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