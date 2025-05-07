import React from "react";
import "./Mission.css"
import mission from "../../Assets/target.png"
import vision from "../../Assets/vision.png"
const Mission = () => {
  return (
    <div className="mission">
      <div className="mission1">
        <div className="mission2">
          <h1>OUR MISSION</h1>
          <div className="mission3">
            <span>
              <img src={mission} alt="" />
            </span>
            <p>
              Our mission is to empower businesses and communities by delivering
              innovative solutions that are efficient, eco-conscious, and
              tailored to modern challenges. We aim to lead with creativity and
              purpose, transforming industries through smart design and reliable
              performance.
            </p>
          </div>
        </div>
        <div className="mission2">
          <h1 title="">OUR VISION</h1>
          <div className="mission3">
          <p>
              We envision a future where technology and sustainability go hand
              in hand — a world where every product we create contributes to a
              smarter, greener planet. Through continuous innovation and a
              people-first approach, Matchbox Industries aspires to be a global
              leader in industrial and technological advancement.
            </p>
            <span className="io">
              <img src={vision} alt="" />
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
