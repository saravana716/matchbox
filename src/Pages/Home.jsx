import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Swipers/Banner'
import History from '../Components/history/History'
import Categories from '../Components/Categories/Categories'
import Choose from '../Components/Choosing/Choose'
import Info from '../Components/info/Info'
import Clients from '../Components/Clients/Clients'
import Map from '../Components/Map/Map'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <History/>
    <Categories/>
    <Choose/>
    <Info/>
    <Clients/>
    <Map/>
    <Footer/>
    </>
  )
}

export default Home