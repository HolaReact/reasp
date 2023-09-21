import React from 'react'
import "./testimonials.css"
import data from './data'
import {  Pagination ,Navigation,Scrollbar,A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Teastmonials = () => {
  return (
    <section id='testimonials'>
    <h2>Memories</h2>

    <Swiper className='container testimonial__container'
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({avatar,name,comments},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
        <div className='clients__avatar'>
          <img src={avatar} alt="fan" height={200} width={300}/>
        </div>
        <h4 className='client__name'>{name}</h4>
        <small className='client__comments'>{comments} </small>
      </SwiperSlide>
          )
        })
      }
    </Swiper>

    </section>
  )
}

export default Teastmonials