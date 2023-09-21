import React from 'react'
import Navbar from "./section/navbar/Navbar";
import Header from "./section/header/Header";
import About from "./section/about/About";
import Services from "./section/services/Services";
import Portfolio from "./section/portfolio/Portfolio";
import Testimonials from "./section/testimonials/Teastmonials";
import FAQs from "./section/faqs/FAQs";
import Contact from "./section/contact/Contact";
import Footer from "./section/footer/Footer";
import FloatingNav from "./section/floating-nav/Floatingnav";
const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <FAQs/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App