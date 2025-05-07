import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Map from '../Components/Map/Map';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="ab">
        <h1>~ Contact ~</h1>
        <p>
          <span>Home </span>/ Contact
        </p>
      </div>
      <div className='contact'>
        <div className='contactinner'>
            <div className='contactbox'>
                <span><FaPhone className='ph'/></span>
                <div className='less'>
                    <h3>Phone (10am-5pm)</h3>
                    <h5>+91 9878675676</h5>
                </div>
            </div>
            <div className='contactbox'>
                <span><IoMail className='ph'/></span>
                <div className='less'>
                    <h3>E-mail</h3>
                    <h5>Sales@thangaraj.com</h5>
                </div>
            </div>
            <div className='contactbox'>
                <span><MdLocationOn className='ph'/></span>
                <div className='less'>
                    <h3>Location</h3>
                    <h5>154/A M.Meenatchipuram,</h5>
                    <h5>Anaikuttam,Sivakasi</h5>
                </div>
            </div>
        </div>
      </div>
      <div className='contactpage'>
        <div className='contactpageinner'>
            <h1>Drop Us a  Message</h1>
            <div className='form'>
                <div className='form1'>
                    <input type="text" placeholder='Your Name'/>
                    <input type="text" placeholder='Email Address'/>
                </div>
                <div className='form1'>
                    <input type="text" placeholder='Designation'/>
                    <input type="text" placeholder='Phone'/>
                </div>
                <div className='form1'>
                    <input type="text" placeholder='Company'/>
                    <input type="text" placeholder='Country'/>
                </div>
                <div className='form1'>
                    <input type="text" placeholder='Address'/>
                </div>
                <div className='form1'>
                <textarea name="" id="" placeholder='Requirements'></textarea>

                </div>
                <button>SEND COMMENT</button>

            </div>
        </div>
      </div>
      <Map/>
      <Footer/>
    </>
  )
}

export default Contact