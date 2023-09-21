import React from 'react'
import aboutimage from "../../images/chad1.jpg"
import aboutimage1 from "../../images/chad2.jpg"
import aboutimage2 from "../../images/chad3.jpg"
import aboutimage3 from "../../images/chad4.jpg"
import aboutimage4 from "../../images/chad5.jpg"
import aboutimage5 from "../../images/chad6.jpg"
import bio from "../../images/atrangimain.jpg"
import{AiOutlineDownload} from "react-icons/ai"
import "./about.css"
import Card from '../../components/Card'
import data from './data'
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination ,Navigation,Scrollbar,A11y} from 'swiper';
import {AiFillDelete} from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const mob={
  height:"6cm",
  width:"4cm"

}

const desk={

}

const About = () => {
  return (
    <section id="#about">
      <div className='container about__container'>
        {/* <Swiper style={{width:"5cm"}}
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}> */}
        <div className='about__left'>
        {/* <SwiperSlide > */}

          <div className='about__portrait' style={isMobile ? mob : desk}>
            <img src={aboutimage} alt='aboutiamge' height={320} width={150}/>
            <img src={aboutimage1} alt='aboutiamge' height={320} width={150}/>
            <img src={aboutimage2} alt='aboutiamge' height={320} width={150}/>
            <img src={aboutimage3} alt='aboutiamge' height={320} width={150}/>
            <img src={aboutimage4} alt='aboutiamge' height={320} width={150}/>
            <img src={aboutimage5} alt='aboutiamge' height={320} width={150}/>
          </div>
          {/* </SwiperSlide> */}

   </div>
  {/* </Swiper> */}
     
        <br/>
        
      </div>
      <center className='about__right'>
          <h2>Chad Atrangi</h2>
          <div className='about__cards'>
          {
            data.map(item=>(
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
          </div>
          <a href={bio} download className='btn primary'>Download<AiOutlineDownload/></a>
        </center>
    </section>
  )
}

export default About
