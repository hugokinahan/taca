import React from 'react'
// import { FacebookProvider, Page } from 'react-facebook'
import Footer from './Footer'
import Nav from './Nav'

import bigLunch from '../images/taca-big-lunch.jpg'

function Contact() {

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
            <h1>Contact Us</h1>
            {/* <FacebookProvider appId="123456789">
              <Page href="https://www.facebook.com/TACATEMPLEPATRICK" tabs="timeline" />
            </FacebookProvider> */}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact