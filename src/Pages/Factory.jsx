import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import videos from "../Assets/videos.mp4"
const Factory = () => {
  return (
    <>
      <Navbar />
      <div className="ab">
        <h1>~ Factory Process ~</h1>
        <p>
          <span>Home </span>/ Factory Process
        </p>
      </div>
      <div className="factory">
        <div className="factory2">
          <div className="video">
        <video src={videos} controls autoPlay></video>
          </div>
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
        
          <div className="video">
          <video src={videos} controls autoPlay></video>

          </div>
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
          <div className="video">
        <video src={videos} controls autoPlay></video>
            
          </div>
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
          <div className="video">
          <video src={videos} controls autoPlay></video>

          </div>
   
        </div>
        <div className="factory1">
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
          <div className="video">
          <video src={videos} controls autoPlay></video>

          </div>
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
          <div className="video">
          <video src={videos} controls autoPlay></video>

          </div>
          
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
          <div className="video">
          <video src={videos} controls autoPlay></video>

          </div>
          <div className="video">
            <h1>Brand Printing</h1>
            <p>
              Paper Board Sheets with proper GSM is tested and taken for
              printing the brand logo and design.Supreme quality ink is used to
              print the brand design in the outer box using imported printing
              machines.
            </p>
          </div>
       
        
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Factory;
