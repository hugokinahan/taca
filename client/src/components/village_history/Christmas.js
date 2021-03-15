import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import bigLunch from '../images/taca-big-lunch.jpg'

function Christmas() {


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
            <h1>Christmas Tree Lights</h1>
            <p>
            Templepatrick’s Christmas light up has been organised by TACA for many years now.  In 2018 - when the Council could no longer privide our tree - we sourced and planted our own at the Twelfth Milestone with kind permission of Spar.  So now we can use and decorate the same tree, as it grows older and ever taller ...
            </p>
            <p>
            The light up is a great way for the community to get together, to enjoy carols and a surprise visit by Santa. We are so lucky to be supported by local businesses - sponsoring the Yuletide refreshments amongst other things - and of course the Antrim and Newtownabbey Borough Council. 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Christmas