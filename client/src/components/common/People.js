import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function People() {

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <h1>Committee Members</h1>
        <p>Chairperson: B Cathcart</p>
        <p>Treasurer: C Douglas</p>
        <p>Secretary: C Douglas</p>
        <p>Head of Communication: D Johnston</p>
        <p>Press Secretary: C Michael</p>
        <p>Deputy Chair: B McAvoy</p>
        <p>Anna Kinahan</p>
        <p>R Sharma</p>
        <p>A McConnell</p>
        <p>Mr and Mrs Michaels</p>
        <h5>Supported by</h5>
        <p>Pam Cameron (MLA)</p>
        <p>Danny Kinahan</p>
        <p>Cllr Matthew Magill</p>
        <p>Paul Girvan</p>
      </div>
      <Footer />
    </section>
  )
}

export default People