import React, { useState } from 'react';
import Wrapper from './style';
import { NavLink } from 'react-router-dom';
import github from '../images/github (1).png';
import linkedin from '../images/linkedin.png';
import insta from '../images/instagram.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <nav>
        {/* Word Links (toggle in mobile only) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        <ul className={`word ${menuOpen ? 'show' : ''}`}>
          <li><NavLink to="/" activeClassName="active" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/project" activeClassName="active" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/certificates" activeClassName="active" onClick={() => setMenuOpen(false)}>Certificates</NavLink></li>
          <li><a href="mailto:arjungautam3007@gmail.com">Contact</a></li>
        </ul>ary

        {/* Social Icons – always visible */}
        <ul className='icon'>
          <li><a href="https://github.com/Arjun039Gautam"><img src={github} alt="GitHub" /></a></li>
          <li><a href="https://www.linkedin.com/in/arjun-gautam-52a752283/"><img src={linkedin} alt="LinkedIn" /></a></li>
          <li><a href="https://www.instagram.com/arjun._.gautam_/?hl=en"><img src={insta} alt="Instagram" /></a></li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
