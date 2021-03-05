import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import bigLunch from '../images/big-lunch.jpg'

function News() {

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
          <div className="welcome-card">
            <h4>Welcome!</h4>
            <img alt="big-lunch" src={bigLunch} />
            <p>
        Templepatrick&apos;s Village Celebration sponsored by Antrim and
        Newtownabbey Borough Council and the Enkalon Fund!
            </p>
            <h4>Dates To Note</h4>
            <h6>Next Meeting</h6>
            <p>Zoom call 06/04/21</p>
          </div>
          <div className="homepage-info">
            <h1>News</h1>
            <h5>March 2020</h5>
            <p>
          All planned events are postponed and TACA is concentrating on
          supporting the volunteering of Together for Templepatrick. Please see
          our separate page for more details.
            </p>
            <p>
          Wow what a great Christmas Light-Up - sponsored by Eurospar
          (Templepatrick) and Antrim and Newtownabbey Borough Council the team
          sourced and lit up lights on our now growing Christmas tree which we
          purchased last year. I hope you think it&apos;s as great a job as we
          do!
            </p>
            <p>
          The Daffodil event at Coleman&apos;s was great fun. Thank you to
          Coleman&apos;s for their hospitality once again!
            </p>

            <p>
          We had a very enjoyable village celebration in Wallace Park on 23
          June. This was sponsored financially by Antrim and Newtownabbey
          Borough Council and The Enkalon Fund. However many others helped and a
          full list can be seen on our Facebook page.
            </p>

            <p>
          We also installed &apos;The Friendship Circle&apos; a collaborative
          artistic piece designed by Artist Eleanor Wheeler. The children in
          Templepatrick Primary School designed the tiles on the top of the
          circle and Crumlin Mens Shed helped with the digging and installation.
            </p>

            <p>We hope to do a time capsule and some landscaping in good time.</p>

            <h5>Last Year&apos;s News</h5>
            <p>
          Many villages in South Antrim are facing a big challenge this
          Christmas. Barring a very lucky few, cutbacks dictate that there will
          be no Christmas trees provided by the council this year - leaving the
          community groups the daunting task of sourcing, funding and organising
          the Christmas tree light up for themselves.
            </p>
            <p>
          Templepatrick Action Community Association (TACA) feels it has come up
          with an excellent, sustainable solution. ‘We’re going to plant a real
          tree beside the new parking area of the Twelfth Milestone with very
          kind permission of Eurospar who have been more than generous with both
          time and resources’ says group Secretary, Caroline Douglas. ‘It will
          be approximately 15 feet tall, and hopefully grow and flourish year on
          year!’
            </p>

            <p>
          Such an enterprise is not undertaken lightly. In addition to buying,
          transporting and planting the tree, the group has to see that the
          decoration and lighting is undertaken professionally to comply with
          health and safety regulations. This is where Belfast International
          Airport has come to thep rescue with a wonderful donation guaranteeing
          festive cheer near such an important hub.
            </p>
            <p>
          The Templepatrick Christmas light up will take place on Friday 30th
          November, beginning at 7.15 with the choir singing traditional carols
          around the tree. There will be coffee/tea and mulled wine for the
          grown ups and – most importantly – there is a strong rumour that an
          elderly gentleman with a long white beard and red cloak may turn up
          with a bag full of goodies for the children!
            </p>

            <p>
          Community is key in this event and once again, it is being
          fantastically supported by the Hilton Hotel the Templeton Hotel,
          McMurrays Butchers, Pollyanna, Mauds and Steamers. Thank you too to
          Antrim and Newtownabbey Borough Council for their grant towards the
          evening.
            </p>

            <p>
          We are working with the Council&apos;s Artist in Residence to bring
          something special to Wallace Park - a friendship circle. Most likely
          this will be done in two phases - first design with the pupils in the
          school and second installation (when we get the funding sorted)!
            </p>

            <h5>Old news....</h5>
            <p>
          Thanks to the Big Lottery NI for funding our Window Box event aimed at
          encouraging those in the Village to take part in village activities,
          and get to know each other better! We had a great night at
          Coleman&apos;s Garden Centre and we&apos;d love to do it again!
            </p>
            <p>
          Lots of things have been happening in Templepatrick .... we are busy
          planning for the Big Lunch on 3rd June 2018 - looking forward to
          seeing you there! On Saturday 12th May we organised a community clean
          up of the road from Dunadry to Templepatrick and cleared 14 bags of
          rubbish!
            </p>
            <p>
          We&apos;ve also managed to secure some Big Lottery funding and are
          holding a Window Box planting event at Coleman&apos;s Garden Centre on
          24 May. Booking essential! Thanks to Colemans - they&apos;re providing
          us with some tea/coffee and buns!
            </p>
            <p>
          TACA applied to the GROW South Antrim fund for funding towards a new
          toilet block in Wallace Park. The Council is matching the funding and
          carrying out the contract management for installation of new toilets
          for 2018.
            </p>
            <p>We have now completed the updated version of the Village Plan.</p>
            <p>
          We hope you noticed and liked the new benches dotted around
          Templepatrick - they look much better!
            </p>
            <p>
          We&apos;re all enjoying Wallace Park. Although dogs aren&apos;t
          allowed in the playpark you are now allowed dogs around the park ON
          THEIR LEAD. Unfortunately there have been instances of dogs being let
          loose or of dog fouling.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  
  )
}

export default News

{/* <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
          <div className="welcome-card">
            <h4>Welcome!</h4>
            <img alt="big-lunch" src={bigLunch} />
            <p>
          Templepatrick&apos;s Village Celebration sponsored by Antrim and
          Newtownabbey Borough Council and the Enkalon Fund!
            </p>
            <h4>Dates To Note</h4>
            <h6>Next Meeting</h6>
            <p>Zoom call 06/04/21</p>
          </div>
        </div>
        <div className="homepage-info">
          <h1>News</h1>
          <h5>March 2020</h5>
          <p>
          All planned events are postponed and TACA is concentrating on
          supporting the volunteering of Together for Templepatrick. Please see
          our separate page for more details.
          </p>
          <p>
          Wow what a great Christmas Light-Up - sponsored by Eurospar
          (Templepatrick) and Antrim and Newtownabbey Borough Council the team
          sourced and lit up lights on our now growing Christmas tree which we
          purchased last year. I hope you think it&apos;s as great a job as we
          do!
          </p>
          <p>
          The Daffodil event at Coleman&apos;s was great fun. Thank you to
          Coleman&apos;s for their hospitality once again!
          </p>

          <p>
          We had a very enjoyable village celebration in Wallace Park on 23
          June. This was sponsored financially by Antrim and Newtownabbey
          Borough Council and The Enkalon Fund. However many others helped and a
          full list can be seen on our Facebook page.
          </p>

          <p>
          We also installed &apos;The Friendship Circle&apos; a collaborative
          artistic piece designed by Artist Eleanor Wheeler. The children in
          Templepatrick Primary School designed the tiles on the top of the
          circle and Crumlin Mens Shed helped with the digging and installation.
          </p>

          <p>We hope to do a time capsule and some landscaping in good time.</p>

          <h5>Last Year&apos;s News</h5>
          <p>
          Many villages in South Antrim are facing a big challenge this
          Christmas. Barring a very lucky few, cutbacks dictate that there will
          be no Christmas trees provided by the council this year - leaving the
          community groups the daunting task of sourcing, funding and organising
          the Christmas tree light up for themselves.
          </p>
          <p>
          Templepatrick Action Community Association (TACA) feels it has come up
          with an excellent, sustainable solution. ‘We’re going to plant a real
          tree beside the new parking area of the Twelfth Milestone with very
          kind permission of Eurospar who have been more than generous with both
          time and resources’ says group Secretary, Caroline Douglas. ‘It will
          be approximately 15 feet tall, and hopefully grow and flourish year on
          year!’
          </p>

          <p>
          Such an enterprise is not undertaken lightly. In addition to buying,
          transporting and planting the tree, the group has to see that the
          decoration and lighting is undertaken professionally to comply with
          health and safety regulations. This is where Belfast International
          Airport has come to thep rescue with a wonderful donation guaranteeing
          festive cheer near such an important hub.
          </p>
          <p>
          The Templepatrick Christmas light up will take place on Friday 30th
          November, beginning at 7.15 with the choir singing traditional carols
          around the tree. There will be coffee/tea and mulled wine for the
          grown ups and – most importantly – there is a strong rumour that an
          elderly gentleman with a long white beard and red cloak may turn up
          with a bag full of goodies for the children!
          </p>

          <p>
          Community is key in this event and once again, it is being
          fantastically supported by the Hilton Hotel the Templeton Hotel,
          McMurrays Butchers, Pollyanna, Mauds and Steamers. Thank you too to
          Antrim and Newtownabbey Borough Council for their grant towards the
          evening.
          </p>

          <p>
          We are working with the Council&apos;s Artist in Residence to bring
          something special to Wallace Park - a friendship circle. Most likely
          this will be done in two phases - first design with the pupils in the
          school and second installation (when we get the funding sorted)!
          </p>

          <h5>Old news....</h5>
          <p>
          Thanks to the Big Lottery NI for funding our Window Box event aimed at
          encouraging those in the Village to take part in village activities,
          and get to know each other better! We had a great night at
          Coleman&apos;s Garden Centre and we&apos;d love to do it again!
          </p>
          <p>
          Lots of things have been happening in Templepatrick .... we are busy
          planning for the Big Lunch on 3rd June 2018 - looking forward to
          seeing you there! On Saturday 12th May we organised a community clean
          up of the road from Dunadry to Templepatrick and cleared 14 bags of
          rubbish!
          </p>
          <p>
          We&apos;ve also managed to secure some Big Lottery funding and are
          holding a Window Box planting event at Coleman&apos;s Garden Centre on
          24 May. Booking essential! Thanks to Colemans - they&apos;re providing
          us with some tea/coffee and buns!
          </p>
          <p>
          TACA applied to the GROW South Antrim fund for funding towards a new
          toilet block in Wallace Park. The Council is matching the funding and
          carrying out the contract management for installation of new toilets
          for 2018.
          </p>
          <p>We have now completed the updated version of the Village Plan.</p>
          <p>
          We hope you noticed and liked the new benches dotted around
          Templepatrick - they look much better!
          </p>
          <p>
          We&apos;re all enjoying Wallace Park. Although dogs aren&apos;t
          allowed in the playpark you are now allowed dogs around the park ON
          THEIR LEAD. Unfortunately there have been instances of dogs being let
          loose or of dog fouling.
          </p>
        </div>
      </div>
      <Footer />
    </section> */}