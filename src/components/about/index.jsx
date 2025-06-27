import React from 'react'
import Wrapper from './style'
import list from '../images/point.png'
import image from '../images/arjun_pic2-removebg-preview.png'
import html from '../images/html-5.png'
import css from '../images/css-3 (1).png'
import js from '../images/js.png'
import react from '../images/react.png'
import java from '../images/java.png'

const About = () => {
  return (
    <Wrapper> 
      {/* <div className='container1'>
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
      </div> */}

      <main className="about">
        <div className="about-photo">
          <img src={image} alt="Arjun Gautam" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
           I’m Arjun, a Frontend Developer who loves creating modern web experiences, especially with React.js. I’m currently pursuing my B.Tech at the Global Institute of Technology. Apart from coding, I really enjoy sketching, playing football, and exploring new tech ideas.
          </p>

          <h2>Skills</h2>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Nodejs</span>
            <span>Git</span>
          </div>

          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2022 - 2026</span>
              <p>B.Tech in Computer Science & Engineering - Global Institute of Technology</p>
            </div>
            <div className="timeline-item">
              <span className="year">2021 - 2022</span>
              <p>12th Grade (RBSE) </p>
            </div>
            <div className="timeline-item">
              <span className="year">2019 - 2020</span>
              <p>10th Grade (RBSE)</p>
            </div>
          </div>

          <h2>Quick Facts</h2>
          <div className="facts">
            <div className="fact-card">📍 Jaipur, Rajasthan</div>
            <div className="fact-card">🎨 Sketching Lover</div>
            <div className="fact-card">⚽ Football Player</div>
            <div className="fact-card">💼 Open to Freelance Work</div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default About
