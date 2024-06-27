import logo from '@assets/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

 
const Footer = () => (



  <footer className="footer">
    <div className="container">
      <div className="footer-content">

        <div className="footer-section about">
          <img src={logo} width="200px" alt="Logo" className='logo' />
          <p>Insert a brief description or tagline about your website or company here.</p>
          <div className="contact">
            <span><FontAwesomeIcon icon={faPhone} /> 123-456-789</span>
            <span><FontAwesomeIcon icon={faEnvelope} /> info@example.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>User Links</h2>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Contact Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
    </div>
    <div className="footer-bottom">
      &copy; 2024 Pacific Control. All rights reserved.
    </div>
  </footer>



);

export default Footer;
