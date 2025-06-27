import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './style';
import github from '../images/github (1).png';
import linkedin from '../images/linkedin.png';
import insta from '../images/instagram.png';
import profilephoto from '../images/arjun2 (1).jpg';
import image from '../images/arjun_pic2-removebg-preview.png';

const Home = () => {
  const lines = [
    "Web Developer",
    "Java Programmer",
    "Tech Enthusiast"
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlank, setIsBlank] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];

    // Handle blank screen effect
    if (isBlank) {
      const blankTimer = setTimeout(() => {
        setIsBlank(false);   // Exit blank screen
      }, 500);                // Blank screen duration
      return () => clearTimeout(blankTimer);
    }

    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentLine.length) {
        // Typing characters
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Erasing characters
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentLine.length) {
        // Pause after typing, then start deleting
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else if (isDeleting && charIndex === 0) {
        // When erasing completes, show blank screen before next line
        setIsBlank(true);

        // Switch to next line after blank screen
        setTimeout(() => {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);  // Loop all 4 lines
        }, 500);  // Delay before switching to the next line
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex, isBlank, lines]);

  return (
    <Wrapper>
      {/* <div className='container'>
        <div className='profile'>
          <img src={profilephoto} alt="Profile" />
        </div>
        <div className='home-header'>
          <p>Hi There!</p>
          <p className='heading-name'>
            I'M
            <strong className='main-name'> ARJUN GAUTAM</strong>
          </p>
          <div>
            <div className='textWrapper'>
              {isBlank ? "" : lines[lineIndex].substring(0, charIndex)}
              <span className='cursor'>|</span>
            </div>
          </div>
        </div>
      </div>
      <div className='description'>
        <div className='intro'>
          <p className='heading'>LET ME <span>INTRODUCE</span> MYSELF</p>
          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
          <p>I am fluent in classics like Java, Javascript.</p>
          <p>My field of Interest's are building new Web Technologies and Products.</p>
        </div>
        <div className='image'>
          <img src={image} alt="Tech" />
        </div>
      </div>
      <div className='social-link'>
        <p className='social-heading'>FIND ME ON</p>
        <p>Feel free to <span>connect</span> with me</p>
        <div className='icon-div'>
          <a href="https://github.com/Arjun039Gautam"><img src={github} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/arjun-gautam-52a752283/"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/arjun._.gautam_/?hl=en"><img src={insta} alt="Instagram" /></a>
        </div>
      </div> */}
      <main className="hero">
        <div className="hero-image">
          <img src={image} alt="Tech" />
        </div>
        <div className="hero-text">
          <h1>Hi, I’m <br /><span>Arjun Gautam</span></h1>
          <h2>Frontend Developer | React Enthusiast</h2>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1n0hi0vwb-MS66bqUstdMxyBCYQ_H-vRO/view?usp=sharing" className="btn primary">Download Resume</a>
            <Link to="/project" className="btn outline">View Projects</Link>
          </div>
        </div>

        
      </main>
    </Wrapper>
  );
}

export default Home;
