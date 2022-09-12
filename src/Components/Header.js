import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Header({active}) {
  return (
    <div className='headerContainer'>
        <Link to="/" className={active[0] ? 'active' : null}>Catatan</Link>
        <Link to="/Arsip" className={active[1] ? 'active' : null}>Arsip</Link>
    </div>
  )
}

Header.propTypes = {
    active: PropTypes.arrayOf(PropTypes.bool).isRequired,
}
