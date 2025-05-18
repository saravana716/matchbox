import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Map from "../Components/Map/Map";
const Contact = () => {
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
      <Navbar />
      <div className="ab">
        <h1>~ Contact ~</h1>
        <p>
          <span>Home </span>/ Contact
        </p>
      </div>
      <div className="contact">
        <div className="contactinner">
          <div className="contactbox">
            <span>
              <FaPhone className="ph" />
            </span>
            <div className="less">
              <h3>Phone (10am-5pm)</h3>
              <h5>+91 9878675676</h5>
            </div>
          </div>
          <div className="contactbox">
            <span>
              <IoMail className="ph" />
            </span>
            <div className="less">
              <h3>E-mail</h3>
              <h5>Sales@thangaraj.com</h5>
            </div>
          </div>
          <div className="contactbox">
            <span>
              <MdLocationOn className="ph" />
            </span>
            <div className="less">
              <h3>Location</h3>
              <h5>154/A M.Meenatchipuram,</h5>
              <h5>Anaikuttam,Sivakasi</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="contactpage">
        <div className="contactpageinner">
          <h1>Drop Us a Message</h1>
          <div className="form">
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
      <Map />
      <Footer />
    </>
  );
};

export default Contact;
