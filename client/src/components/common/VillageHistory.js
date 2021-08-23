import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import Illustration from '../images/tp-map.jpg'
import OrangeHall from './history/OrangeHall'
import CastleUpton from './history/CastleUpton'
import Mausoleum from './history/Mausoleum'

import tree from '../images/tree1.jpeg'

function VillageHistory() {

  // ! ORANGE HALL
  const [showOrangeHallText, setShowOrangeHallText] = React.useState(false)
  const handleOrangeHallToggle  = () => {
    setShowOrangeHallText(!showOrangeHallText)
  }

  // ! CASTLE UPTON
  const [showCastleText, setShowCastleText] = React.useState(false)
  const handleCastleToggle  = () => {
    setShowCastleText(!showCastleText)
  }

  // ! MAUSOLEUM
  const [showMausoleumText, setShowMausoleumText] = React.useState(false)
  const handleMausoleumToggle  = () => {
    setShowMausoleumText(!showMausoleumText)
  }

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className="home-info-container">
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
          <div className="village-info">
            <h1>Village History</h1>
            <div className='illustration-container'>
              <img src={Illustration}/>
            </div>
            

            {/* <h2> 🏗 👷‍♀️ SORRY - PAGE UNDER CONSTRUCTION 👷‍♂️ ⛏</h2> */}
            <div id='myDiv'>
              <h5>Click on the landmarks below and scroll down to read about their history 👇</h5>
              <ul className='history-list'>
                
                <div >
                  <li onClick={handleOrangeHallToggle}><button className='number-list' onClick={handleOrangeHallToggle}>1</button> Orange Hall</li>

                </div>
                <div>
                  <li onClick={handleMausoleumToggle}><button className='number-list' onClick={handleMausoleumToggle}>2</button> Templetown Mausoleum</li>
                </div>
                <div>
                  <li onClick={handleCastleToggle}><button className='number-list' onClick={handleCastleToggle}>3</button> Castle Upton (private)</li>

                </div>
                <li><button className='number-list'>4</button> Adam Yard (private)</li>
                <li><button className='number-list'>5</button> The Rabbit Hotel</li>
                <li><button className='number-list'>6</button> Cobbler&apos;s Row</li>
                <li><button className='number-list'>7</button> Former RUC Station (private)</li>
                <li><button className='number-list'>8</button> Non Subscribing Presbyterian Church</li>
                <li><button className='number-list'>9</button> Entrance to Castle Upton</li>
                <li><button className='number-list'>10</button> St. John&apos;s Parish Church</li>
                <li><button className='number-list'>11</button> Masonic Hall</li>
                <li><button className='number-list'>12</button> Former RIC Station (private)</li>
                <li><button className='number-list'>13</button> Railway Station (private)</li>
                <li><button className='number-list'>14</button> Parish Hall</li>
              </ul>
              <div className='popup-text' >
                {showCastleText ? <CastleUpton /> : null || showOrangeHallText ? <OrangeHall /> : null || showMausoleumText ? <Mausoleum /> : null}
                {/* {showOrangeHallText ? <OrangeHall /> : null}
                {showMausoleumText ? <Mausoleum /> : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default VillageHistory