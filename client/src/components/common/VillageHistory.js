import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Illustration from '../images/tp-map-finished.jpg'
import OrangeHall from './history/OrangeHall'
import CastleUpton from './history/CastleUpton'
import Mausoleum from './history/Mausoleum'
import ParishHall from './history/ParishHall'
import RailwayStation from './history/RailwayStation'
import MasonicHall from './history/MasonicHall'
import StPatricks from './history/StPatricks'
import PresbyterianChurch from './history/PresbyterianChurch'

function VillageHistory() {

  // ! PRESBYTERIAN CHURCH
  const [showPresbyterianChurchText, setShowPresbyterianChurchText] = React.useState(false)
  const handlePresbyterianChurchToggle  = () => {
    setShowPresbyterianChurchText(!showPresbyterianChurchText)
  }

  // ! ST PATRICKS
  const [showStPatricksText, setShowStPatricksText] = React.useState(false)
  const handleStPatricksToggle  = () => {
    setShowStPatricksText(!showStPatricksText)
  }

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

  // ! PARISH HALL
  const [showParishHallText, setShowParishHallText] = React.useState(false)
  const handleParishHallToggle  = () => {
    setShowParishHallText(!showParishHallText)
  }

  // ! RAILWAY STATION
  const [showRailwayStationText, setShowRailwayStationText] = React.useState(false)
  const handleRailwayStationToggle  = () => {
    setShowRailwayStationText(!showRailwayStationText)
  }

  // ! MASONIC HALL
  const [showMasonicHallText, setShowMasonicHallText] = React.useState(false)
  const handleMasonicHallToggle  = () => {
    setShowMasonicHallText(!showMasonicHallText)
  }

  return (
    <section>
      <Nav />
      <div className="illustration-container">
        <h1>Village History</h1>
        <img src={Illustration} />
      </div>
      <div className="homepage-container">
        <div className="home-info-container">
          <div className="container-village">
            <div className="village-info">
              {/* <h2> 🏗 👷‍♀️ SORRY - PAGE UNDER CONSTRUCTION 👷‍♂️ ⛏</h2> */}
              <div id="myDiv">
                <h4>
                  Click on the landmarks below to show history. Click again to
                  hide. 👇
                </h4>
                <ul className="history-list">
                  <div>
                    <li onClick={handleOrangeHallToggle}>
                      <button
                        className="number-list"
                        onClick={handleOrangeHallToggle}
                      >
                        1
                      </button> War Memorial Orange Hall
                    </li>
                  </div>
                  <div>
                    <li onClick={handleMausoleumToggle}>
                      <button
                        className="number-list"
                        onClick={handleMausoleumToggle}
                      >
                        2
                      </button> Templetown Mausoleum
                    </li>
                  </div>
                  <li>
                    <button className="number-list">3</button> Adam Yard
                    (private)
                  </li>
                  <div>
                    <li onClick={handleCastleToggle}>
                      <button
                        className="number-list"
                        onClick={handleCastleToggle}
                      >
                        4
                      </button> Castle Upton (private)
                    </li>
                  </div>
                  <div>
                    <li onClick={handlePresbyterianChurchToggle}>
                      <button
                        className="number-list"
                        onClick={handlePresbyterianChurchToggle}
                      >
                        5
                      </button> Old Presbyterian Church (Non-Subscribing)
                    </li>
                  </div>
                  <li>
                    <button className="number-list">6</button> Former RUC
                    Station
                  </li>
                  <li>
                    <button className="number-list">7</button> Gate Lodge to
                    Castle Upton
                  </li>
                  <div>
                    <li onClick={handleStPatricksToggle}>
                      <button
                        className="number-list"
                        onClick={handleStPatricksToggle}
                      >
                        8
                      </button> St Patrick&apos;s Church of Ireland Parish Church
                    </li>
                  </div>
                  <div>
                    <li onClick={handleMasonicHallToggle}>
                      <button
                        className="number-list"
                        onClick={handleMasonicHallToggle}
                      >
                        9
                      </button> Masonic Hall
                    </li>
                  </div>
                  <li>
                    <button className="number-list">10</button> Former Royal
                    Irish Constabulary Station
                  </li>
                  <div>
                    <li onClick={handleRailwayStationToggle}>
                      <button
                        className="number-list"
                        onClick={handleRailwayStationToggle}
                      >
                        11
                      </button> Former Railway Station
                    </li>
                  </div>
                  <div>
                    <li onClick={handleParishHallToggle}>
                      <button
                        className="number-list"
                        onClick={handleParishHallToggle}
                      >
                        12
                      </button> Parish Hall / Old School House
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="popup-text">
              {showParishHallText ? (
                <ParishHall />
              ) : null || showRailwayStationText ? (
                <RailwayStation />
              ) : null || showMasonicHallText ? (
                <MasonicHall />
              ) : null || showStPatricksText ? (
                <StPatricks />
              ) : null || showPresbyterianChurchText ? (
                <PresbyterianChurch />
              ) : null || showCastleText ? (
                <CastleUpton />
              ) : null || showOrangeHallText ? (
                <OrangeHall />
              ) : null || showMausoleumText ? (
                <Mausoleum />
              ) : null}
              {/* {showOrangeHallText ? <OrangeHall /> : null}
                {showMausoleumText ? <Mausoleum /> : null} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default VillageHistory