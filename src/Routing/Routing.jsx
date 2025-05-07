import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Safty from '../Pages/Safty'
import Factory from '../Pages/Factory'
import Gallery from '../Pages/Gallery'
import Contact from '../Pages/Contact'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/safty' element={<Safty/>}/>
        <Route path='/factory' element={<Factory/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing