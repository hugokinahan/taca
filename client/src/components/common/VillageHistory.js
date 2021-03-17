import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import ReactMapGL from 'react-map-gl'


import bigLunch from '../images/taca-big-lunch.jpg'

function VillageHistory() {

  const [viewport, setViewport] = React.useState({
    latitude: 54.703308,
    longitude: -6.095570,
    zoom: 14,
  })

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
            <h1>Village History</h1>
            <div className="map-container">
              <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height="100%"
                width="100%"
                mapStyle="mapbox://styles/mapbox/satellite-v9"
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
              ></ReactMapGL>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default VillageHistory