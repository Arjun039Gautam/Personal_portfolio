import React from 'react'
import Wrapper from './style'
import parking from '../images/parking-sign.png'
import shopping from '../images/mobile-shopping.png'
import calculator from '../images/calculator.png'
import parkifyIcon from '../images/parkifyIcon.png'
import mayoorIcon from '../images/mayoorIcon.png'

const Project = () => {

  const handleExternalNavigation = (url) => {
    window.location.href = url;  // Opens the link in the same tab
  }

  return (
    <Wrapper> 
      <h1>My Recent <strong>Works</strong></h1>
      <p className='sub-heading'>Here are few projects</p>
      <div className='main-container'>
        <div onClick={() => handleExternalNavigation('https://mayoor-web.vercel.app')} style={{ cursor: 'pointer' }}>
          <img src={mayoorIcon} alt="" className='mayoor'/>
          <p><strong>Mayoor+</strong></p>
          <p>Tech Stack: React.js, CSS<br /><br/>
            Currently working as part of the frontend team on Mayoor+, a web app for Mayoor School, focusing on building a user-friendly interface and enhancing the overall user experience.
          </p>
        </div>
        <div onClick={() => handleExternalNavigation('https://parkify-frontend-eta.vercel.app/')} style={{ cursor: 'pointer' }}>
          <img src={parkifyIcon} alt="" className='parkify'/>
          <p><strong>Parkify : A Parking Web App</strong></p>
          <p>Tech Stack: MERN<br /><br/>
            This is a smart parking slot booking system.
            It allows users to register their vehicle, select pass types (daily/monthly/yearly), and book available slots.
            A digital receipt is generated after booking with a downloadable option.
            The UI is modern and responsive, ensuring a smooth user experience.
          </p>
        </div>
        <div onClick={() => handleExternalNavigation('https://arjun039gautam.github.io/College_Parking_System/')} style={{ cursor: 'pointer' }}>
          <img src={parking} alt="" />
          <p><strong>College Parking System</strong></p>
          <p>Tech Stack: HTML, CSS, JavaScript<br /><br/>
            Developed a web-based system for generating daily, monthly, and annual parking passes with an intuitive frontend interface.
          </p>
        </div>
        <div>
          <img src={shopping} alt="" />
          <p><strong>ShopApp</strong></p>
          <p>Tech Stack: React.js, CSS<br/><br/>
            Created a shopping app with login/signup authentication and product add/remove features.
          </p>
        </div>
        <div onClick={() => handleExternalNavigation('https://arjun039gautam.github.io/Calculator/')} style={{ cursor: 'pointer' }}>
          <img src={calculator} alt="" />
          <p><strong>Calculator</strong></p>
          <p>Tech Stack: HTML, CSS, JavaScript<br /><br/>
            It performs basic arithmetic operations with a clean UI and smooth button interactions
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Project
