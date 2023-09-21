import React from 'react'
import "./navbar.css"
import data from './data'
import logo from "../../images/logo.png"
import {IoIosColorPalette} from  "react-icons/io"
const Navbar = () => {
  return (
    <>
    <nav>
      <div className='container nav__container'>
      <a href="index.html" >
        <img src={logo} alt='logo' className='nav__logo'/>
      </a>
      <ul className='nav__menu'>
      {
        data.map(item=><li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }

      </ul>
      <button id='theme__icon'><IoIosColorPalette/></button>
      <div className='dropdown'>
      <div className='dropdown-content'>
        <a href='#'>home</a>
        <a href='#'>about</a>
        <a href='#'>ugujg</a>
        <a href='#'>home</a>
        <a href='#'>home</a>
      </div>
      </div>
      </div>

    </nav>

    <marquee>
      hi hggg
    </marquee>
    </>
  )
}

export default Navbar
