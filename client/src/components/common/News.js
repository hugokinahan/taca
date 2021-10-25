import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import tree from '../images/tree1.jpeg'
import plantingTree from '../images/planting-tree.jpeg'
import group from '../images/group-table.jpeg'
import laptops from '../images/laptops.jpeg'
import bill from '../images/bill.jpeg'
import walkingTourOne from '../images/walking-adam-yard-1.jpeg'
import walkingTourTwo from '../images/walking-adam-yard.jpeg'
import walkingTourThree from '../images/walking-castle-upton.jpeg'
import walkingTourFour from '../images/walking-tour-1.jpeg'
import walkingTourFive from '../images/walking-tour-two.jpeg'
import walkingTourSix from '../images/walking-tour.jpeg'
import walkingTourSeven from '../images/mausoleum-tour.jpeg'
import walkingTourEight from '../images/mausoleum-tour-1.jpeg'

function News() {

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
          <div className="homepage-info">
            <h1 className='headers'>News</h1>
            <h2>October 2021</h2>
            <div className='info-images' >
              <img src={walkingTourOne} />
              <img src={walkingTourTwo} />
              <img src={walkingTourThree} />
              <img src={walkingTourFour} />
              <img src={walkingTourFive} />
              <img src={walkingTourSix} />
              <img src={walkingTourSeven} />
              <img src={walkingTourEight} />
            </div>
            <p>
            In partnership with Templepatrick and District Historical Society and sponsored by Antrim and Newtownabbey Borough we held our first of two historical walking tours today finished off by snacks and tea courtesy of The Rabbit Hotel.
            </p>
            <h2>March 2021</h2>
            <div className='info-images' >
              <img src={laptops} />
            </div>
            <p>
            First batch of donated laptops ready to be collected by “Refreshed by Us”. This will go to children in our community who don’t have access to a laptop or any of the current government schemes. If you have a laptop to donate please fill in this form
            </p>
            <p><a href='https://forms.gle/TEngDzJa68AZzMwY8'>Click here to fill in form to donate a laptop</a></p>
            <h2>February 2021</h2>
            <div className='info-images' >
              <img src={plantingTree} />
              <img src={tree} />
              <img src={group} />
              <img src={bill} />
            </div>
            <p>
            We were honoured to plant a tree in memory of our Vice Chairman Bill McAvoy who passed away last October. Bill was a very popular and valued member of our community. Always the voice of reason bringing you back to earth with an honest opinion. Our “go to” person when we needed someone to be our Master of Ceremonies or to provide an interview. We miss him sorely and thank you to his lovely wife Rosie for allowing us to remember him in this way.  In the photos you will see Rosie standing by the Liquid Amber tree which will produce glorious colour and in the other photo taken at Colemans, Bill is front right helping us plan the Big Picnic!!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  
  )
}

export default News
