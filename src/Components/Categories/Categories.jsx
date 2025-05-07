import React from "react";
import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../Assets/fire.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Categories = () => {
  return (
    <div className="categories">
      <div className="categoriesinner">
        <div className="categoriestop">
          <h3>~ OUR CATEGORIES ~</h3>
          <h1>Navigate Our Categories</h1>
        </div>
        <div className="cateswipe">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="catecart">
                <img src={logo} alt="" />
                <div className="cartdetails">
                  <h1>SAFETY MATCHES</h1>
                  <p>
                    We offer safety matches that are in great demand in overseas
                    markets for the exotic designs of the boxes, utility and
                    high quality.
                  </p>
                </div>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
