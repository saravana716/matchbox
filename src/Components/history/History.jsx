import React from "react";
import logo from "../../Assets/logo.jpg"
import "./History.css"
const History = () => {
  return (
    <div className="history">
      <div className="historyinner">
        <div className="historyleft">
          <h3>~ WELCOME TO ~</h3>
          <h1>THANGARAJ MATCH FACTORY</h1>
          <p>
          <span>THANGARAJ MATCH FACTORY</span> is a leading exporter of Incense & matchboxes. We
            supply a variety of incense which includes Raw incense, Black
            incense, Masala incense, Long stick incense, Candy incense, Dry
            flower incense, colour incense and Smudge incense based on our
            customers’ needs. As a result of our commitment to quality and
            dedicated services, we have gained a prominent image in
            international markets and regular customers as well. Our product
            range also includes safety matches such as kitchen matches,
            household matches, promotional matches, wax matches and barbeque
            matches. We deploy advanced techniques to offer tantalizing
            fragrances
          </p>
          <button>View More</button>
        </div>
        <div className="historyright">
            <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
