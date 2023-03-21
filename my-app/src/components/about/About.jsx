import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineLibraryAdd} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineBusinessCenter className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Network</h5>
              <small>100+</small>
            </article>

            <article className='about__card'>
              <MdOutlineLibraryAdd className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p className='about__paragraph1'>Hello my name is Tyrell Mercolino!</p>
<p className='about__paragraph'>I am a Software Developer currently working for Alaska Airlines.</p>
<p className='about__paragraph'> My previous job as a Maintenance Tech allowed me to network with people who were already developers. Through this I fell inlove with developing and began my journey into the tech field.
I aspire to be a Mobile Developer and connect with others in our community.</p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About