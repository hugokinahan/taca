import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import bigLunch from '../images/taca-big-lunch.jpg'

function FriendshipCircle() {


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
            <h1>The Friendship Circle</h1>
            <p>
            Have you seen the Friendship Circle in Wallace Park.  An iconic legacy project finalised in 2019 made possible through Live Here Love Here &apos;Artist in Residence Programme&apos; and the European Union&apos;s PEACE IV Programme, managed by the Special EU Programmes Body (SEUPB).
            </p>
            <p>
            The children of Templepatrick Primary School have designed the tiles on top of the friendship circle and TACA have managed its manufacturer and installation.
            </p>
            <p>
            Through this we worked with the Peace IV programme and had the pleasure of developing the project along with Ledcom and Crumlin Mens&apos; Shed.
            </p>
            <p>
            TACA have subsequently surrounded it with four wonderful park benches, the first two were kindly supplied by A&N Borough Council and the remaining two by a community grant scheme courtesy of Ulster Bank.  It now provides another much enjoy focal point to Wallace Park.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default FriendshipCircle