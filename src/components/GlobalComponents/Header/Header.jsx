import logo from '@assets/logo.png';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <>


      <header>

        <nav>

          <div className='menu_items' >
            <ul className="menu-left">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Gallery</a></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>



          <div className="logos">
            <img src={logo} alt="Logo" />
          </div>


          <div className='button'>
            <button className="contact-btn">Contact Us</button>
            <div className='sm_right' >
              <div className={`toggle-btn ${isOpen ? "active" : ""}`} onClick={() => setisOpen((prev) => !prev)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>

                {isOpen && <ul className="mobile-menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <button className="contact-btn-mobile">Contact Us</button>
                </ul>}
              </div>
            </div>
          </div>


        </nav>
      </header>



    </>
  )
}

export default Header;
