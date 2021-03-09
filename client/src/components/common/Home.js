import React from 'react'

import Footer from './Footer'
import Nav from './Nav'

import logo from '../images/taca.jpg'
import bigLunch from '../images/big-lunch.jpg'

function Home() {

  return (
    <section>
      <Nav />
      <div className="homepage-container" >
        <div className="logo-title">
          <img alt="logo" src={logo} />
          <h1>Templepatrick Action Community Association</h1>
          <h1>TACA</h1>
        </div>
        <div className='home-info-container'>
          <div className="welcome-card-home">
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
          <div className="homepage-info-content">
            <h5>
        PLEASE COME ALONG TO OUR MEETINGS</h5>
            <h5>NEW MEMBERS ARE MADE VERY WELCOME!
            </h5>
            <p>
        Templepatrick Action Community Association (TACA) was established in
        2005 as a direct reaction to the ongoing changes within Templepatrick
        village and the surrounding area. Our aim is to discuss with and
        inform the residents of Templepatrick and the surrounding area,
        without prejudice, of any issues that we believe may have an impact on
        the local community which in turn will promote a greater sense of
        community spirit and awareness.
            </p>

            <p>We are a small group and always welcome new members.</p>

            <p>
        This is a unique opportunity to improve things in Templepatrick for
        you and your family.
            </p>
            <div>
              <h2>Here are some of our previous initiatives...</h2>
              <div className='past-events'>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>The Big Lunch</p>
                </div>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>The Christmas Tree Light Up</p>
                </div>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>The Friendship Circle</p>
                </div>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>The Toilet Block</p>
                </div>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>Big Lottery NI Window Box Event</p>
                </div>
                <div className='event-card'>
                  <img src={bigLunch} />
                  <p>The Big Lunch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Home