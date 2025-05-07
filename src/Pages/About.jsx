import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import History from '../Components/history/History'
import Abbanner from '../Components/abbanner/Abbanner'
import Mission from '../Components/mission/Mission'
import Footer from '../Components/Footer/Footer'
import Info from '../Components/info/Info'
import Clients from '../Components/Clients/Clients'

const About = () => {
  return (
    <>
    <Navbar/>
    <Abbanner/>
    <History/>
    <Clients/>
    <Mission/>

    <Footer/>
    </>
  )
}

export default About