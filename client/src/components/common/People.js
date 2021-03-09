import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import bigLunch from '../images/big-lunch.jpg'

function People() {

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className="home-info-container">
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
            <h1>Committee Members</h1>
            <p>Chairperson: B Cathcart</p>
            <p>Treasurer: C Douglas</p>
            <p>Secretary: C Douglas</p>
            <p>Head of Communication: D Johnston</p>
            <p>Press Secretary: C Michael</p>
            <p>Deputy Chair: B McAvoy</p>
            <p>Anna Kinahan</p>
            <p>R Sharma</p>
            <p>A McConnell</p>
            <p>Mr and Mrs Michaels</p>
            <h5>Supported by</h5>
            <p>Pam Cameron (MLA)</p>
            <p>Danny Kinahan</p>
            <p>Cllr Matthew Magill</p>
            <p>Paul Girvan</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default People