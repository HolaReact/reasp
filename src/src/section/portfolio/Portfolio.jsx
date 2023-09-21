import React from 'react'
import "./portfolio.css"
import data from './data'
import {AiFillInstagram} from "react-icons/ai";
// import Portfolio from './Portfolio';
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <center><h4>GET in Touch</h4></center><hr/>

    <div className='container portfolio__container'>
    {
      data.map(({id,image,title,Youtube,link})=>{
        return(
          <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt={title} height={150} width={300}/>
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={Youtube} className='btn present'><span className='icon-you'><AiFillInstagram/></span></a>
        <a href={link} className='btn primary' target="_blank">Details</a>
        </div>

      </article>
        )
      })
    }
 
      
 
    </div>
    </section>
  )
}

export default Portfolio