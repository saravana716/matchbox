import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import logo from "../Assets/matchbox.jpg"
import Footer from "../Components/Footer/Footer";
const Safty = () => {
    const [open, setopen] = useState("f1")
    function opendiv(event) {
        setopen(event)
    }
  return (
    <>
      <Navbar />
      <div className="ab">
        <h1>~ Safety Matches ~</h1>
        <p>
          <span>Home </span>/ Safty Matches
        </p>
      </div>
      <div className="abbtn">
        <div className="abbtn1">
          <button className={open=="f1"?"b1":"b2"} onClick={()=>opendiv("f1")}>Cardboard Safety Matches</button>
          <p></p>
          <button className={open=="f2"?"b1":"b2"} onClick={()=>opendiv("f2")}>Kitchen Safety Matches</button>
          <p></p>
          <button className={open=="f3"?"b1":"b2"} onClick={()=>opendiv("f3")}>Wax Safety Matches</button>
          <p></p>
          <button className={open=="f4"?"b1":"b2"} onClick={()=>opendiv("f4")}>Veneer Safety Matches</button>
        </div>
      </div>
     {open=="f3" && 
      <div className="board">
      <div className="board1">
        <div className="boardimg">
          <img src={logo} alt="" />
        </div>
        <div className="boardcontent">
          <h1>
            <span>Wax Safety</span> Matches Manufacturer
          </h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span> is a trusted Wax Safety Matches
            manufacturer, offering high-quality and reliable matches for both
            domestic and international markets. Our wax safety matches are
            designed for smooth ignition, enhanced moisture resistance, and
            long shelf life. As a leading manufacturer, we ensure that our
            matches are crafted using premium raw materials, ensuring superior
            performance in any climate.
          </p>
          <p>
            With our expertise, we cater to bulk buyers, retailers, and
            wholesalers worldwide, providing customized packaging solutions to
            meet their specific requirements. Our wax safety matches are ideal
            for both household and commercial use, offering a safe and
            convenient ignition solution.
          </p>
        </div>
      </div>
      <div className="board2">
        <h1>Why Choose <span>Thangaraj Match Factory</span> for Wax Safety Matches?</h1>
        <p>
          As a leading Wax Safety Matches supplier and exporter, Thangaraj Match Factory offers unmatched quality and service. Here’s
          why our customers choose us:
        </p>
        <ol>
          <li>.<span>Superior Quality</span>- Manufactured using high-grade raw materials for consistent ignition and safety.</li>
          <li>.<span>Moisture Resistant</span>- Coated with wax to ensure smooth lighting even in humid conditions.</li>
          <li>.<span>Customizable Packaging</span>- Available in various box sizes and branding options for wholesalers and retailers.</li>
          <li>.<span>Strict Quality Control</span>- Every batch undergoes rigorous testing to meet international safety standards.</li>
          <li>.<span>Eco-Friendly Production</span>- Manufactured with sustainable raw materials and minimal environmental impact.</li>
          <li>.<span>Competitive Pricing</span>- Bulk supply with cost-effective pricing and flexible order quantities.</li>
          <li>.<span>Global Reach</span>- We export to multiple countries, ensuring timely delivery and seamless logistics.</li>
        </ol>
      </div>
      <div className="board2">
        <h1><span>Wax Safety </span>Matches Specification</h1>
        <p>
        Our wax safety matches are manufactured using high-quality wood and wax coating to ensure durability and reliability. Key specifications include:

        </p>
        <ul>
          <li>.<span>Matchstick Material:</span> High-grade wood</li>
          <li>.<span>Coating:</span> Wax-dipped for enhanced moisture resistance</li>
          <li>.<span>Ignition: </span> Smooth and easy strike</li>
          <li>.<span>Box Material:</span> Duplex board with custom branding options</li>
          <li>.<span>Usage:</span> Household, commercial, camping, and emergency kits</li>
          <li>.<span>Quality Standards:</span> Compliance with international safety and manufacturing norms</li>
        </ul>
      </div>
    </div>}
    {open=="f1" && 
      <div className="board">
      <div className="board1">
        <div className="boardimg">
          <img src={logo} alt="" />
        </div>
        <div className="boardcontent">
          <h1>
            <span>Cardboard Safety</span> Matches Manufacturer
          </h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span> is a trusted Cardboard Safety Matches
            manufacturer, offering high-quality and reliable matches for both
            domestic and international markets. Our Cardboard Safety Matches are
            designed for smooth ignition, enhanced moisture resistance, and
            long shelf life. As a leading manufacturer, we ensure that our
            matches are crafted using premium raw materials, ensuring superior
            performance in any climate.
          </p>
          <p>
            With our expertise, we cater to bulk buyers, retailers, and
            wholesalers worldwide, providing customized packaging solutions to
            meet their specific requirements. Our Cardboard Safety Matches are ideal
            for both household and commercial use, offering a safe and
            convenient ignition solution.
          </p>
        </div>
      </div>
      <div className="board2">
        <h1>Why Choose <span>Thangaraj Match Factory</span> for Cardboard Safety Matches?</h1>
        <p>
          As a leading Cardboard Safety Matches supplier and exporter, Thangaraj Match Factory offers unmatched quality and service. Here’s
          why our customers choose us:
        </p>
        <ol>
          <li>.<span>Superior Quality</span>- Manufactured using high-grade raw materials for consistent ignition and safety.</li>
          <li>.<span>Moisture Resistant</span>- Coated with wax to ensure smooth lighting even in humid conditions.</li>
          <li>.<span>Customizable Packaging</span>- Available in various box sizes and branding options for wholesalers and retailers.</li>
          <li>.<span>Strict Quality Control</span>- Every batch undergoes rigorous testing to meet international safety standards.</li>
          <li>.<span>Eco-Friendly Production</span>- Manufactured with sustainable raw materials and minimal environmental impact.</li>
          <li>.<span>Competitive Pricing</span>- Bulk supply with cost-effective pricing and flexible order quantities.</li>
          <li>.<span>Global Reach</span>- We export to multiple countries, ensuring timely delivery and seamless logistics.</li>
        </ol>
      </div>
      <div className="board2">
        <h1><span>Cardboard Safety </span>Matches Specification</h1>
        <p>
        Our Cardboard Safety Matches are manufactured using high-quality wood and wax coating to ensure durability and reliability. Key specifications include:

        </p>
        <ul>
          <li>.<span>Matchstick Material:</span> High-grade wood</li>
          <li>.<span>Coating:</span> Wax-dipped for enhanced moisture resistance</li>
          <li>.<span>Ignition: </span> Smooth and easy strike</li>
          <li>.<span>Box Material:</span> Duplex board with custom branding options</li>
          <li>.<span>Usage:</span> Household, commercial, camping, and emergency kits</li>
          <li>.<span>Quality Standards:</span> Compliance with international safety and manufacturing norms</li>
        </ul>
      </div>
    </div>}
      {open=="f2" && 
      <div className="board">
      <div className="board1">
        <div className="boardimg">
          <img src={logo} alt="" />
        </div>
        <div className="boardcontent">
          <h1>
            <span>Kitchen Safety </span> Matches Manufacturer
          </h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span> is a trusted Kitchen Safety Matches
            manufacturer, offering high-quality and reliable matches for both
            domestic and international markets. Our Kitchen Safety Matches are
            designed for smooth ignition, enhanced moisture resistance, and
            long shelf life. As a leading manufacturer, we ensure that our
            matches are crafted using premium raw materials, ensuring superior
            performance in any climate.
          </p>
          <p>
            With our expertise, we cater to bulk buyers, retailers, and
            wholesalers worldwide, providing customized packaging solutions to
            meet their specific requirements. Our Kitchen Safety Matches are ideal
            for both household and commercial use, offering a safe and
            convenient ignition solution.
          </p>
        </div>
      </div>
      <div className="board2">
        <h1>Why Choose <span>Thangaraj Match Factory</span> for Kitchen Safety Matches?</h1>
        <p>
          As a leading Kitchen Safety Matches supplier and exporter, Thangaraj Match Factory offers unmatched quality and service. Here’s
          why our customers choose us:
        </p>
        <ol>
          <li>.<span>Superior Quality</span>- Manufactured using high-grade raw materials for consistent ignition and safety.</li>
          <li>.<span>Moisture Resistant</span>- Coated with wax to ensure smooth lighting even in humid conditions.</li>
          <li>.<span>Customizable Packaging</span>- Available in various box sizes and branding options for wholesalers and retailers.</li>
          <li>.<span>Strict Quality Control</span>- Every batch undergoes rigorous testing to meet international safety standards.</li>
          <li>.<span>Eco-Friendly Production</span>- Manufactured with sustainable raw materials and minimal environmental impact.</li>
          <li>.<span>Competitive Pricing</span>- Bulk supply with cost-effective pricing and flexible order quantities.</li>
          <li>.<span>Global Reach</span>- We export to multiple countries, ensuring timely delivery and seamless logistics.</li>
        </ol>
      </div>
      <div className="board2">
        <h1><span>Kitchen Safety  </span>Matches Specification</h1>
        <p>
        Our Kitchen Safety Matches are manufactured using high-quality wood and wax coating to ensure durability and reliability. Key specifications include:

        </p>
        <ul>
          <li>.<span>Matchstick Material:</span> High-grade wood</li>
          <li>.<span>Coating:</span> Wax-dipped for enhanced moisture resistance</li>
          <li>.<span>Ignition: </span> Smooth and easy strike</li>
          <li>.<span>Box Material:</span> Duplex board with custom branding options</li>
          <li>.<span>Usage:</span> Household, commercial, camping, and emergency kits</li>
          <li>.<span>Quality Standards:</span> Compliance with international safety and manufacturing norms</li>
        </ul>
      </div>
    </div>}
      {open=="f4" && 
      <div className="board">
      <div className="board1">
        <div className="boardimg">
          <img src={logo} alt="" />
        </div>
        <div className="boardcontent">
          <h1>
            <span>Veneer Safety </span> Matches Manufacturer
          </h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span> is a trusted Veneer Safety Matches
            manufacturer, offering high-quality and reliable matches for both
            domestic and international markets. Our Veneer Safety Matches are
            designed for smooth ignition, enhanced moisture resistance, and
            long shelf life. As a leading manufacturer, we ensure that our
            matches are crafted using premium raw materials, ensuring superior
            performance in any climate.
          </p>
          <p>
            With our expertise, we cater to bulk buyers, retailers, and
            wholesalers worldwide, providing customized packaging solutions to
            meet their specific requirements. Our Veneer Safety Matches are ideal
            for both household and commercial use, offering a safe and
            convenient ignition solution.
          </p>
        </div>
      </div>
      <div className="board2">
        <h1>Why Choose <span>Thangaraj Match Factory</span> forVeneer Safety Matches?</h1>
        <p>
          As a leading Veneer Safety Matches supplier and exporter, Thangaraj Match Factory offers unmatched quality and service. Here’s
          why our customers choose us:
        </p>
        <ol>
          <li>.<span>Superior Quality</span>- Manufactured using high-grade raw materials for consistent ignition and safety.</li>
          <li>.<span>Moisture Resistant</span>- Coated with wax to ensure smooth lighting even in humid conditions.</li>
          <li>.<span>Customizable Packaging</span>- Available in various box sizes and branding options for wholesalers and retailers.</li>
          <li>.<span>Strict Quality Control</span>- Every batch undergoes rigorous testing to meet international safety standards.</li>
          <li>.<span>Eco-Friendly Production</span>- Manufactured with sustainable raw materials and minimal environmental impact.</li>
          <li>.<span>Competitive Pricing</span>- Bulk supply with cost-effective pricing and flexible order quantities.</li>
          <li>.<span>Global Reach</span>- We export to multiple countries, ensuring timely delivery and seamless logistics.</li>
        </ol>
      </div>
      <div className="board2">
        <h1><span>Veneer Safety </span>Matches Specification</h1>
        <p>
        Our wax safety matches are manufactured using high-quality wood and wax coating to ensure durability and reliability. Key specifications include:

        </p>
        <ul>
          <li>.<span>Matchstick Material:</span> High-grade wood</li>
          <li>.<span>Coating:</span> Wax-dipped for enhanced moisture resistance</li>
          <li>.<span>Ignition: </span> Smooth and easy strike</li>
          <li>.<span>Box Material:</span> Duplex board with custom branding options</li>
          <li>.<span>Usage:</span> Household, commercial, camping, and emergency kits</li>
          <li>.<span>Quality Standards:</span> Compliance with international safety and manufacturing norms</li>
        </ul>
      </div>
    </div>}
      <Footer/>
    </>
  );
};

export default Safty;
