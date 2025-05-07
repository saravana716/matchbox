import React from "react";
import "./Info.css";
import logo from "../../Assets/matchbox.jpg"
const Info = () => {
  return (
    <div className="info">
      <div className="infotop"></div>
      <div className="infobottom"></div>
      <div className="infos">
        <div className="infocontent">
          <span>Infrastructure</span>
          <p>
            Spread over 5 acres, with a built up area of over 120,000 square
            feet, our factory has been designed keeping in mind the growth
            possibilities and future expansion. The robust infrastructure under
            our hood helps us deliver reliable solutions and keeps the unit
            ticking all-round the year. With state-of-the art machinery from
            reputed manufacturers like Arenco, Herring, Roller Simplex and
            Columbia, we are a class apart in understanding and delivering
            absolute value.
          </p>
          <button>View More</button>

        </div>
        <div className="cons">
            <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
