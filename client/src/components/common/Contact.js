import React from 'react'
// import { FacebookProvider, Page } from 'react-facebook'
import Footer from './Footer'
import Nav from './Nav'

// import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useForm'

import bigLunch from '../images/taca-big-lunch.jpg'

function Contact() {

  // const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // const handleSubmit = async event => {
  //   event.preventDefault()

  //   try {
  //     const { data } = await loginUser(formdata)
  //     setToken(data.token)
  //     history.push('/') //page to go to after logging in
  //   } catch (err) {
  //     setError(true)
  //   }
  // }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
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
            <h1>Contact Us</h1>
            <h3>Send us a message</h3>
            <p>If you have any queries or questions please don&apos;t hestitate to send us a message.</p>
            <div className='message-forms'>
              <div className='form-section'>
                <label className="block-form">Name:</label>
                <input
                  className="block-form"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                  value={formdata.name}
                  onFocus={handleFocus}
                />
              </div>
              <div className='form-section'>
                <label className="block-form">Email:</label>
                <input
                  className="block-form"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formdata.email}
                  onFocus={handleFocus}
                />
              </div>
              <div className='form-section'>
                <label className="block-form">Subject:</label>
                <input
                  className="block-form"
                  placeholder="Subject"
                  onChange={handleChange}
                  name="subject"
                  value={formdata.subject}
                  onFocus={handleFocus}
                />
              </div>
              <div className='form-section'>
                <label className="block-form">Message:</label>
                <textarea
                  className="block-form"
                  placeholder="Type your message here..."
                  onChange={handleChange}
                  name="message"
                  value={formdata.message}
                  onFocus={handleFocus}
                />
              </div>
              {error && <p className="error-in-form">Sorry, the information you entered was incorrect</p>}
              {/* <FacebookProvider appId="123456789">
              <Page href="https://www.facebook.com/TACATEMPLEPATRICK" tabs="timeline" />
            </FacebookProvider> */}
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact