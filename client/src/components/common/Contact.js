import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import { FaFacebook } from 'react-icons/fa'

// import useForm from '../../utils/useForm'
import tree from '../images/tree1.jpeg'


function Contact() {

  // const history = useHistory()
  // const [error, setError] = React.useState(false)
  // const { formdata, handleChange } = useForm({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await createMessage(formdata)
  //     const { data } = await getSingleEvent(id)
  //     formdata.text = ''
  //     e.target[5].value = ''
  //   } catch (err) {
  //     setErrors(err.response.data.errors)
  //   }
  // }

  // const handleFocus = () => {
  //   setError(false)
  // }

  // <form action="mailto:youraddr@domain.tld" method="GET">
  //   <input name="subject" type="text" />
  //   <textarea name="body"></textarea>
  //   <input type="submit" value="Send" />
  // </form>
  

  return (
    <section>
      <Nav />
      <div className="homepage-container">
        <div className='home-info-container'>
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
            <h1>Contact Us</h1>
            <hr></hr>
            <h3>Send us a message</h3>
            <p>If you have any queries or questions please don&apos;t hestitate to send us an email.</p>
            <a href='mailto:tacatalk@yahoo.co.uk' > <p>tacatalk@yahoo.co.uk</p>
            </a>
            <a href='mailto:tacatalk@yahoo.co.uk' >
              <button>Send Email</button>
            </a>
            <br></br>
            <hr></hr>
            <div>
              <h3>Like and follow TACA on Facebook</h3>
              <a href="https://www.facebook.com/TACATEMPLEPATRICK/?ref=page_internal" >
                <FaFacebook className="icon" />
              </a>
            </div>
            {/* <div className='message-forms'>
              <form action="mailto:youraddr@domain.tld" method="GET">
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
                  <label className="block-form">Message:</label> */}
            {/* <textarea
                    className="block-form"
                    placeholder="Type your message here..."
                    onChange={handleChange}
                    name="message"
                    value={formdata.message}
                    onFocus={handleFocus}
                  /> */}
            {/* <textarea name="body"></textarea>

                </div>
                {error && <p className="error-in-form">Sorry, the information you entered was incorrect</p>}
                <input type="submit" value="Send" /> */}
            {/* <button type='submit' onClick={handleSubmit} >Send</button> */}
            {/* </form> */}

            {/* </div> */}
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact