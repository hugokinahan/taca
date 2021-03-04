import React from 'react'
import Footer from './components/common/Footer'
import Nav from './components/common/Nav'

import logo from './components/images/taca.jpg'
import bigLunch from './components/images/big-lunch.jpg'

function App() {
  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className="logo-title">
          <img alt="logo" src={logo} />
          <h1>Welcome to Templepatrick Action Community Association (TACA)</h1>
        </div>
        <div className='home-info-container'>
          <div className="welcome-card">
            <h4>Welcome!</h4>
            <img alt="big-lunch" src={bigLunch} />
            <p>
            Templepatrick&apos;s Village Celebration sponsored by Antrim and
            Newtownabbey Borough Council and the Enkalon Fund!
            </p>
            <h4>Dates To Note</h4>
            <h6>Next Meeting</h6>
            <p>Zoom call 06/04/21</p>
          </div>
          <div className="homepage-info">
            <h1>Welcome to TACA</h1>
            <h5>
          PLEASE COME ALONG TO OUR MEETINGS - NEW MEMBERS MADE VERY WELCOME
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
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default App
