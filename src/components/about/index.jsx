import React from 'react'
import Wrapper from './style'
import list from '../images/point.png'
import image from '../images/download2.png'
import html from '../images/html-5.png'
import css from '../images/css-3 (1).png'
import js from '../images/js.png'
import react from '../images/react.png'
import java from '../images/java.png'

const About = () => {
  return (
    <Wrapper> 
      <div className='container1'>
        <div className='description'>
          <p className='heading'>Know Who <span>I'M</span></p>
          <p className='content'>
            Hi Everyone, I am <span>Arjun Gautam</span> from <span>Rajasthan, India.</span><br/>
            I am currently pursuing my B.tech from Global Institute of Technology.<br/><br/>
            Apart from coding, some other activities that I love to do!<br/>
          </p>
          <ul>
            <li><img src={list} alt="" />Sketching</li>
            <li><img src={list} alt="" />Playing Football</li>
            <li><img src={list} alt="" />Listening songs</li>
            <li><img src={list} alt="" />Keen interest is to explore nature</li>
          </ul>
        </div>
        <div className='image'>
          <img src={image} alt="" />
        </div>
      </div>
      <div className='container2'>
        <h1>
          Proffessional <strong>Skillset</strong>
        </h1>
        <div className='main-container'>
          <div><img src={html} alt="" /></div>
          <div><img src={css} alt="" /></div>
          <div><img src={js} alt="" /></div>
          <div><img src={react} alt="" /></div>
          <div><img src={java} alt="" /></div>
        </div>
      </div>
    </Wrapper>
  )
}

export default About
