import { Link } from 'react-router-dom';
import Wrapper from './style';
import image from '../images/arjun_pic2-removebg-preview.png';

const Home = () => {
  return (
    <Wrapper>
      <main className="hero">
        <div className="hero-image">
          <img src={image} alt="Tech" />
        </div>
        <div className="hero-text">
          <h1>Hi, I’m <br /><span>Arjun Gautam</span></h1>
          <h2>Frontend Developer | React Enthusiast</h2>
          <div className="buttons">
            <a href="https://drive.google.com/uc?export=download&id=1lSctmAT_p-mrYfecYcS9H8vlJpt3FSfq" className="btn primary">Download Resume</a>
            <Link to="/project" className="btn outline">View Projects</Link>
          </div>
        </div>

        
      </main>
    </Wrapper>
  );
}

export default Home;
