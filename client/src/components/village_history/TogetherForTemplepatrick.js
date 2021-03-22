import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

import tree from '../images/tree1.jpeg'

function TogetherForTemplepatrick() {


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
            <h1>Together For Templepatrick</h1>
            <p>
            As the Covid-19 pandemic dictated our movements, our dedicated team of volunteers came together to support our elderly friends and neighbours and those most vulnerable in Templepatrick by offering practical assistance such as: phone calls to make sure everything was okay; the supply of some essential provisions; connection with local foodbanks; the collection of prescriptions; and the picking up of shopping.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default TogetherForTemplepatrick