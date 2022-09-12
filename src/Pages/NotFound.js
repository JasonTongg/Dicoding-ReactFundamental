import React from 'react'
import '../Styles/NotFound.css'
import SecondLayout from '../Layouts/SecondLayout'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <SecondLayout>
        <div className='notFoundContainer'>
            <h1>Page not Found....</h1>
            <Link to="/">Back to Home</Link>
        </div>
    </SecondLayout>
  )
}
