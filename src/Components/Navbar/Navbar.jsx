import React, { useState } from 'react'
import logo from "../../Assets/logo.jpg"
import fire from "../../Assets/match.png"
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
const Navbar = () => {
  const [op, setop] = useState(false)
  const [scroll, setscroll] = useState(false)
  function opendiv(params) {
    setop(true)
  }
  function closediv(params) {
    setop(false)
  }
  function movediv(params) {
    setscroll(!scroll)
  }
  return (
    <>
   <div className='na'>
   <div className='navtop'>
        <div className='topleft'>
            <p> <MdLocationOn className="icon"/>154/A M.Meenatchipuram,Anaikuttam,Sivakasi</p>
            <p> <FaPhone className="icon"/>(91) 9187657654</p>
            <p> <IoMail className="icon"/>thangammatchbox@gmail.com</p>
        </div>
        <div className='topright'>
       <span>
       <FaInstagramSquare className='logo'/>
       </span>
<span>
<FaYoutube className='logo'/>
</span>       <span>
<FaFacebookSquare className='logo'/>
</span>
        </div>
    </div>
    <div className='Navbar'>
       <div className='NavbarInner'>
       <div className='navleft'>
            <img src={logo} alt="" />
        </div>
        <ul className={scroll?'ul1':"ul"}>
           <Link to="/">
           <li>Home <img src={fire} alt="" />
            
            </li></Link>
           <Link to="/about">
           <li>About Us <img src={fire} alt="" />
            
            </li></Link>
           <Link to="/safty">
           <li>Safty Matches <img src={fire} alt="" />
            
            </li></Link>

            <Link to="/factory">
            <li>Factory Process <img src={fire} alt="" />
            
            </li></Link>
           <Link to="/gallery">
           <li>Gallery <img src={fire} alt="" />
            
            </li></Link>
            
           <Link to="/contact">
           <li>Contact Us <img src={fire} alt="" />
            
            </li></Link>
            <button onClick={opendiv}>Enquiry</button> 
                 </ul>
        <button onClick={opendiv}>Enquiry</button>  
        <GiHamburgerMenu onClick={movediv} className='menu'/>
         </div>     
        <div className={op?'slider1':"slider"}>
          <span><IoIosCloseCircle className='ui' onClick={closediv} /></span>
        <h1>Drop Us a  Message</h1>
          <div className='form2'>
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
   </div>
    </>
  )
}

export default Navbar