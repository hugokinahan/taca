import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

import tree from '../images/tree1.jpeg'
import christmas1 from '../images/christmas.jpeg'
import christmas2 from '../images/christmas-trees.jpeg'

function Christmas() {


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
            <h1>Christmas Tree Lights</h1>
            <div className='info-images'>
              <img src={christmas1} />
              <img src={christmas2}/>
            </div>
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