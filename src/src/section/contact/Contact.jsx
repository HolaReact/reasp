import React from 'react'
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {SiMessenger} from "react-icons/si"
import {RiWhatsappFill} from "react-icons/ri"
const Contact = () => {
  return (
    <section id='contact'>
   
    
    <h2>Contact us</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'> 
       <a href='mailto:santoshrabada01@gmail.com' target="_blank"><MdEmail className='contact__option-icon'/></a>
        <h4>Email</h4>        
        <h5>Atrangi@gmail.com</h5>
       
      </article>
      <article className='contact__option'>
        <a href='https://messenger.com' target="_blank"> <SiMessenger className='contact__option-icon'/></a>
        <h4>Massenger</h4>
        <h5>Atrangigang</h5>

      </article>
      <article className='contact__option'>
        <a href='https://api.whatsapp.com/send?phone=9078740841' target="_blank"><RiWhatsappFill className='contact__option-icon'/></a>
        <h4>What's App</h4>
        <h5>+91 9078740841</h5>
        
      </article>

      </div>
      {/* END OF THE CONTACT */}
      <form action=''>
        <input type="text" name="name" placeholder="Your Full name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name='message' id=''cols="30" rows="7" placeholder="Your Message" required/>
        <button type='submit' className='btn btn-light'>Send Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact