import React from 'react'
import SearchBar from '../Components/SearchBar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "../Styles/MainLayout.css"
import PropTypes from 'prop-types'

export default function MainLayout(props) {

  return (
    <div className='container'>
        <SearchBar/>
        <Header active={props.active}/>
        {props.children}
        <Footer />
    </div>
  )
}

MainLayout.propTypes = {
    children: PropTypes.object.isRequired,
    active: PropTypes.arrayOf(PropTypes.bool).isRequired,
}
