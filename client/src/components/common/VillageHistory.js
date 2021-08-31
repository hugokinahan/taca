import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Illustration from '../images/tp-map-finished.jpg'
import OrangeHall from './history/OrangeHall'
import CastleUpton from './history/CastleUpton'
import Mausoleum from './history/Mausoleum'


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
      <div className='illustration-container'>
        <h1>Village History</h1> 
        <img src={Illustration}/>
      </div>
      <div className="homepage-container">
        <div className="home-info-container">
          <div className='container-village'>
            <div className="village-info">
            

              {/* <h2> 🏗 👷‍♀️ SORRY - PAGE UNDER CONSTRUCTION 👷‍♂️ ⛏</h2> */}
              <div id='myDiv'>
                <h5>Click on the landmarks below and scroll down to read about their history 👇</h5>
                <ul className='history-list'>
                  <li><button className='number-list'>1</button> Masonic Hall</li>
                  <div>
                    <li onClick={handleMausoleumToggle}><button className='number-list' onClick={handleMausoleumToggle}>2</button> Templetown Mausoleum</li>
                  </div>
                  <div>
                    <li onClick={handleCastleToggle}><button className='number-list' onClick={handleCastleToggle}>3</button> Castle Upton (private)</li>

                  </div>
                  <li><button className='number-list'>4</button> Adam Yard (private)</li>
                  <li><button className='number-list'>5</button> Former RUC Station (private)</li>
                  <li><button className='number-list'>6</button> Cobbler&apos;s Row</li>
                  <li><button className='number-list'>7</button> Entrance to Castle Upton</li>
                  <li><button className='number-list'>8</button> St Patrick&apos;s Church of Ireland</li>
                  <div >
                    <li onClick={handleOrangeHallToggle}><button className='number-list' onClick={handleOrangeHallToggle}>9</button> Orange Hall</li>

                  </div>
                  <li><button className='number-list'>10</button> St. John&apos;s Parish Church</li>
                  <li><button className='number-list'>11</button> Railway Station (private)</li>
                  <li><button className='number-list'>12</button> Parish Hall</li>
                </ul>
              </div>
            </div>
            <div className='popup-text' >
              {showCastleText ? <CastleUpton /> : null || showOrangeHallText ? <OrangeHall /> : null || showMausoleumText ? <Mausoleum /> : null}
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