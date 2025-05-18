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
  
      const [message, setmessage] = useState("")
    const [names, setnames] = useState({
      fname: "",
      email: "",
      designation: "",
      phone: "",
      company: "",
      country: "",
      address: "",
      requirments: "",
    });
    const [hide, sethide] = useState({
      fname: false,
      email: false,
      designation: false,
      phone: false,
      company: false,
      country: false,
      address: false,
      requirments: false,
    });
  
    function getdata(event) {
      let names1 = event.target.name;
      let values1 = event.target.value;
      setnames({ ...names, [names1]: values1 });
      sethide({ ...hide, [names1]: false });
    }
    console.log(names);
    
    function submitdata(params) {
      if (names.fname=="") {
          sethide({...hide,fname:true})
      }
      else if(names.email==""){
          sethide({...hide,email:true})
      }
      else if(names.designation==""){
          sethide({...hide,designation:true})
      }
      else if(names.phone==""){
          sethide({...hide,phone:true})
      }
      else if(names.company==""){
          sethide({...hide,company:true})
      }
      else if(names.country==""){
          sethide({...hide,country:true})
      }
      else if(names.address==""){
          sethide({...hide,address:true})
      }
       else if(names.requirments==""){
          sethide({...hide,requirments:true})
      }
      else{
          setmessage("Submit Successfully")
      }
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
                <h3>{message}</h3>
            <div className="form1">
      <span>
                <input
                type="text"
                name="fname"
                placeholder="Your Name"
                onChange={getdata}
              />
{hide.fname&& 
              <p>Enter Your Name</p>
}  </span>           <span>
     <input
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={getdata}
              />
{hide.email && 
              <p>Enter Your Email</p>
}   </span>         </div>
            <div className="form1">
            <span>
                  <input type="text"
                name="designation"
               placeholder="Designation" onChange={getdata} />
{hide.designation && 
              <p>Enter Your Designation</p>
}
            </span>
              <span>
                <input type="text"
              name="phone" placeholder="Phone" onChange={getdata} />
{hide.phone && 
              <p>Enter Your Phone</p>
}   </span>         </div>
            <div className="form1">
             <span>
                 <input type="text"
              name="company" placeholder="Company" onChange={getdata} />
{hide.company && 
              <p>Enter Your company Name</p>
}
             </span>
             <span>
                 <input type="text"
              name="country"
              placeholder="Country" onChange={getdata} />
{hide.country && 
              <p>Enter Your Country</p>
}    </span>        </div>
            <div className="form1">
              <span>
                <input type="text"
              name="address"
              placeholder="Address" onChange={getdata} />
{hide.address &&
              <p>Enter Your Address</p>
}  </span>          </div>
            <div className="form1">
            <span className="ti">
                  <textarea
                id=""
                name="requirments"
                placeholder="Requirements"
                onChange={getdata}
              ></textarea>
              {hide.requirments &&
              <p className="pi">Enter Your Requirments</p>
}       
            </span>
            </div>
            <button onClick={submitdata}>SEND COMMENT</button>
          </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Navbar