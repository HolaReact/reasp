import React from 'react'
import aboutimage from "../../images/cbum1.jpg"
import aboutimage1 from "../../images/cbum2.jpg"
import bio from "../../images/Resume[54].pdf"
import{AiOutlineDownload} from "react-icons/ai"
import "./about.css"
import Card from '../../components/Card'
import data from './data'
const About = () => {
  return (
    <section id="#about">
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={aboutimage} alt='aboutiamge'/>
            <img src={aboutimage1} alt='aboutiamge'/>
          </div>
        </div>
        <div className='about__right'>
          <h2>ABout Me</h2>
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
          <p>Growing up, bodybuilding was only a hobby for Bumstead.[7] Chris played many sports, ranging from soccer to baseball, basketball, and ice hockey. This developed Bumstead's love for the gym, as he got into weightlifting his freshman year of high school. </p>
          <p>Christopher Adam Bumstead is a Canadian IFBB professional bodybuilder. Bumstead is the reigning Mr. Olympia Classic Physique winner, having won the competition in 2019, 2020, 2021 and 2022</p>
          <a href={bio} download className='btn primary'>Download<AiOutlineDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About
