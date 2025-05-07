import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css';
import { Navigation } from 'swiper/modules';
import banner from "../../Assets/matchbox.jpg"
import fire from "../../Assets/fire.jpg"
const Banner = () => {
  return (
    <>
    <div className='Banner'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='Bannerimg'>
            <img src={banner} alt="" />
            <div className='bannercontent'>
                <h1><span>42 Years</span>Of Experience</h1>
                <h3>in Delivering Single Strike Safety Matches</h3>
                <button>Read More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Bannerimg'>
            <img src={banner} alt="" />
            <div className='bannercontent'>
                <h1><span>7 Box</span> Filling Machines</h1>
                <h3>2.5 Million Matches Per Day Production</h3>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='Bannerimg'>
            <img src={banner} alt="" />
            <div className='bannercontent'>
                <h1><span>Quality</span> Assurance</h1>
                <h3>Detailed & in depth inspection by Quality team at every process</h3>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={fire} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={fire} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
    </>
  )
}

export default Banner