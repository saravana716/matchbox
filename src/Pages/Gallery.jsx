import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import logo from "../Assets/b1.jpg"
const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className="ab">
        <h1>~ Gallery ~</h1>
        <p>
          <span>Home </span>/ Gallery
        </p>
      </div>
      <div className='gallery'>
        <div className='galleryinner'>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>

            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>

            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>

            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>

            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
            <div className='galleryimg'>
                <img src={logo} alt="" />
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Gallery