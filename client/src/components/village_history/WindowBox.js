import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

import tree from '../images/tree1.jpeg'
import WindowBox1 from '../images/taca-window-box-2.jpg'
import WindowBox2 from '../images/taca-window-box.jpeg'

function News() {

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
            <h1>Big Lottery NI Window Box Event</h1>
            <div className='info-images'>
              <img src={WindowBox1} />
              <img src={WindowBox2}/>
            </div>
            <p>
            Thanks to Coleman’s Garden Centre (and its fabulously helpful staff) for hosting Templepatrick Goes Green. 
            </p>
            <p>
            This event was funded by the Big Lottery NI and we thank them for their generosity. 
            </p>
            <p>
            Special thanks also to Mary Hamilton, Green Gym Project Officer, The Conservation Volunteers who showed us how to change our plastic bottles into decorations for our boxes. 
            </p>
            <p>
            This is just one of many joint TACA/Colemans events organised over the past few years and we look forward to many more!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  
  )
}

export default News
