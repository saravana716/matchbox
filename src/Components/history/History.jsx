import React from "react";
import logo from "../../Assets/logo.jpg";
import "./History.css";
const History = () => {
  return (
    <div className="history">
      <div className="historyinner">
        <div className="historyleft">
          <h3>~ WELCOME TO ~</h3>
          <h1>THANGARAJ MATCH FACTORY</h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span> is a leading exporter of
            Incense & matchboxes. Founded with a mission to bring employment and
            ignite progress in rural Tamil Nadu, Thangaraj Match Factory stands
            today as one of the most respected names in the safety match
            industry.
          </p>
          <p>
            Our journey began in <span>1979</span>when{" "}
            <span>Shri M.T.M. Thangaraj</span> established Ravi Match Industries
            in the quiet village of Erachi. At a time when agriculture was the
            only livelihood, this humble factory brought meaningful employment
            and hope to the people of the region. His commitment to quality and
            community laid the foundation for a legacy.
          </p>
          <button>View More</button>
        </div>
        <div className="historyright">
          <img src={logo} alt="" />
        </div>
      </div>
      <h1 className="heads">Shri Thangaraj expanded operations:</h1>
         <div className='clients'>
        <div className='clients1'>
            <div className='clientbox'>
                <h1>1983</h1>
                <h4> Thangaraj Match Industries</h4>
            </div>
            <div className='clientbox'>
                <h1>1988</h1>
                <h4>Thiagu Match Industries
</h4>
            </div>
            <div className='clientbox'>
                <h1>1991</h1>
                <h4>Moorthy Match Industries
</h4>
            </div>
            <div className='clientbox'>
                <h1>2005</h1>
                <h4>Deepan Match Industries and Usha Match Industries
</h4>
            </div>
        </div>
    </div>
    </div>
  );
};

export default History;
