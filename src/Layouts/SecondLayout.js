import React from 'react'
import Footer from '../Components/Footer'
import PropTypes from 'prop-types'
import Navbar from '../Components/Navbar'
import "../Styles/SecondContainer.css"

export default function SecondLayout(props) {
  return (
    <div className='secondContainer'>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </div>
  )
}

SecondLayout.propTypes = {
  children: PropTypes.object.isRequired,
}