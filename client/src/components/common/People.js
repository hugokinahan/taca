import React from 'react'
import Footer from './Footer'
import Nav from './Nav'


import ellie from '../images/ellie.jpg'
import donna from '../images/donna.jpeg'
import caroline from '../images/Caroline-Douglas.jpg'
import billy from '../images/billy.jpeg'

function People() {

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className="home-info-container">
          <div className="homepage-info">
            <h1>Committee Members</h1>
            <div className='people-grid'>
              <div>
                <p>Chairperson: Billy Cathcart</p>
                <img src={billy} />
              </div>
              <div>
                <p>Deputy Chair: Donna Johnson</p>
                <img src={donna} />
              </div>
              <div>
                <p>Treasurer: Caroline Douglas</p>
                <img src={caroline} />
              </div>
              <div>
                <p>Secretary: Ellie Francis</p>
                <img src={ellie} />
              </div>
            </div>
            {/* <p>Head of Communication: D Johnston</p>
            <p>Press Secretary: C Michael</p> */}
            <div className='vertical-groups'>
              <p>Anna Kinahan</p>
              <p>Trevor Michael</p>
              <p>Catherine Michael</p>
              <p>Diane Audley</p>
              <p>James Clarke</p>
              <p>Jay Burbank</p>
              <p>Eleanor Martin</p>
              <div className='support'>
                <h5>Supported by</h5>
                <p>Pam Cameron (MLA)</p>
                <p>Cllr Matthew Magill</p>
                <p>Paul Girvan</p>
                <p>Danny Kinahan</p>
              </div>
            </div>
            <div>
              <h5>TACA Constitution</h5>
              <p>
                <a href="http://btckstorage.blob.core.windows.net/site7025/Constitution%20May%202016%20[5128397].pdf">
                  TACA Constitution
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default People