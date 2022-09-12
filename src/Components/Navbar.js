import React from 'react'
import "../Styles/Navbar.css"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className='navbarContainer'>
        <p onClick={() => navigate("/")}>NoteApp</p>
    </div>
  )
}
