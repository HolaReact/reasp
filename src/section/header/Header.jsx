import React from 'react'
import headerimage from "../../images/cbum.jpg"
import data from './data'
import "./header.css"
const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div >
          <img src={headerimage} alt='headerimage' className='header__profile'/>
        </div>
        <h3>SK rabada</h3>
        <p>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write</p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item=> <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer' >{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
