import React from 'react'
import Catatan from '../Pages/Catatan'
import Arsip from '../Pages/Arsip'
import Details from '../Pages/Details'
import Add from '../Pages/Add'
import NotFound from '../Pages/NotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Catatan />}/>
            <Route exact path='/Arsip' element={<Arsip />}/>
            <Route exact path='/Details/:id' element={<Details />}/>
            <Route exact path='/New' element={<Add />}/>
            <Route exact path='/*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
