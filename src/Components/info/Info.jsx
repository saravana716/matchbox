import React from "react";
import "./Info.css";
import logo from "../../Assets/matchbox.jpg";
const Info = () => {
  return (
    <>
      <div className="info">
        <div className="infotop"></div>
        <div className="infobottom"></div>
        <div className="infos">
          <div className="infocontent">
            <span>Transition to Automation</span>
            <p>
              As the industry evolved and labor shortages emerged, we embraced
              modernization without losing our commitment to quality. In 2006,
              we launched our first semi-automatic unit – The Ratham Match
              Industries .
            </p>
            <p>
              In 2016, we reached a new milestone with the establishment of our
              fully automated manufacturing unit – Thangaraj Match Factory .
              Spread across 5 acres with a built-up area of 32,000 sq. ft., this
              factory has been designed for scalability and future growth,
              integrating state-of-the-art machinery and safety systems.
            </p>
            <button>View More</button>
          </div>
          <div className="cons">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="infotop"></div>
        <div className="infobottom"></div>
        <div className="infos">
          <div className="cons1">
            <img src={logo} alt="" />
          </div>
          <div className="infocontent">
            <span>Global Reach. Lasting Impact.</span>
            <p>
              Today, we proudly manufacture 25 million matchboxes every month,
              serving both domestic and international markets, with exports
              reaching several African countries. We use the finest quality raw
              materials, modern equipment, and a dedicated team of skilled
              laborers to ensure every matchbox upholds our legacy of
              excellence.
            </p>
            <button>View More</button>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="infotop"></div>
        <div className="infobottom"></div>
        <div className="infos">
          <div className="infocontent">
            <span>From Handmade to High-Tech</span>
            <p>
              Thangaraj Match Factory remains rooted in tradition while forging
              ahead with innovation—continuing to light lives, homes, and hearts
              with every single spark.
            </p>
            <button>View More</button>
          </div>
          <div className="cons">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
