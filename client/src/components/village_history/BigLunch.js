import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import bigLunch from '../images/taca-big-lunch.jpg'

function BigLunch() {


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
            <h1>The Big Lunch</h1>
            <p>
            For many years TACA organised the Big Lunch at Castle Upton, which grew in numbers year on year as news of its reputation spread as a great community get together.   We were blessed with great sponsorship and good weather (except for one year - and still people poured in with smiles on their faces ready to enjoy a picnic even if an umbrella was occasionally needed!). It always promised a day of family fun:  picnics, bouncy castles, displays, facepainting, exhibitions, climbing wall, chipping competitions, children’s races … and so much more.
            </p>
            <p>
            However, this could not have been achieved without tremendous local support and assistance given by the Parkgate Community Group, and the ever present support of Grainne McCloskey of the Eden Project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default BigLunch