import logo from '@assets/logo.png';
import './Header.css';
import { useState } from 'react';



const Header = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul className="menu-left">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>

          <div className="logo">
            <img src={logo} width="100px" alt="Logo" />
          </div>
          <button className="contact-btn">Contact Us</button>

          <div className={`toggle-btn ${isOpen ? "active": ""}` } onClick={()=>setisOpen((prev)=>!prev)}>
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

        

        </nav>
      </header>

    </>
  )
}

export default Header;
