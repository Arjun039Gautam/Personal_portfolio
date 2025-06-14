import React from 'react'
import Wrapper from './style'
import { NavLink } from 'react-router-dom'
import logo from '../images/Screenshot_2025-04-01_004200-removebg-preview.png'

const Header = () => {
  return (
    <Wrapper> 
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>
            <NavLink to='/' activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to='/project' activeClassName="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to='/resume' activeClassName="active">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Header
