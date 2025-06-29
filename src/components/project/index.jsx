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
        <div>
          <img src={mayoorIcon} alt="Mayoor+" className="mayoor" />
          <p><strong>Mayoor+</strong></p>
          <p>
            <em>Tech Stack: React.js, CSS</em><br /><br />
            A full-featured outcome-based learning web application developed for educational institutions. As a frontend team member, I contributed to building intuitive UI components for assessment entry, automated learning outcome calculation, performance tracking, and dynamic report generation. Teachers input students' assessment marks, and the system calculates learning outcomes, maps them to program outcomes, and visualizes student progress.
            <br /><br />
            Key features include: 
            student-wise mark entry, real-time outcome computation, multi-level reporting, and admin dashboards.
          </p>
          <a
            href="https://mayoor-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 Live Preview
          </a>
          <a
            href="https://github.com/Gungundua/Mayoor-FrontEnd.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository
          </a>
        </div>

        <div>
          <img src={parkifyIcon} alt="Parkify App" className="parkify" />
          <p><strong>Parkify</strong></p>
          <p>
            <em>Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)</em><br /><br />
            A full-stack parking slot management system developed as a personal project. I designed and implemented the complete architecture with three separate user flows: <strong>Admin</strong>, <strong>User</strong>, and <strong>Guest</strong>. Authenticated users can register, book parking slots, and access their booking history. Guests can also book slots without signing up, but with limited access. The admin panel provides slot management, user monitoring, and booking oversight.
            <br /><br />
            Features include: 
            real-time slot availability, multi-role authentication, secure bookings, and .png receipt generation.
          </p>
          <a
            href="https://parkify-frontend-eta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 Live Preview
          </a>
          <a
            href="https://github.com/Arjun039Gautam/Parkify_frontend.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository (Frontend)
          </a>
          <a
            href="https://github.com/Arjun039Gautam/Parkify_backend.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository (Backend)
          </a>
        </div>

        {/* <div onClick={() => handleExternalNavigation('https://arjun039gautam.github.io/College_Parking_System/')}>
          <img src={parking} alt="College Parking" />
          <p><strong>College Parking System</strong></p>
          <p>
            <em>Tech Stack: HTML, CSS, JavaScript</em><br /><br />
            Lightweight frontend-based solution for generating digital parking passes with validation logic and minimal UI.
          </p>
          <a
            href="https://github.com/arjun039gautam/parkify-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository
          </a>
        </div>

        <div>
          <img src={shopping} alt="ShopApp" />
          <p><strong>ShopApp (E-Commerce UI)</strong></p>
          <p>
            <em>Tech Stack: React.js, CSS</em><br /><br />
            A sleek, component-driven e-commerce UI with authentication flow, add/remove cart logic, and responsive design principles.
          </p>
          <a
            href="https://github.com/arjun039gautam/parkify-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository
          </a>
        </div>

        <div onClick={() => handleExternalNavigation('https://arjun039gautam.github.io/Calculator/')}>
          <img src={calculator} alt="Calculator" />
          <p><strong>Smart Calculator</strong></p>
          <p>
            <em>Tech Stack: HTML, CSS, JavaScript</em><br /><br />
            Performs real-time arithmetic operations with a tactile design. Focused on UX with clean layout and minimal input friction.
          </p>
          <a
            href="https://github.com/arjun039gautam/parkify-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            🔗 GitHub Repository
          </a>
        </div> */}
      </div>
    </Wrapper>
  )
}

export default Project
