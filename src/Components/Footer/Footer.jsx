import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.jpg"
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer2">
          <img src={logo} alt="" />
          <h3>~ ABOUT US ~</h3>
          <p>
            Established in 1979 ,India THANGARAJ MATCH FACTORY has gained
            immense expertise in supplying & trading of Petroleum wax, safety
            match box, cardboard safety matches.
          </p>
          <h3>OPENING HOURS</h3>
          <h4>Monday to Saturday  : 
          <span>08:00 - 20:00</span>

          </h4>
        </div>
        <div className="footer2">
          <h3>IMPORTANT LINKS </h3>
          <div className="links">
            <h2>
              <span>
                <IoIosArrowForward />
              </span>
              Home
            </h2>
            <h2>
              <span>
                <IoIosArrowForward />
              </span>
              About Us
            </h2>
            <h2>
              <span>
                <IoIosArrowForward />
              </span>
              Product
            </h2>
            <h2>
              <span>
                <IoIosArrowForward />
              </span>
              Gallery
            </h2>
            <h2>
              <span>
                <IoIosArrowForward />
              </span>
              Contact Us
            </h2>
          </div>
        </div>
        <div className="footer2">
          <h3>CONTACT </h3>
          <div className="links1">
            <p> <MdLocationOn className="icon"/>154/A M.Meenatchipuram,Anaikuttam,Sivakasi</p>
                       <p> <FaPhone className="icon"/>(91) 9187657654</p>
                       <p> <IoMail className="icon"/>thangammatchbox@gmail.com</p>
                  
          </div>
          <h3 title=""> SOCIAL LINKS </h3>
          <div className="links2">
           <span>
                 <FaInstagramSquare className='logo'/>
                 </span>
          <span>
          <FaYoutube className='logo'/>
          </span>       <span>
          <FaFacebookSquare className='logo'/>
          </span>    </div>
        </div>
      </div>
      <div className="footerbot">
        <p>Copyright  2025 Dhanalakshmi Matches | Designed & Developed by onedot-final_white

</p>
      </div>
    </div>
  );
};

export default Footer;
