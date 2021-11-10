import '../../styles/Slider.scss';
import sliderImages from './SliderImages';


import React, { useState } from 'react'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, { EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay }  from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module


SwiperCore.use([EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay]);

function Slider() {
 
  const [controlledSwiper, setControlledSwiper] = useState<any>()
  return (
    <>
        <Swiper      
      controller={{ control: controlledSwiper}}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}            
      
      
      onSwiper={setControlledSwiper}      
      
    >     
      {
        sliderImages.map((item, index)=>{
          return (
            <SwiperSlide key={index} className="mySwiperSlide" >
            <div className="center mySliderImageHolder">
              <a href={ item.link}>
                <img src={ `/NEXT${item.image}`} alt="Slider" className="responsive-img" />
              </a>
            </div>
          </SwiperSlide>
          )
        })

      }

        
      </Swiper>
    </>
  )
}

export default Slider
