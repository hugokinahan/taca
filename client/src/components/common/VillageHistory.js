import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

// import ReactMapGL from 'react-map-gl'


import tree from '../images/tree1.jpeg'

function VillageHistory() {

  // const [viewport, setViewport] = React.useState({
  //   latitude: 54.703308,
  //   longitude: -6.095570,
  //   zoom: 14,
  // })

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
          <div className="homepage-info">
            <h1>Village History</h1>
            {/* <div className="map-container">
              <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height="100%"
                width="100%"
                mapStyle="mapbox://styles/mapbox/satellite-v9"
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
              ></ReactMapGL>
            </div> */}
            <h2> 🏗 👷‍♀️ SORRY - PAGE UNDER CONSTRUCTION 👷‍♂️ ⛏</h2>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default VillageHistory